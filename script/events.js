$(document).ready(function () {
	var A_firstBase = new Audio('audio/dick-02-firstBase.mp3'),
		A_Bicycle = new Audio('audio/dick-02-bicycle.mp3'),
		A_Delete = new Audio('audio/dick-02-delete.mp3'),
		A_Libraries = new Audio('audio/dick-49-libraries.mp3'),
		A_Dropbox = new Audio('audio/dick-49-libraries.mp3'),
		A_DTen = new Audio('audio/dick-66-ten.mp3'),
		A_EatHealthy = new Audio('audio/dick-66-peopleDontHaveTimeToEatHealthy.mp3'),
		A_Drinking = new Audio('audio/dick-66-theDrinkingIsAProblem.mp3'),
		A_PantJizz = new Audio('audio/dick-88-shootingLoadinPants.mp3'),
		A_Backseat= new Audio('audio/dick-87-backseatDriving.mp3'),
		A_Hundred = new Audio('audio/dick-66-oneHundred.mp3'),
		A_Sixteen = new Audio('audio/maddox-88-16.mp3'),
		A_FoutyNine = new Audio('audio/maddox-49-49.mp3'),
		A_MTen = new Audio('audio/maddox-02-ten.mp3'),
		A_MThirty = new Audio('audio/maddox-02-thirty.mp3'),
		A_Plastic = new Audio('audio/maddox-02-plastic.mp3'),
		A_Horiscopes = new Audio('audio/maddox-02-horiscopes.mp3'),
		A_Smoothies = new Audio('audio/maddox-02-smoothies.mp3'),
		A_HappyMeal = new Audio('audio/maddox-66-happyMeals.mp3'),
		A_ShitPro = new Audio('audio/maddox-66-shitsABigProblem.mp3'),
		A_Homeless = new Audio('audio/maddox-91-homelessPeople.mp3'),
		A_WasteFood = new Audio('audio/maddox-91-wastingFood.mp3'),
		A_LockedOut = new Audio('audio/maddox-77-momLockedMeOut.mp3')
  ;
	$(function() {
		$( ".firstSubCat" ).accordion({heightStyle: 'panel',collapsible: true,heightStyle: "content"});
		$( ".secondSubCat" ).accordion({heightStyle: 'panel',collapsible: true,heightStyle: "content"});
	});

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$( ".sideBarContainer" ).css("width" ,function( ) { return  "" + windowWidth * .2 + "px";});
	$( ".sideBarContainer" ).css("height" ,function( ) { return  "" + windowHeight* .8 + "px";});
	//$( ".firstSubCat" ).css("width" ,function( ) { return "" + windowWidth * .15 + "px";});
	//$( ".firstSubCat" ).css("height" ,function( ) { return "" + windowHeight * .15 + "px";});

	$("#m-pla").click(function(){
		A_Plastic.currentTime = 0;
		A_Plastic.play(0);
		}
	)
	$("#m-hor").click(function(){
		A_Horiscopes.currentTime = 0;
		A_Horiscopes.play(0);
		}
	)
	$("#m-smo").click(function(){
		A_Smoothies.currentTime = 0;
		A_Smoothies.play(0);
		}
	)
	$("#m-hap").click(function(){
		A_HappyMeal.currentTime = 0;
		A_HappyMeal.play(0);
		}
	)
	$("#m-10").click(function(){
		A_MTen.currentTime = 0;
		A_MTen.play(0);
		}
	)
	$("#m-16").click(function(){
		A_Sixteen.currentTime = 0;
		A_Sixteen.play(0);
		}
	)
	$("#m-30").click(function(){
		A_MThirty.currentTime = 0;
		A_MThirty.play(0);
		}
	)
	$("#m-49").click(function(){
		A_FoutyNine.currentTime = 0;
		A_FoutyNine.play(0);
		}
	)
	$("#m-shi").click(function(){
		A_ShitPro.currentTime = 0;
		A_ShitPro.play(0);
		}
	)
	$("#m-hom").click(function(){
		A_Homeless.currentTime = 0;
		A_Homeless.play(0);
		}
	)
	$("#m-was").click(function(){
		A_WasteFood.currentTime = 0;
		A_WasteFood.play(0);
		}
	)
	$("#A_LockedOut").click(function(){
		A_LockedOut.play();
		}
	)
});
