DomReady.ready(function() {
  var button = document.getElementById('ClickMe');
  var elem = document.getElementById('title');
  var cond = true;
  button.onclick = function() {
    if (cond){
      elem.style.marginTop = '100px';
      cond = !cond;
    }
    else {
      elem.style.marginTop = '0px';
      cond = !cond;
    }

  };
});
