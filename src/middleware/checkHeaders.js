export const checkHeaders = (req, res, next) => {
    const contentType = req.header('Content-Type');
    const automationName = req.header('automation-name');
    const automationId = req.header('automation-id');
    const sessionId = req.header('session-id');

    // if (!contentType || !automationName || !automationId || !sessionId) {
    //     return res.status(400).send("Missing required headers");
    // }

    // if ((contentType !== 'application/json' && contentType !== 'multipart/encoded') || 
    //      !automationName || 
    //      !automationId || 
    //      !sessionId) {
    //     return res.status(400).send("Invalid headers value");
    // }

    next();
};

export default checkHeaders;
