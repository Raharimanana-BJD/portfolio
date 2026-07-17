import Image from "next/image";

interface MdxImageProps {
  src?: string;
  alt?: string;
}

export function MdxImage({ src, alt = "" }: MdxImageProps) {
  if (!src) return null;

  return (
    <span className="not-prose relative my-6 block aspect-video overflow-hidden rounded-lg border border-border">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 768px) 768px, 100vw"
      />
    </span>
  );
}
