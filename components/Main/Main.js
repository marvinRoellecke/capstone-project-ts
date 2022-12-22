import CardListGeneral from "../CardListGeneral/CardListGeneral";
import CardListFavorites from "../CardListFavorites/CardListFavorites";

export default function Main({
  locations,
  filterData,
  onToggleFavorite,
  favorites,
  favoritesPage,
}) {
  return (
    <main>
      {favoritesPage ? (
        <CardListFavorites
          locations={locations}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
        />
      ) : (
        <CardListGeneral
          locations={locations}
          filterData={filterData}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
        />
      )}
    </main>
  );
}
