import axios from "axios";
export const url = {
    base: "https://jsonplaceholder.typicode.com",
}
export const generateProductUrl = (id: string) => {
    return `/todos/${id}`;
}
export function apiCall(uri: string, type = 'get', body?: any) {
    if (type.toLowerCase() === 'get')
        return axios.get(url.base + uri);
    if (type.toLowerCase() === 'delete')
        return axios.delete(url.base + uri);
    if (type.toLowerCase() === 'post') {
        var headers = {
            'Content-Type': 'application/json',
        }
        return axios.post(url.base + uri, body, { headers: headers });
    }

}
