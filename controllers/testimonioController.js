import { Testimonio } from "../models/Testimonios.js";

const guardarTestimonios = async (req,res) =>{
    const { nombre, correo,mensaje } = req.body;
    const errores = []

    if(nombre.trim()===""){
        errores.push({mensaje : "Nombre vacío"})
    }
    if(correo.trim()===""){
        errores.push({mensaje : "Correo vacío"})
    }
    if(mensaje.trim()===""){
        errores.push({mensaje : "Mensaje vacío"})
    }
    console.log(errores)
    if(errores.length > 0){
        //Consultar testimonio existente
        const testimonios = await Testimonio.findAll()
        //Mostrar la vista con errores
        res.render("testimonios",{
            pagina: "Testimonios",
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        });

        
    }else{
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect("/testimonios")
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonios
}