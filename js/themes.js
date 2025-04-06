//document.documentElement.style.setProperty("--menu-button-hover", "grey")
var themes = {
  default: {
    "popup": null,
    "popup-text": null,
    "popup-close": null,
    "popup-close-text": null,
    "popup-close-hover": null,
    "popup-close-hover-text": null,
    "popup-button": null,
    "popup-button-text": null,
    "popup-button-hover": null,
    "popup-button-hover-text": null,
    "menu": null,
    "menu-toggle": null,
    "menu-button": null,
    "menu-button-text": null,
    "menu-button-hover": null,
    "menu-button-hover-text": null,
    "list": null,
    "list-text": null,
    "list-meta": null,
    "list-active": null,
    "list-active-text": null,
    "list-active-hover": null,
    "list-active-hover-text": null,
    "list-last": null,
    "list-last-text": null,
    "list-last-hover": null,
    "list-last-hover-text": null,
    "search": null,
    "search-text": null,
    "search-hover": null,
    "search-hover-text": null,
    "search-button": null,
    "search-button-text": null,
    "search-button-hover": null,
    "search-button-hover-text": null
  },
  OLED: {
    "popup": "rgba(20, 20, 20)",
    "popup-text": "white",
    "popup-close": "rgba(40, 40, 40)",
    "popup-close-text": "white",
    "popup-close-hover": "rgba(30, 30, 30)",
    "popup-close-hover-text": "white",
    "popup-button": "rgba(40, 40, 40)",
    "popup-button-text": "white",
    "popup-button-hover": "rgba(30, 30, 30)",
    "popup-button-hover-text": "white",
    "menu": "rgba(10, 10, 10)",
    "menu-toggle": null,
    "menu-button": "rgba(30, 30, 30)",
    "menu-button-text": "white",
    "menu-button-hover": "rgba(20, 20, 20)",
    "menu-button-hover-text": "white",
    "list": "black",
    "list-text": "white",
    "list-meta": "rgba(200, 200, 200)",
    "list-active": "rgba(100, 0, 0)",
    "list-active-text": "white",
    "list-active-hover": "rgba(85, 0, 0)",
    "list-active-hover-text": "white",
    "list-last": "rgba(0, 65, 0)",
    "list-last-text": "white",
    "list-last-hover": "rgba(0, 50, 0)",
    "list-last-hover-text": "white",
    "search": "rgba(20, 20, 20)",
    "search-text": "white",
    "search-hover": null,
    "search-hover-text": null,
    "search-button": "rgba(20, 20, 20)",
    "search-button-text": "white",
    "search-button-hover": "rgba(30, 30, 30)",
    "search-button-hover-text": "white"
  },
  LIGHT: {
    "popup": "rgba(220, 220, 220)",
    "popup-text": "black",
    "popup-close": "rgba(240, 240, 240)",
    "popup-close-text": "black",
    "popup-close-hover": "rgba(252, 252, 252)",
    "popup-close-hover-text": "black",
    "popup-button": "rgba(240, 240, 240)",
    "popup-button-text": "black",
    "popup-button-hover": "white",
    "popup-button-hover-text": "black",
    "menu": "rgba(220, 220, 220)",
    "menu-toggle": "invert(100%)",
    "menu-button": "rgba(240, 240, 240)",
    "menu-button-text": "black",
    "menu-button-hover": "white",
    "menu-button-hover-text": "black",
    "list": "white",
    "list-text": "black",
    "list-meta": "rgba(80, 80, 80)",
    "list-active": "rgba(255, 180, 180)",
    "list-active-text": "black",
    "list-active-hover": "rgba(255, 210, 210)",
    "list-active-hover-text": "black",
    "list-last": "rgba(180, 255, 180)",
    "list-last-text": "black",
    "list-last-hover": "rgba(210, 255, 210)",
    "list-last-hover-text": "black",
    "search": "rgba(200, 200, 200)",
    "search-text": "black",
    "search-hover": null,
    "search-hover-text": null,
    "search-button": "rgba(200, 200, 200)",
    "search-button-text": null,
    "search-button-hover": null,
    "search-button-hover-text": null
  },
  YBStyle: {
    "popup": null,
    "popup-text": null,
    "popup-close": null,
    "popup-close-text": null,
    "popup-close-hover": null,
    "popup-close-hover-text": null,
    "popup-button": null,
    "popup-button-text": null,
    "popup-button-hover": null,
    "popup-button-hover-text": null,
    "menu": null,
    "menu-toggle": null,
    "menu-button": null,
    "menu-button-text": null,
    "menu-button-hover": null,
    "menu-button-hover-text": null,
    "list": null,
    "list-text": null,
    "list-meta": null,
    "list-active": "rgba(180, 180, 0)",
    "list-active-text": null,
    "list-active-hover": "rgba(200, 200, 0)",
    "list-active-hover-text": null,
    "list-last": "rgba(0, 180, 180)",
    "list-last-text": null,
    "list-last-hover": "rgba(0, 200, 200)",
    "list-last-hover-text": null,
    "search": null,
    "search-text": null,
    "search-hover": null,
    "search-hover-text": null,
    "search-button": null,
    "search-button-text": null,
    "search-button-hover": null,
    "search-button-hover-text": null
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
