window.onload = function() {
    const message = "I miss you so much!";
    const missMessage = document.getElementById('miss-message');
    const timestamp = document.getElementById('timestamp');

    // Display the miss message
    missMessage.innerText = message;

    // Get the current date and time and display it
    const now = new Date();
    timestamp.innerText = `Last checked: ${now.toLocaleString()}`;
};
