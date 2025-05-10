document.getElementById ("thisform").addEventListener ("submit", function (event) {
    event.preventDefault ();

    // Read input values
    const fullname = document.getElementById ("fullname").value;
    const email = document.getElementById ("email").value;
    const phone = document.getElementById ("phone").value;
    const address = document.getElementById ("address").value;

    // JSON body
    const inputdata = {
        fullname: fullname,
        email: email,
        phone: phone,
        address: address
    };

    // Send input data to the API
    fetch ("https://www.superlender.co.ke/test/test-api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify (inputdata)
    })
    .then (response => response.json ())
    .then (result => {
        console.log ("Success:", result);
        alert ("Submitted successfully!");
    })
    .catch (error => {
        console.error ("Error:", error);
        alert ("Failed!");
    });
});