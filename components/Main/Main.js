import CardListGeneral from "../CardListGeneral/CardListGeneral";

export default function Main({
  locations,
  filterData,
  onToggleFavorite,
  favorites,
}) {
  return (
    <main>
      <CardListGeneral
        locations={locations}
        filterData={filterData}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
      />
    </main>
  );
}
