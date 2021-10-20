const { Patients, Surgeries } = require('../models');

const getDoctorSurgeries = (req, res) =>
  Surgeries.findAll({
    where: { doctor: req.params.name },
    include: [{ model: Patients, as: 'patients', through: { attributes: [] } }]
  })
    .then((listOfPatients) => {
      if (listOfPatients === null) {
        return res.status(404).send({ message: 'No plan found' });
      }

      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }));

module.exports = getDoctorSurgeries;
