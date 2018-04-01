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
  newPanelButton.className = "newPanelButton staticPanelButton";
  closePanelButton.className = "closePanelButton staticPanelButton";
  leftPanelButton.className = "leftPanelButton staticPanelButton";
  rightPanelButton.className = "rightPanelButton staticPanelButton";

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
  newPanelHeader.append(closePanelButton);
  newPanelHeader.append(rightPanelButton);
  newPanelHeader.append(leftPanelButton);
  newPanelHeader.append(newPanelButton);

  newPanel.append(newPanelHeader);

  var html = htmlToElement("<div id='characterCat' class='firstSubCat'> <h3>Maddox</h3> <div id='maddoxCat' class='secondSubCat'> <h3>Nouns</h3> <ul> <li><div class='spandiv m-hap'> Happy Meals </div></li> <li><div class='spandiv m-pla'> Plastic </div></li> <li><div class='spandiv m-hor'> Horiscopes </div></li> <li><div class='spandiv m-smo'> Smoothies </div></li> <li><div class='spandiv m-1'> Thing </div></li> <li><div class='spandiv m-2'> Thing </div></li> <li><div class='spandiv m-3'> Thing </div></li> <li><div class='spandiv m-3'> Thing </div></li> <li><div class='spandiv m-5'> Thing </div></li> <li><div class='spandiv m-6'> Thing </div></li> <li><div class='spandiv m-7'> Thing </div></li> <li><div class='spandiv m-8'> Thing </div></li> </ul> <h3>Numbers</h3> <ul> <li><div class='spandiv m-10'> 10 </div></li> <li><div class='spandiv m-16'> 16 </div></li> <li><div class='spandiv m-30'> 30 </div></li> <li><div class='spandiv m-49'> 49 </div></li> </ul> <h3>Problems</h3> <ul> <li><div class='spandiv m-shi'> Shit </div></li> <li><div class='spandiv m-hom'> Homeless </div></li> <li><div class='spandiv m-was'> Wasting Food </div></li> <li><div class='spandiv A_LockedOut'> Locked Out </div></li> </ul> </div> <h3>Dick</h3> <div id='dickCat' class='secondSubCat'> <h3>Nouns</h3> <ul> <li><div class='spandiv d-bsa'> Bicycle </div></li> <li><div class='spandiv d-fb'> First Base </div></li> <li><div class='spandiv d-lib'> Libraries </div></li> <li><div class='spandiv d-db'> Dropbox </div></li> </ul> <h3>Numbers</h3> <ul> <li><div class='spandiv d-2'> 2 </div></li> <li><div class='spandiv d-10'> 10 </div></li> <li><div class='spandiv d-100'> 100 </div></li> </ul> <h3>Verb</h3> <ul> <li><div class='spandiv d-del'> Delete </div></li> <li><div class='spandiv d-ana'> Anal </div></li> <li><div class='spandiv d-ora'> Oral </div></li> <li><div class='spandiv d-rc'> Rampant Collusion </div></li> </ul> <h3>Problems</h3> <ul> <li><div class='spandiv d-eath'> Eating Healthy </div></li> <li><div class='spandiv d-dri'> Drinking </div></li> <li><div class='spandiv d-jpan'> Jizzing Pants </div></li> <li><div class='spandiv d-back'> Backseat Driving </div></li> </ul> </div> <h3>Sean</h3> <div id='seanCat' class='secondSubCat'> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> </div> <h3>Asterios</h3> <div id='asteriosCat' class='secondSubCat'> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> <h4>Test</h4> <ul> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> <li><div class='spandiv'> I am a sound </div></li> </ul> </div> </td>");

  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  newPanel.append(html);

  return newPanel;
}
