import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, options) => {
    setIsLoading(true);
    setError(null);

    try {
      const resp = await fetch(url, options);
      if (!resp.ok) throw new Error("Request BAD");
      const data = await resp.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error.message || "Something went wrong...");
      setIsLoading(false);
    }
  }, []);

  return { fetchData, isLoading, error };
};

export default useFetch;
