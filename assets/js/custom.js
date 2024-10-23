const MegaMenu = document.querySelectorAll('.x-mega-menu-merchandise-zone-menu');

MegaMenu.forEach((item) => {
    item.addEventListener(
        'wheel',
        function (event) {
            event.preventDefault();
            const scrollableElement = this;
            const deltaY = event.deltaY;
            const scrollSpeed = 2; // Adjust the speed as needed

            // Calculate the new scroll position
            const scrollLeft = scrollableElement.scrollLeft + deltaY * scrollSpeed;

            // Smoothly scroll to the new position
            scrollableElement.scrollTo({
                left: scrollLeft,
                behavior: 'smooth',
            });
        },
        { passive: false },
    );
});

$('.thumbnails-carousel').owlCarousel({
    margin: 10,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 5,
        },
    },
    navText: [
        '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
});
