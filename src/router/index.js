const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {
        pageName: 'Inicio',
        titulo: "holi"
    });
});

router.get('/servicios', (req, res) => {
    res.send('PAGINA SERVICIOS DE LA APP');
});

router.get('/contacto', (req, res) => {
    res.send('PAGINA CONTACTO DE LA APP');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;