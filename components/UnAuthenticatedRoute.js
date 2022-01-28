import { UserContext } from 'context/UserContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import LoadingPage from './Loading';

function UnAuthenticatedRoute({ children }) {
    const [isAuthenticated] = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/collections');
        }
    })

    if (isAuthenticated) {
        return <LoadingPage />;
    }
    return children;
}

export default UnAuthenticatedRoute;
