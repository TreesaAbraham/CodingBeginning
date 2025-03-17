import { useState, useEffect } from "react";
import supabase from "./supabaseClient";

const useFetch = (table) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from(table).select("*");

        if (error) throw error;

        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [table]);

  return { data, isPending, error };
};

export default useFetch;
