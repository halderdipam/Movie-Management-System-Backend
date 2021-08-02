const {createMovies}=require('./post');
const {deleteMovies}=require('./delete');
const {updateMovies}=require('./put');
const {getAllMovies,getSpecificMovie}=require('./get');

module.exports={createMovies,deleteMovies,updateMovies,getAllMovies,getSpecificMovie};