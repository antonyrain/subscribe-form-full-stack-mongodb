const config = require('../utils/config')
const logger = require('../utils/logger')
const mongoose = require('mongoose')

const connectDB = () => {
    try {
        mongoose
        .connect(config.URI)
        logger.info('MongoDB connection SUCCESS')
    } catch (error) {
        logger.error("MongoDB connection FAIL")
        process.exit(1)
    }
}

module.exports = connectDB