import { UserContext } from 'context/UserContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs';
import LoadingPage from './Loading';

function DeveloperRoute({ children }) {
    const [isAuthenticated, user] = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
            return;
        }
        if (!user.is_developer) {
            router.push('/collections');
        }
    },)

    if (!isAuthenticated || !user.is_developer) { return <LoadingPage /> };
    return children;
}

export default DeveloperRoute;
