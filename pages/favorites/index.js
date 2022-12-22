import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

export default function FavoritesPage({
  locations,
  onToggleFavorite,
  favorites,
}) {
  return (
    <div>
      <Header />
      <Main
        locations={locations}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
        favoritesPage
      />
      <Footer />
    </div>
  );
}
