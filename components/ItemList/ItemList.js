import dummyItems from "../../utils/data/dummyItems";

export default function ItemList() {
  return (
    <>
      <ul>
        {dummyItems.map((item) => (
          <article key={item.id}>{item.title}</article>
        ))}
      </ul>
    </>
  );
}
