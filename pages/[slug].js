import testItemData from "../../utils/data/testItemData";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function DetailsPage() {
  return (
    <>
      <h2>Title</h2>
      <p>Rating</p>
      <p>Address</p>
      <p>Tags</p>
      <h3>Description</h3>
      <article>Lore Ipsum..</article>
      <h3>Opening Times</h3>
      <aside>8:00 - 22:00</aside>
    </>
  );
}
