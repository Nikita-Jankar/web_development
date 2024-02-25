const imageUrls = [
    { "image": "1.png" },
    { "image": "2.png" },
    { "image": "3.png" },
    { "image": "4.png" },
    { "image": "5.png" },
    { "image": "6.png" },
    { "image": "7.jpeg" },
    { "image": "8.png" },
    { "image": "9.avif" },
    { "image": "10.jpeg" },
    { "image": "11.jpeg" },
    { "image": "12.webp" },
    { "image": "13.png" },
    { "image": "14.jpeg" },
    { "image": "15.jpg" },
    { "image": "16.jpeg" },
    { "image": "17.jpeg" },
    { "image": "18.jpeg" },
    { "image": "19.jpg" },
    { "image": "20.jpeg" },
    { "image": "21.jpeg" },
    { "image": "22.webp" },
    { "image": "23.jpeg" },
    { "image": "24.jpg" },
    { "image": "25.jpg" },

    // Add more image URLs here...
  ];

  const imageGrid = document.getElementById('image-grid');

  // Function to create and load images
  function loadImages(images) {
    images.forEach((imageObj, index) => {
      const imageItem = document.createElement('div');
      imageItem.classList.add('image-item');

      const img = document.createElement('img');
      img.src = imageObj.image;
      img.alt = 'User Image';

      imageItem.appendChild(img);
      imageGrid.appendChild(imageItem);
    });
  }

  // Load images when the page is ready
  document.addEventListener('DOMContentLoaded', () => {
    loadImages(imageUrls);
  });
