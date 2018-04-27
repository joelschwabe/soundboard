var clips = require('./audio/processed/clips.json');
var i, j, lists = [],artists=[];
for (i = 0; i < clips.length; i++) {
	if (!artists.includes(clips[i].artist)) { 
		artists.push(clips[i].artist);
		lists[clips[i].artist]= [];
	}
	lists[clips[i].artist].push(clips[i]);
}
var comboAudios;
//for (j = 0; j < artists.length; j++) {
//	for (i = 0; i < lists[artists[j]]; i++) {
//		audios[artists[j]].push(new Audio('audio/processed/'+artists[j]+'Combo.mp3'));
//	}
//}
for (j = 0; j < artists.length; j++) {
	
	comboAudios[artists[j]] = new Audio('audio/processed/'+artists[j]+'Combo.mp3');
}
comboAudios['dick'].play(0);
