const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slide = document.querySelector('.slide');

let index = 2;	

const images = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg']

showPicture(index);

function showPicture (index){
    const slidePic = `<img src=asset/${images[index]}>`
    slide.innerHTML = slidePic;
}

 const nextSlide = () => {   
    if(index === images.length - 1) {
        index = 0;
    } else {
        index++;
    }
    console.log('next', index)
    showPicture(index);
}

const prevSlide = () => {
    if(index == 0) {
        index = images.length - 1;
    } else {
        index--;
    } 
    console.log('next', index)
    showPicture(index);
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

