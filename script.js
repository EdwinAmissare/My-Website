// Back-to-top button functionality
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Live chat toggle functionality
const chatButton = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-window');
const closeChatButton = document.getElementById('close-chat');

chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('show');
});

closeChatButton.addEventListener('click', () => {
    chatWindow.classList.remove('show');
});
