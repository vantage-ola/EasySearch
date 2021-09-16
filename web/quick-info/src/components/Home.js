import React, { useState, useEffect } from 'react';

import API from '../Api'

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);   
    const [error, setError] = useState(false);

    const fetchInfos = async (id, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const infos = await API.fetchInfos(searchTerm, id);
            console.log(infos);

        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        fetchInfos(1)
    }, [])

    return(
        <div></div>
    
        );

}

export default Home;
