  // Get booking details from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const roomType = urlParams.get('room');
  const checkIn = urlParams.get('check-in');
  const checkOut = urlParams.get('check-out');

  // Display booking details
  document.getElementById('room-type-display').textContent = roomType;
  document.getElementById('check-in-display').textContent = checkIn;
  document.getElementById('check-out-display').textContent = checkOut;

  // Calculate number of nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const nights = Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  document.getElementById('nights-display').textContent = nights;

  // Calculate total amount
  let pricePerNight;
  switch (roomType) {
      case 'deluxe':
          pricePerNight = 120;
          break;
      case 'suite':
          pricePerNight = 250;
          break;
      case 'standard':
          pricePerNight = 90;
          break;
      default:
          pricePerNight = 0;
  }
  const totalAmount = nights * pricePerNight;
  document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

  // Form submission
  document.getElementById('payment-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Payment processed successfully! Thank you for booking with Hotel GREENLIGHT.');
      // Here you would typically send the payment data to a server for processing
  });