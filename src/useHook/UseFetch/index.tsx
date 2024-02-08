import { useState, useCallback } from 'react';

interface fetchProps {
  url: string;
}

interface FetchResult {
  response: Response | null;
  json?: any;
}

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const request = useCallback(async ({ url }: fetchProps): Promise<FetchResult> => {
    let response: Response | null = null;
    let json: any;

    try {
      setError(null);
      response = await fetch(url);
      json = await response.json();
      if (!response.ok) {
        throw new Error(json?.message || 'Failed to fetch data');
      }
    } catch (err) {
      json = null;
    } finally {
      setData(json);
      return { response, json };
    }
  }, []);

  return { data, error, request };
};

export default useFetch;
