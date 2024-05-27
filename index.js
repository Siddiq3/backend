// index.js
const express = require('express');
const app = express();
const port =3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Due to the low capacity of the instance server is not working properly. Iam working on to fix the issue.Thnanks for understanding');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
