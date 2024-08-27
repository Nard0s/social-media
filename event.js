document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('eventList');

    function truncateDescription(description, wordLimit) {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    }

    function loadEvents() {
        let events = JSON.parse(localStorage.getItem('events')) || [];
        if (events.length === 0) {
            eventList.innerHTML = '<p>No events to display.</p>';
            return;
        }

        eventList.innerHTML = ''; // Clear existing events

        events.forEach((event, index) => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('card');

            // Truncate description to 15 words
            const truncatedDescription = truncateDescription(event.description, 15);

            eventCard.innerHTML = `
                <img src="${event.image}" alt="${event.title}" class="dbu-logo">
                <div class="card-content">
                    <h2>${event.title}</h2>
                    <p>${truncatedDescription}</p>
                    <button class="btn read-more" data-index="${index}">Read More</button>
                    <button class="btn delete-event" data-index="${index}">Delete</button>
                </div>
            `;

            eventList.appendChild(eventCard);
        });

        // Add event listeners to the "Read More" buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                const event = events[index];
                localStorage.setItem('selectedEvent', JSON.stringify(event));
                window.location.href = 'club.html';
            });
        });

        // Add event listeners to the "Delete" buttons
        document.querySelectorAll('.delete-event').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                events.splice(index, 1);
                localStorage.setItem('events', JSON.stringify(events));
                loadEvents(); // Reload events after deletion
            });
        });
    }

    loadEvents();
});
