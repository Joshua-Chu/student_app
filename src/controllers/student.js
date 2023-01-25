const { pool } = require("../db/db.js");
const { errorHandler } = require("../utils/utils.js");

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await pool.query("SELECT * FROM students");
    res.json({ data: allStudents.rows });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getStudentByID = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await pool.query("SELECT * FROM students WHERE id=$1", [
      id,
    ]);
    res.json({ data: student.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const createNewStudent = async (req, res) => {
  try {
    const { name, age, birthdate, email } = req.body;
    const studentEmail = email || null;

    console.log("req.body", req.body);

    if (!name) {
      throw Error(
        "Name should not be empty! what would I call you then if you have no name? Geez"
      );
    }

    const newStudent = await pool.query(
      "INSERT INTO students (name,age,birthdate, email) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, age, birthdate, studentEmail]
    );

    res.json(new { data: newStudent.rows[0] }());
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

    const updatedStudent = await pool.query(
      "UPDATE students SET name=$1, age=$2, birthdate=$3, email=$4 WHERE id=$5 RETURNING *",
      [name, age, birthdate, studentEmail, id]
    );

    res.json({ data: updatedStudent.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await pool.query("DELETE FROM students WHERE id=$1", [id]);
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
