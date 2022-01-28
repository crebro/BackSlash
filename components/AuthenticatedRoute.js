import { UserContext } from 'context/UserContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import LoadingPage from './Loading';

function AuthenticatedRoute({ children }) {
    const [isAuthenticated] = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    })

    if (!isAuthenticated) { return <LoadingPage /> };
    return children;
}

export default AuthenticatedRoute;
