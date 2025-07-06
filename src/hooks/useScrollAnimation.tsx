import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useScrollAnimation = (options?: IntersectionObserverOptions) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const defaultOptions: IntersectionObserverOptions = {
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (defaultOptions.triggerOnce) {
              setHasAnimated(true);
              if (elementRef.current) {
                observer.unobserve(elementRef.current);
              }
            }
          } else {
            if (!defaultOptions.triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold: defaultOptions.threshold, rootMargin: defaultOptions.rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement && !(defaultOptions.triggerOnce && hasAnimated)) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce, hasAnimated]);

  // Add a class to the element when it becomes visible
  useEffect(() => {
    if (isVisible && elementRef.current) {
      elementRef.current.classList.add('is-visible');
    } else if (!isVisible && elementRef.current && !defaultOptions.triggerOnce) {
      // Optional: remove class if element is not visible and triggerOnce is false
      // elementRef.current.classList.remove('is-visible');
    }
  }, [isVisible, defaultOptions.triggerOnce]);

  return { ref: elementRef, isVisible, hasAnimated };
};

export default useScrollAnimation;
