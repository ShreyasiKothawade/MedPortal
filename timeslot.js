document.addEventListener("DOMContentLoaded", function() {
    // Generate time slots
    generateTimeSlots();

    // Add event listener to time slots
    document.querySelectorAll('.time-slot').forEach(item => {
        item.addEventListener('click', event => {
            // Deselect previously selected time slots
            document.querySelectorAll('.time-slot.selected').forEach(slot => {
                slot.classList.remove('selected');
            });
            
            // Select the clicked time slot
            event.target.classList.add('selected');

            // Show confirm booking button
            document.getElementById('confirmBooking').style.display = 'block';
        });
    });
});

function generateTimeSlots() {
    const timeSlotsContainer = document.getElementById('timeSlots');
    let hour = 10;
    let minutes = 0;
    const endTime = 17; // 5:00 PM

    while (hour < endTime) {
        let timeSlot = '';
        if (minutes === 0) {
            timeSlot = `${hour}:00 AM`;
        } else {
            timeSlot = `${hour}:${minutes < 10 ? '0' + minutes : minutes} AM`;
        }

        const timeSlotElement = createTimeSlotElement(timeSlot);
        timeSlotsContainer.appendChild(timeSlotElement);

        if (minutes === 0) {
            minutes = 30;
        } else {
            hour++;
            minutes = 0;
        }
    }
}

function createTimeSlotElement(timeSlot) {
    const timeSlotElement = document.createElement('div');
    timeSlotElement.classList.add('time-slot');
    timeSlotElement.textContent = timeSlot;
    return timeSlotElement;
}
