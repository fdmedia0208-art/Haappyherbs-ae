"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const SOUND_EVENT = "hh:sound-on";

/**
 * Muted, looping, inline video that only plays while on screen.
 * iOS needs `muted` set on the element itself before play(), so we do it in an effect.
 */
export default function CinemaVideo({
  src,
  poster,
  label,
  className = "",
  eager = false,
  soundButtonClassName = "",
  showSound = true,
}) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const idRef = useRef(Math.random().toString(36).slice(2));

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (v.preload === "none") v.preload = "auto";
          tryPlay();
        } else {
          v.pause();
        }
      },
      { threshold: 0.2, rootMargin: eager ? "0px" : "200px 0px" }
    );
    io.observe(v);

    // Only one video speaks at a time.
    const onOther = (e) => {
      if (e.detail !== idRef.current) {
        v.muted = true;
        setMuted(true);
      }
    };
    window.addEventListener(SOUND_EVENT, onOther);
    return () => {
      io.disconnect();
      window.removeEventListener(SOUND_EVENT, onOther);
    };
  }, [eager]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: idRef.current }));
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  return (
    <>
      <video
        ref={ref}
        className={className}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload={eager ? "auto" : "none"}
        aria-label={label}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
      />
      {showSound && (
        <button
          type="button"
          onClick={toggle}
          aria-label={muted ? `Play sound: ${label}` : `Mute: ${label}`}
          aria-pressed={!muted}
          className={
            "absolute z-20 grid h-10 w-10 place-items-center rounded-full border border-gold-light/70 bg-forest-deep/45 text-ivory backdrop-blur-md transition hover:bg-forest-deep/70 " +
            soundButtonClassName
          }
        >
          {muted ? <VolumeX size={16} strokeWidth={1.6} /> : <Volume2 size={16} strokeWidth={1.6} />}
        </button>
      )}
    </>
  );
}
