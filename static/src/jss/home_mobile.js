'use strict';

$().ready( ()=>{

    // browser object 
	const brows = [
		navigator.cookie, navigator.cookieEnabled, navigator.appCodeName, navigator.platform,
		navigator.product, navigator.userAgent, navigator.onLine, navigator.javaEnabled(), 
		 ];
    let mozillar = "Mozilla/5.0 (Android 13; Mobile; rv:109.0)";
	// screen 
	let width = window.innerWidth,
	   height = window.innerHeight;
	// browser Language 
	var userLang = navigator.language || navigator.userLanguage; 

    let siteOnWork = (()=>{
    	let alertMsg = $('.nav li a').on("click", ()=>{
    		alert("In Bearbeitung");
    	});

        let alertMsg1 = $('.zeig a').on("click", ()=>{
    		alert("In Bearbeitung1 ");
    	});

    })();
	//alert("Width :"+width+" Height "+height);
    //$('#dv-content .menu a').html("Menu");
	if ( width <= 426 ){

	    $('#dv-content .menu a').html("Menu");

	    $('#dv-content .menu a').on('click', ()=>{
	    	$('#fset').css({
        	   "marginTop": "50%"
            });
            $('#dv-content .menu').css({
            	"marginBottom": "5%"
            });
	    	$('#dv-content .nav li').css({
	    		"display": "block",
	    		"marginLeft": "-10%",
	    		"float": "left"
	    	});
	    	$('#dv-content .nav li a').css({
	    		"color": "black"
	    	});

            $('#dv-content .nav li a').on("click", ()=>{
            	$('#dv-content .nav li').css({
            		"display": "none"
            	});

            	$('#fset').css({
        	      "marginTop": "20%"
                });
            });
	    });

	    $('#dv-content .nav li').on('click', ()=>{
	   		$('#dv-content .nav li').css({
     			"display": "none"
	   		});
	    });
	}else{
		$('dv-content .menu a').html("Menu");
	}


} );