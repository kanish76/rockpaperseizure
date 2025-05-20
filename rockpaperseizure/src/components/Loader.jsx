import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      onDone(); // Notify App to render main content
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout);
  }, [onDone]);

  return loading ? (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 text-white text-3xl font-bold animate-fade-in-out">
      <div className="animate-pulse">rockpaperseizure</div>
    </div>
  ) : null;
}

