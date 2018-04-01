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


	function scrollHorizontally(e) {
			e = window.event || e;
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
			document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
			document.body.scrollLeft -= (delta*40); // Multiplied by 40
			e.preventDefault();
	}
	if (window.addEventListener) {
			// IE9, Chrome, Safari, Opera
			window.addEventListener("mousewheel", scrollHorizontally, false);
			// Firefox
			window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
	} else {
			// IE 6/7/8
			window.attachEvent("onmousewheel", scrollHorizontally);
	}

  var cloneCounter = 0;

	function setClickEvents(){
		$(".newPanelButton").unbind('click');
		$(".rightPanelButton").unbind('click');
		$(".leftPanelButton").unbind('click');
		$(".closePanelButton").unbind('click');
		$(".spandiv").unbind('click');
		$(".spandiv").addClass( "ui-widget-content" )
		$(".spandiv").draggable({
		  //addClasses: false,
			zIndex:100,
			containment: $('body'),
			cursor: 'move',          // sets the cursor apperance
			revert: 'invalid',       // makes the item to return if it isn't placed into droppable
			revertDuration: 900,     // duration while the item returns to its place
			opacity: 0.35,            // opacity while the element is dragged
			helper: 'clone',
			stop: function (ev, ui) {
				/*
					 var pos = $(ui.helper).offset();
					 objName = "#clonediv" + cloneCounter;
					 $(objName).css({
							 "left": pos.left,
							 "top": pos.top
					 });
					 $(objName).removeClass("drag");
					 //When an existiung object is dragged
					 $(objName).draggable({
							 containment: 'parent',
							 stop: function (ev, ui) {
									 var pos = $(ui.helper).offset();
									 console.log($(this).attr("id"));
									 console.log(pos.left)
									 console.log(pos.top)
							 }
					 });

					 */
			 }
		});
		$("#workstationContainer").droppable({
		  //accept: ".spandiv",
			drop: function(ev,ui) {
				/*
				$.ui.ddmanager.current.cancelHelperRemoval = false;
							 cloneCounter++;
							 var element = $(ui.draggable).clone();
							 element.addClass("tempclass");
							 $(this).append(element);
							 $(".tempclass").attr("id", "clonediv" + cloneCounter);
							 $("#clonediv" + counter).removeClass("tempclass");
							 //Get the dynamically item id
							 draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
							 itemDragged = "dragged" + RegExp.$1
							 console.log(itemDragged)
							 $("#clonediv" + counter).addClass(itemDragged);
				*/
				var newBut = ui.helper[0];
				newBut.style="";
				this.append(newBut);

				console.log(ui);
				console.log(ev);
				console.log(this);
				console.log("was dropped");
			}
		});

		$(".newPanelButton").click(function(){
				var rowField = $("#rowField");
				var panelNum = rowField.children().length;
				var newPanel = createPanel(panelNum  + 1);
				rowField.append(newPanel);
				makeAccordians();
				setClickEvents();
			}
		);

		$(".rightPanelButton").click(function(){
				var rowField = $("#rowField");
			  var idNum = this.id.split("-")[1];
				var thisPanel = $("#panel-"+idNum);
				var nextPanel = thisPanel.next();
				if(nextPanel.length >0){
					var thisCopy = thisPanel.clone(true,true);
					nextPanel.after(thisCopy);
					thisPanel.remove();
					setClickEvents();
			  }
			}
		);

		$(".leftPanelButton").click(function(){
				var rowField = $("#rowField");
				var idNum = this.id.split("-")[1];
				var thisPanel = $("#panel-"+idNum);
				var prevPanel = thisPanel.prev();
				if(prevPanel.length >0){
					var thisCopy = thisPanel.clone(true,true);
					prevPanel.before(thisCopy);
					thisPanel.remove();
					setClickEvents();
			  }
			}
		);

		$(".closePanelButton").click(function(){
				var rowField = $("#rowField");
				var panelNum = rowField.children().length;
				if(panelNum >0){
					this.parentElement.parentElement.remove();
				}
			}
		);

		//audio, will be done programatically later
		$(".m-pla").click(function(){
			A_Plastic.currentTime = 0;
			A_Plastic.play(0);
			}
		)
		$(".m-hor").click(function(){
			A_Horiscopes.currentTime = 0;
			A_Horiscopes.play(0);
			}
		)
		$(".m-smo").click(function(){
			A_Smoothies.currentTime = 0;
			A_Smoothies.play(0);
			}
		)
		$(".m-hap").click(function(){
			A_HappyMeal.currentTime = 0;
			A_HappyMeal.play(0);
			}
		)
		$(".m-10").click(function(){
			A_MTen.currentTime = 0;
			A_MTen.play(0);
			}
		)
		$(".m-16").click(function(){
			A_Sixteen.currentTime = 0;
			A_Sixteen.play(0);
			}
		)
		$(".m-30").click(function(){
			A_MThirty.currentTime = 0;
			A_MThirty.play(0);
			}
		)
		$(".m-49").click(function(){
			A_FoutyNine.currentTime = 0;
			A_FoutyNine.play(0);
			}
		)
		$(".m-shi").click(function(){
			A_ShitPro.currentTime = 0;
			A_ShitPro.play(0);
			}
		)
		$(".m-hom").click(function(){
			A_Homeless.currentTime = 0;
			A_Homeless.play(0);
			}
		)
		$(".m-was").click(function(){
			A_WasteFood.currentTime = 0;
			A_WasteFood.play(0);
			}
		)
		$(".A_LockedOut").click(function(){
			A_LockedOut.play();
			}
		)

	}

	function makeAccordians(){
		$( ".firstSubCat" ).accordion({heightStyle: 'panel',collapsible: true,heightStyle: "content"});
		$( ".secondSubCat" ).accordion({heightStyle: 'panel',collapsible: true,heightStyle: "content"});
	}

	var newPanel = createPanel("1");
	rowField.append(newPanel);
	makeAccordians();
	setClickEvents();
});
