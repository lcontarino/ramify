function Run() {
    var html = document.getElementById('h').value;
    var css = '<style>' + document.getElementById('c').value + '</style>';
    var js = '<scr' + 'ipt>' + document.getElementById('j').value + '</scr' + 'ipt>';
    var doc = document.getElementById('iframe').contentWindow.document;
    doc.open();
    doc.write(html + css + js);
    doc.close();
  }