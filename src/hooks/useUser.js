import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsusbcribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });
        return unsusbcribe;
    }, []);
    return { user, isLoading };
}

export default useUser;
