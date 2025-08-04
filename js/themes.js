//document.documentElement.style.setProperty("--menu-button-hover", "grey")
var themes = {
  default: {
    "popup": null,
    "popup-border": null,
    "popup-text": null,

    "popup-close": null,
    "popup-close-border": null,
    "popup-close-text": null,

    "popup-close-hover": null,
    "popup-close-hover-border": null,
    "popup-close-hover-text": null,

    "popup-button": null,
    "popup-button-border": null,
    "popup-button-text": null,

    "popup-button-hover": null,
    "popup-button-hover-border": null,
    "popup-button-hover-text": null,

    "menu": null,
    "menu-border": null,
    "menu-toggle": null,

    "menu-button": null,
    "menu-button-border": null,
    "menu-button-text": null,

    "menu-button-hover": null,
    "menu-button-hover-border": null,
    "menu-button-hover-text": null,

    "list": null,
    "list-text": null,

    "list-active": null,
    "list-active-border": null,
    "list-active-text": null,
    "list-active-meta": null,

    "list-active-hover": null,
    "list-active-hover-border": null,
    "list-active-hover-text": null,
    "list-active-hover-meta": null,

    "list-last": null,
    "list-last-border": null,
    "list-last-text": null,
    "list-last-meta": null,

    "list-last-hover": null,
    "list-last-hover-border": null,
    "list-last-hover-text": null,
    "list-last-hover-meta": null,

    "search": null,
    "search-border": null,
    "search-text": null,

    "search-hover": null,
    "search-hover-border": null,
    "search-hover-text": null,

    "search-button": null,
    "search-button-border": null,
    "search-button-text": null,

    "search-button-hover": null,
    "search-button-hover-border": null,
    "search-button-hover-text": null,

    "toast": null,
    "toast-progress": null,
    "toast-border": null,
    "toast-text": null,

    "toast-button-border": null,
    "toast-button-text": null,

    "item-height": null,
    "item-width": null,
    "item-text-align": null,
  },
  oled: {
    "popup": "rgba(20, 20, 20)",
    "popup-border": null,
    "popup-text": "white",

    "popup-close": "rgba(40, 40, 40)",
    "popup-close-border": null,
    "popup-close-text": "white",

    "popup-close-hover": "rgba(30, 30, 30)",
    "popup-close-hover-border": null,
    "popup-close-hover-text": "white",

    "popup-button": "rgba(40, 40, 40)",
    "popup-button-border": null,
    "popup-button-text": "white",

    "popup-button-hover": "rgba(30, 30, 30)",
    "popup-button-hover-border": null,
    "popup-button-hover-text": "white",

    "menu": "rgba(10, 10, 10)",
    "menu-border": null,
    "menu-toggle": null,

    "menu-button": "rgba(30, 30, 30)",
    "menu-button-border": null,
    "menu-button-text": "white",

    "menu-button-hover": "rgba(20, 20, 20)",
    "menu-button-hover-border": null,
    "menu-button-hover-text": "white",

    "list": "black",
    "list-text": "white",

    "list-active": "rgba(100, 0, 0)",
    "list-active-border": null,
    "list-active-text": "white",
    "list-active-meta": "rgba(200, 200, 200)",

    "list-active-hover": "rgba(85, 0, 0)",
    "list-active-hover-border": null,
    "list-active-hover-text": "white",
    "list-active-hover-meta": "rgba(200, 200, 200)",

    "list-last": "rgba(0, 65, 0)",
    "list-last-border": null,
    "list-last-text": "white",
    "list-last-meta": "rgba(200, 200, 200)",

    "list-last-hover": "rgba(0, 50, 0)",
    "list-last-hover-border": null,
    "list-last-hover-text": "white",
    "list-last-hover-meta": "rgba(200, 200, 200)",

    "search": "rgba(30, 30, 30)",
    "search-border": null,
    "search-text": "white",

    "search-hover": "rgba(40, 40, 40)",
    "search-hover-text": "white",

    "search-button": "rgba(30, 30, 30)",
    "search-button-border": null,
    "search-button-text": "white",

    "search-button-hover": "rgba(40, 40, 40)",
    "search-button-hover-border": null,
    "search-button-hover-text": "white",

    "toast": "rgba(20, 20, 20)",
    "toast-progress": "rgba(40, 40, 40)",
    "toast-border": null,
    "toast-text": "white",

    "toast-button-border": null,
    "toast-button-text": "white",

    "item-height": null,
    "item-width": null,
    "item-text-align": null,
  },
  dark: {
    "popup": "rgba(70, 70, 70)",
    "popup-border": null,
    "popup-text": "white",

    "popup-close": "rgba(90, 90, 90)",
    "popup-close-border": null,
    "popup-close-text": "white",

    "popup-close-hover": "rgba(110, 110, 110)",
    "popup-close-hover-border": null,
    "popup-close-hover-text": "white",

    "popup-button": "rgba(90, 90, 90)",
    "popup-button-border": null,
    "popup-button-text": "white",

    "popup-button-hover": "rgba(110, 110, 110)",
    "popup-button-hover-border": null,
    "popup-button-hover-text": "white",

    "menu": "rgba(40, 40, 40)",
    "menu-border": null,
    "menu-toggle": null,

    "menu-button": "rgba(60, 60, 60)",
    "menu-button-border": null,
    "menu-button-text": null,

    "menu-button-hover": "rgba(80, 80, 80)",
    "menu-button-hover-border": null,
    "menu-button-hover-text": null,

    "list": "rgba(50, 50, 50)",
    "list-text": "white",

    "list-active": "rgba(128, 42, 42)",
    "list-active-border": null,
    "list-active-text": "white",
    "list-active-meta": "rgba(180, 180, 180)",

    "list-active-hover": "rgba(128, 82, 82)",
    "list-active-hover-border": null,
    "list-active-hover-text": "white",
    "list-active-hover-meta": "rgba(180, 180, 180)",

    "list-last": "rgba(52, 128, 52)",
    "list-last-border": null,
    "list-last-text": "white",
    "list-last-meta": "rgba(200, 200, 200)",

    "list-last-hover": "rgba(92, 128, 92)",
    "list-last-hover-border": null,
    "list-last-hover-text": "white",
    "list-last-hover-meta": "rgba(180, 180, 180)",

    "search": "rgba(200, 200, 200)",
    "search-border": null,
    "search-text": "black",

    "search-hover": "rgba(220, 220, 220)",
    "search-hover-border": null,
    "search-hover-text": "black",

    "search-button": "rgba(200, 200, 200)",
    "search-button-border": null,
    "search-button-text": "black",

    "search-button-hover": "rgba(220, 220, 220)",
    "search-button-hover-border": null,
    "search-button-hover-text": "black",

    "toast": "rgba(100, 100, 100)",
    "toast-progress": "rgba(70, 70, 70)",
    "toast-border": null,
    "toast-text": "white",

    "toast-button-border": null,
    "toast-button-text": "white",

    "item-height": null,
    "item-width": null,
    "item-text-align": null,
  },
  light: {
    "popup": "rgba(220, 220, 220)",
    "popup-border": null,
    "popup-text": "black",

    "popup-close": "rgba(240, 240, 240)",
    "popup-close-border": null,
    "popup-close-text": "black",

    "popup-close-hover": "rgba(252, 252, 252)",
    "popup-close-hover-border": null,
    "popup-close-hover-text": "black",

    "popup-button": "rgba(240, 240, 240)",
    "popup-button-border": null,
    "popup-button-text": "black",

    "popup-button-hover": "white",
    "popup-button-hover-border": null,
    "popup-button-hover-text": "black",

    "menu": "rgba(220, 220, 220)",
    "menu-border": null,
    "menu-toggle": "invert(100%)",

    "menu-button": "rgba(240, 240, 240)",
    "menu-button-border": null,
    "menu-button-text": "black",

    "menu-button-hover": "white",
    "menu-button-hover-border": null,
    "menu-button-hover-text": "black",

    "list": "white",
    "list-text": "black",

    "list-active": "rgba(255, 180, 180)",
    "list-active-border": null,
    "list-active-text": "black",
    "list-active-meta": "rgba(80, 80, 80)",

    "list-active-hover": "rgba(255, 210, 210)",
    "list-active-hover-border": null,
    "list-active-hover-text": "black",
    "list-active-hover-meta": "rgba(80, 80, 80)",

    "list-last": "rgba(180, 255, 180)",
    "list-last-border": null,
    "list-last-text": "black",
    "list-last-meta": "rgba(80, 80, 80)",

    "list-last-hover": "rgba(210, 255, 210)",
    "list-last-hover-border": null,
    "list-last-hover-text": "black",
    "list-last-hover-meta": "rgba(80, 80, 80)",

    "search": "rgba(200, 200, 200)",
    "search-border": null,
    "search-text": "black",

    "search-hover": "rgba(220, 220, 220)",
    "search-hover-text": "black",

    "search-button": "rgba(200, 200, 200)",
    "search-button-border": null,
    "search-button-text": "black",

    "search-button-hover": "rgba(220, 220, 220)",
    "search-button-hover-border": null,
    "search-button-hover-text": "black",

    "toast": "rgba(220, 220, 220)",
    "toast-progress": "rgba(240, 240, 240)",
    "toast-border": null,
    "toast-text": null,

    "toast-button-border": null,
    "toast-button-text": null,

    "item-height": null,
    "item-width": null,
    "item-text-align": null,
  },
  yb: {
    "popup": null,
    "popup-border": null,
    "popup-text": null,

    "popup-close": null,
    "popup-close-border": null,
    "popup-close-text": null,

    "popup-close-hover": null,
    "popup-close-hover-border": null,
    "popup-close-hover-text": null,

    "popup-button": null,
    "popup-button-border": null,
    "popup-button-text": null,

    "popup-button-hover": null,
    "popup-button-hover-border": null,
    "popup-button-hover-text": null,

    "menu": null,
    "menu-border": null,
    "menu-toggle": null,

    "menu-button": null,
    "menu-button-border": null,
    "menu-button-text": null,

    "menu-button-hover": null,
    "menu-button-hover-border": null,
    "menu-button-hover-text": null,

    "list": null,
    "list-text": null,

    "list-active": "rgba(180, 180, 0)",
    "list-active-border": null,
    "list-active-text": null,
    "list-active-meta": null,

    "list-active-hover": "rgba(200, 200, 0)",
    "list-active-hover-border": null,
    "list-active-hover-text": null,
    "list-active-hover-meta": null,

    "list-last": "rgba(0, 180, 180)",
    "list-last-border": null,
    "list-last-text": null,
    "list-last-meta": null,

    "list-last-hover": "rgba(0, 200, 200)",
    "list-last-hover-border": null,
    "list-last-hover-text": null,
    "list-last-hover-meta": null,

    "search": null,
    "search-border": null,
    "search-text": null,

    "search-hover": null,
    "search-hover-text": null,

    "search-button": null,
    "search-button-border": null,
    "search-button-text": null,

    "search-button-hover": null,
    "search-button-hover-border": null,
    "search-button-hover-text": null,

    "toast": null,
    "toast-progress": null,
    "toast-border": null,
    "toast-text": null,

    "toast-button-border": null,
    "toast-button-text": null,

    "item-height": null,
    "item-width": null,
    "item-text-align": null,
  },
  eink: {
    "popup": "white",
    "popup-border": "5px solid black",
    "popup-text": "black",

    "popup-close": "black",
    "popup-close-border": "5px solid black",
    "popup-close-text": "white",

    "popup-close-hover": "rgba(128, 128, 128)",
    "popup-close-hover-border": "5px solid black",
    "popup-close-hover-text": "white",

    "popup-button": "black",
    "popup-button-border": null,
    "popup-button-text": "white",

    "popup-button-hover": "rgba(128, 128, 128)",
    "popup-button-hover-border": "5px solid black",
    "popup-button-hover-text": "white",

    "menu": "white",
    "menu-border": "5px solid black",
    "menu-toggle": "invert(100%)",

    "menu-button": "black",
    "menu-button-border": null,
    "menu-button-text": "white",

    "menu-button-hover": "rgba(128, 128, 128)",
    "menu-button-hover-border": "5px solid black",
    "menu-button-hover-text": "white",

    "list": "white",
    "list-text": "black",

    "list-active": "black",
    "list-active-border": null,
    "list-active-text": "white",
    "list-active-meta": "white",

    "list-active-hover": "rgba(128, 128, 128)",
    "list-active-hover-border": "5px solid black",
    "list-active-hover-text": "white",
    "list-active-hover-meta": "black",

    "list-last": "white",
    "list-last-border": "5px solid black",
    "list-last-text": "black",
    "list-last-meta": "black",

    "list-last-hover": "rgba(128, 128, 128)",
    "list-last-hover-border": "5px solid black",
    "list-last-hover-text": "white",
    "list-last-hover-meta": "black",

    "search": "white",
    "search-border": "5px solid black",
    "search-text": "black",

    "search-hover": null,
    "search-hover-border": null,
    "search-hover-text": null,

    "search-button": "black",
    "search-button-border": null,
    "search-button-text": "white",

    "search-button-hover": "rgba(128, 128, 128)",
    "search-button-hover-border": null,
    "search-button-hover-text": "white",

    "toast": "white",
    "toast-progress": "rgba(128, 128, 128)",
    "toast-border": "5px solid black",
    "toast-text": "black",

    "toast-button-border": "5px solid black",
    "toast-button-text": "black",

    "item-height": null,
    "item-width": null,
    "item-text-align": null,
  },
}

function changeTheme(theme)
{
  for (var key in theme)
  {
    var value = theme[key];
    if (value != null)
    {
      document.documentElement.style.setProperty("--"+key, value);
    }
    else
    {
      document.documentElement.style.removeProperty("--"+key);
    }
  }
}

function setTheme(name)
{
  if (name in themes)
  {
    changeTheme(themes[name]);
    if (name == "default")
    {
      delete localStorage.selectedTheme;
    }
    else
    {
      localStorage.selectedTheme = name;
    }
  }
}
