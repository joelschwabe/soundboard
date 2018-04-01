//return to caller and then:   row.append(newPanel)
function createPanel(panelId){
  //create td with id and controls//
  var newPanel = document.createElement("td");
  var newPanelHeader = document.createElement("div");
  var panelName = document.createElement("input");
  var newPanelButton = document.createElement("button");
  var closePanelButton = document.createElement("button");
  var leftPanelButton = document.createElement("button");
  var rightPanelButton = document.createElement("button");

  newPanel.id = "panel-" + panelId;
  panelName.id = "panelName-" + panelId;
  newPanelHeader.id = "panelHeader-" + panelId;
  newPanelButton.id = "newPanelButton-" + panelId;
  closePanelButton.id = "closePanelButton-" + panelId;
  leftPanelButton.id = "leftPanelButton-" + panelId;
  rightPanelButton.id = "rightPanelButton-" + panelId;

  newPanel.className = "staticPanel";
  panelName.className = "panelName";
  newPanelHeader.className = "panelHeader";
  newPanelButton.className = "newPanelButton";
  closePanelButton.className = "closePanelButton";
  leftPanelButton.className = "leftPanelButton";
  rightPanelButton.className = "rightPanelButton";

  newPanelButton.textContent = "+";
  closePanelButton.textContent = "×";
  leftPanelButton.textContent = "←";
  rightPanelButton.textContent = "→";
  panelName.placeholder = "Name this column";
  /* // Needs to be in an addEvents function that runs after the panel has been inserted on to page
  $(newPanelButton).click(function(){
    createPanel(someId);
  );
  $(closePanelButton).click(function(){
    //destroy this panel
  );
  */
  newPanelHeader.append(panelName);
  newPanelHeader.append(leftPanelButton);
  newPanelHeader.append(rightPanelButton);
  newPanelHeader.append(newPanelButton);
  newPanelHeader.append(closePanelButton);
  newPanel.append(newPanelHeader);

  var html = htmlToElement("<div id='characterCat' class='firstSubCat'> <h3>Maddox</h3> <div id='maddoxCat' class='secondSubCat'> <h3>Nouns</h3> <ul> <li><button class='spanButton' id='m-hap'> Happy Meals </button></li> <li><button class='spanButton' id='m-pla'> Plastic </button></li> <li><button class='spanButton' id='m-hor'> Horiscopes </button></li> <li><button class='spanButton' id='m-smo'> Smoothies </button></li> </ul> <h3>Numbers</h3> <ul> <li><button class='spanButton' id='m-10'> 10 </button></li> <li><button class='spanButton' id='m-16'> 16 </button></li> <li><button class='spanButton' id='m-30'> 30 </button></li> <li><button class='spanButton' id='m-49'> 49 </button></li> </ul> <h3>Problems</h3> <ul> <li><button class='spanButton' id='m-shi'> Shit </button></li> <li><button class='spanButton' id='m-hom'> Homeless </button></li> <li><button class='spanButton' id='m-was'> Wasting Food </button></li> <li><button class='spanButton' id='A_LockedOut'> Locked Out </button></li> </ul> </div> <h3>Dick</h3> <div id='dickCat' class='secondSubCat'> <h3>Nouns</h3> <ul> <li><button class='spanButton' id='d-bsa'> Bicycle </button></li> <li><button class='spanButton' id='d-fb'> First Base </button></li> <li><button class='spanButton' id='d-lib'> Libraries </button></li> <li><button class='spanButton' id='d-db'> Dropbox </button></li> </ul> <h3>Numbers</h3> <ul> <li><button class='spanButton' id='d-2'> 2 </button></li> <li><button class='spanButton' id='d-10'> 10 </button></li> <li><button class='spanButton' id='d-100'> 100 </button></li> </ul> <h3>Verb</h3> <ul> <li><button class='spanButton' id='d-del'> Delete </button></li> <li><button class='spanButton' id='d-ana'> Anal </button></li> <li><button class='spanButton' id='d-ora'> Oral </button></li> <li><button class='spanButton' id='d-rc'> Rampant Collusion </button></li> </ul> <h3>Problems</h3> <ul> <li><button class='spanButton' id='d-eath'> Eating Healthy </button></li> <li><button class='spanButton' id='d-dri'> Drinking </button></li> <li><button class='spanButton' id='d-jpan'> Jizzing Pants </button></li> <li><button class='spanButton' id='d-back'> Backseat Driving </button></li> </ul> </div> <h3>Sean</h3> <div id='seanCat' class='secondSubCat'> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> </div> <h3>Asterios</h3> <div id='asteriosCat' class='secondSubCat'> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> <h4>Test</h4> <ul> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> <li><button class='spanButton'> I am a sound </button></li> </ul> </div>");

  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  newPanel.append(html);

  return newPanel;
}
