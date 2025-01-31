import { useEffect, useState } from "react";
import API_URL from "../../utils";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

 function UseFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}${url}`);

      if (!response.ok) {
        throw new Error("algo fallo");
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";

      console.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default UseFetch
