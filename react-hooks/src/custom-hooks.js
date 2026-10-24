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
