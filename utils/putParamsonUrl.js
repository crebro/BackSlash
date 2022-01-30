export default function putParamsOnUrl(url, params) {
    let formattedUrl = url.includes("?") ? `${url}&` : `${url}?`;

    Object.keys(params).forEach((paramKey) => {
        formattedUrl = `${formattedUrl}${paramKey}=${params[paramKey]}&`
    })

    return formattedUrl;
}