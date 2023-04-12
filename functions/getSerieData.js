require("dotenv").config();
const fetch = require("node-fetch");

/* COSAS PARA PROBAR
https://stackoverflow.com/questions/63022858/passing-query-string-parameters-in-lambda-functions-netlify
https://stackoverflow.com/questions/67029122/netlify-lambda-function-query-string-parameters-are-passed-in-different-way-betw
https://stackoverflow.com/questions/55878397/how-to-pass-query-parameters-to-a-url-inside-a-lambda-function-netlify-environm
*/

const API_KEY = process.env.API_KEY;
// const URL = `https://api.themoviedb.org/3/tv/100088?api_key=${API_KEY}&language=es-ES`;

// CÓDIGO FUNCIONAL HARDCODEANDO ID DE LA SERIE
// const API_KEY = process.env.API_KEY;

// const getSerieData = async (event) => {
//   const idSerie = JSON.parse(event.body);
//   const idSerieValue = idSerie.idSerie;
//   const URL = `https://api.themoviedb.org/3/tv/${idSerieValue}?api_key=${API_KEY}&language=es-ES`;
//   const res = await fetch(URL);
//   const data = await res.json();
//   return data;
// };
// exports.handler = async function () {
//   console.log("Estoy en la función netlify");
//   const serieData = await getSerieData();
//   console.log(serieData);
//   return ({
//     statusCode: 200,
//     body: JSON.stringify({ data: serieData }),
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Content-Type": "application/json"
//       // "Access-Control-Allow-Methods": "GET, POST, OPTION",
//     }
//   });
// };

// INTENTO CON EL CONTENIDO DE https://www.learnwithjason.dev/blog/serverless-functions/query-strings-serverless-functions
exports.handler = async event => {
  const querystring = event.queryStringParameters;
  const idSerie = querystring.idSerie;
  const URL = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=es-ES`;
  const res = await fetch(URL);
  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
      // "Access-Control-Allow-Methods": "GET, POST, OPTION",
    }
  };
};

// INTENTO 1
// const API_KEY = process.env.API_KEY;
// // const idSerie = event.queryStringParameters.idSerie;
// const idSerie = 100088;
// const URL = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=es-ES`;
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

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// function isNumeric(str) {
//   return !isNaN(str) && !isNaN(parseFloat(str));
// }

// const handler = async (event) => {
//   try {
//     // if (!event.body) {
//     //   return {
//     //     statusCode: 400,
//     //     body: "Please provide num1 and num2!",
//     //   };
//     // }

//     const params = JSON.parse(event.queryStringParameters);
//     const getSerieData = async () => {
//       const idSerie = params.idSerie;
//       const URL = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=es-ES`;
//       const res = await fetch(URL + params);
//       const data = await res.json();
//       return data;
//     };

// if (!body) {
//   return {
//     statusCode: 400,
//     body: "Please provide num1 and num2!",
//   };
// // }
// const num1 = body.num1 || false;
// const num2 = body.num2 || false;

// if (!num1 || !num2 || !isNumeric(num1) || !isNumeric(num2)) {
//   return {
//     statusCode: 400,
//     body: "Please provide valid num1 and num2!",
//   };
// }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({getSerieData()}),
//     };
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() };
//   }
// };

module.exports = { handler };
