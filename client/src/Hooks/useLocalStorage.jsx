import {useEffect, useState} from 'react';

const PREFIX = 'buzzBurst-';

function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) {
      try {
        return JSON.parse(jsonValue);
      } catch (error) {
        console.error("Error parsing stored JSON:", error);
      }
    }
  
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  },[prefixedKey, value])

  return [value, setValue]
}

export default useLocalStorage