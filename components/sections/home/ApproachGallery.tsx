import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/ui/Button";

/**
 * Visual proof gallery (docs/04 §6).
 *
 * Named "A Closer Look at Our Service", NOT "Recent Projects": the committed
 * artwork is illustrative, and labelling generic graphics as completed customer
 * work would fabricate project outcomes (docs/17 §22). Captions describe the
 * process, never a named customer, address, or result.
 *
 * All tiles share one 7:4 crop so the grid reads as a set. Swap `src` values in
 * `content/homepage/index.ts` when real, cleared job photography exists — and
 * only then consider renaming the section.
 */
export function ApproachGallery() {
  const { gallery, primaryCta } = homepageContent;
  if (gallery.items.length === 0) return null;

  return (
    <section className="section section-default" aria-labelledby="gallery-heading">
      <div className="section__inner home-gallery">
        <div className="home-gallery__intro">
          <p className="home-eyebrow">{gallery.eyebrow}</p>
          <h2 id="gallery-heading" className="home-gallery__heading">
            {gallery.heading}
          </h2>
          <p className="home-gallery__lede">{gallery.lede}</p>
          <Button variant="accent" href={primaryCta.href}>
            {primaryCta.label}
          </Button>
        </div>

        <ul className="home-gallery__grid" role="list">
          {gallery.items.map((item) => (
            <li key={item.src} className="home-gallery__item">
              <div className="home-gallery__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 48rem) 100vw, (max-width: 64rem) 50vw, 28vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <p className="home-gallery__caption">{item.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
