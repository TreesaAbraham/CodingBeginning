import { useState, useEffect } from "react";
import supabase from "./supabaseClient";

const useFetch = (table) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase.from(table).select();

      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
      setIsPending(false);
    };

    fetchData();
  }, [table]);

  return { data, isPending, error };
};

export default useFetch;

