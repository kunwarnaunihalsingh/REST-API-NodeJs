// errorHandler.js
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        status: err.status || 500,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {} // Hide stack trace in production
    });
};