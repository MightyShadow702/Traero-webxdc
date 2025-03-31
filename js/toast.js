function traero_toast(msg, mstime, button_text=null, button_onclick=undefined)
{
  var toast = document.createElement("div");
  toast.id = "toast";
  var timer_ui = document.createElement("div");
  timer_ui.id = "timer_bg";
  timer_ui.style.width = "0px";
  toast.appendChild(timer_ui);
  var text = document.createElement("p");
  text.id = "message";
  text.innerHTML = msg;
  toast.appendChild(text);
  if (button_text != null)
  {
    var bt_confirm = document.createElement("button");
    bt_confirm.innerHTML = button_text;
    bt_confirm.id = "bt_confirm";
    toast.appendChild(bt_confirm);
  }

  var current_time = 0;
  var timer_updater = setInterval(function(){
    current_time += 10;
    timer_ui.style.width = ((current_time/mstime) * 100) + "%";
  }, 10);
  document.body.appendChild(toast);
  var id = setInterval(function(){
    clearInterval(id);
    clearInterval(timer_updater);
    toast.remove();
  }, mstime+100);
  if (button_text != null)
  {
    bt_confirm.onclick = function()
    {
      clearInterval(id);
      clearInterval(timer_updater);
      toast.remove();
      if (button_onclick != undefined)
      {
        button_onclick();
      }
    }
    text.style.width = "calc(100% - " + bt_confirm.offsetWidth + "*2px)";
  }
}
