const { FASTAPI_URL } = import.meta.env;

export function consulta(url) {
    return fetch(`${FASTAPI_URL}/${url}`).then((res) => res.json());
}

export function post(url, body) {
    return fetch(`http://127.0.0.1:8000/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then((res) => res.json());
}