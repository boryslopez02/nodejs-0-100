const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.status(404).redirect("/404");
});

module.exports = router;