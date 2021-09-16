import React, { useState, useEffect } from 'react';

import API from '../Api';

import { useInfoFetch } from '../hooks/useInfoFetch';
import InfoList from './InfoList';

const Home = () => {
 
    const { state, loading, error } = useInfoFetch();

    return(
        <div><InfoList Info = {state}/></div>
    
        );

}

export default Home;
