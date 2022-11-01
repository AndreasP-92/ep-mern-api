// ===== IMPORTS ====
const DbSliderImage = require('./Collections/DbSliderImages');
const axios = require('axios');
require('dotenv').config();

// ===== OTHER ====



const insertSliderImage = async function (req: any, res: any) {
  const body = req.body;
  console.log(body)
  try {
    res.status(200).json(await DbSliderImage.insertSliderImage(body.url));
  } catch (err) {
    res.status(500).json({message: err, route: "/api/create/sliderImage"});
  }
};

const getAllSliderImage = async function (req: any, res: any) {
  // await DbSliderImage.insertSliderImage(body.url)
  try {
    res.status(200).json(await DbSliderImage.getAllSliderImages());
  } catch (err) {
    res.status(500).json({message: err, route: "/api/create/sliderImage"});
  }
};

module.exports = {
  insertSliderImage,
  getAllSliderImage
}