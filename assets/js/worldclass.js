(function(){
  document.querySelectorAll('[data-mini-reco],[data-quote-form]').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var data = new FormData(form);
      var lines = [];
      data.forEach(function(v,k){ lines.push(k + ': ' + v); });
      var subject = form.dataset.subject || 'SBKJ Website Inquiry';
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:sales@sbkjduct.com?subject=' + encodeURIComponent(subject) + '&body=' + body;
      var t = form.querySelector('.thanks');
      if(t){ t.hidden = false; }
    });
  });
})();
