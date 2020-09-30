const express = require('express');

const app = express();
const productRoutes = require('./src/routes/products');

app.use('/', productRoutes);

/** method use bisa digunakan untuk semua method tetapi jika menggunakan method khusus seperti get, put, atau yang lainnya maka method yang diterima hanya bisa itu saja */

app.listen(4000);