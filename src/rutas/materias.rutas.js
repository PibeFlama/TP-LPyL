const {Router} = require("express")
const router = Router()
const controller= require("../controllers/materias.control")
const middleware= require("../middlewares/materias.middlewares")



router.get("/materias", controller.mostrarMaterias)
router.get("/materias/:id",middleware.validarExistebyId ,controller.MateriasbyId)
router.delete("/materias/:id",middleware.validarExistebyId ,controller.deleteMateria)

module.exports= router











