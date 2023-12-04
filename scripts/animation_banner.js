// Feito com ajuda do copilot para teste de conhecimento
window.onload = function() {
    var images = document.querySelectorAll('.banner_image');
    var buttons = document.querySelectorAll('.image_button');
    var currentImageIndex = 0;
    var intervalId;

    // Initially, hide all images except the first and remove 'active' class from all buttons
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = (i === 0) ? 'block' : 'none';
        buttons[i].classList.remove('active');
    }

    // Add 'active' class to the first button
    buttons[0].classList.add('active');

    // Function to switch to the next image
    function nextImage() {
        images[currentImageIndex].style.display = 'none';
        buttons[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
        buttons[currentImageIndex].classList.add('active');
    }

    // Start switching to the next image every 3 seconds
    intervalId = setInterval(nextImage, 3000);

    // Function to show a specific image
    function showImage(index) {
        // Clear the existing interval
        clearInterval(intervalId);

        images[currentImageIndex].style.display = 'none';
        buttons[currentImageIndex].classList.remove('active');
        currentImageIndex = index;
        images[currentImageIndex].style.display = 'block';
        buttons[currentImageIndex].classList.add('active');

        // Start a new interval
        intervalId = setInterval(nextImage, 3000);
    }

    // Add event listeners to the buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'));
            showImage(index);
        });
    }

    // Add a wheel event listener to the image container
    var imageContainer = document.querySelector('.container_banner');
    imageContainer.addEventListener('wheel', function(event) {
        // Clear the existing interval
        clearInterval(intervalId);

        // If the user scrolls up, show the next image
        if (event.deltaY < 0) {
            nextImage();
        }

        // Start a new interval
        intervalId = setInterval(nextImage, 3000);
    });
};