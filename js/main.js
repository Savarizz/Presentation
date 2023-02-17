function CarouselBg() {
    const containers = Array.from($('.habContainer'))
    const backgrounds = ['bg-js', 'bg-css', 'bg-html', 'bg-python', 'bg-c', 'bg-react', 'bg-unreal', 'bg-next']
    changeBg(containers, backgrounds, 0)
}

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(a => {
            resolve()
        }, tempo)
    })
}


async function changeBg(lista, listaBg, atual) {
    await esperarPor(1000)
        $(lista[atual]).toggleClass(listaBg[atual])
    await esperarPor(2500)
        $(lista[atual]).toggleClass(listaBg[atual])

    
    changeBg(lista, listaBg, getProximo(lista, atual))
}

function getProximo(lista, atual) {
    if(atual + 1 < lista.length) {
        return atual + 1
    } else {
        return 0
    }
}

function debounce(func, wait, immediate) {  
    var timeout;  
    return function mainFunction() {  
      var cont = this;  
      var args = arguments;      
      var later = function() {  
        timeout = null;  
        if (!immediate) func.apply(cont, args);  
      };  
      var callNow = immediate && !timeout;      
      clearTimeout(timeout);  
      timeout = setTimeout(later, wait);    
      if (callNow) func.apply(cont, args);  
    };  
  };


const animateTarget = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    animateTarget.forEach(element => {
        if(windowTop >= element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

const returnedFunction = debounce(function() {
    animeScroll();
    console.log('ajdasuhbd')
}, 10)

if(animateTarget.length) {
    window.addEventListener('scroll', () => returnedFunction())
}

animeScroll()
CarouselBg()