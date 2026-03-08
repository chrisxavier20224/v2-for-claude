import { useRef, useState, useEffect } from "react";

interface LazyIframeProps {
  src: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  rootMargin?: string;
  eager?: boolean;
}

/**
 * Renders an iframe only when the container enters the viewport.
 * Uses IntersectionObserver with configurable rootMargin for pre-loading.
 * Set eager=true to skip lazy loading (useful inside carousels or scaled containers).
 */
const LazyIframe = ({ src, title, className = "", style, rootMargin = "400px 0px", eager = false }: LazyIframeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(eager);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, eager]);

  // Fallback: if not visible after 2s, force load (handles scaled/off-screen containers)
  useEffect(() => {
    if (isVisible || eager) return;
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [isVisible, eager]);

  return (
    <div ref={ref} className="w-full h-full">
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          className={className}
          style={style}
          tabIndex={-1}
          aria-hidden="true"
        />
      ) : (
        <div className={className} style={{ ...style, background: "hsl(var(--background))" }} />
      )}
    </div>
  );
};

export default LazyIframe;
