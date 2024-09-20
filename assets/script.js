const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
let Index_actual = 0;
function Photo_Actuale(index) {
    bannerImg.src = slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;
    for (let i = 0; i < dots.length; i++) {
            if (i === index) {
                dots[i].classList.add('dot_selected');
            } else {
                dots[i].classList.remove('dot_selected');
            }
        }
     Index_actual = index;
}
/*slides.lenth=4     */ 
function Prochaine_Photo() {
    if (Index_actual==slides.length - 1){
     Index_Prochain=0;
    }else
    {
    Index_Prochain=Index_actual+1;
    } 
    Photo_Actuale(Index_Prochain);
}
function Precedente_Photo() {
if (Index_actual==0){
        Index_precedent=slides.length - 1;
       }else
       {
       Index_precedent=Index_actual-1;
       }
        Photo_Actuale(Index_precedent);
}
arrowRight.addEventListener('click', function() {
     Prochaine_Photo();
});
arrowLeft.addEventListener('click', function() {
    
    Precedente_Photo();
});
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        Photo_Actuale(i);
    });
}