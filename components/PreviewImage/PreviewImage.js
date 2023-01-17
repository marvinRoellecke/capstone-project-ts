import Image from "next/image";
import { useMemo } from "react";

export default function PreviewImage({ file }) {
  const src = useMemo(() => URL.createObjectURL(file), [file]);

  return (
    <div style={{ position: "relative", margin: "0 0 2rem 0" }}>
      <Image src={src} alt="" width={100} height={100} />
    </div>
  );
}
