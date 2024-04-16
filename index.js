const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Import routes
const catsRouter = require('./routes/cats.router');
app.use('/cats', catsRouter); // Use cats router for all paths starting with /cats

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});