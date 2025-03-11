//your JS code here. If required.
let counter = 0; // Initial Counter Value

document.getElementById("incrementBtn").addEventListener("click", function () {
    alert("Current value before increment: " + counter); // Show alert with un-incremented value
    counter++; // Increment the counter
    document.getElementById("counter").innerText = counter; // Update counter display
});
