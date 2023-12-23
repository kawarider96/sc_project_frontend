import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../SUPPORT/redux/actions/AuthActions';

const ProtectedLayout = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        // Ellenőrizzük, hogy van-e token a localStorage-ban
        const localStorageToken = localStorage.getItem('token');
        if (localStorageToken) {
            // Ha van, frissítsük az állapotot
            dispatch(setToken(localStorageToken));
        } else {
            // Ha nincs token, navigáljunk a kezdőoldalra
            navigate('/');
        }
        // Beállítjuk, hogy az inicializálás befejeződött
        setIsInitializing(false);
    }, [dispatch, navigate]);

    // Ha még inicializálódik, ne jelenítsünk meg semmit
    if (isInitializing) {
        return null; // Vagy visszatérhetünk egy betöltő komponenssel
    }

    // Ha van token és az inicializálás befejeződött, jelenítsük meg a gyermek komponenseket
    return token ? children : null;
};

export default ProtectedLayout;
