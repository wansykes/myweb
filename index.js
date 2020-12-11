const express = require('express');
const app = express();

app.get('/', (req, res) => {
    try {
        res.send('This is my web page');
      } catch (err) {
        console.error(err.message);
        res.status(404).send('Mychat 404 Error');
      }
});

// Define Routes
app.use('/api/session', require('./routes/api/session'));
app.use("/", (req, res, next) => {
    res.status("404").json({message: "MyChat 404 Not Found"})
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on ' + PORT));