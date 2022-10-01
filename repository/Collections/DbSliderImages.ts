const SliderImages = require('../../Model/SliderImages')

module.exports = {
    insertSliderImage : async function(url : String){

        const sliderImage = new SliderImages({
            url : url
        })

        try{
            const sliderImageSaved = await sliderImage.save();
            return {
                success : true,
                object : sliderImageSaved
            }
        }catch(e){
            console.log("OOPS, something went wrong in insertSliderImage" + e)
            return{
                success : false,
                object : {},
                msg : "OOPS, something went wrong in insertSliderImage" + e,
                status : 405
            }
        }
    },

    getAllSliderImages : async function(url : String){


        try{
            const getSliderImages = await SliderImages.find();
            console.log(getSliderImages)
            return {
                success : true,
                object : getSliderImages
            }
        }catch(e){
            console.log("OOPS, something went wrong in getAllSliderImages" + e)
            return{
                success : false,
                object : {},
                msg : "OOPS, something went wrong in getAllSliderImages" + e,
                status : 405
            }
        }
    }
}