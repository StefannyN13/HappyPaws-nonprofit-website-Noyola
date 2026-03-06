$(document).ready(function () {

    // *************************************************************************
    // ********************** Fields validation - Blur *************************
    // *************************************************************************
    //  Blur ---------> Event - When the field changes focus
    //  $("name") ----> Selects id=id_name from html
    //  .val() -------> Gets the value entered in that variable
    //  .trim() ------> Removes extra spaces at the beginning or end

    //------------------- Name validation -----------------------------
    $("#name").on("blur", function () {
        const name = $(this).val().trim();
        if (name === "") {
            $("#nameError").text("Name is required.");
            $("#name").addClass("error-field"); // adds red border
        } else if (name.length < 2) {
            $("#nameError").text("Name must be at least 2 characters.");
            $("#name").removeClass("error-field");
        } else {
            $("#nameError").text(""); // No message if fields is OK
            $("#name").removeClass("error-field");
        }
    });

    //------------------- Email validation -----------------------------
    $("#email").on("blur", function () {
        const email = $(this).val().trim();
        // Regex ~ Regular expression
        // ^ ----------> Start of the string
        // [^\s@]------> One or more characters that are not spaces or @
        // $ ----------> End of the string
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#emailError").css({color:'#E60000'}).text("Email is required.");
            $("#email").addClass("error-field");
        //.test(email) checks if the email matches the pattern
        // ! -> NOT
        // Resulting = If the email does NOT match the patter, show error
        } else if (!emailPattern.test(email)) {
            $("#emailError").text("Please enter a valid email address (e.g., name@example.com)");
            $("#email").addClass("error-field");
        } else {
            $("#emailError").text("");
            $("#email").removeClass("error-field");
        }
    });

    //------------------- Message validation -------------------------
    $("#message").on("blur", function () {
        const message = $(this).val().trim();
        if (message === "") {
            $("#messageError").text("Message is required.");
            $("#message").addClass("error-field");
        } else {
            $("#messageError").text("");
            $("#message").removeClass("error-field");
        }
    });

    // *************************************************************************
    // ********************** Fields validation - Submit ***********************
    // *************************************************************************
    // Validates fields once user clicks the submit button

    $("#contactForm").submit(function (event) {
        event.preventDefault();

        let isValid = true;
        // Clear previous error messages
        $(".error").text("");

        const name = $("#name").val().trim();
        if (name === "") {
            $("#nameError").text("Name is required.");
            $("#name").addClass("error-field");
            isValid = false;
        } else if (name.length < 2) {
            $("#nameError").text("Name must be at least 2 characters.");
            isValid = false;
            $("#name").removeClass("error-field");
        }
        else{
            $("#name").removeClass("error-field");
        }

        const email = $("#email").val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#emailError").css({color:'#E60000'}).text("Email is required.");
            isValid = false;
            $("#email").addClass("error-field");
        } else if (!emailPattern.test(email)) {
            $("#emailError").text("Please enter a valid email address (e.g., name@example.com)");
            $("#email").addClass("error-field");
            isValid = false;
        } else{
            $("#email").removeClass("error-field");
        }

        const message = $("#message").val().trim();
        if (message === "") {
            $("#messageError").text("Message is required.");
            isValid = false;
            $("#message").addClass("error-field");
        } else{
            $("#message").removeClass("error-field");
        }


        if (isValid) {
            //Feedback Message
            $("#SuccessFeedback").text("Your message was sent successfully!").css({color:'green'}).fadeIn();
            setTimeout(() => $("#SuccessFeedback").fadeOut(), 3000);

            $("#contactForm")[0].reset();

            // Change/Reset Submit button to gray
            $("#submitBtn").removeClass("btn-success").addClass("btn-secondary");
        } else {
            $("#SuccessFeedback").text("*** Please complete all required fields").css({color:'red'}).fadeIn();
            setTimeout(() => $("#SuccessFeedback").fadeOut(), 3000);
            $("#submitBtn").removeClass("btn-success").addClass("btn-secondary");
        }
  });
    // *************************************************************************
    // ********************** Button Change - Validation ***********************
    // *************************************************************************
    // Check if all the fields meet the requirements and change the button "submit" to a green color
    //input ---> Once the value change
    $("#name, #email, #message").on("input", function() {
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length >= 2 && emailPattern.test(email) && message !== "") {
            $("#submitBtn").removeClass("btn-secondary").addClass("btn-success");
        } else {
            $("#submitBtn").removeClass("btn-success").addClass("btn-secondary");
        }
    });
});