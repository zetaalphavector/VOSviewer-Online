import { useState } from "react";

export const useResource = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  return {
    isLoading,
    error,
    data,
  };
};
