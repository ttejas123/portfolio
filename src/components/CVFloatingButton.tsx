"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CVFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Encode the absolute URL for the Microsoft Office Web Viewer
      const absoluteUrl = window.location.origin + "/TejasThakare_CV.docx";
      setPreviewUrl(`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`);
    }
  }, []);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white shadow-lg shadow-accent/20 hover:scale-110 hover:shadow-accent/40 transition-all duration-300"
        aria-label="View CV"
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-accent" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </motion.button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-bg-primary/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full md:w-[45vw] bg-bg-primary border-l border-border shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
              <h2 className="text-xl font-bold">Curriculum Vitae</h2>
              <div className="flex items-center gap-3">
                <a
                  href="/TejasThakare_CV.docx"
                  download
                  className="flex items-center gap-2 py-2 px-4 bg-accent hover:bg-accent-light text-white text-sm rounded-lg font-medium transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-bg-secondary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content / Preview */}
            <div className="flex-1 p-4 md:p-6 bg-bg-secondary overflow-hidden flex flex-col">
              <div className="w-full h-full rounded-xl overflow-hidden border border-border shadow-inner bg-bg-primary relative flex flex-col">
                
                {/* Fallback warning if running locally */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-bg-primary z-20">
                  <div className="w-16 h-16 rounded-full bg-amber/10 text-amber flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Local Preview Unavailable</h3>
                  <p className="text-sm text-text-muted max-w-sm mb-6 leading-relaxed">
                    Microsoft Office Web Viewer cannot access files hosted on your private <code className="bg-bg-secondary px-1.5 py-0.5 rounded text-accent">localhost</code>. 
                    <br /><br />
                    The preview will automatically work once you deploy your site to a public URL (like Vercel). For now, please use the <strong>Download</strong> button above to view your CV.
                  </p>
                </div>

                {/* Iframe Viewer (Only renders if NOT localhost) */}
                {previewUrl && !previewUrl.includes("localhost") && !previewUrl.includes("127.0.0.1") && (
                  <iframe 
                    src={previewUrl} 
                    className="w-full h-full border-0 relative z-30 bg-white"
                    title="CV Preview"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
