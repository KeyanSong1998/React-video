import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onTermSubmit(defaultTerm);
      }, [defaultTerm]);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
            q: term,
            },
        });
    setVideos(response.data.items);
    };

    return[videos,onTermSubmit];
    
}

export default useVideos;