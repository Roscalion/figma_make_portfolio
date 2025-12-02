import { useEffect } from "react";

export function GoogleAdsScript() {
  useEffect(() => {
    // Add Google AdSense script to the document
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4963930353367900";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    // Google AdSense Publisher ID: ca-pub-4963930353367900
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}