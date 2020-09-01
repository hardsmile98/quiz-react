import axios from 'axios'

export default axios.create({
    baseURL: 'https://quiz-react-5ceb4.firebaseio.com/'
})