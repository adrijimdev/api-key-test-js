require("dotenv").config();
const fetch = require("node-fetch");

// CÓDIGO FUNCIONAL HARDCODEANDO ID DE LA SERIE
// const API_KEY = process.env.API_KEY;
// const URL = `https://api.themoviedb.org/3/tv/100088?api_key=${API_KEY}&language=es-ES`;
// const getSerieData = async () => {
//   const res = await fetch(URL);
//   const data = await res.json();
//   return data;
// };
// exports.handler = async function () {
//   const serieData = await getSerieData();
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ data: serieData }),
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Content-Type": "application/json"
//       // "Access-Control-Allow-Methods": "GET, POST, OPTION",
//     }
//   };
// };

// INTENTO 1
const API_KEY = process.env.API_KEY;
const idSerie = event.queryStringParameters.idSerie;
const URL = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=es-ES`;
const getSerieData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
exports.handler = async function () {
  const serieData = await getSerieData();
  return {
    statusCode: 200,
    body: JSON.stringify({ data: serieData }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
      // "Access-Control-Allow-Methods": "GET, POST, OPTION",
    }
  };
};

// INTENTO 2
// console.log("Hey bro");
// const getSerieData = (exports.handler = async function (event, context, callback) {
//   console.log("Hemos visto modals y props?");
//   const API_KEY = process.env.API_KEY;
//   const idSerie = event.queryStringParameters.idSerie;
//   console.log(idSerie);
//   const URL = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=es-ES`;

//   // Perform the API call.
//   const res = await fetch(URL);
//   const data = await res.json();
//   return data;
// });

// exports.handler = async function () {
//   const serieData = await getSerieData();
//   console.log("Si");
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ data: serieData }),
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Content-Type": "application/json"
//       // "Access-Control-Allow-Methods": "GET, POST, OPTION",
//     }
//   };
// };

// INTENTO 3
// exports.handler = async (event) => {
//   const API_KEY = process.env.API_KEY;
//   const idSerie = event.queryStringParameters.idSerie;
//   const URL = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=es-ES`;
//   const res = await fetch(URL);
//   const data = await res.json();
//   console.log("menu navbar");
//   return {
//     statusCode: 200,
//     body: JSON.stringify(data),
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Content-Type": "application/json"
//       // "Access-Control-Allow-Methods": "GET, POST, OPTION",
//     }
//   };
// };

// INTENTO 4
// const getData = async (event) => {
//   const API_KEY = process.env.API_KEY;
//   // const idSerie = event.queryStringParameters.idSerie;
//   const URL = `https://api.themoviedb.org/3/tv/$100088?api_key=${API_KEY}&language=es-ES`;
//   const res = await fetch(URL);
//   const data = await res.json();
//   return data;
// };
// exports.handler = async function () {
//   const serieData = await getData();
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ data: serieData }),
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Content-Type": "application/json"
//       // "Access-Control-Allow-Methods": "GET, POST, OPTION",
//     }
//   };
// };
