import React, { useState, useEffect } from 'react';

import API from '../Api';

// HOOK
import { useInfoFetch } from '../hooks/useInfoFetch';

// COMPONENTS
import InfoList from './InfoList';
import LoadSpinner from './LoadSpinner';

const Home = () => {
 
    const { state, loading, error } = useInfoFetch();

    return(
        <div>
            <InfoList Info = {state}/>
            <LoadSpinner/>
        </div>
    
        );

}

export default Home;
