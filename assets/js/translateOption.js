// option to change the language using google
  
getSelect = function(){
    var opts = '<select class="nav-link" onchange="setLang(this.value)">'+
                '<option value="en">English</option>';
    l2=langs.split(',');
    ll2=langlables.split(',');
    for (var i = 0; i < l2.length; i++) { 
        opts += '<option value="'+l2[i]+'">'+ll2[i]+'</option>';
    }
    opts += '<optgroup label="By Google Translate &nbsp;" class="bg-light"></optgroup></select>';        
    var so = document.createElement('div');
    so.innerHTML = opts;
    return so.firstChild;
}

setLang = function(l){
    if (l){
        var dmn = document.location.host.replaceAll('-','--').replaceAll('.','-').replace(':','-') + '.translate.goog' 
        document.location.href=(document.location.href.replace(document.location.host, dmn).split('?')[0]+'?_x_tr_sl=en&_x_tr_tl='+l+'&_x_tr_hl=en')
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (langs && langs.length > 0){
        document.querySelectorAll("*[rel='lang']")[0].before(getSelect());
        document.querySelectorAll("*[rel='lang']")[0].remove();
    }
});

  