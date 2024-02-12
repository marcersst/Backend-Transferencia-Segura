const {response, request}= require("express");
const Transferencia= require("../models/transferencia");
const transferencia = require("../models/transferencia");


const posteoTransferencia = async(req= request, res = response) => {


    const body = req.body;
    const transferencia= new Transferencia(body);
    await transferencia.save();

    res.json({
       transferencia
    });
}

const actualizarTransferencia = async (req, res = response) => {
    try {
        const { id } = req.params;
        const { ejecutada } = req.body;

        const transferencia = await Transferencia.findOneAndUpdate({ id }, { ejecutada }, { new: true });

        if (!transferencia) {
            return res.status(404).json({ message: "Transferencia no encontrada" });
        }

        res.json({
            transferencia
        });
    } catch (error) {
        console.error("error al actualizar la transferencia:", error);
        res.status(500).json({ message: "error interno del servidor" });
    }
}

const obtenerTransferencias = async (req, res = response) => {
    try {
       
        const { id, creador, destino, firmante1, firmante2 } = req.query;

        // creo el filtro 
        const filtro = {};
        if (id) filtro.id = id;
        if (creador) filtro.creador = creador;
        if (destino) filtro.destino = destino;
        if (firmante1) filtro.firmante1 = firmante1;
        if (firmante2) filtro.firmante2 = firmante2;

        // busco la stransferencias segun mi filtro
        const transferencias = await Transferencia.find(filtro);

       // si no hay resultados devuelvo un mensaje en consola
        if (transferencias.length === 0) {
            return res.status(404).json({ mensaje: "No hay transferencias." });
        }

        // envio la respuesta
        res.json({ transferencias });
    } catch (error) {
        
        console.error("error al obtener las transferencias:", error);
        res.status(500).json({ mensaje: "error al obtener las transferencias" });
    }

};

const obtenerTransferencia = async(req, res=response)=>{
    try {
        const {id}=req.params
        const transferencia= await Transferencia.find(id)
    
        res.json({
            transferencia
         })
        
    } catch (error) {
        res.status(505).json({
            mensage:"no se encotro transferencia"
        })
        
    }
    
    

}


module.exports={
    posteoTransferencia,
    actualizarTransferencia,
    obtenerTransferencias,
    obtenerTransferencia
}