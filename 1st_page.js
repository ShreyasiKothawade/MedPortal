function getDoctors() {
    var speciality = document.getElementById("speciality").value;
    var doctorSelect = document.getElementById("doctor");
    doctorSelect.innerHTML = "";

    // Add doctors based on the selected specialization
    if (speciality === "Cardiology") {
        addDoctors(["Dr. Smith", "Dr. Johnson", "Dr. Williams"]);
    } else if (speciality === "Dermatology") {
        addDoctors(["Dr. Brown", "Dr. Davis", "Dr. Miller"]);
    }
    // Add more conditions for other specializations

    function addDoctors(doctors) {
        doctors.forEach(function(doctor) {
            var option = document.createElement("option");
            option.text = doctor;
            doctorSelect.add(option);
        });
    }
}

function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var bookingDate = document.getElementById("bookingDate").value;
    var speciality = document.getElementById("speciality").value;
    var doctor = document.getElementById("doctor").value;
    var previousHistory = document.getElementById("previousHistory").value;

    // Display appointment details
    var appointmentDetails = document.getElementById("appointmentDetails");
    appointmentDetails.innerHTML = `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
                                    <p><strong>Phone:</strong> ${phone}</p>
                                    <p><strong>Email:</strong> ${email}</p>
                                    <p><strong>Booking Date:</strong> ${bookingDate}</p>
                                    <p><strong>Speciality:</strong> ${speciality}</p>
                                    <p><strong>Doctor:</strong> ${doctor}</p>
                                    <p><strong>Previous History:</strong> ${previousHistory}</p>`;
}
