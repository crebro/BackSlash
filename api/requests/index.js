export const getRequest = async (url, initParams) => {
    const response = await fetch(url, {
        credentials: 'include',
        headers: {
            "Accept": "application/json"
        },
        ...initParams});
    return response;
}

export const postRequest = async (url, body, initParams) => {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body),
        credentials: 'include',
        ...initParams});
    return response;
}

