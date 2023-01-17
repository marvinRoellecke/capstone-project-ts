import Image from "next/image";
import { useMemo } from "react";

export default function PreviewImage({ file }) {
  const src = useMemo(() => URL.createObjectURL(file), [file]);

  return (
    <Image
      src={src}
      alt="image to upload"
      fill={true}
      style={{ objectFit: "cover" }}
    />
  );
}
