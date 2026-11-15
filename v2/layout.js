(function(){
var A='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
var WA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5Z"/></svg>';
var body=document.body, active=body.getAttribute('data-active')||'home', heroDark=body.getAttribute('data-hero')==='dark';
function on(k){return active===k?' on':'';}
var H='<header class="site-header '+(heroDark?'on-dark':'on-light')+'"><div class="wrap bar">'+
'<a class="brand" href="index.html" aria-label="Kerala Ayurveda Institute home"><span class="mark"><i></i></span><span><b>Kerala Ayurveda Institute</b><small>of Barcelona</small></span></a>'+
'<nav class="nav" aria-label="Main"><a class="'+on('learn')+'" href="learn.html">Learn</a><a class="'+on('courses')+'" href="courses.html">Courses</a>'+
'<div class="care"><button type="button" class="'+on('care')+'" id="care-btn" aria-expanded="false" aria-controls="care-menu">Care <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>'+
'<div class="menu" id="care-menu"><a href="consultation.html">Consultation<span>Online or in Madrid</span></a><a href="treatments.html">Madrid Treatments<span>Abhyanga, Shirodhara and more</span></a></div></div>'+
'<a class="'+on('about')+'" href="about.html">About Vaidya Vijay</a></nav>'+
'<div class="hdr-right"><a class="btn '+(heroDark?'btn-light':'btn-dark')+'" id="hdr-cta" href="consultation.html">Book a Consultation<span class="ico">'+A+'</span></a>'+
'<div class="lang" role="group" aria-label="Language"><button type="button" aria-pressed="false"><span>ES</span></button><button type="button" aria-pressed="true"><span>EN</span></button></div>'+
'<button class="burger" type="button" aria-label="Open menu" aria-expanded="false" id="burger"><span></span><span></span></button></div></div></header>'+
'<div class="mnav" id="mnav" role="dialog" aria-modal="true" aria-label="Menu"><div class="top"><a class="brand" href="index.html"><span class="mark"><i></i></span><span><b>Kerala Ayurveda Institute</b><small>of Barcelona</small></span></a>'+
'<button class="burger" style="display:grid" type="button" aria-label="Close menu" id="mclose"><span style="transform:translateY(3px) rotate(45deg)"></span><span style="transform:translateY(-3px) rotate(-45deg)"></span></button></div>'+
'<nav aria-label="Mobile"><a href="index.html">Home <small>01</small></a><a href="learn.html">Learn <small>02</small></a><a href="courses.html">Courses <small>03</small></a><a href="consultation.html">Care <small>04</small></a><a class="sub" href="consultation.html">Consultation</a><a class="sub" href="treatments.html">Madrid Treatments</a><a href="about.html">About Vaidya Vijay <small>05</small></a></nav>'+
'<a class="btn btn-light" href="consultation.html">Book a Consultation<span class="ico">'+A+'</span></a></div>';
var IG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>';
var YT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/></svg>';
var FB='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/></svg>';
var F='<footer class="site-footer"><div class="wrap">'+
'<div class="foot-grid">'+
'<div><a class="brand" href="index.html" style="color:var(--ink)"><span class="mark"><i></i></span><span><b>Kerala Ayurveda Institute (KAIB)</b></span></a>'+
'<p style="margin-top:18px;font-size:18px;color:var(--ink);letter-spacing:-.02em">Learn Ayurveda. <span class="serif">Live it every day.</span></p>'+
'<p style="margin-top:10px">Founded by Vaidya Vijay to bring authentic, WHO-standard Ayurvedic knowledge and care to Spain.</p>'+
'<div class="social"><a href="#" aria-label="Instagram">'+IG+'</a><a href="#" aria-label="YouTube">'+YT+'</a><a href="#" aria-label="Facebook">'+FB+'</a></div></div>'+
'<nav aria-label="Explore"><h5>Explore</h5><a href="learn.html">Learn for Free (Videos)</a><a href="courses.html">Study Ayurveda (Courses)</a><a href="consultation.html">Book a Consultation</a><a href="treatments.html">Madrid Treatments</a><a href="about.html">About Vaidya Vijay</a><a href="#">Ayurvedic Shop</a></nav>'+
'<div><h5>Get in Touch</h5><p>We reply to WhatsApp messages within one working day.</p><a href="#" style="margin-top:10px">WhatsApp: +34 611 157 221</a><a href="#">Email: info@keralaayurvedainstitutebcn.com</a>'+
'<p style="margin-top:12px;color:var(--ink)"><b style="font-weight:500">Madrid Clinic (By Appointment Only):</b><br>C. Mar Rojo, 5, 5D, 28821 Coslada, Madrid<br><span class="small">Mon - Sat: 9:00 AM to 6:00 PM</span></p><a class="link" href="#" style="margin-top:10px">View on Google Maps <span class="bar"></span></a></div>'+
'<div><h5>Stay Connected</h5><p style="color:var(--ink);font-weight:500">Free Weekly Tips:</p><p style="margin:6px 0 14px">Join our WhatsApp community for one practical Ayurveda tip every week.</p>'+
'<form class="inline-form" onsubmit="return false"><label class="sr" for="wa-f">WhatsApp number</label><input id="wa-f" type="tel" placeholder="Enter WhatsApp Number"><button class="btn btn-dark" type="submit" style="min-height:42px;padding:4px 18px">Join</button></form>'+
'<p style="margin-top:22px;color:var(--ink);font-weight:500">For Spas &amp; Wellness Centers:</p><p style="margin:6px 0 10px">Interested in hosting a workshop or offering authentic treatments?</p><a class="link" href="#">Partner Enquiry <span class="bar"></span></a></div>'+
'</div>'+
'<div class="wordmark" aria-hidden="true">KAIB<span class="serif">.</span></div>'+
'<div class="legal"><span>© 2026 Kerala Ayurveda Institute. All rights reserved.</span><nav aria-label="Legal"><a href="#">Aviso Legal (Legal Notice)</a><a href="#">Privacy Policy</a><a href="#">Cookies Policy</a><a href="#">Terms of Sale</a></nav></div>'+
'<p class="disclaimer">Disclaimer: Ayurveda is a complementary lifestyle science. It does not replace professional medical advice or treatments from your modern doctor.</p>'+
'</div></footer><a class="wa-float" href="#" aria-label="Chat with us on WhatsApp"><span class="ico">'+WA+'</span><span>Chat with us</span></a>';
var hs=document.getElementById('site-header'), fs=document.getElementById('site-footer');
if(hs) hs.outerHTML=H; if(fs) fs.outerHTML=F;

/* header behaviour */
var hdr=document.querySelector('.site-header'), cta=document.getElementById('hdr-cta');
function onScroll(){var s=window.scrollY>40; hdr.classList.toggle('scrolled',s);
  if(heroDark&&cta){cta.className='btn '+(s?'btn-dark':'btn-light');}}
onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
var cb=document.getElementById('care-btn'), cm=document.getElementById('care-menu');
if(cb){cb.addEventListener('click',function(e){e.stopPropagation();var o=cm.classList.toggle('open');cb.setAttribute('aria-expanded',o);});
  document.addEventListener('click',function(e){if(!cm.contains(e.target)){cm.classList.remove('open');cb.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){cm.classList.remove('open');cb.setAttribute('aria-expanded','false');}});}
var bg=document.getElementById('burger'), mn=document.getElementById('mnav'), mc=document.getElementById('mclose');
if(bg){bg.addEventListener('click',function(){mn.classList.add('open');bg.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';});
  mc.addEventListener('click',function(){mn.classList.remove('open');bg.setAttribute('aria-expanded','false');document.body.style.overflow='';});}
document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){b.parentNode.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b);});});});
document.querySelectorAll('form').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();});});

/* word reveal for headings */
document.querySelectorAll('.h1,.h2,.words-in').forEach(function(h){
  var nodes=[].slice.call(h.childNodes), i=0; h.textContent='';
  nodes.forEach(function(n){
    if(n.nodeType===3){n.textContent.split(/(\s+)/).forEach(function(t){if(!t)return; if(/^\s+$/.test(t)){h.appendChild(document.createTextNode(' '));return;}
      var s=document.createElement('span');s.className='w';s.textContent=t;s.style.transitionDelay=(i++*70)+'ms';h.appendChild(s);});}
    else if(n.nodeName==='BR'){h.appendChild(n);}
    else {var s=document.createElement('span');s.className='w';s.style.transitionDelay=(i++*70)+'ms';s.appendChild(n);h.appendChild(s);}
  });
  h.classList.add('words');
});
/* fade-up reveal */
document.querySelectorAll('[data-rv], .card, .row-item, .step-card, .ph, .vid, .check, .faq details, .strip > div').forEach(function(el){
  if(el.closest('.hero-visual')&&!el.hasAttribute('data-rv'))return; el.classList.add('rv');
  var sib=el.parentNode?[].slice.call(el.parentNode.children).filter(function(x){return x.classList.contains('rv')||x.matches('.card,.row-item,.step-card,.check,.vid')}):[];
  var k=sib.indexOf(el); if(k>0) el.style.transitionDelay=Math.min(k,6)*90+'ms';
});
var targets=document.querySelectorAll('.rv,.words,.steps-line');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
  targets.forEach(function(t){io.observe(t);});
} else targets.forEach(function(t){t.classList.add('in');});

/* testimonial slider */
document.querySelectorAll('[data-slider]').forEach(function(sl){
  var s=sl.querySelectorAll('.slide'), d=sl.querySelectorAll('.dots i'), i=0;
  function go(n){i=(n+s.length)%s.length; s.forEach(function(x,k){x.classList.toggle('on',k===i);}); d.forEach(function(x,k){x.classList.toggle('on',k===i);});}
  var p=sl.querySelector('[data-prev]'), nx=sl.querySelector('[data-next]');
  if(p)p.addEventListener('click',function(){go(i-1);}); if(nx)nx.addEventListener('click',function(){go(i+1);});
  go(0);
});

/* learn filters */
var box=document.getElementById('chips');
if(box){var chips=[['all','All'],['digestion','Digestion & Gut Health'],['stress','Stress & Sleep'],['routine','Daily Routine'],['basics','Ayurveda Basics']];
  function show(t){document.querySelectorAll('[data-topic]').forEach(function(el){el.hidden=!(t==='all'||el.getAttribute('data-topic')===t); if(!el.hidden){el.querySelectorAll('.rv').forEach(function(r){r.classList.add('in');}); el.querySelectorAll('.words').forEach(function(r){r.classList.add('in');});}});
    box.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.id===t);});}
  chips.forEach(function(c){var b=document.createElement('button');b.type='button';b.dataset.id=c[0];b.textContent=c[1];b.addEventListener('click',function(){show(c[0]);});box.appendChild(b);});
  show('all');}
})();
