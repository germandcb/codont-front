const { FASTAPI_URL } = import.meta.env;

export function consulta(url) {
    return fetch(`${FASTAPI_URL}/${url}`).then((res) => res.json());
}