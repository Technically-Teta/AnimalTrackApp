const { Pool } = require('pg');
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: (process.env.DATABASE_SSL != "false") && {
    rejectUnauthorized: false
  }
});

const getSighting = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM sightings ORDER BY id ASC', (error, sightings) => {
      if (error) {
        reject(error)
      }
      resolve(sightings.rows);
    })
  }) 
}
const createSighting = (body) => {
  return new Promise(function(resolve, reject) {
    const { id,nickname,location } = body
    pool.query('INSERT INTO sightings ( nickname, location) VALUES ($1, $2 ) RETURNING *', [id,nickname, location], (error, sightings) => {
      if (error) {
        reject(error)
      }
      resolve(`A new Animal Sighting has been added : ${sightings.rows[0]}`)
    })
  })
}
 

module.exports = {
  getSighting,
  createSighting,
 
}

















module.exports = db;