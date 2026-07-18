"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";

type ImagePreviewModalProps = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
};

export function ImagePreviewModal({
  src,
  alt,
  children,
  className = "",
}: ImagePreviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`w-full cursor-pointer text-left ${className}`.trim()}
        aria-label={`View ${alt}`}
      >
        {children}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-100 overflow-y-auto bg-black/80 p-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${alt}`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative mx-auto w-full max-w-5xl rounded-[28px] border border-white/10 bg-background/90 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-background/70 p-2 text-foreground transition hover:bg-background"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-[78vh] w-full overflow-hidden rounded-[20px] bg-background/70">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
