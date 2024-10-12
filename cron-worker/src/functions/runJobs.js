const { app } = require('@azure/functions');
const { makeRequest } = require('../utils/httpClient');
const config = require('../config');

// Timer trigger for Escalations Check
app.timer('RunJobs', {
    schedule: '0 * * * * *',  // Every minute
    handler: async (myTimer, context) => {
        const timeStamp = new Date().toISOString();
        context.log(`Cron Jobs API invoked at ${timeStamp}`);

        // Use the environment-specific API endpoint
        const apiEndpoint = config.baseURL + "" + config.runJobsAPI;

        // Make HTTP request using the modular function
        await makeRequest(apiEndpoint, context);
    }
});
