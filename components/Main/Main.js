import CardListGeneral from "../CardListGeneral/CardListGeneral";

export default function Main({ passedSportLocations, filterData }) {
  return (
    <main>
      <CardListGeneral
        sortSportLocations={passedSportLocations}
        filterData={filterData}
      />
    </main>
  );
}
