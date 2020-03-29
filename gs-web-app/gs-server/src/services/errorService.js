const logError = (error) => {
    if (error) {
        console.log('ErrorLogger: ', error);
    }
};

module.exports = {
    logError
};
