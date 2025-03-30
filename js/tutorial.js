function tutorial_popup(next_fn, text="", show_next=false)
{
  var ui = document.createElement("div");
  ui.id = "tutorial_popup";
  var title = document.createElement("p");
  title.id = "title";
  title.innerHTML = translate("tutorial_title");
  ui.appendChild(title);
  this._next_fn = next_fn;
  var obj = this;
  function next_handler() {
    ui.remove();
    if (obj._next_fn != undefined)
    {
      return obj._next_fn();
    }
  };
  this.next = next_handler;

  var content = document.createElement("p");
  content.innerHTML = text;
  ui.appendChild(content);

  var footer = document.createElement("div");
  footer.id = "footer";
  ui.appendChild(footer);

  var bt_cancel = document.createElement("button");
  bt_cancel.innerHTML = translate("tutorial_button_cancel");
  bt_cancel.id = "cancel";
  bt_cancel.onclick = function(){
    window.location.replace("/");
  }
  footer.appendChild(bt_cancel);
  if (show_next)
  {
    var bt_next = document.createElement("button");
    bt_next.innerHTML = translate("tutorial_button_next");
    bt_next.id = "next";
    bt_next.onclick = function(){
      next_handler();
    };
    footer.appendChild(bt_next);
  }

  document.body.appendChild(ui);
  this.ui = ui;
  this.content = content;
  return this;
}

function update_language(lang)
{
  document.getElementById("buy_title").innerHTML = translate("buy");
  document.getElementById("last_title").innerHTML = translate("last");
  document.getElementById("new_item_input").placeholder = translate("search");
}


var current_step;

function tutorial_end()
{
  window.location.replace("/");
}

function tutorial_close()
{
  current_step = tutorial_popup(tutorial_end, translate("tutorial_close"), true);
  document.getElementById("new_item_input").onclick = tutorial_end;
}

function tutorial_remove()
{
  current_step = tutorial_popup(tutorial_close, translate("tutorial_remove"));
}

function tutorial_check()
{
  current_step = tutorial_popup(tutorial_remove, translate("tutorial_check"));
}

function tutorial_change_edit()
{
  current_step = tutorial_popup(tutorial_check, translate("tutorial_edit_change"));
}

function tutorial_edit()
{
  current_step = tutorial_popup(tutorial_change_edit, translate("tutorial_edit"));
}


function tutorial_add()
{
  current_step = tutorial_popup(tutorial_edit, translate("tutorial_add"));
}

function save_metadata()
{
  update_list();
  if (current_step != undefined)
  {
    current_step.next();
  }
}

var tutdbg;

function onload()
{
  tutorial_add();
  update_language();
}
