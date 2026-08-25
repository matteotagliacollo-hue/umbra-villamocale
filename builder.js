function buildUltra(tpl, c){
 var SVG='<svg viewBox="0 0 32 32"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.4 2.5.6 3.8.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.2 0-2.4-.2-3.5-.7l-.5-.2-4.9.9 1-4.7-.3-.5C6.6 18.2 6 16.6 6 15 6 9.5 10.5 5 16 5s10 4.5 10 10-4.5 10-10 10zm5.5-7.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.5c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.4 3.4.9 4 .9.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.5-.4z"/></svg>';
 var enc=encodeURIComponent;
 var waMsg=enc('Salve! Ho visto la presentazione di '+c.nome+' online e vorrei informazioni per un matrimonio. Grazie!');
 var wa=c.wa?('https://wa.me/'+c.wa+'?text='+waMsg):null;
 var tel='tel:'+c.tel.replace(/ /g,'');
 var navCta,heroCta,ctaBtn,waFloat;
 if(wa){
  navCta='<a class="wab" href="'+wa+'" target="_blank" rel="noopener">'+SVG+'WhatsApp</a>';
  heroCta='<a class="btn bg1 mag" href="'+wa+'" target="_blank" rel="noopener">Scrivici su WhatsApp</a>';
  ctaBtn='<a class="btn bg1 mag rvl" href="'+wa+'" target="_blank" rel="noopener">Parliamone su WhatsApp</a>';
  waFloat='<a class="waf" href="'+wa+'" target="_blank" rel="noopener" aria-label="WhatsApp"><span class="p"></span>'+SVG+'</a>';
 }else{
  navCta='<a class="wab" href="'+tel+'" style="background:linear-gradient(120deg,#eed488,#8a6d1a);color:#140f05!important">☏ Chiamaci</a>';
  heroCta='<a class="btn bg1 mag" href="'+tel+'">Chiama ora</a>';
  ctaBtn='<a class="btn bg1 mag rvl" href="'+tel+'">Chiamaci: '+c.tel+'</a>';
  waFloat='<a class="waf" href="'+tel+'" style="background:linear-gradient(120deg,#eed488,#8a6d1a)" aria-label="Telefono"><span class="p" style="border-color:#eed488"></span><span style="font-size:26px;color:#140f05">☏</span></a>';
 }
 var heroImgs=c.hero.map(function(i,n){return '  <img class="hs'+(n===0?' on':'')+'" src="'+c.fotos[i]+'" alt="'+c.nome+'" onerror="fbk(this)">';}).join('\n');
 var panels=c.panels.map(function(p,n){
  var num=('0'+(n+1)).slice(-2);
  return '      <div class="panel"><img src="'+c.fotos[p[0]]+'" onerror="fbk(this)" alt="'+p[2]+'"><span class="num">'+num+'</span><div class="cap"><div class="k">'+p[1]+'</div><div class="t">'+p[2]+'</div></div></div>';
 }).join('\n');
 var stats=c.stats.map(function(s){
  return '    <div class="st rvl"><div class="n" data-c="'+s[0]+'"'+(s[2]?' data-d="1"':'')+(s[3]?' data-s="'+s[3]+'"':'')+'>0</div><div class="l">'+s[1]+'</div></div>';
 }).join('\n');
 var filmsec='',navFilm='';
 if(c.film){
  navFilm='    <a href="#film">Il Film</a>\n';
  filmsec='<section class="film" id="film">\n  <div class="k rvl">Il Film</div>\n  <h2 class="rvl">La villa in movimento</h2>\n  <p class="rvl">'+c.film.sub+'</p>\n  <div class="fwrap rvl">\n    <div class="fcover" id="fcover" data-yt="'+c.film.yt+'" style="background-image:url(\''+c.fotos[c.film.cover]+'\')"><div class="play"><span class="pulse2"></span></div></div>\n    <div id="fslot"></div>\n  </div>\n</section>';
 }
 function edSec(e,flip){
  var open=flip?'<section class="ed" style="direction:rtl">':'<section class="ed">';
  var imOpen=flip?'<div class="im rvl" style="direction:ltr">':'<div class="im rvl">';
  var txOpen=flip?'<div class="tx" style="direction:ltr">':'<div class="tx">';
  var bullets=e.b.map(function(x){return '      <li class="rvl">'+x+'</li>';}).join('\n');
  return open+'\n  '+imOpen+'<img class="edimg" src="'+c.fotos[e.img]+'" onerror="fbk(this)" alt="'+c.nome+'"></div>\n  '+txOpen+'\n    <div class="k rvl">'+e.k+'</div>\n    <h3 class="rvl">'+e.t+'</h3>\n    <p class="rvl">'+e.p+'</p>\n    <ul>\n'+bullets+'\n    </ul>\n  </div>\n</section>';
 }
 var revs=c.revs.map(function(r,n){
  return '    <div class="rv1'+(n===0?' on':'')+'"><div class="qm">“</div><p>'+r[2]+'</p><div class="w"><b>'+r[0]+'</b> · '+r[1]+'</div></div>';
 }).join('\n');
 var cards=[];
 if(wa){cards.push('    <a class="cc wa rvl" href="'+wa+'" target="_blank" rel="noopener"><div class="i">✆</div><h3>WhatsApp</h3><p>'+c.tel+'<br>Risposta rapida, 7 giorni su 7</p></a>');}
 cards.push('    <a class="cc rvl" href="'+tel+'"><div class="i">☏</div><h3>Telefono</h3><p>'+c.tel+'<br>Chiamateci per un sopralluogo</p></a>');
 if(c.email){cards.push('    <a class="cc rvl" href="mailto:'+c.email+'?subject='+enc('Richiesta informazioni matrimonio — '+c.nome)+'"><div class="i">✉</div><h3>Email</h3><p>'+c.email+'<br>Vi rispondiamo entro 24 ore</p></a>');}
 if(c.ig){cards.push('    <a class="cc rvl" href="https://www.instagram.com/'+c.ig+'/" target="_blank" rel="noopener"><div class="i">◉</div><h3>Instagram</h3><p>@'+c.ig+'<br>La location, giorno per giorno</p></a>');}
 cards.push('    <a class="cc rvl" href="https://maps.google.com/?q='+enc(c.nome+', '+c.indirizzo)+'" target="_blank" rel="noopener"><div class="i">⚲</div><h3>Dove siamo</h3><p>'+c.indirizzo+'</p></a>');
 var map={
  NOMEUP:c.nome.toUpperCase(), NOME:c.nome, MONO:c.mono, KICKER:c.kicker, TAGLINE:c.tagline,
  LUOGO:c.luogo, LOCSHORT:c.locshort, INDIRIZZO:c.indirizzo, MQ:c.mq,
  ML1:c.ml[0], ML2:c.ml[1], ML3:c.ml[2], ML4:c.ml[3],
  STATS:stats, PANELS:panels, FILMSEC:filmsec, NAVFILM:navFilm,
  ED1:edSec(c.ed1,false), ED2:edSec(c.ed2,true),
  REVS:revs, RATING:c.rating, NREC:c.nrec, FONTE:c.fonte,
  HEROIMGS:heroImgs, NAVCTA:navCta, HEROCTA:heroCta, CTABTN:ctaBtn, WAFLOAT:waFloat,
  FINBG:c.fotos[c.finbg], CONTACTS:cards.join('\n'), MAPQ:enc(c.nome+', '+c.indirizzo)
 };
 var html = tpl.replace(/\$([A-Z0-9]+)/g, function(m0,k){return (k in map)?map[k]:m0;});
 if(!c.revs || !c.revs.length){
  html = html.replace(/<section class="revs" id="sposi">[\s\S]*?<\/section>/, '');
  html = html.split('<a href="#sposi">Gli Sposi</a>').join('');
  html = html.split('rT=setInterval(function(){go(ri+1);},7000);').join('if(rv.length)rT=setInterval(function(){go(ri+1);},7000);');
 }
 return html;
}
if(typeof module!=='undefined'){module.exports=buildUltra;}
