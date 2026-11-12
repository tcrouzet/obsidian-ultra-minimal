export function customize(): string {
  return `
/* @settings

name: Ultra Minimal
id: ultra-minimal
settings:
  - id: typography
    title: Typography
    type: heading
    level: 2
  - id: um-font-text-size
    title: Body text size
    description: Default size of the note text.
    type: variable-number-slider
    default: 23
    min: 16
    max: 30
    step: 1
    format: px
  - id: um-text-width
    title: Text column width
    description: Maximum width when Readable line length is enabled.
    type: variable-number-slider
    default: 700
    min: 480
    max: 1000
    step: 20
    format: px
  - id: um-paragraph-spacing
    title: Paragraph spacing
    description: Vertical spacing between paragraphs.
    type: variable-number-slider
    default: 1.75
    min: 0.5
    max: 2.5
    step: 0.05
    format: rem
  - id: headings
    title: Headings
    type: heading
    level: 2
  - id: um-monochrome-headings
    title: Monochrome headings
    description: Use the note title color for every heading instead of the six-level accent palette.
    type: class-toggle
    default: false
  - id: um-heading-color-intensity
    title: Heading color intensity
    description: Mix each heading accent with the body text color. Lower values are more subtle.
    type: variable-number-slider
    default: 50
    min: 20
    max: 80
    step: 5
    format: '%'
  - id: settings-interface
    title: Settings interface
    type: heading
    level: 2
  - id: um-settings-row-spacing
    title: Settings row spacing
    description: Vertical padding around individual settings.
    type: variable-number-slider
    default: 0.9
    min: 0.5
    max: 1.5
    step: 0.1
    format: em
  - id: navigation
    title: File explorer selection
    type: heading
    level: 2
  - id: um-nav-active-tint
    title: Selected item tint
    description: Background tint behind the active file or folder.
    type: variable-number-slider
    default: 9
    min: 4
    max: 20
    step: 1
    format: '%'
  - id: um-nav-active-indicator-width
    title: Active item indicator
    description: Width of the accent line on the selected file or folder.
    type: variable-number-slider
    default: 2
    min: 0
    max: 4
    step: 1
    format: px

*/
body {
  --font-text-theme: "SF Mono", SFMono-Regular, ui-monospace, Consolas, "DejaVu Sans Mono", monospace;
  --font-editor-theme: var(--font-text-theme);
  --um-font-text-size: 23px;
  --font-text-size: var(--um-font-text-size);
  --font-ui-smaller: 11px;
  --um-text-width: var(--text_max_width);
  --file-line-width: var(--um-text-width);
  --um-paragraph-spacing: 1.75rem;
  --p-spacing: var(--um-paragraph-spacing);
  --um-heading-color-intensity: 50%;
  --um-settings-row-spacing: 0.9em;
  --um-nav-active-tint: 9%;
  --um-nav-active-indicator-width: 2px;
  --file-margins: 8px 32px;
  --inline-title-size: 1.125em;
  --inline-title-weight: 600;
  --inline-title-margin-bottom: 1rem;
  --heading-spacing: 2em;
  --list-spacing: 0.075em;
  --list-indent: 2em;
  --input-height: 32px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --status-bar-background: var(--background-primary);
  --link-decoration: none;
  --link-external-decoration: none;
  --embed-max-height: none;
  --embed-block-shadow-hover: none;
  --divider-width: 1px;
  --tab-outline-color: var(--background-modifier-border);
  --tab-container-background: var(--background-primary);
  --sidebar-tab-container-background: var(--background-secondary);
  --titlebar-background: var(--background-primary);
  --titlebar-background-focused: var(--background-primary);
  --tab-text-color-focused-active: var(--text-normal);
  --nav-item-white-space: nowrap;
  --nav-indentation-guide-color: var(--background-modifier-border);
  --nav-collapse-icon-color: var(--text-muted);
  --nav-collapse-icon-color-collapsed: var(--text-muted);
  --nav-item-background-active: color-mix(in srgb, var(--heading_color) var(--um-nav-active-tint), var(--background-primary));
  --nav-item-background-hover: var(--background-modifier-hover);
  --nav-item-color: var(--text-muted);
  --nav-item-color-active: var(--text-normal);
  --nav-item-color-hover: var(--text-normal);
  --nav-item-color-selected: var(--text-normal);
  --icon-color: var(--text-muted);
  --icon-color-hover: var(--text-muted);
  --icon-color-active: var(--text-normal);
  --icon-color-focused: var(--text-normal);
  --ribbon-background: var(--background-secondary);
  --ribbon-background-collapsed: var(--background-secondary);
  --search-result-background: var(--background-primary);
  --setting-items-background: transparent;
  --setting-items-border-width: 0;
  --modal-border-color: var(--background-modifier-border);
  --metadata-label-font-size: calc(var(--font-ui-small) * 1.07);
  --metadata-input-font-size: var(--metadata-label-font-size);
  --metadata-input-height: calc(var(--metadata-input-font-size) * 2.2);
  --metadata-label-width: calc(var(--metadata-label-font-size) * 9);
  --blockquote-border-thickness: 1px;
  --blockquote-border-color: var(--background-modifier-border-hover);
  --blockquote-color: var(--text-muted);
  --blockquote-font-style: italic;
  --blockquote-style: var(--blockquote-font-style);
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: var(--background-modifier-border);
  --tag-border-color-hover: var(--background-modifier-border-hover);
  --tag-size: 0.8em;
  --tag-border-width: 1px;
  --tag-padding-y: 0.2em;
  --tag-padding-x: 0.65em;
  --tag-color: var(--tag_color);
  --tag-color-hover: var(--tag_color);
  --text-title: var(--heading_color);
  --caret-color: var(--text-title);
  --heading-formatting: var(--text-title);
  --inline-title-color: var(--text-title);
  --h1-color: color-mix(in srgb, var(--heading_h1_color) var(--um-heading-color-intensity), var(--text-normal));
  --h2-color: color-mix(in srgb, var(--heading_h2_color) var(--um-heading-color-intensity), var(--text-normal));
  --h3-color: color-mix(in srgb, var(--heading_h3_color) var(--um-heading-color-intensity), var(--text-normal));
  --h4-color: color-mix(in srgb, var(--heading_h4_color) var(--um-heading-color-intensity), var(--text-normal));
  --h5-color: color-mix(in srgb, var(--heading_h5_color) var(--um-heading-color-intensity), var(--text-normal));
  --h6-color: color-mix(in srgb, var(--heading_h6_color) var(--um-heading-color-intensity), var(--text-normal));
  --link-color: var(--link_color);
  --link-color-hover: var(--heading_color);
  --link-external-color: var(--external_link_color);
  --link-external-color-hover: var(--heading_color);
  --link-unresolved-color: var(--error_color);
  --text-highlight-bg-active: var(--text-selection);
  --table-header-border-width: 0;
  --table-header-size: calc(var(--font-text-size) * 0.875);
  --table-text-size: calc(var(--font-text-size) * 0.875);
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-row-last-border-width: 0;
  --table-edge-cell-padding-first: 0;
  --table-edge-cell-padding-last: 0;
  --table-cell-padding: 4px 10px;
  --table-selection: var(--text-selection);
  --table-selection-border-color: var(--link_color);
  --table-selection-border-width: 0;
  --table-selection-border-radius: 0;
  --table-drag-handle-background-active: var(--text-selection);
  --table-drag-handle-color-active: var(--link_color);
  --table-add-button-border-width: 0;
}

body ::selection {
  color: var(--text-selection-foreground);
}

/* File explorer: hover discret, sélection persistante et repère latéral. */
.nav-file-title.is-active,
.nav-folder-title.is-active {
  box-shadow: inset var(--um-nav-active-indicator-width) 0 0 var(--heading_color);
}

:is(
  input:not([type]),
  input[type="text"], input[type="search"], input[type="email"],
  input[type="password"], input[type="number"],
  input[type="date"], input[type="datetime-local"],
  textarea, .multi-select-container
) {
  --background-modifier-border: var(--input-border-color);
  --background-modifier-border-hover: var(--input-border-color-hover);
}

:is(select, .dropdown, .combobox-button) {
  --dropdown-background: var(--dropdown-background-theme);
  --dropdown-background-hover: var(--dropdown-background-theme);
  border: var(--input-border-width) solid var(--dropdown-border-color);
}

@media (hover: hover) {
  :is(select, .dropdown, .combobox-button):where(:not(:disabled):not(.mod-disabled)):hover {
    border-color: var(--dropdown-border-color-hover);
  }
}

:is(.vertical-tab-header, .horizontal-tab-header, [role="tablist"]) {
  --divider-color: var(--input-border-color);
  --background-modifier-border: var(--input-border-color);
  --tab-outline-color: var(--input-border-color);
}

/* Settings: une hiérarchie discrète, sans cartes ni fonds lourds. */
body .modal.mod-settings {
  background: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
}

.modal.mod-settings .vertical-tab-header {
  background: var(--background-primary);
  border-inline-end: 1px solid var(--background-modifier-border);
  padding: 1.1em 0.7em;
}

.vertical-tab-header-group-title {
  color: var(--text-faint);
  font-size: var(--font-ui-smaller);
  font-weight: 700;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  padding: 0.8em 0.65em 0.45em;
}

.vertical-tab-nav-item {
  border: 1px solid transparent;
  border-inline-start: 2px solid transparent;
  border-radius: 0 4px 4px 0;
  margin-block: 1px;
  padding: 0.48em 0.65em;
  transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease;
}

.vertical-tab-nav-item:hover:not(.is-active) {
  background: var(--background-modifier-hover);
  color: var(--text-normal);
}

.vertical-tab-nav-item.is-active {
  background: color-mix(in srgb, var(--heading_color) 9%, var(--background-primary));
  border-inline-start-color: var(--heading_color);
  color: var(--text-normal);
  font-weight: 600;
}

.modal.mod-settings .vertical-tab-content {
  padding-inline: 1.25em;
}

.modal.mod-settings .setting-item {
  border-top: 1px solid var(--background-modifier-border);
  padding-block: var(--um-settings-row-spacing);
  gap: 1.25em;
}

.modal.mod-settings .setting-item-heading {
  border-top: 0;
  padding-block: 1.3em 0.45em;
}

.modal.mod-settings .setting-item-heading .setting-item-name {
  color: var(--heading_color);
  font-size: var(--font-ui-medium);
  font-weight: 650;
}

.modal.mod-settings .setting-item-name {
  color: var(--text-normal);
  font-weight: 600;
}

.modal.mod-settings .setting-item-description {
  color: var(--text-muted);
  line-height: 1.5;
  max-width: 54em;
}

.modal.mod-settings .setting-item-control {
  gap: 0.55em;
}

.modal.mod-settings .setting-item-control button:not(.clickable-icon) {
  border-radius: 4px;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;
}

.modal.mod-settings .setting-item-control button:not(.mod-cta):not(.clickable-icon) {
  border: 1px solid var(--input-border-color);
}

.modal.mod-settings .setting-item-control button:not(.mod-cta):not(.clickable-icon):hover {
  border-color: var(--input-border-color-hover);
}

.modal.mod-settings :is(input, textarea, select, .dropdown, .combobox-button):focus-visible {
  outline: 2px solid color-mix(in srgb, var(--heading_color) 42%, transparent);
  outline-offset: 2px;
}

.modal.mod-settings :is(input[type="checkbox"], input[type="radio"], input[type="range"]) {
  accent-color: var(--action_color);
}

@media (max-width: 720px) {
  .modal.mod-settings .vertical-tab-content {
    padding-inline: 0.75em;
  }

  .modal.mod-settings .setting-item {
    gap: 0.8em;
  }
}

body.um-monochrome-headings .markdown-source-view,
body.um-monochrome-headings .markdown-preview-view {
  --h1-color: var(--text-title);
  --h2-color: var(--text-title);
  --h3-color: var(--text-title);
  --h4-color: var(--text-title);
  --h5-color: var(--text-title);
  --h6-color: var(--text-title);
}

.metadata-container {
  line-height: 1.5;
}

.metadata-input-longtext,
.metadata-input-text,
.metadata-property-value .multi-select-container {
  line-height: 1.5;
}

.markdown-preview-view {
  padding-top: 1rem;
  padding-bottom: 0;
}

.markdown-rendered blockquote {
  padding-inline-start: 1.1em;
}

.markdown-source-view.mod-cm6 .cm-quote {
  font-style: var(--blockquote-font-style);
}

.markdown-rendered table {
  margin-block: 0.5em;
  color: var(--text-normal);
  border-collapse: collapse;
  border-color: var(--text-normal);
}

.markdown-rendered :is(th, td):first-child {
  padding-inline-start: var(--table-edge-cell-padding-first);
}

.markdown-rendered :is(th, td):last-child {
  padding-inline-end: var(--table-edge-cell-padding-last);
}

.nav-buttons-container {
  justify-content: flex-start;
}

.markdown-source-view.mod-cm6 .cm-hmd-frontmatter {
  color: var(--yaml_value_color);
}

.markdown-source-view.mod-cm6 .cm-hmd-frontmatter.cm-atom {
  color: var(--yaml_key_color);
}

.markdown-source-view.mod-cm6 .cm-hmd-frontmatter.cm-def {
  color: var(--text-muted);
}

.markdown-source-view.mod-cm6 .cm-hmd-frontmatter.cm-meta {
  color: var(--separator_color);
}

.mod-warning {
  --text-on-accent: var(--screen_background);
}

.app-container .horizontal-main-container,
.app-container .workspace {
  background-color: var(--background-primary);
}

.workspace-split.mod-left-split,
.workspace-split.mod-right-split,
.workspace-split.mod-primary-split,
.workspace-split.mod-secondary-split,
.workspace-drawer {
  --background-secondary: var(--background-primary);
  --background-secondary-alt: var(--background-primary);
  --tab-container-background: var(--background-primary);
  --sidebar-tab-container-background: var(--background-primary);
  --mobile-sidebar-background: var(--background-primary);
}

.workspace-ribbon.mod-primary {
  --ribbon-background: var(--background-primary);
  --ribbon-background-collapsed: var(--background-primary);
  background-color: var(--background-primary);
}

.markdown-source-view,
.markdown-preview-view {
  --font-normal: 500;
  --font-weight: var(--font-normal);
  --bold-weight: 700;
  --link-weight: 400;
  --h1-size: 1.5em;
  --h2-size: 1.3em;
  --h3-size: 1.125em;
  --h4-size: 0.9em;
  --h5-size: 0.85em;
  --h6-size: 0.85em;
  --h5-variant: small-caps;
  --h6-variant: small-caps;
  --h1-weight: var(--bold-weight);
  --h2-weight: var(--bold-weight);
  --h3-weight: var(--bold-weight);
  --h4-weight: var(--bold-weight);
  --h5-weight: var(--bold-weight);
  --h6-weight: var(--bold-weight);
  --line-height-normal: calc(1ex / 0.28);
  --code-normal: var(--text-normal);
  font-weight: var(--font-normal);
}

.markdown-rendered :not(pre) > code,
.markdown-source-view.mod-cm6 .cm-inline-code {
  background-color: transparent;
  padding: 0;
}

.notice {
  --text-normal: var(--screen_background);
  color: var(--text-normal);
}
`;
}
