import { routes } from "@api/constants";
import { postRequest } from "@api/requests";
import getUser from "@api/requests/user";
import LoadingPage from "@components/Loading";
import React, {createContext, useEffect, useMemo, useState,} from "react";
import toast from "react-hot-toast";

export const UserContext = createContext();

export const  UserProvider = (props) => {
    const [user, setUser] = useState(); 
    const [loading, setLoading] = useState(true);
    const authenticated = useMemo(() => !!user, [user]);

    const findUserIfAuthenticated = async () => {
        if (localStorage.getItem('isAuthenticated')) {
            const responseData = await getUser();
            if (responseData) {
                setUser(responseData);
            }
        }
        setLoading(false);
    }

    const logoutUser = async () => {
        const response = await postRequest(routes.logout);
        const data = await response.json();
        if (!data.success) {
            return false;
        }
        setUser(null);
        toast.success(data.message);
        localStorage.removeItem('isAuthenticated', false);
        return response;
    }

    useEffect(() => { 
        findUserIfAuthenticated();
    }, []);

    return <UserContext.Provider value={[authenticated, user, logoutUser, setUser]}>
        { !loading ? props.children : <LoadingPage/>} 
    </UserContext.Provider>
}
