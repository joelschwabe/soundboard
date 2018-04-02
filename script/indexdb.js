//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}
//artist-episode-words_words_words-typeOfWord
const audioClips = [
   { id: "0", artist: "dick", episode: "88", words: "nonElmersGlue", typeOfWord: "noun", startTime: 0, length: 2.11591836735 }
];
var db;
var request = window.indexedDB.open("newDatabase", 1);

request.onerror = function(event) {
   console.log("error: ");
};

request.onsuccess = function(event) {
   db = request.result;
   console.log("success: "+ db);
};

request.onupgradeneeded = function(event) {
   var db = event.target.result;
   var objectStore = db.createObjectStore("audioMap", {keyPath: "id"});

   for (var i in audioClips) {
      objectStore.add(audioClips[i]);
   }
}

function read() {
   var transaction = db.transaction(["audioMap"]);
   var objectStore = transaction.objectStore("audioMap");
   var request = objectStore.get("0");

   request.onerror = function(event) {
      alert("Unable to retrieve daa from database!");
   };

   request.onsuccess = function(event) {
      // Do something with the request.result!
      if(request.result) {
         alert("Artist: " + request.result.artist + ", Episode: " + request.result.episode + ", Words: " + request.result.words);
      }

      else {
         alert("Couldn't be found in your database!");
      }
   };
}

function readAll() {
   var objectStore = db.transaction("audioMap").objectStore("audioMap");

   objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;

      if (cursor) {
         alert("Artist for id " + cursor.key + " is " + cursor.value.artist + ", Episode: " + cursor.value.episode + ", words: " + cursor.value.words + ", type: " + cursor.value.typeOfWord);
         cursor.continue();
      }

      else {
         alert("No more entries!");
      }
   };
}

function add(newClip) {
   var request = db.transaction(["audioMap"], "readwrite")
   .objectStore("audioMap")
   .add({ id: "1", artist: "dick", episode: "87", words: "deepPsychProblems", typeOfWord: "phrase", startTime: 4.9110204081, length: 2.79510204082 });

   request.onsuccess = function(event) {
      alert("deepPsychProblems has been added to your database.");
   };

   request.onerror = function(event) {
      alert("Unable to add data\r\deepPsychProblems is aready exist in your database! ");
   }
}

function remove(id) {
   var request = db.transaction(["audioMap"], "readwrite")
   .objectStore("audioMap")
   .delete(id);

   request.onsuccess = function(event) {
      alert("Entry " + id + " has been removed from your database.");
   };
}
