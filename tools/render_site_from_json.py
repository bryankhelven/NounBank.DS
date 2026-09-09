#!/usr/bin/env python3
"""PARTE B1 — regenerate site_pages/<lemma>.html from jsons/<lemma>.json.

This is a fork of the original generator embedded in
utils/from_table_to_site.ipynb (cell 3), kept byte-for-byte compatible in
layout/CSS/nav/footer, with two behavioral fixes to close the JSON/site
drift documented in the audit:

  1. The number of table rows / example blocks always equals the number of
     JSON examples for that lemma (no more MAX_EXAMPLES silently dropping
     rows anywhere but the small "Exemplos:" teaser section, which was
     already capped at 2 in the original and stays capped at 2 here).
  2. The REL span highlighted per row is the one computed per-instance in
     PARTE B2 (jsons/<lemma>.json examples[*].predicate), instead of the
     old "first match of the bare lemma, once per page" regex, which
     collapsed legitimate multi-instance sent_IDs onto a single occurrence
     and never matched inflected (plural) forms at all.

Each <tr>/<h3> block also carries a data-instance-id attribute so rows are
individually addressable and multi-instance groups are never visually
collapsed. When an instance's predicate could not be safely located in the
(often truncated) stored text, the row is marked data-rel="missing" and a
small inline note is rendered instead of silently leaving the row looking
like an unexplained duplicate.
"""
import re
import html
import json
import unicodedata
from pathlib import Path

escape = html.escape

JSON_DIR = Path("jsons")
HTML_DIR = Path("site_pages")
CSS_HREF = "../styles.css"
MAX_EXAMPLES_IN_SECTION = 2
DOWNLOAD_PREFIX_FROM_PAGE = "../jsons/"

STYLE_BLOCK = """
:root{
  --header-h: 56px;
}
body{margin:0;}
/* ===== Top bar ===== */
.site-header{
  position: sticky; top:0; z-index:1000;
  /* alpha menor -> mais transparente */
  background: rgba(20,20,20,0.70);
  transition: background .2s ease, backdrop-filter .2s ease;
}
.site-header.scrolled{
  /* ainda mais transparente quando rolar */
  background: rgba(20,20,20,0.40);
  backdrop-filter: blur(6px);
}
.site-nav{
  height: var(--header-h);
  display:flex; align-items:center; justify-content:space-between;
  padding: 0 16px;
}
.site-nav .home-link{
  color:#cfe3ff; text-decoration:none; font-weight:600;
  padding:8px 12px; border-radius:10px; background:rgba(84,102,170,.25);
}
.site-nav .home-link:hover{ background:rgba(84,102,170,.35); }
.site-nav .page-title{
  color:#cfd8ff; opacity:.75; font-weight:600;
  text-align:center; margin:0 12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}

/* ===== Botão JSON (agora dentro da header, alinhado) ===== */
.site-nav .download-json{
  display:inline-block; text-decoration:none; font-weight:700;
  padding:10px 14px; border-radius:12px; color:#fff;
  background:#2e7d32; box-shadow:0 4px 14px rgba(0,0,0,.25);
  transition:transform .08s ease, box-shadow .2s ease, opacity .2s ease;
  opacity:.95;
}
.site-nav .download-json:hover{ transform:translateY(-1px); box-shadow:0 8px 22px rgba(0,0,0,.35); opacity:1; }

/* ===== “Voltar para X” (flutuante no rodapé) ===== */
.back-link{ color:#9ecbff; text-decoration:none; font-weight:500; }
.back-link:hover{ text-decoration:underline; }
.back-floating{
  position: fixed; right: 20px; bottom: 20px; z-index: 980;
  background:#2b2b2b; color:#cfe3ff; padding:10px 12px; border-radius:12px;
  box-shadow:0 8px 22px rgba(0,0,0,.35); text-decoration:none;
}

/* ===== Tabela de realização sintática ===== */
#relations-table{ width:100%; border-collapse:collapse; }
#relations-table col.numcol{ width:3.5rem; }
#relations-table col.argcol{ width:18rem; }
#relations-table col.textcol{ width:auto; }
#relations-table thead th{
  text-align:center; padding:.45rem .6rem; white-space:nowrap;
}
#relations-table tbody td{
  padding:.45rem .6rem; vertical-align:top; border-bottom:1px solid #fff;
}
#relations-table tbody tr:last-child td{ border-bottom:none; }
#relations-table tbody td:first-child{ text-align:center; }

/* ===== Instância com REL fora do trecho truncado ===== */
.rel-missing{
  color:#ffb74d; font-size:.75em; font-style:italic; margin-left:.35em;
}
"""

# ---------- utils ----------
def strip_accents(s: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")


def first_letter(lemma: str) -> str:
    s = strip_accents((lemma or "").strip()).lower()
    return s[0] if s and s[0].isalpha() else "a"


def _boundary_safe_pattern(phrase: str):
    core = re.escape(phrase)
    patt = rf"(?<![#\w])({core})(?!\w)"
    return re.compile(patt, flags=re.IGNORECASE)


def highlight_once(text, phrase, cls, deprel=None):
    if not phrase:
        return text
    pat = _boundary_safe_pattern(phrase)

    def _rep(m):
        frag = m.group(1)
        h = f'<span class="{cls}">{escape(frag)}</span>'
        if deprel:
            h += f'<sub class="deprel">{escape(deprel)}</sub>'
        return h

    new_text, _ = pat.subn(_rep, text, count=1)
    return new_text


def build_colored(text, real, syn, rel_predicate, order):
    """Mirror the legacy renderer: wrap ArgN values first (sequential
    substitution, same as the original generator — this preserves its
    nested-span behavior for the rare case where an Arg span textually
    contains the REL occurrence). REL is then inserted at the *correct*
    occurrence — determined from the JSON's per-instance predicate anchor,
    counting which ordinal occurrence of that literal form it is in the
    original text, and applying the same ordinal in the (already
    arg-tagged) colored string. This fixes the legacy bug (which always
    grabbed the first occurrence in the page-rendered string, colliding
    multi-instance sent_IDs onto one row) without disturbing the existing
    Arg-highlighting behavior.
    Returns (html_fragment, rel_found: bool).
    """
    colored = text
    for arg_id in order:
        k = int(arg_id[-1])
        val = real.get(arg_id)
        if val:
            colored = highlight_once(colored, val, f"arg{k}", syn.get(arg_id))

    rel_found = False
    if rel_predicate:
        start, end = rel_predicate["char_start"], rel_predicate["char_end"]
        form = rel_predicate["form"]
        if text[start:end] == form:
            pat = _boundary_safe_pattern(form)
            ordinal = sum(1 for m in pat.finditer(text) if m.start(1) <= start)
            matches = list(pat.finditer(colored))
            if 1 <= ordinal <= len(matches):
                target = matches[ordinal - 1]
                s, e = target.start(1), target.end(1)
                colored = colored[:s] + f'<span class="rel">{colored[s:e]}</span>' + colored[e:]
                rel_found = True

    html_out = colored
    if not rel_found:
        html_out += '<span class="rel-missing" title="Predicador fora do trecho de texto armazenado (tweet truncado)">[REL truncado]</span>'
    return html_out, rel_found


def build_roles_list(roles):
    shown, items = [], []
    for k in range(3):
        arg_id = f"Arg{k}"
        desc = next((r.get("desc") for r in roles if r.get("id") == arg_id), None)
        if desc is not None:
            shown.append(arg_id)
            items.append(f'<li class="arg{k}">Arg {k}: {escape(str(desc))}</li>')
    return "<ul>\n" + "\n".join(items) + "\n</ul>", shown


def extract_counts_for(shown_args, syntactic_profile):
    ks = set()
    for arg in shown_args:
        for dep in (syntactic_profile.get(arg) or {}):
            ks.add(dep)
    rows = []
    for dep in sorted(ks):
        cells = [(syntactic_profile.get(arg) or {}).get(dep, 0) for arg in shown_args]
        rows.append((dep, cells))
    return rows


def build_examples_section(lemma, shown_args, examples, max_examples: int):
    parts = []
    subset = examples[:max_examples]
    order = [a for a in ["Arg1", "Arg2", "Arg0"] if a in shown_args]
    for i, ex in enumerate(subset, start=1):
        text = ex.get("text") or ""
        real = ex.get("realization") or {}
        iid = ex.get("instance_id", "")
        colored, _ = build_colored(text, real, {}, ex.get("predicate"), order)
        parts.append(f'<h3 data-instance-id="{escape(iid)}">{i}: {colored}</h3>')
        items = [f'<li class="rel">rel: {escape(lemma)}</li>']
        for arg_id in shown_args:
            k = int(arg_id[-1])
            val = real.get(arg_id)
            items.append(f'<li class="arg{k}">Arg {k}: {escape(val) if val is not None else "-"}</li>')
        parts.append("<ul>\n" + "\n".join(items) + "\n</ul>")
    return "\n".join(parts)


def build_realization_table(lemma, shown_args, examples):
    colgroup = ['<col class="numcol">'] + ['<col class="argcol">' for _ in shown_args] + ['<col class="textcol">']
    ths = ['<th>#</th>'] + [f'<th class="arg{int(a[-1])}">{a.replace("Arg","Arg ")}</th>' for a in shown_args] + ['<th>Texto</th>']
    rows = []
    order = [a for a in ["Arg1", "Arg2", "Arg0"] if a in shown_args]
    for i, ex in enumerate(examples, start=1):
        text = ex.get("text") or ""
        real = ex.get("realization") or {}
        syn = ex.get("syntax") or {}
        iid = ex.get("instance_id", "")
        colored, rel_found = build_colored(text, real, syn, ex.get("predicate"), order)
        tds = [f"<td>{i}</td>"]
        for arg_id in shown_args:
            k = int(arg_id[-1])
            val = real.get(arg_id)
            tds.append(f'<td class="arg{k}">{escape(val) if val is not None else "-"}</td>')
        tds.append(f"<td class='texto'>{colored}</td>")
        attrs = f' data-instance-id="{escape(iid)}"'
        if not rel_found:
            attrs += ' data-rel="missing"'
        rows.append(f"<tr{attrs}>" + "".join(tds) + "</tr>")
    return f"""
    <table id="relations-table">
      <colgroup>{''.join(colgroup)}</colgroup>
      <thead><tr>{''.join(ths)}</tr></thead>
      <tbody>{''.join(rows)}</tbody>
    </table>
    """


def build_freq_table(shown_args, syntactic_profile):
    rows = extract_counts_for(shown_args, syntactic_profile)
    ths = ['<th>Relações de dependência - <i><a href="https://universaldependencies.org/u/dep/"> Universal Dependencies</a></i></th>'] \
          + [f'<th class="arg{int(a[-1])}">{a.replace("Arg","Arg ")}</th>' for a in shown_args]
    body = []
    for dep, cells in rows:
        body.append("<tr>" + "".join([f"<td>{escape(dep)}</td>"] + [f"<td>{int(v)}</td>" for v in cells]) + "</tr>")
    if not body:
        body.append(f"<tr><td colspan='{len(shown_args)+1}'><i>Sem ocorrências</i></td></tr>")
    return f"""
    <div class="statistics-table-container">
      <h2>Frequência das realizações sintáticas</h2>
      <table id="statistics-table">
        <thead><tr>{''.join(ths)}</tr></thead>
        <tbody>{''.join(body)}</tbody>
      </table>
    </div>
    """


def render_html(doc: dict, json_filename: str) -> str:
    lemma = (doc.get("lemma") or doc.get("lemma_base") or "").strip()
    senses = doc.get("senses") or []

    pt_rolesets = []
    en_links = []
    sources = []
    roles = []
    for k in range(5):
        chosen = None
        for s in senses:
            for r in (s.get("roles") or []):
                if r.get("id") == f"Arg{k}" and r.get("desc") is not None:
                    chosen = r.get("desc")
                    break
            if chosen is not None:
                break
        roles.append({"id": f"Arg{k}", "desc": chosen})

    examples = []
    for s in senses:
        examples.extend(s.get("examples") or [])

    syntactic_profile = {}
    for s in senses:
        sp = s.get("syntactic_profile") or {}
        for arg, deps in sp.items():
            syntactic_profile.setdefault(arg, {})
            for dep, cnt in deps.items():
                syntactic_profile[arg][dep] = syntactic_profile[arg].get(dep, 0) + int(cnt or 0)

    seen_pt, seen_en, seen_src = set(), set(), set()
    for s in senses:
        pr = (s.get("pt_roleset") or "").strip()
        if pr and pr not in seen_pt:
            seen_pt.add(pr)
            pt_rolesets.append(pr)
        er = (s.get("english_roleset") or "").strip()
        if er and er not in seen_en:
            seen_en.add(er)
            url = s.get("nombank_url")
            if not url:
                base_en = er.split(".")[0]
                if base_en:
                    url = f"https://nlp.cs.nyu.edu/meyers/nombank/nombank.1.0/frames/{base_en}.xml"
            en_links.append((er, url))
        src = (s.get("english_roleset_source") or "").strip()
        if src and src not in seen_src:
            seen_src.add(src)
            sources.append(src)

    roleset_id_str = ", ".join(pt_rolesets) if pt_rolesets else f"{lemma}.01"
    en_map_html = ", ".join(
        (f'<a href="{url}">{escape(er)}</a>' if url else escape(er))
        for (er, url) in en_links
    ) if en_links else "-"
    if sources:
        src_links = []
        for src in sources:
            m = re.match(r"verb-([^.]+)", src, flags=re.I)
            if m:
                verb = m.group(1).lower()
                pb_url = f"https://verbs.colorado.edu/propbank/framesets-english-aliases/{verb}.html"
                src_links.append(f'<a href="{pb_url}">{escape(src)}</a>')
            else:
                src_links.append(escape(src))
        source_tail = ", source = " + ", ".join(src_links)
    else:
        source_tail = ""

    roles_html, shown_args = build_roles_list(roles)
    examples_html = build_examples_section(lemma, shown_args, examples, max_examples=MAX_EXAMPLES_IN_SECTION)
    table_html = build_realization_table(lemma, shown_args, examples)
    freq_html = build_freq_table(shown_args, syntactic_profile)

    letter = first_letter(lemma)
    back_href = f"../index.html?letter={letter}"
    back_label = f"← Voltar para {letter.upper()}"
    download_href = f"{DOWNLOAD_PREFIX_FROM_PAGE}{json_filename}"

    head = f"""<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{escape(lemma)} - NounBank.DS</title>
<link rel="stylesheet" href="{CSS_HREF}">
<style>{STYLE_BLOCK}</style>
</head>
<body>

<header class="site-header">
  <nav class="site-nav">
    <a class="home-link" href="../index.html">Home</a>
    <span class="page-title">{escape(lemma)}</span>
    <a class="download-json" href="{download_href}" download="{escape(json_filename)}" aria-label="Baixar JSON">JSON download</a>
  </nav>
</header>

<script>
(function(){{
  const h = document.querySelector('.site-header');
  if(!h) return;
  const onScroll = () => h.classList.toggle('scrolled', window.scrollY > 16);
  onScroll(); window.addEventListener('scroll', onScroll, {{passive:true}});
}})();
</script>

<div class="content">
  """

    topo = f"""
  <h1>Nome predicador: <i style="color: red;">{escape(lemma)}</i></h1>
  <p><strong>Roleset id:</strong> {escape(roleset_id_str)}, Mapeamento para o inglês: {en_map_html}{source_tail}</p>
  <h2>Roles:</h2>
  {roles_html}
  <h2>Exemplos:</h2>
  {examples_html}
  <br><br>
"""

    tail = f"""
  <h2>Realização sintática da estrutura de argumentos</h2>
  {table_html}
  {freq_html}
</div>

<a class="back-link back-floating" href="{back_href}" title="Voltar para letra {letter.upper()}">{back_label}</a>

</body>
</html>
"""
    return head + topo + tail


def main():
    n = 0
    for path in sorted(JSON_DIR.glob("*.json")):
        if path.name == "_manifest.json":
            continue
        doc = json.loads(path.read_text(encoding="utf-8"))
        out_html = render_html(doc, json_filename=path.name)
        out_path = HTML_DIR / f"{path.stem}.html"
        out_path.write_text(out_html, encoding="utf-8")
        n += 1
    print(f"regenerated {n} html pages")


if __name__ == "__main__":
    main()
