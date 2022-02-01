const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("clientes", {
        pageName: 'Clientes',
        arrayClientes: [
            {id: 'asgasga', nombre: 'Borys Lopez', age: 21},
            {id: 'aasgsgga', nombre: 'Borys Lopez', age: 22},
            {id: 'hasdghasssga', nombre: 'Borys Lopez', age: 22},
        ]
    });
});

module.exports = router;