import { useState, useEffect } from "react";
import supabase from "./supabaseClient";

const useFetch = (table) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data from", table);
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from(table).select("id, title, content, author");

        if (error) throw error;

        setData(data || []); // Ensure it's always an array
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };


    fetchData();
    
  }, [table]);

  return { data, isPending, error };
};

export default useFetch;
