// config/index.js
require('dotenv').config();

const config = {
    baseURL: process.env.BASE_URL,
    runJobsAPI: process.env.RUN_JOBS_API,
};

module.exports = config;
