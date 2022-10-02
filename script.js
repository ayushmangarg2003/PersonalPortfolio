var navbar = document.querySelector('.navbar')
var cross = document.querySelector('.cross')
var hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',function(){
    navbar.classList.add('block')
})

cross.addEventListener('click', function(){
    navbar.classList.remove('block')
})