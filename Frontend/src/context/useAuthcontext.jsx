import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const UseAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}