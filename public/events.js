const slideContainer = document.querySelector('.slide-container')
const slideCaptions = document.querySelector('.slide-captions')
const userImage = document.querySelector('.user-image')

const slides = [
  {
    photo:'https://www.errenskitchen.com/wp-content/uploads/2020/08/chicken-wings-1-1024x1536.jpg',
    text:'Wings: $4.99'
  },
  {
    photo:'https://assets.bonappetit.com/photos/59527bde7e6b226aaa4cab88/master/w_1280,c_limit/salvation-burger-nyc.jpg',
    text:'Burger: $4.99'
  },
  {
    photo:'https://www.oliviascuisine.com/wp-content/uploads/2016/04/Mexican-hot-fudge-sundae-1.jpg',
    text:'Sundae: $5.99'
  },
  {
    photo:'https://www.mexicoinmykitchen.com/wp-content/uploads/2012/08/Flan-recipe-mexican-3.jpg',
    text:'Mexican Flan: $5.99'
  }
]

let idx = 1;

function updateSlide() {
  const {photo, text} = slides[idx]

  slideCaptions.innerHTML = text
  userImage.src = photo

  idx++

  if(idx > slides.length - 1){
    idx=0
  }
}

setInterval(updateSlide,5000)
