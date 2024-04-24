var result = new Array();
var k = 0;
var refreshIntervalId;
//add citation for setInterval

function enter(){
	k=0; result=[];
	clearInterval(refreshIntervalId);
	let input = document.getElementById('userAnswer').value;
	document.getElementById("enter").innerHTML = input;
	
	display(input);
}

function display(input){
	let counter = 0;
	
	for(let i=0; i<input.length; i++){
		for(let m=0; m<letters.length; m++){
			if(input.charAt(i)==letters[m]){
				result[counter]=alphabet[m];
				counter++;
			}
		}
	}
	
	document.getElementById("alphaloop").src = result[k];
	k++;
// add flashing
// add the enter bar
	refreshIntervalId = setInterval(loopthrough, 1000);
}

function loopthrough(){
	document.getElementById("alphaloop").src = result[k];
	
	k++;
	
	if(k == result.length) 
    {
		clearInterval(refreshIntervalId);
	}
}

function again(){
	k=0;
	clearInterval(refreshIntervalId);
	document.getElementById("alphaloop").src = result[k];
	k++;
	
	refreshIntervalId = setInterval(loopthrough, 1000);
}

var letters = new Array();
letters[0] = "a";
letters[1] = "b";
letters[2] = "c";
letters[3] = "d";
letters[4] = "e";
letters[5] = "f";
letters[6] = "g";
letters[7] = "h"
letters[8] = "i";
letters[9] = "j";
letters[10] = "k";
letters[11] = "l";
letters[12] = "m";
letters[13] = "n";
letters[14] = "o";
letters[15] = "p";
letters[16] = "q";
letters[17] = "r";
letters[18] = "s";
letters[19] = "t";
letters[20] = "u";
letters[21] = "v";
letters[22] = "w";
letters[23] = "x";
letters[24] = "y";
letters[25] = "z";

var alphabet = new Array();
alphabet[0] = "signfs/a";
alphabet[1] = "signfs/b";
alphabet[2] = "signfs/c";
alphabet[3] = "signfs/d";
alphabet[4] = "signfs/e";
alphabet[5] = "signfs/f";
alphabet[6] = "signfs/g";
alphabet[7] = "signfs/h"
alphabet[8] = "signfs/i";
alphabet[9] = "signfs/j";
alphabet[10] = "signfs/k";
alphabet[11] = "signfs/l";
alphabet[12] = "signfs/m";
alphabet[13] = "signfs/n";
alphabet[14] = "signfs/o";
alphabet[15] = "signfs/p";
alphabet[16] = "signfs/q";
alphabet[17] = "signfs/r";
alphabet[18] = "signfs/s";
alphabet[19] = "signfs/t";
alphabet[20] = "signfs/u";
alphabet[21] = "signfs/v";
alphabet[22] = "signfs/w";
alphabet[23] = "signfs/x";
alphabet[24] = "signfs/y";
alphabet[25] = "signfs/z";

function openNav() {
	document.getElementById("mySidebar").style.width = "250px"; 
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}