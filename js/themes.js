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
    "menu-button": null,
    "menu-button-text": null,
    "menu-button-hover": null,
    "menu-button-hover-text": null,
    "list": null,
    "list-text": null,
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
    "menu-button": "rgba(30, 30, 30)",
    "menu-button-text": "white",
    "menu-button-hover": "rgba(20, 20, 20)",
    "menu-button-hover-text": "white",
    "list": "black",
    "list-text": "white",
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
  }
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
