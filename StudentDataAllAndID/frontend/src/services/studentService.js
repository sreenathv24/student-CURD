import axios from "axios";

const BASE_URL =
  (process.env.REACT_APP_API_URL || "http://localhost:8080") + "/api/students";

// GET ALL
export const getAllStudents = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// GET BY ID
export const getStudentById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// POST
export const createStudent = async (student) => {
  const response = await axios.post(BASE_URL, student);
  return response.data;
};

// PUT (FULL UPDATE)
export const updateStudent = async (id, student) => {
  const response = await axios.put(`${BASE_URL}/${id}`, student);
  return response.data;
};

// DELETE
export const deleteStudent = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};