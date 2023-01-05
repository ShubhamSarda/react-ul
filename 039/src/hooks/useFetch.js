import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            setLoading(false);
            setData(result);
        }
        fetchData();
    }, [url]);

  return { data, loading }
}
