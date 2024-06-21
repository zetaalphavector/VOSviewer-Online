import { useCallback, useEffect, useState } from "react";
import { attachmentApi } from "../../../../api/api";
import { isAcceptableBackend } from "../../../../pages/ZetaAlpha/utils";

export const useAttachmentResource = (url) => {
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
      if (!isAcceptableBackend(url)) {
        return;
      }
      const data = await attachmentApi(url, { signal });
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
