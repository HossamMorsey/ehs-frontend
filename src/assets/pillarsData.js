import {
  gdpMap,
  gdpChart,
  inflationRateChart,
  inflationRateMap,
} from "../utils";

// ::: Economic Development Data Set sample :::
export const economicDevelopment = [
  {
    id: 1,
    name: "GDP, current prices",
    source: "IMF",
    type: "Quantitative",
    description: "GDP, current price",
    images: [gdpChart, gdpMap],
    links: ["https://www.imf.org/external/datamapper/profile/EGY"],
  },
  {
    id: 2,
    name: "Inflation rate",
    source: "CAPMAS",
    type: "Quantitative",
    description: "",
    images: [inflationRateChart, inflationRateMap],
    links: [],
  },
  {
    id: 3,
    name: "Number of youth led SMEs",
    source: "Multiple",
    type: "Both",
    description:
      "Despite efforts to encourage unleash Egyptian young and dynamic entrepreneurial talents to make self employment the first career choice, the Egyptian entrepreneurial climate faces the following challenges:(Ab-delbary, 2019; Creative Associates International, 2014)",
    images: [],
    links: [
      "https://www.worldbank.org/en/results/2020/04/22/empowering-egyptian-entrepreneurs",
      "https://aja.journals.ekb.eg/article_149665_77cac3dd9e6249bfc11f7f1cb842d6c1.pdf",
      "https://www.oxfamitalia.org/wp-content/uploads/2020/06/Egypt-Country-Study.pdf",
      "https://fount.aucegypt.edu/cgi/viewcontent.cgi?article=3051&context=etds",
    ],
  },
  {
    id: 4,
    name: "Unemployment rate and gender breakdown",
    source: "CAPMAS, World Bank",
    type: "Quantitative",
    description:
      "Unemployment, female (% of female labor force) (national estimate) - Egypt, Arab Rep.",
    images: [],
    links: [
      "https://www.capmas.gov.eg/HomePage.aspx",
      "https://data.worldbank.org/indicator/SL.UEM.TOTL.FE.NE.ZS?locations=EG",
    ],
  },
  {
    id: 5,
    name: "Exchange Rate in the parallel market",
    source: "EG Currency",
    type: "Quantitative",
    description: "Live exchange rate for EGP in Black Market",
    images: [],
    links: ["https://egcurrency.com/en/currency/egp/exchange"],
  },
  {
    id: 6,
    name: "Commodities affected prices: wheat and fuel prices",
    source: "WFP",
    type: "Quantitative",
    description:
      "Commodities affected: wheat and fuel local production vs imports",
    images: [],
    links: [
      "https://unctadstat.unctad.org/datacentre/",
      "https://dataviz.vam.wfp.org/economic_explorer/prices?iso3=EGY",
    ],
  },
];
// ::: Energy Data Set sample :::
export const energy = [
  {
    id: 1,
    name: "(Electricity, Transportation, Tourism and refineries)",
    source: "IMF",
    type: "Quantitative",
    description: "GDP, current price",
    images: [gdpChart, gdpMap],
    links: ["https://www.imf.org/external/datamapper/profile/EGY"],
  },
  {
    id: 2,
    name: "Agriculture %of supply of natural resources, hydro, renewable and fuel etc.",
    source: "CAPMAS",
    type: "Quantitative",
    description: "",
    images: [inflationRateChart, inflationRateMap],
    links: [],
  },
  {
    id: 3,
    name: "Fuel",
    source: "Multiple",
    type: "Both",
    description:
      "Despite efforts to encourage unleash Egyptian young and dynamic entrepreneurial talents to make self employment the first career choice, the Egyptian entrepreneurial climate faces the following challenges:(Ab-delbary, 2019; Creative Associates International, 2014)",
    images: [],
    links: [
      "https://www.worldbank.org/en/results/2020/04/22/empowering-egyptian-entrepreneurs",
      "https://aja.journals.ekb.eg/article_149665_77cac3dd9e6249bfc11f7f1cb842d6c1.pdf",
      "https://www.oxfamitalia.org/wp-content/uploads/2020/06/Egypt-Country-Study.pdf",
      "https://fount.aucegypt.edu/cgi/viewcontent.cgi?article=3051&context=etds",
    ],
  },
  {
    id: 4,
    name: "Domestic %of supply of natural resources, hydro, renewable and fuel etc.",
    source: "CAPMAS, World Bank",
    type: "Quantitative",
    description:
      "Unemployment, female (% of female labor force) (national estimate) - Egypt, Arab Rep.",
    images: [],
    links: [
      "https://www.capmas.gov.eg/HomePage.aspx",
      "https://data.worldbank.org/indicator/SL.UEM.TOTL.FE.NE.ZS?locations=EG",
    ],
  },
  {
    id: 5,
    name: "The phase model for energy transitions towards renewables-based low-carbon energy systems in the MENA countries.",
    source: "EG Currency",
    type: "Quantitative",
    description: "Live exchange rate for EGP in Black Market",
    images: [],
    links: ["https://egcurrency.com/en/currency/egp/exchange"],
  },
  {
    id: 6,
    name: "Energy Production (GW)",
    source: "WFP",
    type: "Quantitative",
    description:
      "Commodities affected: wheat and fuel local production vs imports",
    images: [],
    links: [
      "https://unctadstat.unctad.org/datacentre/",
      "https://dataviz.vam.wfp.org/economic_explorer/prices?iso3=EGY",
    ],
  },
];

// ::: Issues Data Set Sample :::
export const issues = [
  {
    id: 1,
    title: "Egypt's neighbouring countries and partners",
    impact: 40,
    description:
      "GCC expresses support for Egypt's national security, water rights. Libya's instability threatens Egypt, The presence of terrorist cells in southern Libya poses a challenge to regional security",
    links: [
      "https://carnegieendowment.org/2021/11/04/navigating-democracy-security-dilemma-in-u.s.-foreign-policy-lessons-from-egypt-india-and-turkey-pub-85701",
      "https://www.atalayar.com/en/articulo/politics/libyas-instability-threatens-egypt/20230308164045182089.html",
    ],
  },
  {
    id: 2,
    title: "Palestine, Sudan and EU policy",
    impact: 35,
    description: "Lorem opsem ",
    links: [
      "https://time.com/6330904/palestinians-gaza-fear-permanent-expulsion/",
      "https://www.refugeesinternational.org/reports-briefs/sudan-in-crisis-improving-the-response-for-sudanese-refugees-in-egypt/",
      "https://www.npr.org/2023/12/12/1218388766/egypt-israel-gaza-palestinians-hamas",
    ],
  },
  {
    id: 3,
    title: "Economic issues",
    impact: 41,
    description: "Lorem opsem ",
    links: [
      "https://www.reuters.com/world/middle-east/how-deep-are-egypts-economic-troubles-2023-03-03/",
      "https://economic-research.bnpparibas.com/Media-Library/en-US/Difficult-Egyptian-economy-3/30/2023,c39365",
    ],
  },
  {
    id: 4,
    title: "Unemployment",
    impact: 29.7,
    description:
      "According to the Central Agency for Public Mobilization and Statistics (CAPMAS), the overall poverty rate in Egypt during the fiscal year 2019/2020 was 29.7%.5 Poverty contributes to material deprivation whereby essential and commonplace goods and services become unaffordable, potentially leading to a deterioration of living standards and threatening the wellbeing of all those affected. ",
    links: [
      "https://www.unicef.org/egypt/media/10841/file/Youth%20Unemployment%20in%20Egypt%20(English).pdf",
      "https://english.ahram.org.eg/News/512306.aspx",
    ],
  },
  {
    id: 5,
    title: "Exchange rate and foreign currency",
    impact: 60,
    description:
      "To buck the trend of people withdrawing their dollars from the banking system amid declining trust in the value of the Egyptian pound — which has depreciated over 50 percent against the dollar since March 2022 — the new certificates “raise the cost of withdrawing US dollar deposits from the banking system,” said an investment manager at a US consulting company operating in Egypt. ",
    links: [
      "https://www.madamasr.com/en/2023/07/27/news/u/amid-foreign-currency-shortage-egypt-launches-new-high-interest-dollar-savings-certificates/",
      "https://www.bnnbloomberg.ca/major-egypt-banks-suspend-debit-card-use-in-foreign-currency-1.1982193",
    ],
  },
  {
    id: 6,
    title: "Heatwaves reduce crops",
    impact: 30,
    description: "Lorem opsem ",
    links: ["https:jjjjj", "adcknskjkjsjkcsnlacamcklacac"],
  },
  {
    id: 7,
    title: "Sugar crisis",
    impact: 30,
    description: "Lorem opsem ",
    links: ["https:jjjjj", "adcknskjkjsjkcsnlacamcklacac"],
  },
  {
    id: 8,
    title: "Water-Energy-Food nexus",
    impact: 30,
    description: "Lorem opsem ",
    links: ["https:jjjjj", "adcknskjkjsjkcsnlacamcklacac"],
  },
  {
    id: 9,
    title: "Green jobs ",
    impact: 30,
    description: "Lorem opsem ",
    links: ["https:jjjjj", "adcknskjkjsjkcsnlacamcklacac"],
  },
  {
    id: 10,
    title: "Unemployment",
    impact: 29.7,
    description:
      "According to the Central Agency for Public Mobilization and Statistics (CAPMAS), the overall poverty rate in Egypt during the fiscal year 2019/2020 was 29.7%.5 Poverty contributes to material deprivation whereby essential and commonplace goods and services become unaffordable, potentially leading to a deterioration of living standards and threatening the wellbeing of all those affected. ",
    links: [
      "https://www.unicef.org/egypt/media/10841/file/Youth%20Unemployment%20in%20Egypt%20(English).pdf",
      "https://english.ahram.org.eg/News/512306.aspx",
    ],  
  },
];
