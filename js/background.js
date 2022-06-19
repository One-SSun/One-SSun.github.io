const bgImg = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
const randomNum = Math.floor(Math.random() * bgImg.length);

document.body.style.backgroundImage = `linear-gradient(rgba(4, 47, 64, 0.2), rgba(4, 47, 64, 0.2)), url(img/${bgImg[randomNum]})`;