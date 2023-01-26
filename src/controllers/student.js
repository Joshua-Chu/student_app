const { errorHandler } = require("../utils/utils.js");

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await req.context.models.Student.findAll();
    res.json({ data: allStudents });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getStudentByID = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await req.context.models.Student.findByPk(id);
    res.json({ data: student });
  } catch (error) {
    errorHandler(error, res);
  }
};

const createNewStudent = async (req, res) => {
  try {
    const { name, age, birthdate, email } = req.body;
    const studentEmail = email || null;

    if (!name) {
      throw Error(
        "Name should not be empty! what would I call you then if you have no name? Geez"
      );
    }

    const newStudent = await req.context.models.Student.create({
      name,
      age,
      birthdate,
      email: studentEmail,
    });
    res.json({ data: newStudent });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateStudentInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, birthdate, email } = req.body;
    const studentEmail = email || null;

    if (name === "") {
      throw Error(
        "Name should not be empty! what would I call you then if you have no name? Geez"
      );
    }

    const result = await req.context.models.Student.update(
      { name, age, birthdate, email: studentEmail },
      {
        where: {
          id,
        },
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Student with that ID not found",
      });
    }

    const updatedStudent = await req.context.models.Student.findByPk(id);
    res.json({ data: updatedStudent });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await req.context.models.Student.destroy({
      where: { id },
    });

    res.status(200).json({
      error: null,
      message: "student deleted",
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  getAllStudents,
  getStudentByID,
  createNewStudent,
  updateStudentInfo,
  deleteStudent,
};
