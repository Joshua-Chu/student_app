const getStudentModel = (sequelize, { DataTypes }) => {
  const Student = sequelize.define(
    "student",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      age: {
        type: DataTypes.INTEGER,
      },
      birthdate: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Student;
};

module.exports = getStudentModel;
