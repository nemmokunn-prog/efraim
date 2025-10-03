// SPA-style page switch
const navItems = document.querySelectorAll('#navMenu li');
const pages = document.querySelectorAll('.page');

navItems.forEach(li => {
  li.addEventListener('click', () => {
    navItems.forEach(x => x.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    li.classList.add('active');
    document.querySelector(`.page-${li.dataset.menu}`).classList.add('active');

    // Reset Technology desc on tab switch
    if(li.dataset.menu !== "technology") {
      document.getElementById('techDescInner').innerHTML = "";
      document.querySelectorAll('.tech-btn').forEach(b=>b.classList.remove('active'));
    }
  });
});

// Interactive technology explanation
const techDesc = {
  html: `HTML5 adalah bahasa markup utama untuk membangun struktur dasar website. HTML digunakan untuk membuat elemen dan kerangka halaman seperti teks, gambar, link, dan tabel.`,
  css: `CSS3 digunakan untuk memperindah tampilan website dengan style, warna, animasi, dan layout modern agar website lebih menarik, responsif, dan konsisten.`,
  js: `JavaScript adalah bahasa pemrograman agar website menjadi interaktif dan dinamis, seperti membuat animasi, validasi form, serta mengelola data pada halaman web.`
};
const techBtns = document.querySelectorAll('.tech-btn');
const techDescInner = document.getElementById('techDescInner');

techBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    techBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const tech = btn.getAttribute('data-tech');
    techDescInner.innerHTML = techDesc[tech];
  });
});