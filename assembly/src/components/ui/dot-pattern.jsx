"use client";;
import { useRef } from "react";
import { cn } from "@/lib/utils";

const px = (value) =>
  value === undefined ? undefined : `${value}px`;

/** A number in [0, 1) for light `i`, spread evenly along `step`'s sequence. */
const spread = (i, step) =>
  ((0.5 + (i + 1) * step) % 1).toFixed(4);

/**
 * The lights: where each sits across the box (the R2 sequence, snapped to
 * a mark in CSS) and where it starts in the cycle. They start in turn, a
 * third of a cycle and one step apart, so the ones lit together are
 * neighbours in the sequence, which keeps them spread over the box.
 */
const lightsOf = (count, seed) => {
  const total = Math.max(0, Math.min(Math.round(count), 16));
  return Array.from({ length: total }).map((_, key) => ({
    key,
    style: {
      "--dot-pattern-phase": (
        (0.04 + (key * (total + 1)) / (3 * total)) %
        1
      ).toFixed(4),

      "--dot-pattern-u": spread(key + seed * 16, 0.754_877_666_2),
      "--dot-pattern-v": spread(key + seed * 16, 0.569_840_291)
    },
  }));
};

/**
 * A grid of small dots, squares or crosses behind its content, drawn in
 * CSS: no canvas and no WebGL. The marks are a mask on the pixel grid, so
 * they stay sharp at any size and screen ratio, with one centred in the
 * box. A few soft lights take turns under them, each turning a handful of
 * marks to the glow color with a halo, and the marks near the pointer
 * light up the same way. It follows the theme through `--muted-foreground`
 * and `--foreground`. With reduced motion the lights hold still; touch
 * never moves the pointer's light.
 *
 * @cssvar --dot-pattern-color The marks' color (50% of `--muted-foreground`).
 * @cssvar --dot-pattern-gap The space between two marks (`22px`).
 * @cssvar --dot-pattern-glow The lit marks' and the light's color (`var(--foreground)`).
 * @cssvar --dot-pattern-radius How far the pointer's light reaches (`140px`).
 * @cssvar --dot-pattern-size The size of one mark (`2px`).
 * @cssvar --dot-pattern-speed How fast the lights come and go (`1`).
 */
export const DotPattern = (props) => {
  const {
    color,
    fade = "none",
    gap,
    glow = 6,
    glowColor,
    interactive = true,
    radius,
    seed = 0,
    shape = "dot",
    size,
    speed,
    onPointerLeave,
    onPointerMove,
    className,
    children,
    ...rest
  } = props;
  const spot = useRef(null);

  const pointerMove = (event) => {
    onPointerMove?.(event);
    const node = spot.current;
    if (!node || event.pointerType === "touch") {
      return;
    }
    const box = event.currentTarget.getBoundingClientRect();
    node.style.setProperty("--dot-pattern-x", `${event.clientX - box.left}px`);
    node.style.setProperty("--dot-pattern-y", `${event.clientY - box.top}px`);
    // The light lands where the pointer comes in, and glides from the
    // next move on.
    node.dataset.pointer = node.dataset.pointer ? "move" : "enter";
  };

  // The position stays, so the light fades out where it was.
  const pointerLeave = (event) => {
    onPointerLeave?.(event);
    spot.current?.removeAttribute("data-pointer");
  };

  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      data-slot="dot-pattern"
      onPointerLeave={pointerLeave}
      onPointerMove={pointerMove}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="dot-pattern-layer pointer-events-none absolute inset-0 -z-10 [content-visibility:auto]"
        data-fade={fade}
        data-shape={shape}
        data-slot="dot-pattern-layer"
        style={
          {
            "--dot-pattern-color": color,
            "--dot-pattern-gap": px(gap),
            "--dot-pattern-glow": glowColor,
            "--dot-pattern-radius": px(radius),
            "--dot-pattern-size": px(size),
            "--dot-pattern-speed": speed
          }
        }
      >
        <div
          className="dot-pattern-dots absolute inset-0"
          data-slot="dot-pattern-dots"
        />
        <div
          className="dot-pattern-lit absolute inset-0"
          data-slot="dot-pattern-lit"
        >
          {lightsOf(glow, seed).map((light) => (
            <div
              className="dot-pattern-light animate-dot-pattern-light motion-reduce:[animation-play-state:paused]"
              data-slot="dot-pattern-light"
              key={light.key}
              style={light.style}
            />
          ))}
          {interactive ? (
            <div
              className="dot-pattern-glow"
              data-slot="dot-pattern-glow"
              ref={spot}
            />
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
};
