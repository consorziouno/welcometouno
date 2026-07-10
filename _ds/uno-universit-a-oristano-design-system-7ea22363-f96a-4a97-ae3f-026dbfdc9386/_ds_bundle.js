/* @ds-bundle: {"format":3,"namespace":"UNOUniversitAOristanoDesignSystem_7ea223","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"CourseCard","sourcePath":"components/courses/CourseCard.jsx"},{"name":"CourseIcon","sourcePath":"components/courses/CourseIcon.jsx"},{"name":"COURSES","sourcePath":"components/courses/courseData.js"},{"name":"COURSE_KEYS","sourcePath":"components/courses/courseData.js"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/typography/SectionHeading.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7c5cb87efa1f","components/actions/IconButton.jsx":"e0f230bb85c9","components/courses/CourseCard.jsx":"4d26eea852f9","components/courses/CourseIcon.jsx":"a42ea165a72d","components/courses/courseData.js":"440926824673","components/disclosure/Accordion.jsx":"c574e199d87a","components/feedback/Alert.jsx":"349376f55551","components/feedback/Badge.jsx":"89260167492c","components/feedback/Tag.jsx":"853466dfa8d3","components/forms/Checkbox.jsx":"006587e1b9a4","components/forms/Input.jsx":"59e8e52d4197","components/forms/Radio.jsx":"5a366e2d3836","components/forms/Select.jsx":"e98a1135c27c","components/forms/Switch.jsx":"70fd3799cdca","components/forms/Textarea.jsx":"27222ede394f","components/forms/formStyles.js":"ca2a790d67c3","components/surfaces/Card.jsx":"32def7a82527","components/typography/Eyebrow.jsx":"1ced7bbe34ea","components/typography/SectionHeading.jsx":"09787a4b5560","ui_kits/sito/Chrome.jsx":"0f9f34f117d7","ui_kits/sito/CourseDetail.jsx":"15ee0dd874e3","ui_kits/sito/Courses.jsx":"3f31d382a315","ui_kits/sito/Enroll.jsx":"bd713f1dc60e","ui_kits/sito/Home.jsx":"d4fecb17404c","ui_kits/sito/Misc.jsx":"ba4f09e17f23","ui_kits/sito/icons.jsx":"6d81939d9cb0"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureFormStyles","sourcePath":"components/forms/formStyles.js"}]} */

(() => {

const __ds_ns = (window.UNOUniversitAOristanoDesignSystem_7ea223 = window.UNOUniversitAOristanoDesignSystem_7ea223 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once, driven entirely by design tokens. */
const STYLE_ID = "uno-button-css";
const CSS = `
.uno-btn {
  --_pad-y: 11px; --_pad-x: 24px; --_fs: 15px;
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.55em;
  font-family: var(--font-sans);
  font-weight: var(--fw-bold);
  font-size: var(--_fs);
  line-height: 1;
  letter-spacing: 0.005em;
  padding: var(--_pad-y) var(--_pad-x);
  border-radius: var(--radius-pill);
  border: 1.5px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  -webkit-appearance: none;
  transition: background-color var(--duration-base) var(--ease-standard),
              color var(--duration-base) var(--ease-standard),
              border-color var(--duration-base) var(--ease-standard),
              box-shadow var(--duration-base) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}
.uno-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.uno-btn:active { transform: translateY(1px); }
.uno-btn[disabled], .uno-btn[aria-disabled="true"] { opacity: 0.42; cursor: not-allowed; pointer-events: none; }
.uno-btn--block { width: 100%; }

.uno-btn--sm { --_pad-y: 8px;  --_pad-x: 17px; --_fs: 13px; }
.uno-btn--lg { --_pad-y: 15px; --_pad-x: 32px; --_fs: 17px; }

/* primary — teal */
.uno-btn--primary { background: var(--uno-teal); color: #fff; }
.uno-btn--primary:hover { background: var(--teal-600); }
.uno-btn--primary:active { background: var(--teal-700); }

/* secondary — navy */
.uno-btn--secondary { background: var(--uno-navy); color: var(--uno-cream); }
.uno-btn--secondary:hover { background: var(--navy-700); }
.uno-btn--secondary:active { background: var(--navy-900); }

/* outline — teal hairline */
.uno-btn--outline { background: transparent; border-color: var(--uno-teal); color: var(--uno-teal); }
.uno-btn--outline:hover { background: var(--teal-50); }
.uno-btn--outline:active { background: var(--teal-100); }

/* ghost — text only */
.uno-btn--ghost { background: transparent; color: var(--uno-teal); }
.uno-btn--ghost:hover { background: var(--teal-50); }

/* cream — for use on navy / teal sections */
.uno-btn--cream { background: var(--uno-cream); color: var(--uno-navy); }
.uno-btn--cream:hover { background: #fff; }

.uno-btn__icon { display: inline-flex; flex: none; }
.uno-btn__icon svg { width: 1.15em; height: 1.15em; display: block; }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO Button — the primary call to action. Pill-shaped by default
 * to echo the brand's rounded "onda" loops.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon = null,
  rightIcon = null,
  block = false,
  as,
  className = "",
  ...rest
}) {
  ensureStyles();
  const Tag = as || (rest.href ? "a" : "button");
  const classes = ["uno-btn", `uno-btn--${variant}`, size !== "md" ? `uno-btn--${size}` : "", block ? "uno-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), leftIcon ? /*#__PURE__*/React.createElement("span", {
    className: "uno-btn__icon"
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    className: "uno-btn__icon"
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-iconbutton-css";
const CSS = `
.uno-iconbtn {
  --_size: 44px;
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--_size); height: var(--_size);
  padding: 0;
  border-radius: var(--radius-pill);
  border: 1.5px solid transparent;
  cursor: pointer;
  -webkit-appearance: none;
  color: var(--uno-navy);
  background: transparent;
  transition: background-color var(--duration-base) var(--ease-standard),
              color var(--duration-base) var(--ease-standard),
              border-color var(--duration-base) var(--ease-standard),
              box-shadow var(--duration-base) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}
.uno-iconbtn svg { width: 50%; height: 50%; display: block; }
.uno-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.uno-iconbtn:active { transform: translateY(1px); }
.uno-iconbtn[disabled] { opacity: 0.42; cursor: not-allowed; pointer-events: none; }

.uno-iconbtn--sm { --_size: 36px; }
.uno-iconbtn--lg { --_size: 52px; }

.uno-iconbtn--solid { background: var(--uno-teal); color: #fff; }
.uno-iconbtn--solid:hover { background: var(--teal-600); }

.uno-iconbtn--ghost:hover { background: var(--teal-50); color: var(--uno-teal); }

.uno-iconbtn--outline { border-color: var(--border-default); }
.uno-iconbtn--outline:hover { border-color: var(--uno-teal); color: var(--uno-teal); background: var(--teal-50); }

.uno-iconbtn--cream { background: var(--uno-cream); color: var(--uno-navy); }
.uno-iconbtn--cream:hover { background: #fff; }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO IconButton — a circular, icon-only action. Always pass an
 * accessible label via `aria-label`.
 */
function IconButton({
  icon,
  children,
  variant = "ghost",
  size = "md",
  className = "",
  ...rest
}) {
  ensureStyles();
  const classes = ["uno-iconbtn", `uno-iconbtn--${variant}`, size !== "md" ? `uno-iconbtn--${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes
  }, rest), icon || children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/courses/courseData.js
try { (() => {
/* UNO course catalogue — bespoke pictograms (inlined for portability)
   plus metadata for each degree programme. Generated from the brand
   asset sheet. Icon markup is also available as files in
   assets/course-icons/<key>.svg for non-React use. */

const COURSES = {
  dst: {
    "abbr": "DST",
    "name": "Progettazione e Gestione delle Destinazioni",
    "short": "Destinazioni",
    "color": "#db3418",
    "token": "--course-dst",
    "classe": "L-15",
    "ente": "Facoltà di Scienze Economiche, Giuridiche e Politiche",
    "viewBox": "173.0 525.5 199.0 199.0",
    "paths": "<path d=\"M210.68,549.4h141.52c.96,0,1.74.78,1.74,1.74v144.99c0,.96-.78,1.74-1.74,1.74h-144.99c-.96,0-1.74-.78-1.74-1.74v-141.52c0-2.88,2.33-5.21,5.21-5.21\" style=\"fill:#db3418; stroke:#fff; stroke-miterlimit:10; stroke-width:7.7px;\"></path><path d=\"M239.31,682.64v-35.11h14.24c2.61,0,5.03.45,7.27,1.35,2.24.9,4.2,2.16,5.89,3.76s3.01,3.48,3.96,5.62c.95,2.14,1.43,4.45,1.43,6.92s-.48,4.71-1.43,6.82c-.95,2.11-2.27,3.95-3.96,5.54-1.69,1.59-3.65,2.83-5.89,3.74s-4.66,1.35-7.27,1.35h-14.24ZM247.94,675.01h5.42c1.37,0,2.65-.25,3.84-.75,1.19-.5,2.23-1.2,3.13-2.11.9-.9,1.6-1.95,2.11-3.13.5-1.19.75-2.47.75-3.84s-.25-2.72-.75-3.94c-.5-1.22-1.2-2.28-2.11-3.19-.9-.9-1.95-1.61-3.13-2.13-1.19-.52-2.47-.78-3.84-.78h-5.42v19.86Z\" style=\"fill:#fff;\"></path><path d=\"M289.62,683.14c-2.84,0-5.65-.52-8.43-1.55-2.78-1.04-5.25-2.47-7.42-4.31l4.81-6.27c2.14,1.74,4.11,2.98,5.92,3.74,1.81.75,3.73,1.13,5.77,1.13,1.34,0,2.47-.13,3.41-.4.94-.27,1.66-.66,2.16-1.18.5-.52.75-1.13.75-1.83,0-.97-.37-1.72-1.1-2.26-.74-.53-1.99-.95-3.76-1.25l-7.72-1.35c-2.84-.5-5.03-1.59-6.57-3.26-1.54-1.67-2.31-3.79-2.31-6.37,0-2.27.58-4.23,1.73-5.87,1.15-1.64,2.81-2.89,4.97-3.76,2.16-.87,4.72-1.3,7.7-1.3,2.61,0,5.23.44,7.87,1.33,2.64.89,4.93,2.12,6.87,3.69l-4.56,6.37c-3.61-2.77-7.21-4.16-10.78-4.16-1.17,0-2.18.12-3.04.38s-1.5.6-1.96,1.05c-.45.45-.68,1-.68,1.63,0,.87.33,1.54.98,2.01.65.47,1.71.84,3.19,1.1l7.27,1.2c3.38.54,5.94,1.66,7.7,3.36,1.76,1.71,2.63,3.91,2.63,6.62,0,2.37-.62,4.42-1.86,6.14-1.24,1.72-3.01,3.05-5.32,3.99-2.31.94-5.05,1.4-8.23,1.4Z\" style=\"fill:#fff;\"></path><path d=\"M317.71,682.64v-27.49h-11.49v-7.62h31.6v7.62h-11.49v27.49h-8.63Z\" style=\"fill:#fff;\"></path><path d=\"M206.76,635.61l16.84-29.17c7.8-13.51-1.95-30.39-17.55-30.39h0c-15.6,0-25.34,16.88-17.55,30.39l16.84,29.17c.31.54,1.1.54,1.41,0Z\" style=\"fill:#db3418; stroke:#fff; stroke-miterlimit:10; stroke-width:7.7px;\"></path><path d=\"M258.95,585.33v-19.5h6.05l4.82,9.2,4.82-9.2h6.05v19.5h-4.51v-13.29l-6.41,11.9-6.41-11.95v13.35h-4.4Z\" style=\"fill:#fff;\"></path><path d=\"M283.91,585.33v-19.5h7.91c1.45,0,2.8.25,4.04.75,1.24.5,2.34,1.2,3.27,2.09.94.89,1.67,1.93,2.2,3.12.53,1.19.79,2.47.79,3.85s-.27,2.62-.79,3.79c-.53,1.17-1.26,2.2-2.2,3.08-.94.88-2.03,1.57-3.27,2.08s-2.59.75-4.04.75h-7.91ZM288.7,581.1h3.01c.76,0,1.47-.14,2.13-.42.66-.28,1.24-.67,1.74-1.17.5-.5.89-1.08,1.17-1.74.28-.66.42-1.37.42-2.13s-.14-1.51-.42-2.19-.67-1.27-1.17-1.77c-.5-.5-1.08-.9-1.74-1.18-.66-.29-1.37-.43-2.13-.43h-3.01v11.03Z\" style=\"fill:#fff;\"></path><path d=\"M308.82,585.33v-15.27h-6.38v-4.24h17.55v4.24h-6.38v15.27h-4.79Z\" style=\"fill:#fff;\"></path><path d=\"M330.78,585.61c-1.49,0-2.87-.26-4.14-.77-1.27-.51-2.38-1.22-3.33-2.13-.95-.91-1.69-1.97-2.21-3.19-.53-1.22-.79-2.53-.79-3.94s.26-2.75.79-3.97c.53-1.22,1.27-2.28,2.23-3.19s2.07-1.62,3.34-2.13c1.27-.51,2.64-.77,4.11-.77,1.08,0,2.13.16,3.18.47,1.04.32,2,.76,2.89,1.32.88.57,1.62,1.24,2.21,2.02l-3.23,3.18c-.69-.87-1.45-1.52-2.3-1.95-.84-.43-1.76-.64-2.74-.64-.78,0-1.51.14-2.19.43-.68.29-1.27.68-1.77,1.18-.5.5-.89,1.1-1.17,1.78s-.42,1.44-.42,2.26.14,1.54.43,2.22c.29.68.69,1.27,1.2,1.78.51.51,1.12.91,1.81,1.18.7.28,1.45.42,2.27.42.95,0,1.82-.2,2.63-.61s1.54-1.01,2.19-1.81l3.15,3.09c-.59.76-1.33,1.43-2.2,1.99-.87.57-1.82,1-2.84,1.31-1.02.31-2.05.46-3.09.46Z\" style=\"fill:#fff;\"></path>"
  },
  etc: {
    "abbr": "ETC",
    "name": "Progettazione e Gestione degli Eventi e del Turismo Culturale",
    "short": "Eventi & Turismo",
    "color": "#eaa000",
    "token": "--course-etc",
    "classe": "L-15",
    "ente": "Facoltà di Scienze Economiche, Giuridiche e Politiche",
    "viewBox": "0 0 179 150",
    "paths": "<image href=\"data:image/png;base64,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\" width=\"179\" height=\"150\"/>"
  },
  ve: {
    "abbr": "VE",
    "name": "Viticoltura ed Enologia",
    "short": "Viticoltura",
    "color": "#890064",
    "token": "--course-ve",
    "classe": "L-26",
    "ente": "Dipartimento di Agraria",
    "viewBox": "1125.0 526.0 203.0 203.0",
    "paths": "<path d=\"M1173.09,554.59h137.95c.94,0,1.7.76,1.7,1.7v141.33c0,.94-.76,1.7-1.7,1.7h-141.33c-.94,0-1.7-.76-1.7-1.7v-137.95c0-2.8,2.27-5.08,5.08-5.08\" style=\"fill:#890064; stroke:#fff; stroke-miterlimit:10; stroke-width:7.5px;\"></path><path d=\"M1227.93,685.61l-17.2-42.54h11.3l12.09,31.66,12.34-31.66h10.88l-17.44,42.54h-11.97Z\" style=\"fill:#fff;\"></path><path d=\"M1260.44,685.61v-42.54h33.55v9.05h-23.09v7.66h15.25v8.75h-15.25v8.02h23.34v9.05h-33.79Z\" style=\"fill:#fff;\"></path><path d=\"M1168.95,630.06l26.73-46.29c.48-.84-.12-1.89-1.09-1.89h-53.45c-.97,0-1.57,1.05-1.09,1.89l26.73,46.29c.48.84,1.7.84,2.18,0Z\" style=\"fill:#890064; stroke:#fff; stroke-miterlimit:10; stroke-width:7.5px;\"></path>"
  },
  ocf: {
    "abbr": "OCF",
    "name": "Orticoltura e Florovivaismo",
    "short": "Orticoltura",
    "color": "#86b500",
    "token": "--course-ocf",
    "classe": "LP-02",
    "ente": "Dipartimento di Agraria",
    "viewBox": "1125.0 870.0 203.0 203.0",
    "paths": "<path d=\"M1172.37,899.36h137.95c.94,0,1.7.76,1.7,1.7v141.33c0,.94-.76,1.7-1.7,1.7h-141.33c-.94,0-1.7-.76-1.7-1.7v-137.95c0-2.8,2.27-5.08,5.08-5.08\" style=\"fill:#86b500; stroke:#fff; stroke-miterlimit:10; stroke-width:7.5px;\"></path><path d=\"M1207.71,1027.98c-2.64,0-5.1-.46-7.37-1.38-2.27-.92-4.26-2.21-5.97-3.86s-3.03-3.58-3.99-5.77c-.95-2.19-1.43-4.56-1.43-7.1s.48-4.91,1.43-7.1c.95-2.19,2.28-4.11,3.99-5.77s3.69-2.94,5.97-3.86c2.27-.92,4.73-1.38,7.37-1.38s5.1.46,7.37,1.38c2.27.92,4.26,2.21,5.97,3.86,1.7,1.66,3.03,3.58,3.99,5.77.95,2.19,1.43,4.56,1.43,7.1s-.48,4.91-1.43,7.1c-.95,2.19-2.28,4.11-3.99,5.77-1.71,1.66-3.7,2.94-5.97,3.86s-4.73,1.38-7.37,1.38ZM1207.71,1020.05c1.41,0,2.71-.26,3.91-.78,1.2-.52,2.25-1.23,3.13-2.13.89-.9,1.58-1.98,2.08-3.24.5-1.25.75-2.6.75-4.04s-.25-2.83-.75-4.06c-.5-1.24-1.2-2.31-2.08-3.21-.89-.9-1.93-1.61-3.13-2.13-1.2-.52-2.51-.78-3.91-.78s-2.71.26-3.91.78c-1.2.52-2.25,1.23-3.13,2.13-.89.9-1.58,1.97-2.08,3.21s-.75,2.59-.75,4.06.25,2.78.75,4.04,1.19,2.33,2.08,3.24c.89.9,1.93,1.61,3.13,2.13,1.2.52,2.51.78,3.91.78Z\" style=\"fill:#fff;\"></path><path d=\"M1248.64,1027.93c-2.68,0-5.16-.46-7.45-1.38-2.29-.92-4.29-2.2-5.99-3.84-1.71-1.64-3.03-3.55-3.99-5.74-.95-2.19-1.43-4.56-1.43-7.1s.48-4.96,1.43-7.15c.95-2.19,2.29-4.1,4.01-5.74,1.72-1.64,3.73-2.92,6.02-3.84,2.29-.92,4.76-1.38,7.4-1.38,1.94,0,3.84.28,5.72.85,1.87.57,3.6,1.36,5.19,2.38,1.59,1.02,2.92,2.23,3.99,3.64l-5.82,5.72c-1.24-1.57-2.62-2.74-4.14-3.51-1.52-.77-3.17-1.15-4.94-1.15-1.4,0-2.72.26-3.94.78-1.22.52-2.28,1.23-3.19,2.13-.9.9-1.6,1.97-2.11,3.21s-.75,2.59-.75,4.06.26,2.77.78,3.99c.52,1.22,1.24,2.29,2.16,3.21.92.92,2.01,1.63,3.26,2.13,1.25.5,2.62.75,4.09.75,1.71,0,3.29-.37,4.74-1.1,1.45-.73,2.77-1.82,3.94-3.26l5.67,5.57c-1.07,1.37-2.39,2.57-3.96,3.59-1.57,1.02-3.28,1.81-5.12,2.36s-3.69.83-5.57.83Z\" style=\"fill:#fff;\"></path><path d=\"M1266.94,1027.43v-35.11h27.89v7.47h-19.26v6.57h12.84v7.22h-12.84v13.84h-8.63Z\" style=\"fill:#fff;\"></path><path d=\"M1162.39,932.86h13.64v13.64c0,12.43-10.09,22.52-22.52,22.52h-13.64v-13.64c0-12.43,10.09-22.52,22.52-22.52Z\" transform=\"translate(2108.9 -207.02) rotate(90)\" style=\"fill:#86b500; stroke:#fff; stroke-miterlimit:10; stroke-width:7.5px;\"></path><path d=\"M1167.6,932.86h13.64c12.43,0,22.52,10.09,22.52,22.52v13.64h-13.64c-12.43,0-22.52-10.09-22.52-22.52v-13.64h0Z\" transform=\"translate(2136.62 -234.74) rotate(90)\" style=\"fill:#86b500; stroke:#fff; stroke-miterlimit:10; stroke-width:7.5px;\"></path>"
  },
  bmea: {
    "abbr": "BMEA",
    "name": "Biotecnologie Marine e degli Ecosistemi Acquatici",
    "short": "Biotecnologie Marine",
    "color": "#23a1d4",
    "token": "--course-bmea",
    "classe": "L-2",
    "ente": "Facoltà di Biologia e Farmacia",
    "viewBox": "173.0 1236.0 199.0 199.0",
    "paths": "<path d=\"M210.77,1261.48h141.39c.96,0,1.74.78,1.74,1.74v144.86c0,.96-.78,1.74-1.74,1.74h-144.86c-.96,0-1.74-.78-1.74-1.74v-141.39c0-2.87,2.33-5.2,5.2-5.2\" style=\"fill:#23a1d4; stroke:#fff; stroke-miterlimit:10; stroke-width:8.2px;\"></path><path d=\"M275.93,1356.33v-29.72h14.73c2.04,0,3.83.35,5.37,1.06,1.54.71,2.75,1.69,3.63,2.95s1.32,2.71,1.32,4.35c0,1.22-.31,2.36-.91,3.42-.61,1.06-1.44,1.96-2.48,2.7,1.33.71,2.38,1.63,3.16,2.76s1.17,2.38,1.17,3.74c0,1.73-.44,3.25-1.32,4.56-.88,1.32-2.11,2.34-3.69,3.08-1.59.74-3.43,1.1-5.52,1.1h-15.45ZM283.23,1338.46h6.96c1.08,0,1.92-.27,2.55-.81.62-.54.93-1.24.93-2.12s-.31-1.62-.93-2.14c-.62-.52-1.47-.79-2.55-.79h-6.96v5.86ZM283.23,1350.35h7.6c1.13,0,2.03-.28,2.7-.85s1-1.33,1-2.29-.33-1.73-1-2.29c-.66-.57-1.56-.85-2.7-.85h-7.6v6.28Z\" style=\"fill:#fff;\"></path><path d=\"M305.86,1356.33v-29.72h9.21l7.35,14.01,7.34-14.01h9.21v29.72h-6.88v-20.25l-9.76,18.13-9.76-18.21v20.34h-6.71Z\" style=\"fill:#fff;\"></path><path d=\"M283.62,1392.53v-29.72h23.43v6.33h-16.13v5.35h10.66v6.11h-10.66v5.6h16.3v6.33h-23.6Z\" style=\"fill:#fff;\"></path><path d=\"M309.17,1392.53l12.18-29.72h8.36l12.01,29.72h-7.9l-2.72-7.18h-11.59l-2.76,7.18h-7.6ZM321.74,1379.53h7.22l-3.57-9.51-3.65,9.51Z\" style=\"fill:#fff;\"></path><path d=\"M204.84,1288.67l-16.82,29.14c-7.79,13.49,1.95,30.36,17.53,30.36h0c15.58,0,25.32-16.87,17.53-30.36l-16.82-29.14c-.31-.54-1.1-.54-1.41,0Z\" style=\"fill:#23a1d4; stroke:#fff; stroke-miterlimit:10; stroke-width:8.2px;\"></path>"
  },
  nesiotika: {
    "abbr": "NESIOTIKA",
    "name": "Scuola di Specializzazione in Beni Archeologici",
    "short": "Archeologia",
    "color": "#1561af",
    "token": "--course-nesiotika",
    "classe": "",
    "ente": "Dipartimento di Storia, Scienze dell’Uomo e della Formazione",
    "viewBox": "1125.0 1241.0 199.0 199.0",
    "paths": "<path d=\"M1164.63,1266.71h140.47c.95,0,1.73.77,1.73,1.73v143.91c0,.95-.77,1.73-1.73,1.73h-143.91c-.95,0-1.73-.77-1.73-1.73v-140.47c0-2.86,2.32-5.17,5.17-5.17\" style=\"fill:#135fad; stroke:#fff; stroke-miterlimit:10; stroke-width:7.64px;\"></path><path d=\"M1246.45,1309.28v-22.11h5.12l10.04,12.82v-12.82h5.12v22.11h-4.8l-10.36-13.33v13.33h-5.12Z\" style=\"fill:#fff;\"></path><path d=\"M1270.39,1309.28v-22.11h17.43v4.71h-12v3.98h7.93v4.55h-7.93v4.17h12.13v4.71h-17.56Z\" style=\"fill:#fff;\"></path><path d=\"M1244.15,1338.64c-1.79,0-3.56-.33-5.31-.98-1.75-.65-3.31-1.56-4.67-2.72l3.03-3.95c1.35,1.09,2.59,1.88,3.73,2.35,1.14.47,2.35.71,3.63.71.84,0,1.56-.08,2.15-.25.59-.17,1.04-.42,1.36-.74s.47-.71.47-1.15c0-.61-.23-1.08-.69-1.42-.46-.34-1.25-.6-2.37-.79l-4.86-.85c-1.79-.32-3.17-1-4.14-2.05-.97-1.05-1.45-2.39-1.45-4.01,0-1.43.36-2.66,1.09-3.7.73-1.03,1.77-1.82,3.13-2.37,1.36-.55,2.97-.82,4.85-.82,1.64,0,3.29.28,4.96.84,1.66.56,3.11,1.33,4.33,2.32l-2.87,4.01c-2.27-1.75-4.54-2.62-6.79-2.62-.74,0-1.37.08-1.91.24-.54.16-.95.38-1.23.66-.28.28-.43.63-.43,1.03,0,.55.2.97.62,1.26s1.08.53,2.01.69l4.58.76c2.13.34,3.74,1.04,4.85,2.12,1.11,1.07,1.66,2.46,1.66,4.17,0,1.5-.39,2.78-1.17,3.87-.78,1.09-1.89,1.92-3.35,2.51s-3.18.88-5.18.88Z\" style=\"fill:#fff;\"></path><path d=\"M1256.34,1338.32v-22.11h5.43v22.11h-5.43Z\" style=\"fill:#fff;\"></path><path d=\"M1276.46,1338.67c-1.66,0-3.21-.29-4.64-.87-1.43-.58-2.68-1.39-3.76-2.43-1.07-1.04-1.91-2.25-2.51-3.63s-.9-2.87-.9-4.47.3-3.09.9-4.47,1.44-2.59,2.51-3.63c1.07-1.04,2.33-1.85,3.76-2.43,1.43-.58,2.98-.87,4.64-.87s3.21.29,4.64.87c1.43.58,2.68,1.39,3.76,2.43,1.07,1.04,1.91,2.25,2.51,3.63s.9,2.87.9,4.47-.3,3.09-.9,4.47-1.44,2.59-2.51,3.63c-1.07,1.04-2.33,1.85-3.76,2.43-1.43.58-2.98.87-4.64.87ZM1276.46,1333.68c.89,0,1.71-.16,2.46-.49.76-.33,1.42-.77,1.97-1.34.56-.57.99-1.25,1.31-2.04.32-.79.47-1.64.47-2.54s-.16-1.78-.47-2.56c-.32-.78-.75-1.45-1.31-2.02-.56-.57-1.22-1.02-1.97-1.34-.76-.33-1.58-.49-2.46-.49s-1.71.16-2.46.49c-.76.33-1.42.77-1.97,1.34-.56.57-.99,1.24-1.31,2.02-.32.78-.47,1.63-.47,2.56s.16,1.75.47,2.54.75,1.47,1.31,2.04c.56.57,1.22,1.02,1.97,1.34.76.33,1.58.49,2.46.49Z\" style=\"fill:#fff;\"></path><path d=\"M1266.98,1367.36v-17.31h-7.23v-4.8h19.9v4.8h-7.23v17.31h-5.43Z\" style=\"fill:#fff;\"></path><path d=\"M1282.05,1367.36v-22.11h5.43v22.11h-5.43Z\" style=\"fill:#fff;\"></path><path d=\"M1243.71,1396.39v-22.11h5.43v9.67l8.94-9.67h6.57l-10.23,10.39,10.8,11.72h-7.2l-8.88-10.14v10.14h-5.43Z\" style=\"fill:#fff;\"></path><path d=\"M1265.31,1396.39l9.06-22.11h6.22l8.94,22.11h-5.87l-2.02-5.34h-8.62l-2.05,5.34h-5.65ZM1274.66,1386.73h5.37l-2.65-7.07-2.72,7.07Z\" style=\"fill:#fff;\"></path><path d=\"M1168.95,1303.96l3.33-8.26c.76-1.9-.63-3.97-2.68-3.97h-19.99c-2.05,0-3.44,2.07-2.68,3.97l3.33,8.26c.53,1.31.01,2.79-1.18,3.55-8.43,5.35-12.13,16.83-6.53,26.52l16.38,28.36c.3.53,1.07.53,1.37,0l16.38-28.36c5.6-9.7,1.89-21.18-6.53-26.52-1.2-.76-1.71-2.24-1.18-3.55Z\" style=\"fill:#135fad; stroke:#fff; stroke-miterlimit:10; stroke-width:7.64px;\"></path>"
  }
};
const COURSE_KEYS = ["dst", "etc", "ve", "ocf", "bmea", "nesiotika"];
Object.assign(__ds_scope, { COURSES, COURSE_KEYS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/courses/courseData.js", error: String((e && e.message) || e) }); }

// components/courses/CourseIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO CourseIcon — one of the six bespoke course pictograms, inlined
 * so it works anywhere. `course` is one of the COURSE keys
 * (dst, etc, ve, ocf, bmea, nesiotika).
 */
function CourseIcon({
  course,
  size = 56,
  className = "",
  title,
  ...rest
}) {
  const c = __ds_scope.COURSES[course];
  if (!c) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: `uno-course-icon ${className}`.trim(),
    viewBox: c.viewBox,
    width: size,
    height: size,
    role: "img",
    "aria-label": title || c.name,
    dangerouslySetInnerHTML: {
      __html: c.paths
    }
  }, rest));
}
Object.assign(__ds_scope, { CourseIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/courses/CourseIcon.jsx", error: String((e && e.message) || e) }); }

// components/courses/CourseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-coursecard-css";
const CSS = `
.uno-course-card {
  display: flex; flex-direction: column;
  background: var(--surface-card);
  border-radius: var(--radius-card);
  border: 1px solid var(--border-subtle);
  border-top: 4px solid var(--course-color, var(--uno-teal));
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: inherit;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-standard);
  height: 100%;
}
a.uno-course-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.uno-course-card__top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
.uno-course-card__classe {
  font-size: var(--text-xs); font-weight: var(--fw-bold); letter-spacing: .04em;
  color: var(--course-color, var(--uno-teal));
  background: color-mix(in srgb, var(--course-color, var(--uno-teal)) 12%, transparent);
  padding: 4px 10px; border-radius: var(--radius-pill); white-space: nowrap;
}
.uno-course-card__title {
  font-size: var(--text-lg); font-weight: var(--fw-extrabold);
  line-height: var(--leading-snug); letter-spacing: var(--tracking-tight);
  color: var(--text-strong); margin: 0 0 8px;
}
.uno-course-card__ente { font-size: var(--text-sm); color: var(--text-muted); margin: 0 0 18px; line-height: 1.45; }
.uno-course-card__cta {
  margin-top: auto; display: inline-flex; align-items: center; gap: 7px;
  font-size: var(--text-sm); font-weight: var(--fw-bold);
  color: var(--course-color, var(--uno-teal));
}
.uno-course-card__cta svg { width: 16px; height: 16px; transition: transform var(--duration-base) var(--ease-out); }
a.uno-course-card:hover .uno-course-card__cta svg { transform: translateX(4px); }
`;
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO CourseCard — the catalogue card for a degree programme. Pulls
 * name, class and faculty from the course catalogue and themes itself
 * with the course colour.
 */
function CourseCard({
  course,
  href,
  cta = "Scopri il corso",
  className = "",
  ...rest
}) {
  ensureStyles();
  const c = __ds_scope.COURSES[course];
  if (!c) return null;
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `uno-course-card ${className}`.trim(),
    href: href,
    style: {
      "--course-color": `var(${c.token})`
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uno-course-card__top"
  }, /*#__PURE__*/React.createElement(__ds_scope.CourseIcon, {
    course: course,
    size: 60
  }), c.classe ? /*#__PURE__*/React.createElement("span", {
    className: "uno-course-card__classe"
  }, c.classe) : null), /*#__PURE__*/React.createElement("h3", {
    className: "uno-course-card__title"
  }, c.name), /*#__PURE__*/React.createElement("p", {
    className: "uno-course-card__ente"
  }, c.ente), /*#__PURE__*/React.createElement("span", {
    className: "uno-course-card__cta"
  }, cta, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/courses/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-accordion-css";
const CSS = `
.uno-accordion { border-top: 1px solid var(--divider-cream); font-family: var(--font-sans); }
.uno-acc__item { border-bottom: 1px solid var(--divider-cream); }
.uno-acc__head {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
  background: transparent; border: 0; cursor: pointer;
  padding: 18px 4px; text-align: left;
  font-family: var(--font-sans); font-size: var(--text-lg); font-weight: var(--fw-bold);
  color: var(--text-strong);
  transition: color var(--duration-fast) var(--ease-standard);
}
.uno-acc__head:hover { color: var(--uno-teal); }
.uno-acc__head:focus-visible { outline: none; box-shadow: var(--shadow-focus); border-radius: var(--radius-sm); }
.uno-acc__chev { width: 22px; height: 22px; flex: none; color: var(--uno-teal); transition: transform var(--duration-base) var(--ease-standard); }
.uno-acc__head[aria-expanded="true"] .uno-acc__chev { transform: rotate(180deg); }
.uno-acc__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--duration-base) var(--ease-standard); }
.uno-acc__panel[data-open="true"] { grid-template-rows: 1fr; }
.uno-acc__inner { overflow: hidden; }
.uno-acc__inner > * { margin: 0 30px 18px 4px; color: var(--text-muted); font-size: var(--text-base); line-height: var(--leading-relaxed); }
`;
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO Accordion — disclosure list, ideal for FAQs. Pass
 * `items={[{ q, a }]}`. Single-open by default; set `allowMultiple`.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = "",
  ...rest
}) {
  ensureStyles();
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  function toggle(i) {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `uno-accordion ${className}`.trim()
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      className: "uno-acc__item",
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "uno-acc__head",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("svg", {
      className: "uno-acc__chev",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "uno-acc__panel",
      "data-open": isOpen
    }, /*#__PURE__*/React.createElement("div", {
      className: "uno-acc__inner"
    }, typeof it.a === "string" ? /*#__PURE__*/React.createElement("p", null, it.a) : it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-alert-css";
const CSS = `
.uno-alert {
  display: flex; gap: 12px; align-items: flex-start;
  font-family: var(--font-sans);
  padding: 14px 16px; border-radius: var(--radius-md);
  border: 1px solid transparent;
}
.uno-alert__icon { flex: none; width: 20px; height: 20px; margin-top: 1px; }
.uno-alert__icon svg { width: 100%; height: 100%; }
.uno-alert__title { font-weight: var(--fw-bold); font-size: var(--text-base); margin: 0 0 2px; }
.uno-alert__body { font-size: var(--text-sm); line-height: 1.5; margin: 0; color: var(--text-body); }
.uno-alert--info    { background: var(--status-info-bg);    border-color: rgba(23,114,184,.25);  color: var(--status-info); }
.uno-alert--success { background: var(--status-success-bg); border-color: rgba(79,155,30,.25);   color: var(--status-success); }
.uno-alert--warning { background: var(--status-warning-bg); border-color: rgba(201,135,0,.25);   color: var(--status-warning); }
.uno-alert--danger  { background: var(--status-danger-bg);  border-color: rgba(219,52,24,.25);   color: var(--status-danger); }
`;
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
const ICONS = {
  info: "M12 8h.01M11 12h1v4h1",
  success: "M5 13l4 4L19 7",
  warning: "M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
  danger: "M12 9v4m0 4h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
};

/**
 * UNO Alert — an inline banner for info / success / warning / danger.
 */
function Alert({
  title,
  children,
  variant = "info",
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: `uno-alert uno-alert--${variant} ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "uno-alert__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[variant] || ICONS.info
  }))), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("p", {
    className: "uno-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "uno-alert__body"
  }, children) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-badge-css";
const CSS = `
.uno-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-sans); font-weight: var(--fw-bold);
  font-size: var(--text-xs); letter-spacing: 0.02em; line-height: 1.2;
  padding: 4px 10px; border-radius: var(--radius-pill);
}
.uno-badge__dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
.uno-badge--neutral { background: var(--cream-200); color: var(--text-strong); }
.uno-badge--teal    { background: var(--teal-100);  color: var(--teal-700); }
.uno-badge--solid   { background: var(--uno-teal);  color: #fff; }
.uno-badge--navy    { background: var(--uno-navy);  color: var(--uno-cream); }
.uno-badge--success { background: var(--status-success-bg); color: var(--status-success); }
.uno-badge--warning { background: var(--status-warning-bg); color: var(--status-warning); }
.uno-badge--danger  { background: var(--status-danger-bg);  color: var(--status-danger); }
.uno-badge--info    { background: var(--status-info-bg);    color: var(--status-info); }
`;
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO Badge — a small status / count pill.
 */
function Badge({
  children,
  variant = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `uno-badge uno-badge--${variant} ${className}`.trim()
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "uno-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-tag-css";
const CSS = `
.uno-tag {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  font-size: var(--text-sm); line-height: 1.2;
  padding: 5px 12px; border-radius: var(--radius-pill);
  background: var(--uno-white); border: 1.5px solid var(--border-default);
  color: var(--text-body);
}
.uno-tag--filled { background: var(--cream-200); border-color: transparent; }
.uno-tag__dot { width: 9px; height: 9px; border-radius: 50%; flex: none; }
.uno-tag__x {
  display: inline-flex; align-items: center; justify-content: center;
  width: 16px; height: 16px; margin-right: -4px; border: 0; padding: 0;
  background: transparent; cursor: pointer; color: var(--text-muted);
  border-radius: 50%;
}
.uno-tag__x:hover { background: var(--cream-300); color: var(--text-strong); }
.uno-tag__x svg { width: 11px; height: 11px; }
`;
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO Tag — a chip/label, optionally with a colour dot (e.g. a course
 * hue) and an optional remove button.
 */
function Tag({
  children,
  color,
  filled = false,
  onRemove,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `uno-tag ${filled ? "uno-tag--filled" : ""} ${className}`.trim()
  }, rest), color ? /*#__PURE__*/React.createElement("span", {
    className: "uno-tag__dot",
    style: {
      background: color
    }
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uno-tag__x",
    "aria-label": "Rimuovi",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/formStyles.js
try { (() => {
/* Shared CSS for UNO form controls. Imported by each form component
   so styling is injected exactly once (guarded by element id). */

const STYLE_ID = "uno-forms-css";
const CSS = `
.uno-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.uno-field__label { font-size: var(--text-sm); font-weight: var(--fw-semibold); color: var(--text-strong); }
.uno-field__req { color: var(--status-danger); margin-left: 2px; }
.uno-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.uno-field__error { font-size: var(--text-xs); color: var(--status-danger); font-weight: var(--fw-medium); }

.uno-input, .uno-textarea, .uno-select__el {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--text-strong);
  background: var(--uno-white);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 11px 14px;
  width: 100%;
  -webkit-appearance: none;
  transition: border-color var(--duration-base) var(--ease-standard),
              box-shadow var(--duration-base) var(--ease-standard);
}
.uno-input::placeholder, .uno-textarea::placeholder { color: var(--text-subtle); }
.uno-input:hover, .uno-textarea:hover, .uno-select__el:hover { border-color: var(--border-strong); }
.uno-input:focus, .uno-textarea:focus, .uno-select__el:focus {
  outline: none;
  border-color: var(--uno-teal);
  box-shadow: var(--shadow-focus);
}
.uno-input[aria-invalid="true"], .uno-textarea[aria-invalid="true"], .uno-select__el[aria-invalid="true"] {
  border-color: var(--status-danger);
}
.uno-input:disabled, .uno-textarea:disabled, .uno-select__el:disabled {
  background: var(--cream-100); color: var(--text-muted); cursor: not-allowed;
}
.uno-textarea { resize: vertical; min-height: 96px; line-height: var(--leading-normal); }

/* select chevron */
.uno-select { position: relative; }
.uno-select__el { padding-right: 38px; cursor: pointer; }
.uno-select__chev {
  position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; pointer-events: none; color: var(--text-muted);
}

/* checkbox & radio */
.uno-check { display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; font-family: var(--font-sans); font-size: var(--text-base); color: var(--text-body); }
.uno-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.uno-check__box {
  flex: none; width: 20px; height: 20px; margin-top: 1px;
  border: 1.5px solid var(--border-strong);
  background: var(--uno-white);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard);
}
.uno-check__box--radio { border-radius: var(--radius-pill); }
.uno-check__box--check { border-radius: var(--radius-xs); }
.uno-check__box svg { width: 13px; height: 13px; color: #fff; opacity: 0; transform: scale(.6); transition: opacity var(--duration-fast), transform var(--duration-fast); }
.uno-check__box .uno-dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; opacity: 0; transform: scale(.5); transition: opacity var(--duration-fast), transform var(--duration-fast); }
.uno-check input:checked + .uno-check__box { background: var(--uno-teal); border-color: var(--uno-teal); }
.uno-check input:checked + .uno-check__box svg,
.uno-check input:checked + .uno-check__box .uno-dot { opacity: 1; transform: scale(1); }
.uno-check input:focus-visible + .uno-check__box { box-shadow: var(--shadow-focus); }
.uno-check input:disabled + .uno-check__box { background: var(--cream-200); border-color: var(--border-default); }
.uno-check--disabled { opacity: .55; cursor: not-allowed; }

/* switch */
.uno-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-sans); font-size: var(--text-base); color: var(--text-body); }
.uno-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.uno-switch__track {
  flex: none; width: 44px; height: 26px; border-radius: var(--radius-pill);
  background: var(--cream-400); position: relative;
  transition: background var(--duration-base) var(--ease-standard);
}
.uno-switch__thumb {
  position: absolute; top: 3px; left: 3px; width: 20px; height: 20px;
  border-radius: 50%; background: #fff; box-shadow: var(--shadow-sm);
  transition: transform var(--duration-base) var(--ease-out);
}
.uno-switch input:checked + .uno-switch__track { background: var(--uno-teal); }
.uno-switch input:checked + .uno-switch__track .uno-switch__thumb { transform: translateX(18px); }
.uno-switch input:focus-visible + .uno-switch__track { box-shadow: var(--shadow-focus); }
.uno-switch input:disabled + .uno-switch__track { opacity: .5; }
`;
function ensureFormStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
Object.assign(__ds_scope, { ensureFormStyles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/formStyles.js", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO Checkbox. Custom-styled box with a teal checked state.
 */
function Checkbox({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  __ds_scope.ensureFormStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `uno-check ${disabled ? "uno-check--disabled" : ""} ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uno-check__box uno-check__box--check"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5 9-11"
  }))), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO text Input with optional label, hint and error message.
 */
function Input({
  label,
  hint,
  error,
  required = false,
  id,
  className = "",
  ...rest
}) {
  __ds_scope.ensureFormStyles();
  const reactId = React.useId();
  const fid = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    className: "uno-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "uno-field__label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: `uno-input ${className}`.trim(),
    "aria-invalid": error ? "true" : undefined,
    required: required
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO Radio. Custom-styled circle with a teal checked dot.
 * Group several with the same `name`.
 */
function Radio({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  __ds_scope.ensureFormStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `uno-check ${disabled ? "uno-check--disabled" : ""} ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uno-check__box uno-check__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uno-dot"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO Select. Pass options as [{value,label}] or use children <option>s.
 */
function Select({
  label,
  hint,
  error,
  required = false,
  id,
  options,
  placeholder,
  children,
  className = "",
  ...rest
}) {
  __ds_scope.ensureFormStyles();
  const reactId = React.useId();
  const fid = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    className: "uno-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "uno-field__label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "uno-select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: `uno-select__el ${className}`.trim(),
    "aria-invalid": error ? "true" : undefined,
    required: required
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("svg", {
    className: "uno-select__chev",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO Switch — a toggle for on/off settings.
 */
function Switch({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  __ds_scope.ensureFormStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `uno-switch ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uno-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uno-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO multi-line Textarea with optional label, hint and error.
 */
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  rows = 4,
  className = "",
  ...rest
}) {
  __ds_scope.ensureFormStyles();
  const reactId = React.useId();
  const fid = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    className: "uno-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "uno-field__label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    className: `uno-textarea ${className}`.trim(),
    "aria-invalid": error ? "true" : undefined,
    required: required
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "uno-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-card-css";
const CSS = `
.uno-card {
  background: var(--surface-card);
  border-radius: var(--radius-card);
  border: 1px solid transparent;
}
.uno-card--elevated { box-shadow: var(--shadow-sm); }
.uno-card--outline  { border-color: var(--border-default); }
.uno-card--flat     { background: var(--surface-sunken); }
.uno-card--interactive {
  cursor: pointer;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-standard);
}
.uno-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.uno-card--interactive:active { transform: translateY(-1px); }
.uno-card__pad-none { padding: 0; }
.uno-card__pad-sm   { padding: var(--space-4); }
.uno-card__pad-md   { padding: var(--space-5); }
.uno-card__pad-lg   { padding: var(--space-6); }
`;
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO Card — a surface container. Compose freely inside it.
 */
function Card({
  children,
  variant = "elevated",
  padding = "md",
  interactive = false,
  as,
  className = "",
  ...rest
}) {
  ensureStyles();
  const Tag = as || (rest.href ? "a" : "div");
  const classes = ["uno-card", `uno-card--${variant}`, `uno-card__pad-${padding}`, interactive ? "uno-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UNO Eyebrow ("occhiello") — the small uppercase kicker that sits
 * above a heading. Teal by default; pass `color` for dark sections.
 * Relies on the .uno-eyebrow class shipped in styles.css.
 */
function Eyebrow({
  children,
  color,
  as = "span",
  className = "",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `uno-eyebrow ${className}`.trim(),
    style: color ? {
      color,
      ...style
    } : style
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "uno-sectionheading-css";
const CSS = `
.uno-sh { display: flex; flex-direction: column; gap: 12px; font-family: var(--font-sans); }
.uno-sh--center { align-items: center; text-align: center; }
.uno-sh__title {
  margin: 0;
  font-weight: var(--fw-extrabold);
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-strong);
  max-width: 20ch;
  text-wrap: balance;
}
.uno-sh--center .uno-sh__title { max-width: 24ch; }
.uno-sh__title em { font-style: italic; color: var(--uno-teal); font-weight: inherit; }
.uno-sh__lead {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: var(--fw-medium);
  line-height: var(--leading-normal);
  color: var(--text-muted);
  max-width: 56ch;
}
.uno-sh--dark .uno-sh__title { color: var(--uno-cream); }
.uno-sh--dark .uno-sh__title em { color: var(--teal-200); }
.uno-sh--dark .uno-sh__lead { color: var(--text-on-dark-muted); }
.uno-sh--dark .uno-eyebrow { color: var(--teal-200); }
.uno-sh--brand .uno-sh__title { color: #fff; }
.uno-sh--brand .uno-sh__title em { color: var(--uno-cream); }
.uno-sh--brand .uno-sh__lead { color: rgba(255,255,255,.82); }
.uno-sh--brand .uno-eyebrow { color: var(--uno-cream); }
`;
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * UNO SectionHeading — the signature lockup: an eyebrow, then a
 * heading where one word can be emphasised in italic teal. Put the
 * accent word in `<em>` inside `title`, or pass the `accent` prop.
 */
function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  align = "left",
  tone = "light",
  as = "h2",
  className = "",
  ...rest
}) {
  ensureStyles();
  const Heading = as;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `uno-sh uno-sh--${align} uno-sh--${tone} ${className}`.trim()
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "uno-eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Heading, {
    className: "uno-sh__title"
  }, title, accent ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("em", null, accent)) : null), lead ? /*#__PURE__*/React.createElement("p", {
    className: "uno-sh__lead"
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/Chrome.jsx
try { (() => {
/* UNO website — shared chrome: Header + Footer. Exposed on window. */
const {
  Button,
  IconButton
} = window.UNOUniversitAOristanoDesignSystem_7ea223;
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "courses",
  label: "I corsi"
}, {
  id: "ateneo",
  label: "Ateneo"
}, {
  id: "openday",
  label: "Open Day"
}];
function Header({
  current,
  go
}) {
  const {
    Menu,
    ArrowRight
  } = window.UNOIcons;
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide hdr__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hdr__logo",
    onClick: () => go("home"),
    "aria-label": "UNO \u2014 home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/uno-logo-navy.svg",
    alt: "UNO \u2014 Universit\xE0 a Oristano"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: current === n.id ? "is-active" : "",
    onClick: () => go(n.id)
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go("courses")
  }, "Accedi"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: () => go("enroll")
  }, "Iscriviti"), /*#__PURE__*/React.createElement("span", {
    className: "hdr__menu"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    "aria-label": "Menu",
    icon: /*#__PURE__*/React.createElement(Menu, {
      size: 22
    }),
    onClick: () => go("courses")
  })))));
}
function Footer({
  go
}) {
  const {
    Instagram,
    Facebook,
    Linkedin
  } = window.UNOIcons;
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide ftr__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ftr__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/uno-logo-cream.svg",
    alt: "UNO"
  })), /*#__PURE__*/React.createElement("p", {
    className: "ftr__blurb"
  }, "L'universit\xE0 pubblica di Oristano. Sei corsi tra agraria, mare, turismo e archeologia, nel cuore della Sardegna."), /*#__PURE__*/React.createElement("div", {
    className: "ftr__social"
  }, /*#__PURE__*/React.createElement("a", {
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Instagram, {
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(Facebook, {
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Linkedin, {
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ftr__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Studiare"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("courses")
  }, "I corsi"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("enroll")
  }, "Iscrizioni"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("openday")
  }, "Open Day"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("courses")
  }, "Borse di studio")), /*#__PURE__*/React.createElement("div", {
    className: "ftr__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Ateneo"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("ateneo")
  }, "Chi siamo"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("ateneo")
  }, "Il campus"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("ateneo")
  }, "Dipartimenti"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("ateneo")
  }, "Lavora con noi")), /*#__PURE__*/React.createElement("div", {
    className: "ftr__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contatti"), /*#__PURE__*/React.createElement("a", null, "Via Carmine, Oristano"), /*#__PURE__*/React.createElement("a", null, "info@uno.it"), /*#__PURE__*/React.createElement("a", null, "+39 0783 000000")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide ftr__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 UNO \u2014 Universit\xE0 a Oristano"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Cookie \xB7 Note legali")));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/CourseDetail.jsx
try { (() => {
/* UNO website — Course detail page, themed with the course colour. */
const {
  Button: Btn_CD,
  Badge: Badge_CD,
  Accordion: Acc_CD,
  CourseIcon: CIcon_CD,
  Card: Card_CD,
  COURSES: COURSES_CD
} = window.UNOUniversitAOristanoDesignSystem_7ea223;
const DETAIL = {
  dst: {
    durata: "3 anni",
    accesso: "Libero",
    breve: "Formi professionisti capaci di progettare e gestire la promozione turistica di un territorio: dalla destinazione al racconto, fino all'accoglienza.",
    sbocchi: ["Destination manager e DMO", "Uffici turismo di enti e comuni", "Tour operator e agenzie di incoming", "Marketing territoriale"]
  },
  etc: {
    durata: "3 anni",
    accesso: "Libero",
    breve: "Impari a ideare e organizzare eventi culturali, festival e rassegne, unendo creatività, gestione e valorizzazione del patrimonio.",
    sbocchi: ["Event manager", "Organizzazione di festival e rassegne", "Fondazioni e istituzioni culturali", "Comunicazione e ufficio stampa"]
  },
  ve: {
    durata: "3 anni",
    accesso: "Programmato",
    breve: "Dalla vigna alla cantina: studi la coltivazione della vite e le tecnologie di trasformazione per produrre vini di qualità.",
    sbocchi: ["Enologo e cantiniere", "Aziende vitivinicole", "Consulenza e controllo qualità", "Distribuzione e commercio del vino"]
  },
  ocf: {
    durata: "3 anni",
    accesso: "Libero",
    breve: "Un corso professionalizzante e pratico: orticoltura, vivaismo e gestione del verde con tanto laboratorio e tirocinio in azienda.",
    sbocchi: ["Tecnico florovivaista", "Gestione di serre e vivai", "Progettazione del verde", "Aziende agricole e cooperative"]
  },
  bmea: {
    durata: "3 anni",
    accesso: "Programmato",
    breve: "Studi gli organismi e gli ecosistemi marini con le biotecnologie, tra laboratorio e mare aperto del Sinis.",
    sbocchi: ["Laboratori di ricerca", "Acquacoltura e blue economy", "Enti di tutela ambientale", "Biotecnologie applicate"]
  },
  nesiotika: {
    durata: "2 anni",
    accesso: "Programmato",
    breve: "Una scuola di specializzazione in beni archeologici: scavo, studio e valorizzazione del patrimonio dell'isola.",
    sbocchi: ["Archeologo professionista", "Soprintendenze e musei", "Scavi e missioni di ricerca", "Tutela e valorizzazione dei beni culturali"]
  }
};
const FAQ_CD = [{
  q: "Quando posso iscrivermi?",
  a: "Le immatricolazioni aprono il 1° marzo 2026. Per i corsi ad accesso programmato è prevista una graduatoria."
}, {
  q: "Dove si svolgono le lezioni?",
  a: "Tutte le attività si tengono nel campus di Oristano, con laboratori e tirocini sul territorio."
}, {
  q: "È previsto un tirocinio?",
  a: "Sì, ogni corso include tirocini curriculari presso aziende, enti ed istituzioni partner."
}];
function Fact({
  icon,
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cd-fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-fact__k"
  }, icon, " ", k), /*#__PURE__*/React.createElement("div", {
    className: "cd-fact__v"
  }, v));
}
function CourseDetail({
  go,
  course
}) {
  const c = COURSES_CD[course];
  const d = DETAIL[course];
  const {
    ArrowRight,
    Clock,
    Cap,
    MapPin,
    Globe,
    CheckCircle
  } = window.UNOIcons;
  const color = `var(${c.token})`;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide",
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "chip",
    style: {
      border: 0,
      background: "transparent",
      padding: 0,
      color: "var(--text-muted)"
    },
    onClick: () => go("courses")
  }, "\u2190 Tutti i corsi")), /*#__PURE__*/React.createElement("section", {
    className: "cd-hero",
    style: {
      background: color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide cd-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.16)",
      borderRadius: "var(--radius-lg)",
      padding: 12,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(CIcon_CD, {
    course: course,
    size: 84
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "uno-eyebrow",
    style: {
      color: "rgba(255,255,255,.85)"
    }
  }, c.classe ? `Classe ${c.classe}` : "Scuola di specializzazione", " \xB7 ", c.abbr), /*#__PURE__*/React.createElement("h1", {
    className: "cd-hero__title"
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.9)",
      marginTop: 12,
      fontWeight: 500
    }
  }, c.ente)))), /*#__PURE__*/React.createElement("section", {
    className: "section--tight",
    style: {
      paddingTop: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-facts"
  }, /*#__PURE__*/React.createElement(Fact, {
    icon: /*#__PURE__*/React.createElement(Clock, {
      size: 14
    }),
    k: "Durata",
    v: d.durata
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: /*#__PURE__*/React.createElement(Cap, {
      size: 14
    }),
    k: "Titolo",
    v: c.classe || "Spec."
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: /*#__PURE__*/React.createElement(MapPin, {
      size: 14
    }),
    k: "Sede",
    v: "Oristano"
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: /*#__PURE__*/React.createElement(Globe, {
      size: 14
    }),
    k: "Accesso",
    v: d.accesso
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide cd-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-prose"
  }, /*#__PURE__*/React.createElement("h2", null, "Il corso in breve"), /*#__PURE__*/React.createElement("p", null, d.breve), /*#__PURE__*/React.createElement("h3", null, "Cosa potrai fare dopo"), /*#__PURE__*/React.createElement("ul", {
    className: "cd-list"
  }, d.sbocchi.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    size: 20
  }), " ", /*#__PURE__*/React.createElement("span", null, s)))), /*#__PURE__*/React.createElement("h3", null, "Domande frequenti"), /*#__PURE__*/React.createElement(Acc_CD, {
    defaultOpen: [0],
    items: FAQ_CD
  })), /*#__PURE__*/React.createElement("aside", {
    className: "cd-aside"
  }, /*#__PURE__*/React.createElement(Card_CD, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Badge_CD, {
    variant: "solid"
  }, "Iscrizioni aperte"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.5
    }
  }, "Inizia la domanda di immatricolazione per l'anno accademico 2026/27."), /*#__PURE__*/React.createElement(Btn_CD, {
    variant: "primary",
    block: true,
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: () => go("enroll")
  }, "Iscriviti a questo corso"), /*#__PURE__*/React.createElement(Btn_CD, {
    variant: "outline",
    block: true,
    onClick: () => go("openday")
  }, "Prenota l'Open Day")))))));
}
Object.assign(window, {
  CourseDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/CourseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/Courses.jsx
try { (() => {
/* UNO website — Course catalogue with filters. */
const {
  SectionHeading: SH_Courses,
  CourseCard: CC_Courses,
  COURSES: COURSES_DATA,
  COURSE_KEYS: CK_Courses
} = window.UNOUniversitAOristanoDesignSystem_7ea223;
const COURSE_AREA = {
  dst: "Turismo",
  etc: "Turismo",
  ve: "Agraria",
  ocf: "Agraria",
  bmea: "Mare",
  nesiotika: "Cultura"
};
const AREAS = ["Tutti", "Agraria", "Turismo", "Mare", "Cultura"];
function Courses({
  go
}) {
  const [area, setArea] = React.useState("Tutti");
  const keys = CK_Courses.filter(k => area === "Tutti" || COURSE_AREA[k] === area);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement(SH_Courses, {
    eyebrow: "Offerta formativa 2026 / 27",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Tutti i ", /*#__PURE__*/React.createElement("em", null, "corsi")),
    lead: "Lauree triennali, professionalizzanti e scuole di specializzazione. Filtra per area e trova il percorso giusto per te."
  }), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, AREAS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    className: `chip ${area === a ? "is-active" : ""}`,
    onClick: () => setArea(a)
  }, a))))), /*#__PURE__*/React.createElement("section", {
    className: "section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, keys.map(k => /*#__PURE__*/React.createElement(CC_Courses, {
    key: k,
    course: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("detail", k);
    }
  }))))));
}
Object.assign(window, {
  Courses
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/Courses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/Enroll.jsx
try { (() => {
/* UNO website — enrollment / application form. */
const NS_EN = window.UNOUniversitAOristanoDesignSystem_7ea223;
const {
  Input: In_EN,
  Select: Sel_EN,
  Checkbox: Chk_EN,
  Button: Btn_EN,
  Alert: Al_EN,
  Card: Card_EN,
  CourseIcon: CI_EN,
  SectionHeading: SH_EN,
  COURSES: CO_EN,
  COURSE_KEYS: CK_EN
} = NS_EN;
function Enroll({
  go,
  course
}) {
  const [picked, setPicked] = React.useState(course || "dst");
  const [sent, setSent] = React.useState(false);
  const {
    ArrowRight,
    CheckCircle,
    Mail
  } = window.UNOIcons;
  const c = CO_EN[picked];
  function submit(e) {
    e.preventDefault();
    setSent(true);
    if (typeof window !== "undefined") window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement(SH_EN, {
    eyebrow: "Immatricolazione 2026 / 27",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Inizia la tua ", /*#__PURE__*/React.createElement("em", null, "iscrizione")),
    lead: "Compila la domanda in pochi minuti. Riceverai via email le istruzioni per completare l'immatricolazione."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide enroll"
  }, /*#__PURE__*/React.createElement("form", {
    className: "enroll__form",
    onSubmit: submit
  }, sent ? /*#__PURE__*/React.createElement(Al_EN, {
    variant: "success",
    title: "Domanda inviata!"
  }, "Grazie, abbiamo ricevuto la tua richiesta per \u201C", c.name, "\u201D. Ti scriveremo a breve.") : null, /*#__PURE__*/React.createElement("div", {
    className: "form-section"
  }, /*#__PURE__*/React.createElement("h3", null, "Dati anagrafici"), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement(In_EN, {
    label: "Nome",
    placeholder: "Mario",
    required: true
  }), /*#__PURE__*/React.createElement(In_EN, {
    label: "Cognome",
    placeholder: "Rossi",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement(In_EN, {
    label: "Email",
    type: "email",
    placeholder: "mario@esempio.it",
    required: true
  }), /*#__PURE__*/React.createElement(In_EN, {
    label: "Telefono",
    type: "tel",
    placeholder: "+39 ..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement(In_EN, {
    label: "Codice fiscale",
    placeholder: "RSSMRA...",
    required: true
  }), /*#__PURE__*/React.createElement(In_EN, {
    label: "Data di nascita",
    type: "date",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-section"
  }, /*#__PURE__*/React.createElement("h3", null, "Corso di studio"), /*#__PURE__*/React.createElement(Sel_EN, {
    label: "Corso scelto",
    value: picked,
    onChange: e => setPicked(e.target.value),
    options: CK_EN.map(k => ({
      value: k,
      label: CO_EN[k].name
    }))
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-section"
  }, /*#__PURE__*/React.createElement("h3", null, "Consensi"), /*#__PURE__*/React.createElement(Chk_EN, {
    label: "Ho letto e accetto l'informativa sulla privacy",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Chk_EN, {
    label: "Voglio ricevere aggiornamenti su corsi ed eventi"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn_EN, {
    type: "submit",
    variant: "primary",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 20
    })
  }, "Invia la domanda"))), /*#__PURE__*/React.createElement("aside", {
    className: "enroll__aside"
  }, /*#__PURE__*/React.createElement(Card_EN, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(CI_EN, {
    course: picked,
    size: 52
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-subtle)",
      textTransform: "uppercase",
      letterSpacing: ".08em"
    }
  }, "Corso scelto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      color: "var(--text-strong)",
      lineHeight: 1.2
    }
  }, c.name))), /*#__PURE__*/React.createElement("div", {
    className: "summary-row"
  }, /*#__PURE__*/React.createElement("span", null, "Sede"), /*#__PURE__*/React.createElement("b", null, "Oristano")), /*#__PURE__*/React.createElement("div", {
    className: "summary-row"
  }, /*#__PURE__*/React.createElement("span", null, "A.A."), /*#__PURE__*/React.createElement("b", null, "2026 / 27")), /*#__PURE__*/React.createElement("div", {
    className: "summary-row",
    style: {
      borderBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "Classe"), /*#__PURE__*/React.createElement("b", null, c.classe || "Spec."))), /*#__PURE__*/React.createElement(Card_EN, {
    variant: "flat",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    size: 22,
    style: {
      color: "var(--uno-teal)"
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-strong)"
    }
  }, "Cosa succede dopo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.5
    }
  }, "Ricevi una email di conferma, carichi i documenti e completi il pagamento della tassa."))), /*#__PURE__*/React.createElement(Card_EN, {
    variant: "outline",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Mail, {
    size: 22,
    style: {
      color: "var(--uno-teal)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Dubbi? Scrivi a ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-strong)"
    }
  }, "iscrizioni@uno.it"))))))));
}
Object.assign(window, {
  Enroll
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/Enroll.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/Home.jsx
try { (() => {
/* UNO website — Home screen. */
const {
  Button,
  SectionHeading,
  CourseCard,
  Badge,
  COURSE_KEYS
} = window.UNOUniversitAOristanoDesignSystem_7ea223;
function PhotoPlaceholder({
  label = "Foto del campus"
}) {
  const {
    Building
  } = window.UNOIcons;
  return /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph__inner"
  }, /*#__PURE__*/React.createElement(Building, {
    size: 40
  }), /*#__PURE__*/React.createElement("span", null, label)));
}
function Home({
  go
}) {
  const {
    ArrowRight,
    Cap,
    MapPin,
    Users,
    Sparkle,
    Waves,
    Leaf,
    Globe
  } = window.UNOIcons;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uno-eyebrow"
  }, "Iscrizioni 2026 / 27"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "L'universit\xE0 ", /*#__PURE__*/React.createElement("em", null, "a misura"), " di studente"), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Sei corsi di laurea sul mare di Oristano, tra agraria, biotecnologie, turismo e archeologia. Lezioni in presenza e rapporto diretto con i docenti."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 20
    }),
    onClick: () => go("courses")
  }, "Scopri i corsi"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go("openday")
  }, "Vieni all'Open Day"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__art"
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Studenti nel campus"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__badge"
  }, /*#__PURE__*/React.createElement(Cap, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "6"), /*#__PURE__*/React.createElement("span", null, "corsi di laurea")))))), /*#__PURE__*/React.createElement("section", {
    className: "uno-surface-navy section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("b", null, "6"), /*#__PURE__*/React.createElement("span", null, "corsi di laurea e specializzazione")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("b", null, "2"), /*#__PURE__*/React.createElement("span", null, "dipartimenti e facolt\xE0")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("b", null, "1:12"), /*#__PURE__*/React.createElement("span", null, "rapporto docenti / studenti")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("b", null, "100%"), /*#__PURE__*/React.createElement("span", null, "lezioni in presenza"))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "I corsi",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Trova il tuo ", /*#__PURE__*/React.createElement("em", null, "percorso"))
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: () => go("courses")
  }, "Vedi tutti")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, COURSE_KEYS.map(k => /*#__PURE__*/React.createElement(CourseCard, {
    key: k,
    course: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("detail", k);
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "uno-surface-navy section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide stack-lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    align: "center",
    eyebrow: "Perch\xE9 UNO",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Una piccola universit\xE0, ", /*#__PURE__*/React.createElement("em", null, "grandi"), " opportunit\xE0")
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Sul mare"), /*#__PURE__*/React.createElement("p", null, "Un campus nel cuore di Oristano, a due passi dalle spiagge e dalle lagune del Sinis.")), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(Users, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Classi piccole"), /*#__PURE__*/React.createElement("p", null, "Pochi studenti per corso: i docenti ti conoscono per nome e ti seguono davvero.")), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(Leaf, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Sul territorio"), /*#__PURE__*/React.createElement("p", null, "Laboratori, aziende agrarie, cantine e siti archeologici come aule a cielo aperto.")), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(Waves, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Ricerca applicata"), /*#__PURE__*/React.createElement("p", null, "Biotecnologie marine ed ecosistemi acquatici con sbocchi concreti.")), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(Globe, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Aperta al mondo"), /*#__PURE__*/React.createElement("p", null, "Tirocini, Erasmus e progetti internazionali in tutti i corsi.")), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Borse e servizi"), /*#__PURE__*/React.createElement("p", null, "Agevolazioni, alloggi e supporto agli studenti lavoratori."))))), /*#__PURE__*/React.createElement("section", {
    className: "section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-band__inner"
  }, /*#__PURE__*/React.createElement("h2", null, "Pronto a iscriverti per il ", /*#__PURE__*/React.createElement("em", null, "2026"), "?"), /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 20
    }),
    onClick: () => go("enroll")
  }, "Inizia l'iscrizione"))))));
}
Object.assign(window, {
  Home,
  PhotoPlaceholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/Misc.jsx
try { (() => {
/* UNO website — secondary pages: Ateneo (about) and Open Day. */
const NS_MISC = window.UNOUniversitAOristanoDesignSystem_7ea223;
const {
  Button: Btn_M,
  SectionHeading: SH_M,
  Card: Card_M,
  Badge: Badge_M
} = NS_MISC;
function Ateneo({
  go
}) {
  const {
    ArrowRight,
    MapPin,
    Users,
    Leaf,
    Calendar
  } = window.UNOIcons;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide"
  }, /*#__PURE__*/React.createElement(SH_M, {
    eyebrow: "L'ateneo",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Una universit\xE0 ", /*#__PURE__*/React.createElement("em", null, "radicata"), " nel territorio"),
    lead: "UNO \xE8 l'universit\xE0 pubblica di Oristano: piccola, accogliente e profondamente legata al mare, alla terra e alla storia della Sardegna centro-occidentale."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide grid-2",
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__art",
    style: {
      aspectRatio: "4 / 3"
    }
  }, /*#__PURE__*/React.createElement(window.PhotoPlaceholder, {
    label: "Il campus di Oristano"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Studiare dove gli altri vengono in vacanza"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      lineHeight: 1.7
    }
  }, "Le aule e i laboratori si affacciano sul Sinis e sulle sue lagune. Qui agraria, biotecnologie marine, turismo e archeologia non sono solo materie: sono il territorio in cui vivi e fai pratica ogni giorno."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Btn_M, {
    variant: "primary",
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: () => go("courses")
  }, "Scopri i corsi"))))), /*#__PURE__*/React.createElement("section", {
    className: "uno-surface-navy section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide stack-lg"
  }, /*#__PURE__*/React.createElement(SH_M, {
    tone: "dark",
    align: "center",
    eyebrow: "I valori",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Vicini, ", /*#__PURE__*/React.createElement("em", null, "concreti"), ", aperti")
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(Users, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Comunit\xE0"), /*#__PURE__*/React.createElement("p", null, "Una comunit\xE0 piccola dove studenti, docenti e personale si conoscono davvero.")), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(Leaf, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Sostenibilit\xE0"), /*#__PURE__*/React.createElement("p", null, "Ricerca e didattica al servizio dell'ambiente e dell'economia locale.")), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", null, "Territorio"), /*#__PURE__*/React.createElement("p", null, "Aziende, enti e istituzioni del territorio come partner di tirocinio."))))));
}
function OpenDay({
  go
}) {
  const {
    ArrowRight,
    Calendar,
    MapPin,
    Clock
  } = window.UNOIcons;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "cd-hero",
    style: {
      background: "var(--uno-teal)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge_M, {
    variant: "cream",
    style: {
      background: "var(--uno-cream)",
      color: "var(--uno-navy)"
    }
  }, "Ingresso libero"), /*#__PURE__*/React.createElement("h1", {
    className: "cd-hero__title",
    style: {
      marginTop: 14
    }
  }, "Open Day \xB7 12 aprile 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.92)",
      marginTop: 12,
      maxWidth: "46ch",
      fontWeight: 500
    }
  }, "Una giornata per visitare il campus, conoscere i docenti e provare i laboratori. Porta un amico."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Btn_M, {
    variant: "cream",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 20
    }),
    onClick: () => go("enroll")
  }, "Prenota il tuo posto")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--wide grid-3"
  }, /*#__PURE__*/React.createElement(Card_M, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Calendar, {
    size: 28,
    style: {
      color: "var(--uno-teal)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "14px 0 4px",
      fontSize: "var(--text-lg)"
    }
  }, "Quando"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, "Domenica 12 aprile 2026, dalle 9:30 alle 17:00.")), /*#__PURE__*/React.createElement(Card_M, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 28,
    style: {
      color: "var(--uno-teal)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "14px 0 4px",
      fontSize: "var(--text-lg)"
    }
  }, "Dove"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, "Campus UNO, Via Carmine, Oristano.")), /*#__PURE__*/React.createElement(Card_M, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Clock, {
    size: 28,
    style: {
      color: "var(--uno-teal)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "14px 0 4px",
      fontSize: "var(--text-lg)"
    }
  }, "Cosa farai"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, "Tour del campus, incontri coi corsi, laboratori aperti.")))));
}
Object.assign(window, {
  Ateneo,
  OpenDay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/Misc.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sito/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* UI-kit icon set — Lucide-style line icons (stroke 2, round caps).
   The UNO brand ships no general UI icon set, so this is a curated
   substitution that matches the geometric Montserrat feel.
   Exposed as window.UNOIcons. */

const I = (children, {
  fill = false
} = {}) => function Icon({
  size = 24,
  className = "",
  ...p
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill ? "currentColor" : "none",
    stroke: fill ? "none" : "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    "aria-hidden": "true"
  }, p), children);
};
const UNOIcons = {
  Menu: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))),
  Close: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))),
  ArrowRight: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))),
  ArrowUpRight: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M8 7h9v9"
  }))),
  ChevronRight: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }))),
  ChevronDown: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))),
  MapPin: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  }))),
  Clock: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  }))),
  Globe: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"
  }))),
  Cap: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-4 9 4-9 4-9-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11v4c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4"
  }))),
  Book: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 5.5V20.5"
  }))),
  Users: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6.2A3 3 0 0 1 16 13M21 19c0-2.4-1.4-4.1-3.5-4.8"
  }))),
  Building: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "3",
    width: "14",
    height: "18",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"
  }))),
  Calendar: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9h16M9 3v4M15 3v4"
  }))),
  Check: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l5 5L20 6"
  }))),
  CheckCircle: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12l3 3 5-6"
  }))),
  Sparkle: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"
  }))),
  Leaf: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 19c0-9 6-14 14-14 0 9-5 14-14 14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 19c3-4 7-6 10-7"
  }))),
  Waves: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
  }))),
  Mail: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7l8 6 8-6"
  }))),
  Phone: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 4h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
  }))),
  Instagram: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "3.5",
    width: "17",
    height: "17",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "7",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }))),
  Facebook: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 4h-2.5A3.5 3.5 0 0 0 9 7.5V10H6v3h3v7h3v-7h2.5l.5-3H12V7.8c0-.5.4-.8.9-.8H15z",
    fill: "currentColor",
    stroke: "none"
  })), {
    fill: true
  }),
  Linkedin: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "3.5",
    width: "17",
    height: "17",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10v6M8 7v.01M12 16v-3.5a2 2 0 0 1 4 0V16"
  })))
};
window.UNOIcons = UNOIcons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sito/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.CourseIcon = __ds_scope.CourseIcon;

__ds_ns.COURSES = __ds_scope.COURSES;

__ds_ns.COURSE_KEYS = __ds_scope.COURSE_KEYS;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
