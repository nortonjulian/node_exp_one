# Broken App Issues
Added app.use(express.json()) middleware: enabling the parsing of JSON request bodies in Express, allowing you to access the developers array from req.body.

Updated the app.post() route handler to use async/await and Promise.all(): By using async/await and Promise.all(), the app waits for all the GitHub API requests to complete before proceeding. This ensures that the results array contains the resolved data for each developer.

Replaced res.send(JSON.stringify(out)) with res.json(out): Instead of sending a stringified JSON response, we use res.json() to send a properly formatted JSON response with the out array.

Added a console.log() statement in the app.listen() callback: This will log a message to the console when the server starts successfully.
