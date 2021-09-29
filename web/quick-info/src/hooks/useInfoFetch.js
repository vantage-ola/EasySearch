import { useState, useEffect } from 'react';

import API from '../Api'


export const useInfoFetch = () => {
    const [page, perPage] = [1, 2]

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);   
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const fetchInfos = async (page, perPage) => {
        try {
            setError(false);
            setLoading(true);

            const infos = await API.fetchInfos(page, perPage);
            setState(infos);


        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    const totalPages =  4 / perPage

    useEffect(() => {
        fetchInfos(page, perPage)
    }, []);

    // Load More Info
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchInfos(page, perPage+2);
        setIsLoadingMore(false);

    }, [isLoadingMore,perPage, page])
    return { state, loading, error, page, totalPages, setIsLoadingMore};
};