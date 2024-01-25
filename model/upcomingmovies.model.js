const mongoose = require('mongoose');

const UpcomingMovieSchema =  mongoose.Schema({
  adult: {
    type: Boolean,
    required: true,
  },
  backdrop_path: {
    type: String,
    required: true,
  },
  genre_ids: {
    type: [Number],
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  original_language: {
    type: String,
    required: true,
  },
  original_title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  release_date: {
    type: String, // You might want to use Date type if you need to perform date-related operations
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  video: {
    type: Boolean,
    required: true,
  },
  vote_average: {
    type: Number,
    required: true,
  },
  vote_count: {
    type: Number,
    required: true,
  },
});

const UpComingMovie = mongoose.model('upcomingmovie', UpcomingMovieSchema);

module.exports = UpComingMovie;
