require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const officeRouter = require('./routes/office.route');

app.use('/office', officeRouter);

const PORT = process.env.PORT || 3000;

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description test api
 */
app.get('/', (req, res) => {
	res.status(200).json({
		message: 'hello from api',
	});
});

/**
 *
 * @param {number} PORT
 * @param {function}
 * @description server listen on port
 */
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
