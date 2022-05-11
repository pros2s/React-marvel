import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-type': 'application/json' }) => {
    setLoading(true);

    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) throw new Error(`Could not fetch ${url}; status: ${response.status}`);

      const data = response.json;

      setLoading(false);
      return data;
    }
    catch (err) {
      setLoading(false);
      setError(err.message);
      throw err
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { error, loading, request, clearError };
}