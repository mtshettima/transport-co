function submitBooking() {
    var name = document.getElementById('name').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;

    if (name && destination && date) {
        alert('Booking successful!\nName: ' + name + '\nDestination: ' + destination + '\nDate: ' + date);
    } else {
        alert('Please fill in all fields before submitting the booking.');
    }
}
function redirectToBooking(promoCode) {
    window.location.href = "booking.html?promo"+promoCode;
}

function submitReview() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var review = document.getElementById("review").value;

    if (fullName === '' || email === '' || review === '') {
        alert("Please fill in all the fields before submitting your review.");
    } else {
        alert("Thanks for the feedback, " + fullName + "!");
    }
}