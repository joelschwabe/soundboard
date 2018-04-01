//return to caller and then:   row.append(newPanel)
function createPanel(panelId){
  //create td with id and controls//
  var newPanel = document.createElement("td");

  var newPanelHeader = document.createElement("div");
  var panelName = document.createElement("input");
  var newPanelButton = document.createElement("button");
  var closePanelButton = document.createElement("button");
  newPanel.id = panelId;
  newPanel.className = "staticPanel";
  panelName.id = panelId + "-inputName";
  panelName.className = "panelName";
  panelName.placeholder = "Name this column";
  newPanelButton.id = panelId + "-newPanelButton";
  closePanelButton.id = panelId + "-closePanelButton";
  newPanelButton.className = "newPanelButton";
  closePanelButton.className = "closePanelButton";
  newPanelButton.textContent = "+";
  closePanelButton.textContent = "X";
  /* // Needs to be in an addEvents function that runs after the panel has been inserted on to page
  $(newPanelButton).click(function(){
    createPanel(someId);
  );
  $(closePanelButton).click(function(){
    //destroy this panel
  );
  */
  newPanelHeader.append(panelName);
  newPanelHeader.append(newPanelButton);
  newPanelHeader.append(closePanelButton);
  newPanel.append(newPanelHeader);


  //create controls for audio here
  //use this pattern:
  /*
  <div id="characterCat" class="firstSubCat">
		<h3>Character</h3>
			<div id="maddoxCat" class="secondSubCat">
				<h3>Word Type</h3>
        <ul>
          <li><button class="spanButton" id="m-hap"> Thing1 </button></li>
          <li><button class="spanButton" id="m-pla"> Thing2 </button></li>
          <li><button class="spanButton" id="m-hor"> Thing3 </button></li>
        </ul>
  */



  return newPanel;
}
