document.addEventListener('DOMContentLoaded', () => {
    const selectedEvent = JSON.parse(localStorage.getItem('selectedEvent'));

    if (selectedEvent) {
        document.getElementById('eventImage').src = selectedEvent.image;
        document.getElementById('eventDescription').textContent = selectedEvent.description;
        document.getElementById('eventLocation').textContent = selectedEvent.location;
        document.getElementById('eventDate').textContent = selectedEvent.date;
        document.getElementById('eventTime').textContent = selectedEvent.time;
    } else {
        alert('No event selected!');
        window.location.href = 'event.html';
    }
});
