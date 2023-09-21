const { Pool } = require('pg');
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: (process.env.DATABASE_SSL != "false") && {
    rejectUnauthorized: false
  }
});

const getEvents = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM events ORDER BY id ASC', (error, events) => {
      if (error) {
        reject(error)
      }
      resolve(events.rows);
    })
  }) 
}
const createEvents = (body) => {
  return new Promise(function(resolve, reject) {
    const { id,title, location, eventtime, eventdescription,category } = body
    pool.query('INSERT INTO events (title, location, date, eventdescription,category) VALUES ($1, $2 , $3 ,$4 ,$5) RETURNING *', [title,date, location, eventdescription, category], (error, events) => {
      if (error) {
        reject(error)
      }
      resolve(`A new event has been added : ${events.rows[0]}`)
    })
  })
}
const deleteEvents = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM events WHERE id = $1', [id], (error, events) => {
      if (error) {
        reject(error)
      }
      resolve(`User deleted event with ID: ${id}`)
    })
  })
}

module.exports = {
  getEvents,
  createEvents,
  deleteEvents,
}

















module.exports = db;