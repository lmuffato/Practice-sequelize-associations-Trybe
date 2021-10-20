/*
npm init -y
npm i express nodemon sequelize mysql2
npm i sequelize-cli
npx sequelize-cli init

// Criar banco de dados com base na configuração do config.json
npx sequelize db:create

// Criar as migrations
npx sequelize migration:generate --name create-plans
npx sequelize migration:generate --name create-patients
npx sequelize migration:generate --name create-surgeries
npx sequelize migration:generate --name create-patient_surgeries

// Executar as migrations
npx sequelize db:migrate

// Desfazer as migrations
npx sequelize db:migrate:undo:all

// Povoar banco de dados
// Criar o seed
npx sequelize seed:generate --name plans
npx sequelize seed:generate --name patients
npx sequelize seed:generate --name sugeries
npx sequelize seed:generate --name patient_sugeries

// Executar as seeds
npx sequelize db:seed:all

// Desfazer as seeds
npx sequelize db:seed:undo:all
*/

const express = require('express');
const bodyParser = require('body-parser');

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatients,
  getPatientsAndSurgeriesNoDoctor,
} = require('./controllers/patientsController');

const getAllPlans = require('./controllers/plansController');
const getDoctorSurgeries = require('./controllers/surgeriesController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', createPatients)
app.get('/all', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);
app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);
app.get('/surgeries/:name', getDoctorSurgeries);
app.get('/:id', getAllPlans);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));