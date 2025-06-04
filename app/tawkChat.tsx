"use client";
import { useEffect } from "react";

// Extend the Window interface to include Tawk_API
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TawkChat: React.FC = () => {
  useEffect(() => {
    // Initialize Tawk_API if it doesn't exist
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create and inject the Tawk.to script
    const script = document.createElement("script");
    const firstScript = document.getElementsByTagName("script")[0];

    script.async = true;
    script.src = "https://embed.tawk.to/683d8a4b415332190f611253/1iso68e91";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Insert the script before the first existing script
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      const tawkScript = document.querySelector('script[src*="embed.tawk.to"]');
      if (tawkScript && tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript);
      }
    };
  }, []);

  // This component doesn't render any visible content
  return null;
};

export default TawkChat;
