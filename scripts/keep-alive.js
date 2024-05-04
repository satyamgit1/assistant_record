const fetch = require('node-fetch');

const apiUrl = 'https://assistant-record.onrender.com/api/assistants'; // Replace with your API endpoint

async function keepAlive() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log('API request successful:', data);
        } else {
            throw new Error(`API request failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error making API request:', error.message);
    }
}

keepAlive();
