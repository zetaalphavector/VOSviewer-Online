import { useCallback, useEffect, useState } from "react";
import { toBase64 } from "../utils";
import { attachmentApi } from "../../../../api/api";
import { isAcceptableBackendUrl, isAcceptableOrigin } from "../../../../pages/ZetaAlpha/utils";

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
      const data = await attachmentApi(url, { signal });
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url && isAcceptableOrigin(window.Location.origin) && isAcceptableBackendUrl(url, window.location.origin)) {
      start();
      load();
    } else {
      clear();
    }
  }, [url]);

  let src;
  if (data) {
    const base64Content = toBase64(data.content);
    src = `data:${data.contentType};base64,${base64Content}` ?? undefined;
  }
  return {
    abort,
    isLoading,
    error,
    src,
  };
};
