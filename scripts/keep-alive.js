const fetch = require('node-fetch');

const apiUrl = 'https://assistant-record.onrender.com/api/assistants'; 

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

// Call keepAlive() immediately
keepAlive();

// Call keepAlive() every 15 minutes (in milliseconds)
setInterval(keepAlive, 15 * 60 * 1000);
