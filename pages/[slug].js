import testItemData from "../utils/data/testItemData";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function DetailsPage() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentLocation = testItemData.find((item) => item.slug === slug);

  if (!currentLocation) {
    return (
      <>
        <h2>Diese Seite gibt es nicht</h2>
      </>
    );
  }

  return (
    <>
      <div>
        <header></header>
        <main>
          <h1>{currentLocation.title}</h1>
          <p>{currentLocation.rating}</p>
          <p>{currentLocation.address.address}</p>
          <div>
            {currentLocation.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h3>Description</h3>
          <article>
            Lorem ipsum dolor sit amet, pro lorem graeco consequuntur no, pri an
            dictas placerat, pri labore delenit no. Ad sea errem legendos, et
            eos posse prompta. An adhuc aliquam vis, commune nominavi ex pro,
            legere quidam essent cu duo. Diceret postulant vis no, nam in
            commodo labitur, in dicit viris legendos pri. Virtute sententiae no
            quo, ea malis soluta convenire vis, volutpat argumentum voluptatibus
            id sea.
          </article>
          <h3>Opening Times</h3>
          <aside>8:00 - 22:00</aside>
        </main>
      </div>
    </>
  );
}
