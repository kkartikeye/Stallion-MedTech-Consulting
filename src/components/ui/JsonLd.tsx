/**
 * Renders a JSON-LD block. Content is generated from our own typed data
 * (never user input), so serializing it into a script tag is safe; the
 * `<` escape guards against a stray sequence breaking out of the tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
