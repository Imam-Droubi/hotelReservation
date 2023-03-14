import Hotel from "../models/Hotel.js";


//CREATE NEW HOTEL
export const createHotel = async(req,res,next)=>{
  const newHotel = new Hotel(req.body);
  try{
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  }catch(err){
    return next(err);
  }
};

//UPDATE A HOTEL
export const updateHotel = async(req,res,next)=>{
  try{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
    res.status(200).json(updatedHotel);
  }catch(err){
    return next(err);
  }
};

//DELETE A HOTEL
export const deleteHotel = async(req,res,next)=>{
  try{
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Has Been Deleted.");
  }catch(err){
    return next(err);
  }
};

// GET A HOTEL
export const getHotel = async(req,res,next)=>{
  try{
    const orderedHotel = await Hotel.findById(req.params.id);
    res.status(200).json(orderedHotel);
  }catch(err){
    return next(err);
  }
};

//GET ALL HOTELS
export const getAllHotels = async(req,res,next)=>{
  try{
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
  }catch(err){
    return next(err);
  }
};