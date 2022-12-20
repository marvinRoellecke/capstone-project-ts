import CardListGeneral from "../CardListGeneral/CardListGeneral";

export default function Main({
  passedLocations,
  filterData,
  onToggleFavorite,
}) {
  return (
    <main>
      <CardListGeneral
        passedLocations={passedLocations}
        filterData={filterData}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
