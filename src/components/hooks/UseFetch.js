import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
