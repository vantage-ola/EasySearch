import React, { useState, useEffect } from 'react';

import API from '../Api';

// HOOK
import { useInfoFetch } from '../hooks/useInfoFetch';

// COMPONENTS
import InfoList from './InfoList';
import LoadSpinner from './LoadSpinner';
import Button from './Button';

const Home = () => {
 
    const { state, loading, error, page, totalPages, setIsLoadingMore } = useInfoFetch();

    console.log(state);

    if (error) return <div>Something went wrong ...</div>
    return(
        <>
            <InfoList Info = {state}/>
            {loading && <LoadSpinner/>}
            {page < totalPages && !loading && (<Button text='Load More' callback={() => setIsLoadingMore(true)} />) }
            
        </>
    
        );

}

export default Home;
