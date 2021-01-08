const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/1v/bootcamps', (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

app.get('/api/1v/bootcamps/:id', (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

app.post('/api/1v/bootcamps', (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

app.put('/api/1v/bootcamps/:id', (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/1v/bootcamps/:id', (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});