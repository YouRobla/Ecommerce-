import { useEffect, useState } from "react";
import Utils from '../../utils'

interface Product1 {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

function UseFetch(url: string): { data: Product1[] | null, loading: boolean, error: string | null } {
  const [data, setData] = useState<Product1[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    setLoading(true);
    setError(null);  
    try {
      const response = await fetch(`${Utils}${url}`);
      if (!response.ok) {
        throw new Error("Algo falló");
      }
      const result: Product1[] = await response.json();
      setData(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // La URL como dependencia para que se recargue si cambia

  return { data, loading, error };
}

export default UseFetch;