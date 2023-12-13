// Configuration/database.js
/* const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kos_revou',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection; */


// Configuration/database.js
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.MYSQL_PRIVATE_URL);

// Uji koneksi ke database
db.authenticate()
  .then(() => {
    console.log('Koneksi ke database berhasil.');
  })
  .catch(err => {
    console.error('Gagal terkoneksi ke database:', err);
  });

module.exports = db;
