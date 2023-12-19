// Get the form by its ID
var firForm = document.getElementById("fir-form");
document.getElementById('registerButton').addEventListener('click', function() {
    // Simulate FIR registration
    setTimeout(function() {
        // Generate FIR number
        var firNumber = 'FIR' + Math.floor(Math.random() * 1000000);
        
        // Display FIR number on the page
        document.getElementById('firNumber').innerText = 'FIR Number: ' + firNumber;
        document.getElementById('firNumber').style.display = 'block';
    }, 1000); // 1 second delay
});
function validateForm() {
    var e = document.forms["myForm"]["phone"].value;

    if (!validatePhone(e)) {
        document.getElementById("error").innerHTML = "Invalid phone number format";
        return false;
    }
    return true;
}
function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}
// Add an event listener for the form submission
firForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form inputs
    var complaint = document.getElementById("complaint").value;
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;

    // Generate a unique FIR number using the current timestamp
    var firNumber = Date.now();

    // Get the current date and time
    var currentDateTime = new Date();
    var currentDate = currentDateTime.toLocaleDateString();
    var currentTime = currentDateTime.toLocaleTimeString();

    // Create a new object to store the FIR data
    var firData = {
        "complaint": complaint,
        "name": name,
        "contact": contact,
        "firNumber": firNumber,
        "date": currentDate,
        "time": currentTime
    };

    // Perform any additional processing or validation on the FIR data
    // ...

    // Submit the FIR data to the server
    // ...

    // Clear the form inputs
    document.getElementById("complaint").value = "";
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";

    // Display a confirmation message to the user
    alert("FIR successfully registered. Your FIR number is: " + firNumber);
});