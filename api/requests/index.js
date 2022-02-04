export const getRequest = async (url, initParams) => {
    const response = await fetch(url, {
        credentials: 'include',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Accept": "application/json"
        },
        ...initParams});
    return response;
}

export const postRequest = async (url, body, initParams) => {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body),
        credentials: 'include',
        ...initParams});
    return response;
}

export const postRequestWithFiles = async (url, body, initParams) => {
    const formData  = new FormData();

    for(const name in body) {
        formData.append(name, body[name]);
    }
    
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Accept": "application/json"
        },
        body: formData,
        credentials: 'include',
        ...initParams});
    return response;
}

