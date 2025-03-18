var languages = {
  "en": {
    "buy": "Buy",
    "last": "Last used",
    "search": "Something I need...",
    "bt_export": "Export",
    "bt_import": "Import",
    "about_title": "About",
    "controls_title": "Controls",
    "control_add": "Add item",
    "control_delete": "Delete item",
    "control_editing": "Edit item",
    "export_message": "This file was exported by Traero"
  },
  "es": {
    "buy": "Compra",
    "last": "Últimamente usado",
    "search": "Algo que necesito...",
    "bt_export": "Exportación",
    "bt_import": "Importación",
    "about_title": "Informaciones",
    "controls_title": "Instrucciones",
    "control_add": "Añade cosa",
    "control_delete": "Quita cosa",
    "control_editing": "Edita cosa",
    "export_message": "Este archivo estuvo exportado por Traero"
  },
  "de": {
    "buy": "Kaufen",
    "last": "Zuletzt genutzt",
    "search": "Ich brauche...",
    "bt_export": "Exportieren",
    "bt_import": "Importieren",
    "about_title": "Über",
    "controls_title": "Bedienung",
    "control_add": "Item hinzufügen",
    "control_delete": "Item löschen",
    "control_editing": "Item editieren",
    "export_message": "Diese Datei ist aus Traero exportiert"
  },
  "nl": {
    "buy": "Kopen",
    "last": "Laatst gebruikt",
    "search": "Ik heb nodig...",
    "about_title": "Over"
  }
}

function translate(name)
{
  var lang = navigator.language.split("-")[0];
  if (lang in languages && name in languages[lang])
  {
    return languages[lang][name];
  }
  return languages.en[name];
}
