const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use bodyParser middleware to parse JSON data
app.use(bodyParser.json());

// Basic calculator routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Simple Calculator</h1>
        <form action="/calculate" method="get">
            <input type="number" name="num1" placeholder="Number 1" required>
            <input type="number" name="num2" placeholder="Number 2" required>
            <select name="operation" required>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <button type="submit">Calculate</button>
        </form>
    `);
});

app.get('/calculate', (req, res) => {
    const { num1, num2, operation } = req.query;

    let result;

    // Basic operations
    switch (operation) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            if (parseFloat(num2) === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = parseFloat(num1) / parseFloat(num2);
            }
            break;
        default:
            result = 'Invalid operation';
    }

    res.send(`
        <h1>Calculator Result</h1>
        <p>${num1} ${operation} ${num2} = ${result}</p>
        <a href="/">Go back</a>
    `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
