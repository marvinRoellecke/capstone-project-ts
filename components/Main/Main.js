import CardListGeneral from "../CardListGeneral/CardListGeneral";

export default function Main({ sortSportLocations }) {
  return (
    <main>
      <CardListGeneral sortSportLocations={sortSportLocations} />
    </main>
  );
}
