import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://plenty-streets-hammer-113-52-194-59.loca.lt/';
// axios.defaults.baseURL = 'https://react-http-459a2-default-rtdb.firebaseio.com';
export const useAxios = (axiosParams, auto = true) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const clickFetchFunc = (config) => {
    fetchData(config);
  };

  useEffect(() => {
    if (auto) {
      fetchData(axiosParams);
    } else {
    }
  }, [axiosParams]); // execute once only

  return { response, error, loading, clickFetchFunc };
};
