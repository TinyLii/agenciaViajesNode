import express from "express";
import { paginaInicio, 
    paginaNosotros, 
    paginaTestimonios, 
    paginaViajes,
    paginaDetalleViaje
} from "../controllers/paginasController.js";
import { guardarTestimonios } from "../controllers/testimonioController.js";




const router = express.Router();

router.get("/", paginaInicio)

router.get("/nosotros", paginaNosotros)

router.get("/viajes", paginaViajes)

router.get("/viajes/:slug", paginaDetalleViaje)

router.get("/testimonios", paginaTestimonios)

router.post("/testimonios", guardarTestimonios)

export default router; 