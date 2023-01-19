import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

export default function FavoritesPage({
  locations,
  onToggleFavorite,
  favorites,
}) {
  return (
    <>
      <Head>
        <title>favorites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMobileLayout>
        <Header favoriteLabel />
        <Main
          locations={locations}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          favoritesPage
        />
        <Footer atFavoritesPage />
      </StyledMobileLayout>
    </>
  );
}

const StyledMobileLayout = styled.div`
  display: grid;
  grid-template-rows: 4rem auto 4rem;
  height: 100svh;

  main {
    overflow-y: scroll;
  }
`;
