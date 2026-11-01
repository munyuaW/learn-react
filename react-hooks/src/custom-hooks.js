import { useState, useEffect } from "react";

// 1. useOnlineStatus hook
// This hook tracks user's network status
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

// 2. useWindowSize
// This hook manages browser resizing,
// instead of setting up window.addEventListener('resize')
// in every layout component
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// 3. useForm

export function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value, // Dynamically update the specific field by its 'name' attr.
    });
  }

  function resetForm() {
    setValues(initialValues);
  }

  //   returns an object
  return {
    values,
    handleChange,
    resetForm,
  };
}

// 4. useFetch

export function useFetch(url) {
  const [result, setResult] = useState({
    url: null,
    settled: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!ignore) {
          setResult({ url, settled: true, data, error: null });
        }
      } catch (err) {
        if (!ignore) {
          setResult({
            url,
            settled: true,
            data: null,
            error: err instanceof Error ? err.message : String(err),
          });
        }
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  const loading = !result.settled || result.url !== url;

  return {
    loading,
    data: result.data,
    error: loading ? null : result.error,
  };
}
