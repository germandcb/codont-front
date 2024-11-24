import { consulta } from "./fastapi"; 

export async function getHuellacarbonoById(id) {
    return consulta(`calcular-co2/${id}`)
    .then( res => {
        const { tipo_combustible, huella_carbono_id, kilometros_recorridos, indice_eficiencia, hallazgos } = res;
        
        return { tipo_combustible, huella_carbono_id, kilometros_recorridos, indice_eficiencia, hallazgos }
    })
}