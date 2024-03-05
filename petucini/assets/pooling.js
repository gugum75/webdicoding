let caption = document.querySelector("#caption");
caption.innerHTML = '<em>poto gugum</em>'


// JavaScript untuk mengatur slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Menampilkan slide pertama saat halaman dimuat
slides[currentSlide].classList.add('active');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Menambahkan event listener untuk tombol navigasi
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);




