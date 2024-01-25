const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const {connection }= require("./db")
const axios=require("axios")
const userRouter = require("./routes/user.routes");
const PopularMovie = require("./model/popularmovie.model");
const TopratedMovie = require("./model/toprated.model");
const UpComingMovie = require("./model/upcomingmovies.model");
const { movieRouter } = require("./routes/moviesroutes");
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use("/users", userRouter)

app.use("/movies",movieRouter)
// app.get("/movies", async (req, res) => {
//     try {
      
  
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
//     //   const data = await response.json();
  
//       // Insert data into MongoDB using Mongoose model
//       await UpComingMovie.insertMany(response.data.results);
// //   console.log(response.data)
//       res.send(response.data.results);
//     } catch (error) {
//       console.error("Error fetching and inserting movie data:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
app.listen(8080, async () => {
  await connection;
  console.log("DB connected");
  console.log(`Server is running on port ${port}`);
});


