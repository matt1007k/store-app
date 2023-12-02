import { useCallback, useEffect, useState } from 'react'

type ObserverParams = {
  rootMargin: string,
  boxElement: HTMLElement | null,
}

export function useObserver({ rootMargin = '0px', boxElement} : ObserverParams) : [isObserverChild : boolean] {
  const [ isObserverChild, setIsObserverChild ] = useState(false);

  const options = {
    root: null,
    rootMargin,
    threshold: 1.0,
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);
    if (boxElement) {
      observer.observe(boxElement);
    }

    return () => {
      observer.disconnect()
    }
  }, [])
  

  const handleIntersect = ( entries: IntersectionObserverEntry[] ) => {
    setIsObserverChild(!entries[0].isIntersecting)
    console.log(entries[0].isIntersecting)
  }

  return [ isObserverChild ]
}

