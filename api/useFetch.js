import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = "334629e0bemsh8467c0fd005ff53p16f41djsn049a265e8889"

const useFetch = (endpoint, searchQuery, activeTab) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.request({
                    method: 'GET',
                    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
                    params: { ...searchQuery },
                    headers: {
                        'X-RapidAPI-Key': apiKey,
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                    }
                });
                setData(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();

    }, [activeTab]);

    return { data, loading, error }
}

export default useFetch;