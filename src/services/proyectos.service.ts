import { Proyecto } from '../entity/proyecto';


export const getListProyectos = async () => {
    try {
        const results = await Proyecto.find();

        return {
            data: results,
        }
    } catch (error) {
        console.log(error);
        return {
            error: true,
            message: 'Ha ocurrido un error'
        }
    }
}
