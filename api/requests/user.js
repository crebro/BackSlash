import {routes} from "../constants";
import { getRequest, postRequest } from ".";

export default async function getUser() {
    const response = await getRequest(routes.getUser);
    const data = await response.json();
    if (!data.success) {
        return false;
    }
    return data.user;
}

export async function loginUser({email, password}) {
    const response = await postRequest(routes.login, {
        email: email,
        password: password
    });
    const data = await response.json();
    if (!data.success) {
        return false;
    }
    return data;
}

export async function registerUser({username, email, password}) {
    const response = await postRequest(routes.register, {
        name: username,
        email: email,
        password: password
    });
    const data = await response.json();
    if (!data.success) {
        return false;
    }
    const loginResponse = await loginUser({email: email, password: password});
    return loginResponse;
}

export async function developerActivation() {
    const response = await postRequest(routes.developer_activation);
    const data = await response.json();
    if (!data.success) {
        return false;
    }
    return data;
}
