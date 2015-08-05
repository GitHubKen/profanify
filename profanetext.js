var profaneWords = ["anus", "arse", "arsehole", "ass", "asshole", "bastard", "bitch", 
"bloody", "bollocks", "child-fucker", "Christ on a bike", "Christ on a cracker", "cunt", 
"damn", "fuck", "goddamn", "godsdamn", "hell", "holy shit", "Jesus", "ass-hat", 
"ass-jabber", "ass-pirate", "assbag", "assbandit", "motherfucker"
];
var customProfaneWords = [];
function censor(utteredWords) {
	for (idx in profaneWords) {
     utteredWords = utteredWords.replace(profaneWords[idx], "expletive");
	}
	for (idx in customProfaneWords) {
     utteredWords = utteredWords.replace(customProfaneWords[idx], "expletive");
	}
   return utteredWords;
	}
function addProfaneWords(words){
   customProfaneWords.push(words);
}
 function getProfaneWords(){
   return profaneWords.concat(customProfaneWords);
}
exports.censor = censor;
exports.addProfaneWords = addProfaneWords;
exports.getProfaneWords = getProfaneWords;
