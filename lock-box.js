const prompt = require('prompt-sync')({sigint: true});

let pinCode = Number(prompt('Please enter numbers for lock box: '));
	// console.log(pincode);
if (pinCode === 1234){
    console.log("success.");
} else if (pinCode !== 1234){
    console.log("fail.");
}