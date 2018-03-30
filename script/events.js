$(document).ready(function () {
	var smokingDick = new Audio('audio/dick-01-areYouAllowedToBeSmokingInHere.ogg'),
		author= new Audio('audio/dick-01-maddoxBestSellingAuthor.ogg'),
		betterWay = new Audio('audio/dick-01-theresNoBetterWay.ogg'),
		bigProblem= new Audio('audio/dick-01-thisIsABigProblem.ogg'),
		shof = new Audio('audio/maddox-01-showoffy.ogg'),
		includingBut = new Audio('audio/maddox-02-including&notLimited.ogg'),
		timchain = new Audio('audio/tim-87-djInTheHouse.ogg');
		
	$(function() {
		$( "#insultCat" ).accordion({heightStyle: 'panel',collapsible: true});
		$( "#placeCat" ).accordion({heightStyle: 'panel',collapsible: true});
		$( "#thoughtCat" ).accordion({heightStyle: 'panel',collapsible: true});
		$( "#characterCat" ).accordion({heightStyle: 'panel',collapsible: true});
	});
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$( ".sideBarContainer" ).css("width" ,function( ) { return  "" + windowWidth * .2 + "px";});
	$( ".sideBarContainer" ).css("height" ,function( ) { return  "" + windowHeight* .8 + "px";});
	//$( ".firstSubCat" ).css("width" ,function( ) { return "" + windowWidth * .15 + "px";});
	//$( ".firstSubCat" ).css("height" ,function( ) { return "" + windowHeight * .15 + "px";});
	
	$("#tc").click(function(){
		timchain.play();
		}
	)
	$("#cs").click(function(){
		smokingDick.play();
		}
	)
	$("#sf").click(function(){
		shof.play();
		}
	)
});