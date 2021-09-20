import { useState, useEffect } from 'react';

import API from '../Api'


export const useInfoFetch = () => {

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);   
    const [error, setError] = useState(false);

    const fetchInfos = async () => {
        try {
            setError(false);
            setLoading(true);

            const infos = await API.fetchInfos();
            setState(infos);


        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchInfos()
    }, []);

    return { state, loading, error};
};