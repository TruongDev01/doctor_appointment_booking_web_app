const { default: axios } = require("axios");
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`

    }

})
const getCategory = () => axiosClient.get("categories?populate=*");
const getDoctorList = () => axiosClient.get("doctors?populate=*");
const bookAppointment = (data) => axiosClient.post('/appointments', data);
const getDoctorById = (document_id) => axiosClient.get("/doctors?filters[documentId][$eq]=" + document_id + "&populate=*");
const getDoctorByCategory = (category) => axiosClient.get('/doctors?filters[categories][Name][$eq]=' + category + "&populate=*");
const sendEmail = (data) => axios.post('/api/sendEmail', data);
export default {
    getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    bookAppointment,
    sendEmail
}