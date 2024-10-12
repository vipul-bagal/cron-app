// utils/httpClient.js
const axios = require('axios');

// A function to make HTTP GET requests
async function makeRequest(url, context) {
    try {
        const response = await axios.get(url);
        context.log(`Success: ${response.data}`);
        return response.data;
    } catch (error) {
        context.log(`Error: ${error.message}`);
        throw error;
    }
}

module.exports = { makeRequest };
