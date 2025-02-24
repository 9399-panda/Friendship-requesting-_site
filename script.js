document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'banti' && password === 'banti') {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        errorMessage.textContent = 'Incorrect login name or password. Try again!';
    }
});

document.getElementById('poll-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    const dateInput = document.getElementById('date-input').value;
    const result = document.getElementById('poll-result');

    if (selectedOption) {
        if (selectedOption.value === 'talk-now') {
            result.textContent = dateInput ? `Thank you! I’ll hear from you on ${dateInput}.` : 'Please enter a date or day!';
        } else if (selectedOption.value === 'need-time') {
            result.textContent = 'Okay, take your time. I’ll wait to hear from you.';
        }
    } else {
        result.textContent = 'Please select an option!';
    }
});