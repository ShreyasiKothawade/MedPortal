document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const appointmentType = document.getElementById('appointmentType').value;

    // Display form data
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Appointment Type:', appointmentType);

    // You can perform further actions here, such as sending the data to a server
});
