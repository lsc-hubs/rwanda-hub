/*
 * Get catalog records by type
 */
async function getRecords({
  catalogBaseUrl,
  qs,
  numberOfItems = 6,
  itemType = '',
  icon = false, // icon name of bootstrap icon
  keywords = '',
  searchQuery = '',
  style = '',
  showDescription = false,
  truncateTitle = false
}) {
  let url = `${catalogBaseUrl}/collections/metadata:main/items?f=json&limit=${numberOfItems}&sortby=-updated`

  if (itemType) {
    url += `&type=${itemType}`
  }

  if (keywords) {
    url += `&keywords=${keywords}`
  }

  if (searchQuery) {
    url += `&q=${searchQuery}`
  }

  let response = await fetch(url);

  if (response.ok) {
    let res = await response.json();
    setDiv(qs, boxIt(res.features, icon, style, showDescription, truncateTitle));
  } else {
    console.log(response.status);
  }
}

setDiv = function(qs, content){
  let dv = document.querySelector(qs);

  dv.innerHTML = content;
}

boxIt = function(res, icon, style, showDescription, truncateTitle) {
  let cnt = "";

  res.forEach(r => {
    const linkToItem = r.links.filter(link => link.rel === 'self')

    cnt += `<div class="${style}">
            <div class="d-flex">`

    if (icon) {
      cnt += `<i class="bi-${icon} me-2 text-primary"></i>`
    }

    let title = (r.properties.title||'')
    if (truncateTitle) {
      title = `${title.substring(0,60)}...`
    }

    cnt += `<div>
            <a href="${linkToItem[0].href}" class="text-decoration-none">${title}</a>`

    if (showDescription) {
      cnt += `<p>${(r.properties.description||'').substring(0,150)}</p>`
    }

    cnt += `</div></div></div>`
  })

  return cnt;
}


getSelect = function(){
  var opts = '<select class="form-control form-control-sm" onchange="setLang(this.value)">'+
             '<option>English</option>'+
             '<option value="sw">Swahili</option>'+
             '<option value="ar">Arabic</option>'+
             '<optgroup label="By Google Translate" class="bg-light"></optgroup></select>';
  var so = document.createElement('div');
  so.innerHTML = opts;
  return so.firstChild;
}
setLang = function(l){
  if (l){
    document.location.href=(document.location.href.replace('localhost','kenya-lsc--hubs-org.translate.goog').split('?')[0]+'?_x_tr_sl=en&_x_tr_tl='+l+'&_x_tr_hl=en')
  }
}
document.querySelectorAll("*[rel='lang']")[0].before(getSelect());
document.querySelectorAll("*[rel='lang']")[0].remove();