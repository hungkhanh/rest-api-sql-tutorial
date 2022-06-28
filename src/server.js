require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

const officeRouter = require('./routes/office.route');

app.use('/office', officeRouter);


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello from api',
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})