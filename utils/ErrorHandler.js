module.exports = (res, error) => {
    res.stat(500).json({
        success: false,
        message: error.message ? error.message : error
    })
}