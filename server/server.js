const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Настройка Nodemailer с использованием Gmail
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'danielmyrzabekkovich@gmail.com',
		pass: 'ztyq ghph sksd dghb'
	}
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // Добавление CORS

app.post('/send_mail', (req, res) => {
	const phone = req.body.phone;

	const mailOptions = {
		from: 'your-email@gmail.com',
		to: 'sale@norris.kg',
		subject: 'Запрос на консультацию',
		text: `Номер телефона: ${phone}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Error occurred while sending email:', error);
			return res.status(500).send('error');
		}
		console.log('Email sent:', info.response);
		res.status(200).send('success');
	});
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
