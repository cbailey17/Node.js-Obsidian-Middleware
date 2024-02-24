// Middleware to check for API key in the request headers
// Needs logic to fetch API keys from db
const checkApiKey = (req, res, next) => {
    const apiKey = req.get('x-api-key'); 
    if (!apiKey) {
        return res.status(401).json({ message: 'API key is required' });
    }
    if (apiKey !== API_KEY) {
        return res.status(403).json({ message: 'Invalid API key' });
    }
    next(); 
};