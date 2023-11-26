const express = require("express")

const cors = require('cors');
const database = require("./database");
const morgan = require("morgan");

const app = express()
app.use(cors({ origin: 'http://localhost:3000' }));

// app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.set("view engine", "ejs")


// app.use(cors({
//   origin: 'http://127.0.0.1:3000', // Replace with your allowed origin
//   optionsSuccessStatus: 200 // Some legacy browsers (IE11) choke on 204
// }));

app.use(morgan("common"));


// FUNCTION FOR TESTING PURPOSES ONLY!!!
app.get("/", function (req, res, next) {

  // database
  //   .select('*')
  //   .from('employee')
  //   .then((employee) => res.json({ message: `Hello from MySQL ${employee[0].firstname}` }))
  //   .catch(next);
  // database.raw('select VERSION() version')
  //   .then(([rows, columns]) => rows[0])
  //   .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
  //   .catch(next);
});

app.get("/healthz", function (req, res) {
  // do app logic here to determine if app is truly healthy
  // you should return 200 if healthy, and anything else will fail
  // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send("I am happy and healthy\n");
});


// GET ALL EMPLOYEES
app.get('/getusers', (req, res, next) => {
  database
    .select('*')
    .from('employee')
    .then((employee) => res.json(employee))
    .catch(next);
});

// GET employee based on his ID
app.get('/users', (req, res, next) => {
  const employeeID = req.query.employeeID;

  database
    .select('*')
    .from('employee')
    .where({ employee_id: employeeID })
    .then((employee) => {
      if (employee.length === 0) {
        res.status(404).json({ message: 'employee not found' });
      } else {
        res.json(employee[0]);
      }
    })
    .catch(next);
});

// GET every reservation for an employee
app.get('/reservation/all', (req, res, next) => {
  const employeeID = req.query.employeeID;

  database
    .select('*')
    .from('reservation')
    .where({ employee_id: employeeID })
    .then((reservation) => {
      if (reservation.length === 0) {
        res.status(404).json({ message: 'reservation not found' });
      } else {
        res.json(reservation);
      }
    })
    .catch(next);
});

// GET reservation based on its ID
app.get('/reservation', (req, res, next) => {
  const reservationID = req.query.reservationID;

  database
    .select('*')
    .from('reservation')
    .where({ reservation_id: reservationID })
    .then((reservation) => {
      if (reservation.length === 0) {
        res.status(404).json({ message: 'reservation not found' });
      } else {
        res.json(reservation[0]);
      }
    })
    .catch(next);
});

// get every reservation for a certain spot and in certain time range
app.get('/spot/reservation', (req, res, next) => {
  const spotID = req.query.spotID;
  const start_time = req.query.startTime;
  const end_time = req.query.endTime;
  const queryConditions = { spot_id: spotID };
  queryConditions.date = database.raw(`BETWEEN ? AND ?`, [start_time, end_time]);

  database
    .select('*')
    .from('reservation')
    .where({ queryConditions })
    .then((reservation) => {
      if (reservation.length === 0) {
        res.status(404).json({ message: 'no reservation found' });
      } else {
        res.json(reservation);
      }
    })
    .catch(next);
});

// get all spots in sector
app.get('/sector', (req, res, next) => {
  const sectorID = req.query.sectorID;
  console.log(sectorID)
  database
    .select('*')
    .from('spot')
    .leftJoin('reservation', 'reservation.spot_id', '=', 'spot.spot_id')
    .where({ sector_id: sectorID })
    .then((spot) => {
      if (spot.length === 0) {
        res.status(404).json({ message: 'no spots found' });
      } else {
        res.json(spot);
      }
    })
    .catch(next);
});

app.post('/new/reservation', (req, res, next) => {
  const { startTime, endTime, employeeID, spotID, license } = req.body;

  database
    .count('* as count')
    .from('reservation')
    .then((result) => {
      count = result[0].count;
    })
    .catch(next);

  count += 1;
  const currentTimestamp = new Date().toISOString();

  // Insert data into the 'reservation' table
  database('reservation')
    .insert({
      reservation_id: count,
      start_time: startTime,
      end_time: endTime,
      created: currentTimestamp,
      employee_id: employeeID,
      spot_id: spotID,
      vehicle_license: license,
    })
    .then(() => {
      res.status(201).json({ message: 'Reservation added successfully' });
    })
    .catch(next);
});




// module.exports = app;

app.listen(3001)
