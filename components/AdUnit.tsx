import { useEffect } from "react";

interface AdUnitProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export function AdUnit({ 
  slot, 
  format = "auto", 
  responsive = true,
  style
}: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="ad-container my-8 w-full min-h-[250px] flex items-center justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minWidth: "300px",
          minHeight: "250px",
          width: "100%",
          ...style
        }}
        data-ad-client="ca-pub-4963930353367900"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}