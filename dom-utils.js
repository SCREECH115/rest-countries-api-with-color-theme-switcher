const createInfoElement = (labelName, value) => {
  const infoElement = document.createElement("div");

  const labelElement = document.createElement("strong");
  labelElement.innerText = `${labelName}: `;
  const valueElement = document.createElement("span");
  valueElement.innerText = value;

  infoElement.appendChild(labelElement);
  infoElement.appendChild(valueElement);

  return infoElement;
};

const createFlagImgElement = (country) => {
  const imgContainerElement = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.src = country.flagUrl;
  imgElement.alt = `${country.name} flag`;

  imgContainerElement.appendChild(imgElement);

  return imgContainerElement;
};

const createCountryItemElement = (country) => {
  const countryElement = document.createElement("li");

  const anchorElement = document.createElement("a");
  anchorElement.href = `?country=${country.code}`;

  anchorElement.appendChild(createFlagImgElement(country));

  const infoContainerElement = document.createElement("div");
  infoContainerElement.classList.add("info-container");

  const countryNameElement = document.createElement("strong");
  countryNameElement.innerText = country.name;
  countryNameElement.classList.add("country-name");

  infoContainerElement.appendChild(countryNameElement);

  infoContainerElement.appendChild(
    createInfoElement("Population", country.population)
  );
  infoContainerElement.appendChild(createInfoElement("Region", country.region));
  infoContainerElement.appendChild(
    createInfoElement("Capital", country.capital)
  );

  anchorElement.appendChild(infoContainerElement);

  countryElement.appendChild(anchorElement);

  return countryElement;
};

const createListElement = (countries) => {
  const listElement = document.createElement("ul");
  countries.forEach((country) => {
    listElement.appendChild(createCountryItemElement(country));
  });
  return listElement;
};

const createDetailElement = (country) => {
  // capital: country.capital && country.capital[0],
  // population: country.population.toLocaleString(),
  // name: country.name.common,
  // nativeName: country.name.nativeName,
  // code: country.cioc,
  // region: country.region,
  // subregion: country.subregion,
  // flagUrl: country.flags.png,
  // currencies: country.currencies,
  // languages: country.languages,
  // tld: country.tld[0],

  const detailContainterElement = document.createElement("div");

  const flagImgElement = createFlagImgElement(country);
  const detailgNameElement = document.createElement("strong");
  detailgNameElement.innerText = country.name;

  detailContainterElement.appendChild(flagImgElement);
  detailContainterElement.appendChild(detailgNameElement);

  detailContainterElement.appendChild(
    createInfoElement("Native name", country.nativeName)
  );
  detailContainterElement.appendChild(
    createInfoElement("Population", country.population)
  );
  detailContainterElement.appendChild(
    createInfoElement("Region", country.region)
  );
  detailContainterElement.appendChild(
    createInfoElement("Sub region", country.subregion)
  );
  detailContainterElement.appendChild(
    createInfoElement("Capital", country.capital)
  );
  detailContainterElement.appendChild(
    createInfoElement("Top level domain", country.tld)
  );
  detailContainterElement.appendChild(
    createInfoElement("Curriencies", country.currencies)
  );
  detailContainterElement.appendChild(
    createInfoElement("Languages", country.languages)
  );

  return detailContainterElement;
};

const createDetailButton = (text, link) => {
  const anchorElement = document.createElement("a");
  anchorElement.innerText = text;
  anchorElement.classList.add("detail-back-link");
  anchorElement.href = link;

  return anchorElement;
};

const createBorderContainer = (country) => {
  if (country.borders || country.borders.length === 0) {
    return;
  }
  const borderCountriesContainerElement = document.createElement("div");
  const labelElement = document.createElement("strong");
  labelElement.innerText = "Border Countries";

  borderCountriesContainerElement.appendChild(labelElement);

  country.borders.forEach((border) => {
    borderCountriesContainerElement.appendChild(
      createDetailButton("Border", "/?")
    );
  });
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetails = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createDetailButton("Go back", "/"));
  rootElement.appendChild(createDetailElement(country));
};
