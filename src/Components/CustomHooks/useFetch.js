import React, { useEffect, useState } from "react";

const useFetch = (obj) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://swapi.dev/${obj}/`,{
            method: 'GET',
            redirect: 'follow'
        });
        if (!res.ok) {
          throw new Error("Error on fetching");
        }
        const resData = await res.json();
        setData(resData);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[obj]);

  return {data, loading, error}
};

export default useFetch;
