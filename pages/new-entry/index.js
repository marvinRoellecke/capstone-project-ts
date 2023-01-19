import styled from "styled-components";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputText from "../../components/Inputs/InputText";
import InputCheckbox from "../../components/Inputs/InputCheckbox";
import PreviewImage from "../../components/PreviewImage/PreviewImage";
import Icon from "../../components/Icon/Icon";
import { selectSports, selectSurfaces } from "../../lib/data/selectData";

export default function NewEntryForm({ startFetching }) {
  const [isSent, setIsSent] = useState(false);
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleFileUpload(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    setIsUploading(true);

    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const uploadData = await response.json();

    setImage(null);
    setIsUploading(false);

    return uploadData.secure_url;
  }

  async function handleCreateNewNote(newLocation) {
    await fetch("/api/locations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLocation),
    });
    startFetching();
  }

  async function getCoordinates(address) {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?housenumber=${address.houseNumber}&street=${address.street}&city=${address.city}&format=json&apiKey=aa57917c767c47368ecd1f7da4ebe977`,
      { method: "GET" }
    );
    const { results } = await response.json();
    const coordinates = [results[0].lat, results[0].lon];
    return coordinates;
  }

  function selectImage(sport) {
    if (sport === "basketball") {
      const image =
        "https://res.cloudinary.com/didesfi8h/image/upload/v1673270938/localSports/defaultPics/basketball.webp";
      return image;
    }
    if (sport === "fussball") {
      const image =
        "https://res.cloudinary.com/didesfi8h/image/upload/v1673808689/localSports/defaultPics/fussball.webp";
      return image;
    }
    if (sport === "parkour") {
      const image =
        "https://res.cloudinary.com/didesfi8h/image/upload/v1673806279/localSports/defaultPics/parkour.webp";
      return image;
    }
    if (sport === "tennis") {
      const image =
        "https://res.cloudinary.com/didesfi8h/image/upload/v1673270938/localSports/defaultPics/tennis.webp";
      return image;
    }
    if (sport === "tischtennis") {
      const image =
        "https://res.cloudinary.com/didesfi8h/image/upload/v1673270938/localSports/defaultPics/tischtennis.webp";
      return image;
    } else {
      const image = `https://res.cloudinary.com/didesfi8h/image/upload/v1673270937/localSports/defaultPics/${sport}.webp`;
      return image;
      //beachvolleyball, boule, fitness, leichtathletik, skateboard
    }
  }

  async function handleSubmit(event) {
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
    const rating = Number(form.rating.value);

    const coordinates = await getCoordinates(address);

    const imageURL =
      event.target.imgUpload.value === ""
        ? selectImage(info.sport)
        : await handleFileUpload(event);

    const newLocation = {
      title: title,
      info: info,
      address: address,
      coordinates: coordinates,
      image: imageURL,
      infrastructure: infrastructure,
      rating: rating,
    };

    event.target.reset();

    handleCreateNewNote(newLocation);
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
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

        <StyledPopUp isSent={isSent}>
          <p> Sportplatz wurde erfolgreich hinzugefügt!</p>
        </StyledPopUp>

        <main>
          <StyledForm aria-labelledby="formTitle" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Allgemeine Infos</legend>
              <InputText
                type="text"
                id="title"
                label="Titel"
                maxLength="50"
                required={true}
              />
            </fieldset>
            <fieldset>
              <legend>Sportplatz</legend>
              <StyledSelectLabel htmlFor="sport">Sportart</StyledSelectLabel>
              <select name="sport" id="sport" required>
                {selectSports.map((sport) => (
                  <option key={sport.value} value={sport.value}>
                    {sport.content}
                  </option>
                ))}
              </select>
              <InputText
                type="number"
                id="numberOfCourts"
                label="Anzahl an Plätzen"
                max={100}
                min={1}
              />

              <StyledSelectLabel htmlFor="surface">
                Untergrund
              </StyledSelectLabel>
              <select name="surface" id="surface">
                {selectSurfaces.map((surface) => (
                  <option key={surface.value} value={surface.value}>
                    {surface.content}
                  </option>
                ))}
              </select>
            </fieldset>
            <StyledAddressFields>
              <legend>Adresse</legend>
              <InputText
                type="text"
                id="street"
                label="Straße"
                maxLength="40"
                required={true}
              />
              <InputText
                type="number"
                id="houseNumber"
                label="Hausnr."
                max={99999}
                min={0}
                required={true}
              />
              <InputText
                type="number"
                id="postcode"
                max={99999}
                min={0}
                label="PLZ"
                required={true}
              />
              <InputText
                type="text"
                id="city"
                label="Stadt"
                maxLength="40"
                required={true}
              />
            </StyledAddressFields>
            <fieldset id="infrastructure">
              <legend>Infrastruktur</legend>
              <InputCheckbox type="checkbox" id="lighting" label="beleuchtet" />
              <InputCheckbox
                type="checkbox"
                id="wheelchair"
                label="barrierefrei"
              />
            </fieldset>
            <fieldset>
              <StyledRangeLabel htmlFor="rating">Bewertung</StyledRangeLabel>
              <input
                type="range"
                id="rating"
                name="rating"
                min={0}
                max={5}
                step={0.1}
                list="values"
                defaultValue={2.5}
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
            <fieldset>
              <StyledImageLabel htmlFor="imgUpload">
                {!image && (
                  <>
                    <Icon image />
                    Bild auswählen
                  </>
                )}
                {image && <PreviewImage file={image} />}
              </StyledImageLabel>
              <StyledImageUpload
                type="file"
                name="file"
                id="imgUpload"
                accept="image/*"
                value={imageValue}
                onChange={(event) => {
                  setImageValue(event.target.value);
                  setImage(event.target.files[0]);
                }}
              />
            </fieldset>
            <button type="submit">
              {isUploading ? "hochladen..." : "Hinzufügen"}
            </button>
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
  height: 100svh;

  main {
    overflow-y: scroll;
  }
`;

const StyledPopUp = styled.div`
  justify-self: center;
  position: absolute;
  bottom: -2.5rem;
  z-index: 10;
  padding: 2.5rem 2.5rem 0 2.5rem;
  margin: 0 1rem;
  color: var(--color-foreground-alt);
  background-color: #48bf84;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-align: center;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: ${(props) => (props.isSent ? "12rem" : 0)};
  transition: height 0.5s ease-in-out 0.1s;
`;

const StyledForm = styled.form`
  display: grid;
  margin: 0.5rem 1rem;

  fieldset {
    display: grid;
    border: none;
  }

  fieldset[id="infrastructure"] {
    display: grid;
    grid-row: auto;
    grid-template-columns: 1fr 1fr;
  }

  fieldset:last-of-type {
    margin-top: 1rem;
  }

  legend {
    display: none;
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
    margin-top: 1rem;
    padding: 0.5rem 0.8rem;
    font-size: 1.2rem;
    background-color: #48bf84;
    color: var(--color-foreground-alt);
    border: none;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    width: 100%;

    &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease;
    }
  }

  datalist {
    display: flex;
    justify-content: space-between;
    writing-mode: horizontal-tb;
    margin: 0 1rem;
  }

  input[type="range"] {
    height: 38px;
    -webkit-appearance: none;
    margin: 5px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #5da399;
    background: #5da399;
    border-radius: 5px;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000;
    border: 1px solid #5da399;
    height: 30px;
    width: 15px;
    border-radius: 5px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
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

const StyledAddressFields = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  div:nth-of-type(1) {
    grid-column: 1 / span 2;
  }
  div:nth-of-type(4) {
    grid-column: 2 / span 2;
  }
`;

const StyledImageUpload = styled.input`
  display: none;
`;

const StyledImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  height: 8rem;
  width: 8rem;
  position: relative;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  color: grey;
`;
