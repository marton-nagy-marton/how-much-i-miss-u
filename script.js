window.onload = function() {
    const messages = [
        "I miss you very much",
        "Every second without you feels like an eternity.",
        "I can't wait to hold you again.",
        "I miss your smile more than words can say.",
        "Being apart from you is the hardest thing.",
        "I miss you like crazy!",
        "Life feels incomplete without you.",
        "Every day without you is a challenge.",
        "I wish you were here with me right now.",
        "You're always on my mind."
    ];

    // Function to get a random message
    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    const missMessage = document.getElementById('miss-message');
    const timestamp = document.getElementById('timestamp');

    // Display a random miss message
    missMessage.innerText = getRandomMessage();

    // Get the current date and time and display it
    const now = new Date();
    timestamp.innerText = `Last checked: ${now.toLocaleString()}`;
};
