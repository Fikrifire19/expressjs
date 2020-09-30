const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    console.log('url: ', req.originalUrl);
    console.log('method: ', req.method);
    res.json({name: "Muhamad Fikri Mubarok", email: "muhamadfikri64@yahoo.co.id"});
    next();
})

app.use('/', router);

app.listen(4000);