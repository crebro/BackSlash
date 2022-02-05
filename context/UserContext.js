import getUser from "@api/requests/user";
import LoadingPage from "@components/Loading";
import React, {createContext, useEffect, useMemo, useState,} from "react";
import toast from "react-hot-toast";

export const UserContext = createContext();

export const  UserProvider = ({ children }) => {
    const [user, setUser] = useState(); 
    const [loading, setLoading] = useState(true);
    const authenticated = useMemo(() => !!user, [user]);

    const findUserIfAuthenticated = async () => {
        if (localStorage.getItem('token')) {
            const responseData = await getUser();
            if (responseData) {
                setUser(responseData);
            }
        }
        setLoading(false);
    }

    const logoutUser = async () => {
        setUser(null);
        toast.success('Successfully logged you out');
        localStorage.removeItem('token');
    }

    useEffect(() => { 
        findUserIfAuthenticated();
    }, []);

    return <UserContext.Provider value={[authenticated, user, logoutUser, setUser]}>
        { !loading ? children : <LoadingPage/>} 
    </UserContext.Provider>
}
