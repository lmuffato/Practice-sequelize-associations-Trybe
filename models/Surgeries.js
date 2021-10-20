module.exports = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define('Surgeries', {
    surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return Surgeries;
};
