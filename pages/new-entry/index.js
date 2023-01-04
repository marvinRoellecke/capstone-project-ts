import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputText from "../../components/Inputs/InputText";
import InputCheckbox from "../../components/Inputs/InputCheckbox";

export default function NewEntryForm() {
  async function handleCreateNewNote(newLocation) {
    await fetch("/api/locations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLocation),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const title = form.title.value;
    const info = {
      sport: form.sport.value,
      numberOfCourts: Number(form.numberOfCourts.value),
      surface: form.surface.value,
    };
    const address = {
      street: form.street.value,
      houseNumber: Number(form.houseNumber.value),
      postcode: Number(form.postcode.value),
      city: form.city.value,
    };
    const infrastructure = {
      lighting: form.lighting.checked,
      wheelchair: form.wheelchair.checked,
    };
    const outdoor = form.outdoor.checked;
    const isPublic = form.isPublic.checked;
    const rating = Number(form.rating.value);

    const newLocation = {
      title: title,
      info: info,
      address: address,
      latitude: "52.124535",
      longitude: "6.36345",
      image: `/img/defaultPics/${info.sport}.jpg`,
      infrastructure: infrastructure,
      outdoor: outdoor,
      public: isPublic,
      rating: rating,
    };

    event.target.reset();
    form.title.focus();
    handleCreateNewNote(newLocation);
  }

  return (
    <>
      <Head>
        <title>new entry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMobileLayout>
        <Header addLocation />
        <main>
          <StyledForm aria-labelledby="formTitle" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Allgemeine Infos</legend>
              <InputText type="text" id="title" label="Titel" />
            </fieldset>
            <fieldset>
              <legend>Sportplatz</legend>
              <StyledSelectLabel htmlFor="sport">Sportart</StyledSelectLabel>
              <select name="sport" id="sport" required>
                <option value="">-- Sportart --</option>
                <option value="athletics">Leichtathletik</option>
                <option value="basketball">Basketball</option>
                <option value="boule">Boule</option>
                <option value="fitness">Fitness</option>
                <option value="football">Fussball</option>
                <option value="skate">Skateboard</option>
                <option value="tennis">Tennis</option>
                <option value="tabletennis">Tischtennis</option>
                <option value="volleyball">Volleyball</option>
              </select>
              <InputText
                type="number"
                id="numberOfCourts"
                label="Anzahl an Plätzen"
              />

              <StyledSelectLabel htmlFor="surface">
                Untergrund
              </StyledSelectLabel>
              <select name="surface" id="surface">
                <option value="">-- Untergrund --</option>
                <option value="ash">Asche</option>
                <option value="beton">Beton</option>
                <option value="rubber">Kunststoff</option>
                <option value="green">Rasen</option>
                <option value="sand">Sand</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Adresse</legend>
              <InputText type="text" id="street" label="Straße" />
              <InputText type="number" id="houseNumber" label="Hausnummer" />
              <InputText type="number" id="postcode" label="Postleitzahl" />
              <InputText type="text" id="city" label="Stadt" />
            </fieldset>
            <fieldset id="infrastructure">
              <legend>Infrastruktur</legend>
              <InputCheckbox type="checkbox" id="lighting" label="beleuchtet" />
              <InputCheckbox
                type="checkbox"
                id="wheelchair"
                label="barrierefrei"
              />
              <InputCheckbox type="checkbox" id="outdoor" label="outdoor" />
              <InputCheckbox type="checkbox" id="isPublic" label="öffentlich" />
              <StyledRangeLabel htmlFor="rating">Bewertung</StyledRangeLabel>
              <input
                type="range"
                id="rating"
                name="rating"
                min={0}
                max={5}
                step={0.1}
                list="values"
              />
              <datalist id="values">
                <option value="0" label="0"></option>
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
              </datalist>
            </fieldset>
            <button type="submit">Hinzufügen</button>
          </StyledForm>
        </main>
        <Footer atNewEntryForm />
      </StyledMobileLayout>
    </>
  );
}

const StyledMobileLayout = styled.div`
  display: grid;
  grid-template-rows: 4rem auto 4rem;
  height: 100vh;

  main {
    overflow-y: scroll;
  }
`;

const StyledForm = styled.form`
  display: grid;
  margin: 0.5rem 1rem;

  fieldset {
    display: grid;
    border: none;
  }

  legend {
    display: none;
  }

  fieldset[id="infrastructure"] div {
    display: inline-flex;
    margin-top: 0.1rem;
  }

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  select {
    font-size: 1rem;
    padding: 2px 0 2px 2px;
    border: none;
    box-shadow: 0 1px 0 0 #e5e5e5;
    margin-bottom: 1rem;
  }

  select:focus {
    box-shadow: 0 2px 0 0 green;
    outline: none;
  }

  button {
    justify-self: center;
    padding: 0.5rem;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 1rem;
  }

  datalist {
    display: flex;
    justify-content: space-between;
    writing-mode: horizontal-tb;
    margin: 0 1rem;
  }

  input[type="range"] {
    margin: 0 1rem;
  }
`;

const StyledSelectLabel = styled.label`
  font-size: 0.75rem;
  color: #999;
`;

const StyledRangeLabel = styled.label`
  font-size: 0.75rem;
  color: #999;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
`;
