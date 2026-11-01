import { isAxiosError } from "axios";
import { useEffect, useState } from "react";

export function useFetch<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let isCurrent = true;

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(undefined);

        const response = await fetcher();

        if (!isCurrent) return;

        setData(response);
      } catch (requestError: unknown) {
        if (!isCurrent) return;

        if (isAxiosError(requestError)) {
          const message = requestError.response?.data?.message;

          setError(typeof message === "string" ? message : "Something went wrong.");
	        } else if (requestError instanceof Error) {
	          setError(requestError.message);
	        } else {
	          setError("Something went wrong.");
        }
      } finally {
        if (isCurrent) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isCurrent = false;
    };
  }, [fetcher]);

  return {
    data,
    isLoading,
    error,
  };
}
