//navbar

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',() =>{
    if(scrollY >=180){
        navbar.classList.add('bg');
    }else{
        navbar.classList.remove('bg');
    }
    }
)

//image collageImages

const collageImages =[...document.querySelectorAll('.collage-img')]
collageImages.map((item, i) =>{
    item.addEventListener('mouseover',() =>{
        collageImages.map((image, index) =>{
            if(index !=1){
                image.computedStyleMap.filter ='blur(10px)';
                item.style.zIndex = 2
            }
        })
    })
})
item.addEventListener('mouseleave',() =>{
    collageImages.map((image, index) =>{
       image.style = null;
        })
    })