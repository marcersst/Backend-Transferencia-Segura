
const { Router } = require("express");

const { posteoTransferencia,
    actualizarTransferencia,
    obtenerTransferencia } = require('../controllers/transferencias');

const router = Router();


router.get('/', obtenerTransferencia );

router.put('/:id', actualizarTransferencia );

router.post('/', posteoTransferencia );



module.exports = router;