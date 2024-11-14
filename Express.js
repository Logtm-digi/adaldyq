const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Middleware для работы с JSON в запросах

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/comments', (req, res) => {
    const comment = req.body.text;
    console.log('Получен комментарий:', comment);
    res.status(201).send({ message: 'Комментарий сохранен' });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
