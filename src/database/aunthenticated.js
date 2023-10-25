import { config } from "dotenv";


function authenticateApiKey(req, res, next) {
  const apiKey = req.headers['api-key'];

  if (!apiKey || apiKey !== config.apiKeyHeaders) {
    return res.sendStatus(401);
  }

  next();
}
