
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Loading/Loading';


const PrivateAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return(
            <Loading></Loading>
        )
    }
    // if(user?.emailVerified === false){
    //     return <Navigate to="/verified" state={{ from: location }} replace />;
    // }
    if(!user){
        return <Navigate to="/signin " state={{ from: location }} replace />;
    }
    
    return children;
};

export default PrivateAuth;