//your JS code here. If required.

const form = document.getElementById('loginForm');

        form.addEventListener('submit', function(event) {
            // Prevent the form from actually refreshing the page
            event.preventDefault();

            // Extract values using the name attributes
            const firstName = form.elements['First Name'].value;
            const lastName = form.elements['Last Name'].value;
            const phoneNumber = form.elements['Phone Number'].value;
            const emailId = form.elements['Email ID'].value;

            // Construct the alert string exactly as requested
            const alertText = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;

            alert(alertText);
        });