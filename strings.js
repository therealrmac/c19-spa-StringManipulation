var inputArea= document.getElementById('inputArea');
const output= document.getElementById('output');
const output2= document.getElementById('output2');
const output3= document.getElementById('output3');
const goButton= document.getElementById('goButton');

function reversal() {
	var str= inputArea.value;
	var splitString= str.toLowerCase().split("");
	var reverseArr= splitString.reverse();
	var joinArr= reverseArr.join("");
	output.innerHTML= joinArr;
	if(str >=0){
		alert('Dont enter a number');
		location.reload();
	}
}

function alphabits() {
	var str= inputArea.value;
	var splitString= str.toLowerCase().split("");
	var sortArr= splitString.sort();
	var orderArr= sortArr.join("");
	output2.innerHTML= orderArr;
	if(str >=0){
		location.reload();
	}
}

function palindrome() {
	var str= inputArea.value;
	if(str ===str.split("").reverse().join("")){
		output3.innerHTML= `${str} is actually a palindrome`
	}
	if(str !==str.split("").reverse().join("")){
		output3.innerHTML= `${str} is not a palindrome`
	}
	if(str >=0){
		location.reload();
	}
}

goButton.addEventListener('click', function(){
	var testString = inputArea;
 	reversal(testString);
	alphabits(testString);
	palindrome(testString);
});
inputArea.addEventListener('keypress',function(x){
		var testString = inputArea;
		if(x.keyCode== 13 || x.which==13){
			x.preventDefault();
		 	reversal(testString);
			alphabits(testString);
			palindrome(testString);
	}
	if(inputArea >=0){
		location.reload();
	}
});

