module.exports = require('./src/functions/getSerieData.js')

require("dotenv").config();
const fetch = require("node-fetch");
const API_KEY = process.env.API_KEY;
const unsplashURL = `https://api.themoviedb.org/3/tv/100088?api_key=${API_KEY}&language=es-ES`;
const getImgData = async () => {
  const res = await fetch(unsplashURL);
  const data = await res.json();
  return data;
};
exports.handler = async function () {
  const imgData = await getImgData();
  return {
    statusCode: 200,
    body: JSON.stringify({ data: imgData }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
      // "Access-Control-Allow-Methods": "GET, POST, OPTION",
    }
  };
};
