let carreras = require("../../data/carreras.json")
let materias = []
const validarExisteIdMateria = (req,res,next) => {

    materias = []
    carreras.forEach(c => c.materias.forEach(m => materias.push(m)))
    const id= req.params.id;
    const valiMateria = materias.findIndex(c => c.id == id)
    if (valiMateria<0) {
        res.status(404).json({mensaje: "no existe una materia con ese id"})
    }
    next()
}


module.exports = {validarExisteIdMateria}










