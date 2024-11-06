var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.4,      
    spaceBetween: 8,        
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



document.getElementById("toggleButton").addEventListener("click", function () {
    const width = window.innerWidth;
    let hiddenLogos;

    if (width >= 1120) {
        hiddenLogos = document.querySelectorAll(".hidden-1120");
    } else if (width >= 768) {
        hiddenLogos = document.querySelectorAll(".hidden-768");
    } else {
        hiddenLogos = [];
    }

    const isHidden = hiddenLogos.length && hiddenLogos[0].style.display === "none";

    hiddenLogos.forEach(logo => {
        logo.style.display = isHidden ? "flex" : "none";
    });

    this.textContent = isHidden ? "Скрыть" : "Показать все";
});