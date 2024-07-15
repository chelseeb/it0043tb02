
let menu = document.querySelector("#head ul");
let bar = document.querySelector("#head .fa-bars");

bar.addEventListener("click", function() {
    menu.classList.toggle("show");
});


document.getElementById('facebook').addEventListener('click', function() {
    toggleAndOpenLink('facebook-link');
});

document.getElementById('instagram').addEventListener('click', function() {
    toggleAndOpenLink('instagram-link');
});

document.getElementById('twitter').addEventListener('click', function() {
    toggleAndOpenLink('twitter-link');
});

document.getElementById('linkedin').addEventListener('click', function() {
    toggleAndOpenLink('linkedin-link');
});

document.getElementById('download-cv').addEventListener('click', function() {
    window.open('CVBustos.pdf', '_blank'); 
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.portfolio-item');
    const prevButton = document.querySelector('.portfolio-controls-previous');
    const nextButton = document.querySelector('.portfolio-controls-next');
    let currentIndex = 2; 

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('portfolio-item-1', 'portfolio-item-2', 'portfolio-item-3', 'portfolio-item-4', 'portfolio-item-5');
            let className;
            switch (index) {
                case (currentIndex - 2 + items.length) % items.length:
                    className = 'portfolio-item-1';
                    break;
                case (currentIndex - 1 + items.length) % items.length:
                    className = 'portfolio-item-2';
                    break;
                case currentIndex:
                    className = 'portfolio-item-3';
                    break;
                case (currentIndex + 1) % items.length:
                    className = 'portfolio-item-4';
                    break;
                case (currentIndex + 2) % items.length:
                    className = 'portfolio-item-5';
                    break;
                default:
                    className = '';
                    break;
            }
            item.classList.add(className);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel(); 
});



function toggleAndOpenLink(id) {
    var link = document.getElementById(id);
    if (link.style.display === "none") {
        link.style.display = "inline"; 
        window.open(link.href, '_blank'); 
    } else {
        link.style.display = "none"; 
    }
}
