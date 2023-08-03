import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (emdpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${emdpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key': '9d7ba94d83msh20f2f2370b9f51fp11bd46jsn73d49dcce7d4',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('These is an Error')
        }finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const reFetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data,  isLoading, error, reFetch};
}

export default useFetch;