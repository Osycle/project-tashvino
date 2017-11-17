'use strict';

(function(){
$(function(){





	// FANCYBOX
	if( $("[data-fancybox='product']").length != 0 )
		$("[data-fancybox='product']").fancybox({
			afterShow : function( instance, current ) {
			},
			animationEffect : "fade",
			transitionEffect: "zoom-in-out"
		});
	if( $("[data-fancybox='gallery']").length != 0 )
		$("[data-fancybox='gallery']").fancybox({
			afterShow : function( instance, current ) {
			},
			animationEffect : "fade",
			transitionEffect: "zoom-in-out"
		});

	//WOW
	new WOW({
		offset: 30
	}).init();

	// FILTER
	$(".rewards-select").on("change", function(){ 
		$( this.selectedOptions ).click();
	})

	// FLICKITY
var arrowStyle = { 
	  x0: 10,
	  x1: 60, y1: 50,
	  x2: 60, y2: 45,
	  x3: 15
	}
var $carousel = $('.gallery-content.carousel').flickity({
		autoPlay: 2000,
		arrowShape: arrowStyle,
		//prevNextButtons: false,
		//rightToLeft: true,
		draggable: !(checkView(992)) ,
		friction: 0.5,
		contain: true,
		cellAlign: 'center',

  imagesLoaded: true,
  percentPosition: false
});
var $imgs = $carousel.find('.gallery-item.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
// get  instance
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = $imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});


	$('.product-carousel-main').flickity({
		prevNextButtons: false,
		cellAlign: 'center',
		draggable: false,
		contain: true,
		baseClass : '.product-fancybox',
		pageDots: false
	});
	$('.product-carousel-nav').flickity({
	  asNavFor: '.product-carousel-main',
	  prevNextButtons: false,
	  baseClass : '.productfancybox',
	  slideClass : '.productfancybox',
	  contain: true,
	  pageDots: false
	});
	

	
  if( $(".rewards-medals").length != 0)
  	var diplomasMedals = mixitup( $(".rewards-medals"), {} );
  	//diplomasMedals.getConfig();
  if( $(".rewards-diplomas").length != 0)
  	var diplomasFilter = mixitup( $(".rewards-diplomas"), {} );






  // PRODUCTION FILTER
  var productionContent = $( $(".production-content") );
  var productionHeader =  $( $("#production-header") );
  var productionCatName = [
  	"cat-vinomaterial",
  	"cat-konyachniy",
  	"cat-vodka",
  	"cat-konyak",
  	"cat-vino"
  ]
 	var oldMixActive = {};
 	var mixActive = {};
  if( productionContent.length != 0 && productionHeader.length != 0)
  	var productionFilter = mixitup( productionContent, {
	  	  load: {
	        filter: "."+productionContent.attr("data-active")
	    	},
	    	 callbacks: {
		        onMixStart: function(state, futureState) {

		        		if( $(oldMixActive).length != 0)
		        			$(oldMixActive).closest(".panel-heading").removeClass("in");

		        		mixActive = $( $(".mixitup-control-active") );

						   	var headerText = mixActive.text().trim();

						    mixActive.closest(".panel-heading").addClass("in");

						   	oldMixActive = mixActive;

						    mixAppenHeader( headerText );

						  }
		    }
  	} );

  (function(){
  	var mixStartActive = $( $("[data-filter='."+productionContent.attr("data-active")+"']") );
  	oldMixActive = mixStartActive;
		var text = mixStartActive
											.closest(".panel-heading")
											.addClass("in")
											.end()
											.text()
											.trim() || false;

		console.log( mixStartActive );
		mixAppenHeader( text );
  })();

  function mixAppenHeader( text ){

  	if(!text) return;
  	productionHeader
  		.find("h1")
  		.text( text )
  		.end()
  		.addClass("in");

  }
  

  function productionCnt( productionCatName ){
   	for( var i = 0; i < productionCatName.length ;i++ ){
   		var len = $( "."+productionCatName[i] ).length;
   		$( "#"+productionCatName[i] ).find(".production-cnt").text( len )
   	}
  }
  productionCnt( productionCatName );















  // MMNENU
  $("nav#rewards-nav").mmenu();
  $("nav.production-nav").mmenu();

	// AOS
	AOS.init({
	  offset: 0,
	  once: true,
	  duration: 1000,
	  delay: 100
	});

	setTimeout(function(){AOS.refresh()}, 300);


	var header_status = false;
	var statusSearchView = true;


	//menu init
	$(".nav-menu").initMenu({
		"menuToggleBtn": ".menu-toggle",
		"subMenu": ".sub-menu-1",
		"modalMenu": "#menuModal",
		menuHoverIn: function(){}
	})


function phoneDap(){
	if ( checkView(992) )
		return;
	$(".copyright")
		.before( $(".social") )
}

function dropbtn(){
	$(".dropdown-lang .dropbtn").on("click", function(){
		$( $(this).siblings(".dropdown-content") ).toggleClass("active");
	});
	$(".dropdown-lang .dropdown-content").on("mouseleave", function(){
		$(this).removeClass("active");
	});
}
dropbtn();




$(".btn-search").on("click", function(){
	$(this).find("i")
		.toggleClass("fa fa-search")
		.toggleClass("fa fa-close");

	if(statusSearchView){
		statusSearchView = !statusSearchView;
		$(".nav-search-content")
			.find(".btn-search-sub")
			.add("input")
			.removeClass("hide").addClass("show");

		setTimeout(function(){ 
			$(".aSearch").addClass("in") 
		}, 1);

	}else{
		statusSearchView = !statusSearchView;
		$(".aSearch").removeClass("in");

		setTimeout(function(){
			$(".nav-search-content")
			.find(".btn-search-sub")
			.add("input")
			.addClass("hide").removeClass("show")
		}, 300);
	}

} )



//RESIZE
$( window ).on("resize", function(e){

	// body

});

//SCROLL
$( window ).on("scroll", function(e){
	
	if($(window).scrollTop() > 300 && header_status == false){
		
		header_status = true; 

	}else if($(window).scrollTop() < 300 && header_status == true){

		header_status = false;

	}

});






 $.fn.fadeToggleBool = function( dura ){
 	var self = $( $(this) ),
 		 bool = self.css("display") == "none";

	self.fadeToggle({

		duration: dura,
		easing: "linear"

	});

	return bool;
 }


setInterval( function(){
	bannerImgToggle();
}, 6000 );

	});//$
}) (jQuery);



var bannerBg = 1;
function bannerImgToggle(){
	var banner = $( $("#banner") ) ;

	window.bannerSlideBg_1 = banner.attr('style');
	window.bannerSlideBg_2 = banner.attr('data-toggle-img');

	banner.attr("data-toggle-img", bannerSlideBg_1);
	banner.attr("style", bannerSlideBg_2);

}


function Menu( menu, options ){

	var self = this;
	menu = $( menu );

	//ПОЛЯ
	this.menuClass						= menu[0].className;
	this.menuToggleBtn 				= $( $(options.menuToggleBtn) ) ;
	this.menuToggleBtnParent  = $(this.menuToggleBtn).parent();
	this.subMenu 							= $( menu.find(options.subMenu) );
	this.modalMenu  					= $( $(options.modalMenu) );
	this.modalMenuStatus 		 	= false; 

	//МЕТОДЫ
	this.menuToggle					= function(){
		$( this.menuToggleBtn ).trigger("click");
		return this.modalMenuStatus = !this.modalMenuStatus;
	}


	menu.find("[class|='sub']").closest("li").addClass("sub-parent");
	$(".min-navbar").append( menu.clone() ).find( "."+this.menuClass ).addClass("min");

	this.modalMenu.on('show.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;

		options.modalMenuShow();

	})
	this.modalMenu.on('shown.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;

		options.modalMenuShown();
		
	})
	this.modalMenu.on('hide.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;
		options.modalMenuHidden();

	})
	this.modalMenu.on('hidden.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;
		self.menuToggleBtn.addClass("collapsed");
		options.modalMenuHidden();

	})

	//HOVER MENU
	menu.find("li").hover(
		function(){
			options.menuHoverIn();
	},function(){
			options.menuHoverOut();
	});



	//HOVER SUB-MENU
	this.subMenu.hover(
		function(){
			adposmenu(this);
			options.subHoverIn();
		},
		function(){
			options.subHoverOut();
		});




	this.menuToggleBtn.on("click", function(){
		if(this.modalMenuStatus)
			$(this).addClass("collapsed");
		else
			$(this).removeClass("collapsed");

		options.menuToggle();
	});
	

	//	FUNCITON

	function adposmenu(subMenu){
		//Адаптация положение подменю в зависимости от размера экрана
		var el = $(subMenu).find("li ul");
		if (el.length === 0) return;
		if ( $( window ).width() < el.width() + el.offset().left ) 
			el.addClass("left");
	}

}





window.$.fn.initMenu = function(option){

	var options = $.extend({
		"menuToggleBtn"					: false, 		// Кнопка бара
		"subMenu"								: false, 		// Класс подменю
		"modalMenu"							: false, 		// Модальное меню

		"menuToggle"						: Function, 	// Переключение
		"menuHoverIn"						: Function,
		"menuHoverOut"					: Function,
		"subHoverIn"						: Function,
		"subHoverOut"						: Function,
		"modalMenuShow"					: Function, 	// Открытие меню
		"modalMenuShown"				: Function,		// Меню раскрыт
		"modalMenuHide"					: Function, 	// Раскрытие Меню
		"modalMenuHidden"				: Function 		// Меню скрыт


	}, option );
	var menu = new Menu(this, options);

	return menu;

}





//COMMON FUNTIONS

function sendForm(th){

	this.onsubmit = function(e){ e.preventDefault();}
	var require = $(th).serialize();
	send(require+"&to="+to);

	$(th).find("input").val("");
}

function ajPost(u, d, s, c){
	$.ajax({
		type: 		"POST",
		url: 			u,
		data: 		d,
		success: 	s,
		statusCode: {
			404: function(){alert("Страница не найдена");}
		},
		complete: c
	});
}

function checkView( width ){
	return ($( document ).width() > width);
}


function modalShadow( el ){

	if( $(modal_shadow).length == 0 && el.jquery) 
		return;

	if( modal_shadow.fadeToggleBool() ){
		modal_shadow.on("click", function(){
			if(el.length != 0)
				el.trigger("click");
			});
	}else
		modal_shadow.off("click");
}

function scrolledDiv(el) {
	try{
	  var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elTop = $(el).offset().top,
		elBottom = elTop + $(el).height()/1.8;
	}catch(err){console.error();}

  	return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
}