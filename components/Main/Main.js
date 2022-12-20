import CardListGeneral from "../CardListGeneral/CardListGeneral";

export default function Main({ locations, filterData, onToggleFavorite }) {
  return (
    <main>
      <CardListGeneral
        locations={locations}
        filterData={filterData}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
