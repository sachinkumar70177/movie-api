const express = require("express");
const fs = require("fs");
const PopularMovie = require("../model/popularmovie.model");
const UpComingMovie = require("../model/upcomingmovies.model");
const TopratedMovie = require("../model/toprated.model");

const movieRouter = express.Router();


movieRouter.get("/popular", async (req, res) => {
    try {
      // Get the search query from the request query parameters
    //   const { query } = req.query;
  
      // Search for posts by title
      const movie = await PopularMovie.find();
  
      return res.status(200).json({ results: movie });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  });

  movieRouter.get("/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        if(id==="popular"){
            const movie = await PopularMovie.find();
            return res.status(200).json({ results: movie });
        }
        if(id==="upcoming"){
            const movie = await UpComingMovie.find();
  
            return res.status(200).json({ results: movie });
        }
        if(id==="top_rated"){
            const movie = await TopratedMovie.find();
  
      return res.status(200).json({ results: movie });
        }  
    } catch (error) {
        console.error(error);
      return res.status(500).json({ message: "Server error" }); 
    }
   
  })


  module.exports = {
    movieRouter,
  };