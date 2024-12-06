
var typingEffect = new Typed(".typedText",{
    strings : ["Java Developer","React Developer","SpringBoot Dev"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


 
 /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
});

/*----- Home section -----*/
  /* -- HOME -- */
  sr.reveal('.title',{})
  sr.reveal('.title-profile',{delay: 100})
  sr.reveal('.para',{delay: 200})
  sr.reveal('.btns',{delay: 200})
  sr.reveal('.profile-img', {deplay: 300})

  sr.reveal('.front-end-set',{delay: 100})
  sr.reveal('.database-set',{delay: 300})




const right = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true     
});

right.reveal('.about-info', {delay: 200})
right.reveal('.contact-form', {delay: 200})

const left = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true     
});

left.reveal('.cont-details', {delay: 200})

const bottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true     
});

bottom.reveal('.back-end-set', {delay: 200})
bottom.reveal('.projects', {delay: 200})
bottom.reveal('.card', {delay: 200})




