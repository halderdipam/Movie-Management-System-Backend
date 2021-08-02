
const {getAllStarCasts,getStarCastAllMovies}=require('./get');
const {createStarCasts}=require('./post');
const {deleteStarCasts}=require('./delete');
const {updateStarCasts}=require('./put');

module.exports={createStarCasts,getAllStarCasts,getStarCastAllMovies,updateStarCasts,deleteStarCasts};