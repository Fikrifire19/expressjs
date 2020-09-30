exports.createProduct = (req, res, next) => {
    res.json({
        message: 'Create product SUCCESS',
        data: {
            id: 1,
            name: "Muhamad Fikri Mubarok", 
            email: "muhamadfikri64@yahoo.co.id"
        }
    });
    next();
};

exports.getAllProducts = (req, res, next) => {
    res.json({
        message: 'Read All Products SUCCESS',
        data: {
            id: 1,
            name: "Contoh Produk", 
            harga: 300000
        }
    });
    next();
};