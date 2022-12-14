// ===== IMPORTS ====
const DbSliderImage = require('./Collections/DbSliderImages');
require('dotenv').config();


const insertSliderImage = async function (req, res) {
  const body = req.body;


  try {
    res.status(200).json(await DbSliderImage.insertSliderImage(body.url));
  } catch (err) {
    res.status(500).json({message: err, route: "/api/create/sliderImage"});
  }
};

const getAllSliderImage = async function (req, res) {
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