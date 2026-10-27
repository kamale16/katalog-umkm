// Logika halaman: render produk, filter, pencarian, kategori, galeri, tema.
var CAT=["Semua","Makanan","Minuman","Kerajinan"],cat="Semua";
var CB={Makanan:"#cfe8c4",Minuman:"#e6d3c1",Kerajinan:"#c9d6f0"};
var CI={Makanan:P[0],Minuman:P[1],Kerajinan:P[5]};
var $=function(i){return document.getElementById(i)};
var rp=function(n){return"Rp "+n.toLocaleString("id-ID")};
var link=function(t){return"https://wa.me/"+WA+"?text="+encodeURIComponent(t)};
var ph=function(x){var s='<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="'+x.b+'"/><circle cx="262" cy="96" r="24" fill="rgba(0,0,0,.14)"/><path d="M110 206l62-78 44 54 32-40 42 64z" fill="rgba(0,0,0,.2)"/><text x="200" y="256" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="600" fill="rgba(0,0,0,.6)">'+x.n+'</text></svg>';return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s)};
// Foto produk: isi dari properti i di daftar P (contoh i:"img/kopi.jpg"). Kalau file tidak ada, gambar dummy tetap tampil.
var pic=function(x){return x.i?'<img src="'+x.i+'" alt="'+x.n+'" loading="lazy" class="absolute inset-0 h-full w-full object-cover" onerror="this.remove()">':""};
var CHIP="rounded-full border px-4 py-1.5 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ";
var ON=CHIP+"border-brand bg-brand text-on-brand",OFF=CHIP+"border-line text-ink hover:border-brand";
function go(id){var e=$(id);if(e)e.scrollIntoView({behavior:"smooth",block:"start"})}
function chips(){$("chips").innerHTML=CAT.map(function(c){return'<button type="button" class="'+(c===cat?ON:OFF)+'" aria-pressed="'+(c===cat)+'">'+c+"</button>"}).join("")}
function render(){
  var q=$("q").value.trim().toLowerCase(),s=$("s").value;
  var r=P.filter(function(x){return(cat==="Semua"||x.c===cat)&&(x.n+" "+x.d+" "+x.c).toLowerCase().indexOf(q)>-1});
  if(s==="lo")r.sort(function(a,b){return a.p-b.p});
  if(s==="hi")r.sort(function(a,b){return b.p-a.p});
  $("count").textContent=r.length+" produk ditemukan";
  $("grid").innerHTML=r.length?r.map(function(x){
    return'<article class="flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1 hover:shadow-lg">'
    +'<div class="relative h-40 overflow-hidden" style="background:'+x.b+'"><img src="'+ph(x)+'" alt="" class="absolute inset-0 h-full w-full object-cover">'+pic(x)+(x.t?'<span class="absolute left-2.5 top-2.5 z-10 rounded-full bg-gold px-2.5 py-0.5 text-xs font-semibold text-on-gold">'+x.t+"</span>":"")+"</div>"
    +'<div class="flex flex-1 flex-col gap-1 p-4"><span class="text-sm text-mute">'+x.c+'</span><h3 class="text-lg font-semibold leading-snug">'+x.n+'</h3><span class="text-sm text-mute">'+x.d+"</span>"
    +'<div class="mt-auto pt-2 text-xl font-extrabold text-brand">'+rp(x.p)+"</div>"
    +'<a target="_blank" rel="noopener noreferrer" class="mt-2 block rounded-xl bg-wa py-2.5 text-center font-semibold text-white hover:brightness-110" href="'+link("Halo, saya mau pesan "+x.n+" ("+rp(x.p)+"). Apakah masih tersedia?")+'">Pesan via WhatsApp</a></div></article>'}).join(""):'<p class="col-span-full py-10 text-center text-mute">Produk tidak ditemukan. Coba kata kunci lain.</p>';
}
function setCat(c){cat=c;chips();render()}
// Hero: tiga gambar dummy
$("heroPics").innerHTML=[P[1],P[2],P[5]].map(function(x,i){return'<img src="'+(x.i||ph(x))+'" data-f="'+ph(x)+'" onerror="this.onerror=null;this.src=this.dataset.f" alt="" class="w-full rounded-2xl object-cover shadow-xl '+["h-44 -rotate-3","h-56 rotate-2","h-40 -rotate-2"][i]+'">'}).join("");
// Kartu kategori
$("cats").innerHTML=["Makanan","Minuman","Kerajinan"].map(function(c){
  var n=P.filter(function(x){return x.c===c}).length;
  return'<div class="overflow-hidden rounded-2xl border border-line bg-card"><img src="'+(CI[c].i||ph({b:CB[c],n:c}))+'" data-f="'+ph({b:CB[c],n:c})+'" onerror="this.onerror=null;this.src=this.dataset.f" alt="" class="h-44 w-full object-cover"><div class="flex items-center justify-between p-4"><div><h3 class="text-lg font-semibold">'+c+'</h3><span class="text-sm text-mute">'+n+' produk</span></div><button type="button" data-cat="'+c+'" class="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-on-brand hover:brightness-110">Belanja</button></div></div>'}).join("");
// Galeri
var SP=["row-span-2","","","md:col-span-2","","row-span-2","",""];
$("gal").innerHTML=[P[0],P[3],P[7],P[9],P[11],P[5],P[10],P[6]].map(function(x,i){return'<img src="'+(x.i||ph(x))+'" data-f="'+ph(x)+'" onerror="this.onerror=null;this.src=this.dataset.f" alt="" loading="lazy" class="h-full w-full rounded-xl object-cover '+SP[i]+'">'}).join("");
$("cats").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;setCat(b.dataset.cat);go("produk")});
$("chips").addEventListener("click",function(e){var b=e.target.closest("button");if(b)setCat(b.textContent)});
document.addEventListener("click",function(e){var a=e.target.closest("[data-go]");if(!a)return;e.preventDefault();go(a.dataset.go)});
$("q").addEventListener("input",render);$("s").addEventListener("change",render);
$("fab").href=link("Halo, saya mau tanya produk di Lapak Nusantara.");$("foot").href=$("fab").href;
$("theme").addEventListener("click",function(){var r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"});
chips();render();
