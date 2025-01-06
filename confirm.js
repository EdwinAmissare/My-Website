// Generate a random confirmation number
function generateConfirmationNumber() {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Get booking details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const roomType = urlParams.get('room');
const checkIn = urlParams.get('check-in');
const checkOut = urlParams.get('check-out');
const totalAmount = urlParams.get('total');

// Display booking details
document.getElementById('confirmation-number').textContent = generateConfirmationNumber();
document.getElementById('room-type').textContent = roomType;
document.getElementById('check-in-date').textContent = checkIn;
document.getElementById('check-out-date').textContent = checkOut;
document.getElementById('total-amount').textContent = totalAmount;