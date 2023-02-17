import '../node_modules/jquery/dist/jquery.min.js'

function carregarPag() {
   $('body').children().each((index, child) => {
      if(index < 5) {
       const adress = $(child).attr('adress')
       fetch(adress)
        .then(response => response.text())
        .then(data => $(child).html(data))
        .catch(err => console.log(err))
      }
   })
}

$( window ).on( "load", carregarPag )

/* $('body').children().each((index, child) => {
   if(index < 4) {
    const adress = $(child).attr('adress')
    fetch(adress)
     .then(response => response.text())
     .then(data => $(child).html(data))
     .catch(err => console.log(err))
   }
}) */
