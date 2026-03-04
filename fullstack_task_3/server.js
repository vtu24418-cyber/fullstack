const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const users = [
    { email: "user@example.com", passwordHash: "$2b$10$ExampleHash..." } 
];

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    
    if (isMatch) {
        res.status(200).json({ message: "Success" });
    } else {
        res.status(401).json({ error: "Incorrect password" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
