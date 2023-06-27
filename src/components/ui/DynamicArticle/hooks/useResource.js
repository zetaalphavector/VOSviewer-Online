import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../api/api";

export const useResource = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [controller, setController] = useState(null);

  const clear = () => {
    setIsLoading(false);
    setError(null);
    setData(null);
  };

  const start = () => {
    setIsLoading(true);
    setError(null);
    setData(null);
  };

  const abort = useCallback(() => {
    if (controller) {
      controller.abort();
    }
  }, [controller]);

  const load = async () => {
    try {
      const _controller = new AbortController();
      setController(_controller);
      const { signal } = _controller;
      const data = await api(url, { signal });
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      start();
      load();
    } else {
      clear();
    }
  }, [url]);

  return {
    abort,
    isLoading,
    error,
    data,
  };
};
