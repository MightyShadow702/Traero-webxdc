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
    "export_message": "This file was exported by Traero",
    "update_message": "updated the list in Traero",
    "update_item_txt": "item",
    "update_items_txt": "items"
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
    "export_message": "Este archivo estuvo exportado por Traero",
    "update_message": "actualizó la lista en Traero",
    "update_item_txt": "elemento",
    "update_items_txt": "elementos"
  },
  "pt": {
     "buy": "Comprar",
     "last": "Usado pela última vez",
     "search": "Algo que eu preciso...",
     "bt_export": "Exportar",
     "bt_import": "Importar",
     "about_title": "Informações",
     "controls_title": "Instruções",
     "control_add": "Adicionar coisa",
     "control_delete": "Remover coisa",
     "control_editing": "Editar coisa",
     "export_message": "Este arquivo foi exportado pelo Traero",
     "update_message": "atualizou a lista no Traero",
     "update_item_txt": "elemento",
     "update_items_txt": "elementos"
   },
   "fr": {
     "acheter": "Acheter",
     "last": "Dernièrement utilisé",
     "recherche": "Quelque chose dont j'ai besoin...",
     "bt_export": "Exporter",
     "bt_import": "Importer",
     "about_title": "Informations",
     "controls_title": "Instructions",
     "control_add": "Ajouter un élément",
     "control_delete": "Supprimer l'élément",
     "control_editing": "Modifier la chose",
     "export_message": "Ce fichier a été exporté par Traero",
     "update_message": "a mis à jour la liste dans Traero",
     "update_item_txt": "élément",
     "update_items_txt": "éléments"
   },
   "it": {
     "acquistare": "Acquista",
     "last": "Ultimamente utilizzato",
     "cerca": "Qualcosa di cui ho bisogno...",
     "bt_export": "Esporta",
     "bt_import": "Importa",
     "about_title": "Informazioni",
     "controls_title": "Istruzioni",
     "control_add": "Aggiungi cosa",
     "control_delete": "Rimuovi cosa",
     "control_editing": "Modifica cosa",
     "export_message": "Questo file è stato esportato da Traero",
     "update_message": "ha aggiornato l'elenco in Traero",
     "update_item_txt": "elemento",
     "update_items_txt": "elementi"
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
    "export_message": "Diese Datei ist aus Traero exportiert",
    "update_message": "hat die Liste in Traero aktualisiert",
    "update_item_txt": "Eintrag",
    "update_items_txt": "Einträge"
  },
  "nl": {
     "kopen": "Kopen",
     "last": "Laatst gebruikt",
     "zoeken": "Ik heb nodig...",
     "bt_export": "Exporteurs",
     "bt_import": "Importeurs",
     "about_title": "Over",
     "controls_title": "Bewerking",
     "control_add": "Item toevoegen",
     "control_delete": "Item verwijderen",
     "control_editing": "Item bewerken",
     "export_message": "Dit bestand is geëxporteerd vanuit Traero",
     "update_message": "heeft de lijst in Traero bijgewerkt",
     "update_item_txt": "item",
     "update_items_txt": "items"
   },
   "ru": {
      "buy": "Купить",
      "last": "Последний использованный",
      "search": "Мне нужно...",
      "bt_export": "Экспорт",
      "bt_import": "Импорт",
      "about_title": "О нас",
      "controls_title": "Операция",
      "control_add": "Добавить элемент",
      "control_delete": "Удалить элемент",
      "control_editing": "Редактировать элемент",
      "export_message": "Этот файл экспортирован из Traero",
      "update_message": "обновил список в Traero",
      "update_item_txt": "Запись",
      "update_items_txt": "Записи"
    },
    "zh": {
       "buy": "买",
       "last": "最后使用",
       "search": "我需要一些东西…",
       "bt_export": "出口",
       "bt_import": "进口",
       "about_title": "关于",
       "controls_title": "控制",
       "control_add": "添加项目",
       "control_delete": "删除项目",
       "control_editing": "編輯項目",
       "export_message": "该文件由 Traero 导出",
       "update_message": "更新了 Traero 中的列表",
       "update_item_txt": "物品",
       "update_items_txt": "项目"
     },
     "ar": {
        "buy": "يشتري",
        "last": "آخر استخدام",
        "search": "شيئ أحتاجه...",
        "bt_export": "يصدّر",
        "bt_import": "ستورد",
        "about_title": "ن",
        "controls_title": "عناصر التحكم",
        "control_add": "إضافة عنصر",
        "control_delete": "حذف العنصر",
        "control_editing": "تحرير العنصر",
        "export_message": "تم تصدير هذا الملف بواسطة Traero",
        "update_message": "updated the list in Traero",
        "update_item_txt": "غرض",
        "update_items_txt": "أغراض"
      },
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

function update_language(lang)
{
  document.getElementById("buy_title").innerHTML = translate("buy");
  document.getElementById("last_title").innerHTML = translate("last");
  document.getElementById("new_item_input").placeholder = translate("search");

  document.getElementById("bt_about").innerHTML = translate("about_title");
  document.getElementById("bt_controls").innerHTML = translate("controls_title");
  document.getElementById("bt_export").innerHTML = translate("bt_export");
  document.getElementById("bt_import").innerHTML = translate("bt_import");
}
