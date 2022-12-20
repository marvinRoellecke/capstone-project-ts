import CardListGeneral from "../CardListGeneral/CardListGeneral";

export default function Main({ passedLocations, filterData }) {
  return (
    <main>
      <CardListGeneral
        passedLocations={passedLocations}
        filterData={filterData}
      />
    </main>
  );
}
