import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
// import FormData from 'form-data';
// import { FormData } from 'formdata-polyfill/esm.min.js';
import FormData from 'form-data';

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

app.post('/upload', async (req, res) => {
	const { board } = req.query;
	const { image } = req.body;
	const form = new FormData();

	form.append('image', Buffer.from(image.split(',')[1], 'base64'), 'image.png');

	const json = await fetch(`https://api.miro.com/v1/boards/${board}/picture`, {
		method: 'POST',
		headers: {
			Authorization: 'Bearer SCKCdidf3TOB9XdE08zZvQ2THFQ',
			Accept: 'application/json',
		},
		body: form,
	}).then((res) => res.json());

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(json));
});

app.listen(80, () => {
	console.log('listening on port 80');
});
