const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudentByID,
  createNewStudent,
  updateStudentInfo,
  deleteStudent,
} = require("../controllers/student.js");

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: A list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Joshua Chu Gwapo
 *                       age:
 *                         type: int
 *                         description: The user's age.
 *                         example: 22
 *                       birthdate:
 *                         type: string
 *                         description: The user's birthday.
 *                         example: 06/27/00
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: joshchu@gwapo.com
 */
router.get("/", getAllStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get student by id
 *     parameters:
 *     - name: studentId
 *       in: path
 *       description: id of the student
 *       required: true
 *       schema:
 *         type: integer
 *     responses:
 *       200:
 *         description: student that matched the ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Joshua Chu Gwapo
 *                       age:
 *                         type: int
 *                         description: The user's age.
 *                         example: 22
 *                       birthdate:
 *                         type: string
 *                         description: The user's birthday.
 *                         example: 06/27/00
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: joshchu@gwapo.com
 */
router.get("/:id", getStudentByID);
/**
 * @swagger
 * /students/create:
 *   post:
 *     summary: Create a new Student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Joshua Chu Gwapo
 *               age:
 *                 type: int
 *                 description: The user's age.
 *                 example: 22
 *               birthdate:
 *                 type: string
 *                 description: The user's birthday.
 *                 example: 06/27/00
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: joshchu@gwapo.com
 *
 *
 *     responses:
 *       200:
 *         description: Newly created student
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Joshua Chu Gwapo
 *                       age:
 *                         type: int
 *                         description: The user's age.
 *                         example: 22
 *                       birthdate:
 *                         type: string
 *                         description: The user's birthday.
 *                         example: 06/27/00
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: joshchu@gwapo.com
 */
router.post("/create", createNewStudent);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update Student information
 *     parameters:
 *     - name: studentId
 *       in: path
 *       description: id of the student
 *       required: true
 *       schema:
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Joshua Chu Gwapo
 *               age:
 *                 type: int
 *                 description: The user's age.
 *                 example: 22
 *               birthdate:
 *                 type: string
 *                 description: The user's birthday.
 *                 example: 06/27/00
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: joshchu@gwapo.com
 *     responses:
 *       200:
 *         description: Updated student
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Joshua Chu Gwapo
 *                       age:
 *                         type: int
 *                         description: The user's age.
 *                         example: 22
 *                       birthdate:
 *                         type: string
 *                         description: The user's birthday.
 *                         example: 06/27/00
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: joshchu@gwapo.com
 */
router.put("/:id", updateStudentInfo);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student
 *     parameters:
 *     - name: studentId
 *       in: path
 *       description: id of the student
 *       required: true
 *       schema:
 *         type: integer
 *     responses:
 *       200:
 *         description: Deleted Student
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: error
 *                   example: null
 *                 message:
 *                   type: string
 *                   description: Operation status
 *                   example: student deleted
 */
router.delete("/:id", deleteStudent);

module.exports = router;
