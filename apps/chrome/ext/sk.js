api.removeSearchAlias('b');
api.removeSearchAlias('w');
api.removeSearchAlias('s');
api.removeSearchAlias('e');
api.addSearchAlias('G', 'gscholar', 'https://scholar.google.com/scholar?as_sdt=2007&hl=en&q=', 's')
api.addSearchAlias('y', 'youtube', 'https://www.youtube.com/results?search_query=', 's')
api.unmapAllExcept([''], /overleaf.com/);
api.map('H','S'); // back in history
api.map('L','D'); // forward in history
api.map('J','B'); // tab to the left
api.map('K','F'); // tab to the right
api.Hints.characters = 'asfgqwrtzcvb';
api.Hints.style(" \
    font-family: Roboto, sans serif; \
    font-size: 13px; \
    font-weight: 400; \
    border: unset; \
    padding: 3px; \
    color: #ffffff; \
    background: unset; \
    background-color: #3d51f5; \
");
api.Hints.style(" \
    font-family: Roboto, sans serif; \
    font-size: 13px; \
    font-weight: 400; \
    border: unset; \
    padding: 3px; \
    color: #ffffff; \
    background: unset; \
    background-color: #ff4081 \
    ", "text");
api.Visual.style('marks', 'background: unset; background-color: #9c39ff');
api.Visual.style('cursor', 'background: unset; background-color: #ff4081');

settings.theme = `
:root {
    --theme-ace-bg:#282828ab; 
    --theme-ace-bg-accent:#3c3836;
    --theme-ace-fg:#ebdbb2;
    --theme-ace-fg-accent:#7c6f64;
    --theme-ace-cursor:#928374;
    --theme-ace-select:#458588;
}
#sk_editor {
    height: 50% !important; 
    background: var(--theme-ace-bg) !important;
}
.ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog{
    background: var(--theme-ace-bg-accent) !important;
}
.ace_dialog-bottom{
    border-top: 1px solid var(--theme-ace-bg) !important;
}
.ace-chrome{
    color: var(--theme-ace-fg) !important;
}
.ace_gutter, .ace_dialog {
    color: var(--theme-ace-fg-accent) !important;
}
.ace_cursor{
    color: var(--theme-ace-cursor) !important;
}
.normal-mode .ace_cursor{
    background-color: var(--theme-ace-cursor) !important;
    border: var(--theme-ace-cursor) !important;
}
.ace_marker-layer .ace_selection {
    background: var(--theme-ace-select) !important;
}
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
