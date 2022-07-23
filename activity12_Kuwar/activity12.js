// MODAL WINDOW
const openItem1 = document.querySelector('#openItem1')
const closeModal1 = document.querySelector('#closeModal1')
const modalWindow = document.querySelector('.modalWindow')

openItem1.addEventListener('click', function() {
  modalWindow.style.display = 'block'
})
closeModal1.addEventListener('click', function() {
  modalWindow.style.display = 'none'
})

// STORAGE
const firstName = document.querySelector('#firstN')
const lastName = document.querySelector('#lastN')
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click', function() {
  localStorage.setItem('FN', firstName.value)
  sessionStorage.setItem('LN', lastName.value)
  firstName.value = ""
  lastName.value = ""
})
// FORMS
// viewPassword
const myPassword = document.querySelector('#myPassword')
const viewPassword = document.querySelector('#viewPassword')

viewPassword.addEventListener('click', function() {
  const secret = myPassword.getAttribute('type') === 'password' ? 'text': 'password'
  myPassword.setAttribute('type', secret)
})

// AUTOMATIC SLIDESHOW
const slideAuto = document.querySelectorAll('.slideAuto')
let indexSlide = 0
slideshowAuto()

function slideshowAuto() {
  let numSlides = slideAuto.length
  if (indexSlide >= numSlides) {
    indexSlide = 0
  }
  if (indexSlide < 0) {
    indexSlide = numSlides - 1
  }
  for (let eachIdx=0; eachIdx<numSlides; eachIdx++) {
    slideAuto[eachIdx].style.display = 'none'
  }
  slideAuto[indexSlide].style.display = 'block'
  setTimeout(slideshowAuto, 3000) // the second argument is the time in millisecond
  indexSlide++
}

// NORMAL SLIDESHOW
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1 // slide's position
let numberSlides = slides.length
slideshow(currentSlide)

prev.addEventListener('click', function(e) {
  currentSlide--
  slideshow(currentSlide)
})
next.addEventListener('click', function(e) {
  currentSlide++
  slideshow(currentSlide)
})

function slideshow(n) {
  // when currentSlide reaches up to the number of slides,
  // it sill set back to 1, which is the first slide.
  if (currentSlide > numberSlides) {
    currentSlide = 1
  }
  // when currentSlide reaches to the first slide, the prev
  // button will set to the last slide.
  if (currentSlide < 1) {
    currentSlide = numberSlides
  }
  for (let eachSlide=0; eachSlide<numberSlides; eachSlide++) {
    slides[eachSlide].style.display = 'none';
  }
  slides[currentSlide-1].style.display = 'block';
}
