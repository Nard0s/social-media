document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const imageInput = document.getElementById('image');
        const imageFile = imageInput.files[0];

        if (imageFile) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageBase64 = e.target.result;

                const event = {
                    title,
                    description,
                    image: imageBase64
                };

                let events = JSON.parse(localStorage.getItem('events')) || [];
                events.push(event);
                localStorage.setItem('events', JSON.stringify(events));

                alert('Event posted successfully!');
                eventForm.reset();
            };

            reader.readAsDataURL(imageFile);
        } else {
            alert('Please select an image file.');
        }
    });
});
