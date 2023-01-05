import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch(url, { signal: controller.signal });
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                const result = await response.json();
                setLoading(false);
                setData(result);
                setError("");
            } catch(error){
                setLoading(false);
                setError(error.message);
            }
        }
        fetchData();

        return () => controller.abort();
    }, [url]);

  return { data, loading, error }
}
