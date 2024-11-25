import { consulta } from "./fastapi"; 

export async function getHuellacarbonoById(id) {
    return consulta(`calcular-co2/${id}`)
    .then( res => {
<<<<<<< HEAD
        const { tipo_combustible, huella_carbono_id, kilometros_recorridos, indice_eficiencia, huella_carbono } = res;
        
        return { tipo_combustible, huella_carbono_id, kilometros_recorridos, indice_eficiencia, huella_carbono }
=======
        const { tipo_combustible, huella_carbono_id, kilometros_recorridos, indice_eficiencia, hallazgos } = res;
        
        return { tipo_combustible, huella_carbono_id, kilometros_recorridos, indice_eficiencia, hallazgos }
>>>>>>> 8262c94383d6a7dd7727586be08f6a036b00bc69
    })
}