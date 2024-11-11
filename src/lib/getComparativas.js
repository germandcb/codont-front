import { consulta } from "./fastapi"; 

export async function getComparativas() {
    return consulta("comparativas")
    .then( res => {
        return res.map( comparativa => {
            const { comparativa_id, vehiculo_id_1, vehiculo_id_2 } = comparativa;

            return { comparativa_id, vehiculo_id_1, vehiculo_id_2 }
        })
    })
}