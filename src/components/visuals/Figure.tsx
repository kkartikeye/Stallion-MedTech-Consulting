import Image from "next/image";
import { TechnicalPlate } from "./TechnicalPlate";
import { FigureLabel } from "@/components/ui/Editorial";
import { getImageSlot, type ImageSlotId } from "@/content/imagery";

/**
 * Renders a declared image slot.
 *
 * With a licensed photograph installed, this is an art-directed <Image>.
 * Without one, it renders the slot's technical plate on a drafting surface
 * with a discreet mono annotation naming the subject that belongs there —
 * honest about its own state, and still a designed composition rather than
 * a grey box.
 */
export function Figure({
  slot,
  className = "",
  aspect = "aspect-4/3",
  tone = "dark",
  priority = false,
  sizes = "100vw",
  showCaption = true,
  fit = "meet",
  captionTone,
}: {
  slot: ImageSlotId;
  className?: string;
  /** Tailwind aspect utility controlling the crop. */
  aspect?: string;
  tone?: "light" | "dark";
  priority?: boolean;
  sizes?: string;
  showCaption?: boolean;
  /** Crop the plate to fill rather than letterboxing it. */
  fit?: "meet" | "slice";
  /**
   * The caption sits outside the plate, so it follows the surrounding
   * section rather than the plate surface. Defaults to `tone`; set it
   * explicitly when a dark plate is captioned on a light background.
   */
  captionTone?: "light" | "dark";
}) {
  const image = getImageSlot(slot);
  const capTone = captionTone ?? tone;
  const hasImage = Boolean(image.src && image.alt);
  const captioned = showCaption && Boolean(image.figure);

  const surface = tone === "dark" ? "surface-drafting text-ink-400" : "surface-drafting-light text-ink-500";

  return (
    <figure className={`m-0 ${className}`}>
      <div className={`plate-marks relative overflow-hidden ${aspect} ${hasImage ? "" : surface}`}>
        {hasImage ? (
          <Image
            src={image.src as string}
            alt={image.alt as string}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <>
            <TechnicalPlate
              variant={image.plate}
              fit={fit}
              className={`absolute inset-0 h-full w-full ${fit === "slice" ? "" : "p-[7%]"}`}
            />
            {/* Slot annotation: what belongs here, and that it is pending.
                Right-aligned so it clears the gradients that tie full-bleed
                plates into their surrounding type. */}
            <div className="absolute bottom-0 right-0 max-w-[min(30ch,85%)] p-4 text-right sm:p-5">
              <span
                className={`annotation-sm block leading-relaxed ${
                  tone === "dark" ? "text-ink-400" : "text-ink-500"
                }`}
              >
                {image.brief}
              </span>
              <span
                className={`annotation-sm mt-1 block ${
                  tone === "dark" ? "text-ink-600" : "text-ink-400"
                }`}
              >
                Image pending
              </span>
            </div>
          </>
        )}
      </div>

      {captioned ? (
        <figcaption className="mt-4">
          <FigureLabel
            number={image.figure as string}
            title={hasImage ? (image.alt as string) : image.brief}
            tone={capTone}
          />
          {image.caption ? (
            <p
              className={`figure-caption mt-2 max-w-xl ${
                capTone === "dark" ? "text-ink-300" : "text-ink-600"
              }`}
            >
              {image.caption}
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
