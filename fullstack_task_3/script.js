document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop page reload
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageBox = document.getElementById('formMessage');

    // Simple Regex for Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format";
        return;
    }

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (response.ok) {
            messageBox.style.color = "green";
            messageBox.innerText = "Login Successful! Redirecting...";
            // window.location.href = "/dashboard"; 
        } else {
            messageBox.style.color = "red";
            messageBox.innerText = result.error;
        }
    } catch (err) {
        messageBox.innerText = "Server connection failed.";
    }
});
