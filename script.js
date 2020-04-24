var scrollLeft;
var anchoPantalla = ($(window).width())
var totalAnchoPantalla = (anchoPantalla)+"px"
$(".imagen").on({
    click:function(evento){
        $(".principal").on({
            scroll:function(){       
                scrollLeft = $(".principal").scrollLeft();             
            }
        })
        let miSrc =  $(this).prop("src"); 
        let imagenGrandeSeleccionada ;
        let listaImgGrandes = $(".principal img")
        for ( let i=0;i<listaImgGrandes.length;i++){
            let miSrcLista = listaImgGrandes[i].src
            if(miSrc == miSrcLista){
                imagenGrandeSeleccionada =  listaImgGrandes[i];
            }
        }
        let offsetLeftImg = $(imagenGrandeSeleccionada).offset().left
        $(".principal").animate({
            "scrollLeft": $(".principal").scrollLeft()+offsetLeftImg
        },1000)
    },
});