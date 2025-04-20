//your JS code here. If required.
let counter = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");
let countValue = 0;
btn.addEventListener("click", () => {
	alert(countValue);
	countValue++;
	counter.innerText = countValue;
	
})