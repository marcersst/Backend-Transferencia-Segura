
const { Router } = require("express");

const { posteoTransferencia,
    actualizarTransferencia,
    obtenerTransferencias,
    obtenerTransferencia } = require('../controllers/transferencias');

const router = Router();


router.get('/', obtenerTransferencias );

router.get('/:id', obtenerTransferencia );

router.put('/:id', actualizarTransferencia );


router.post('/', posteoTransferencia );



module.exports = router;