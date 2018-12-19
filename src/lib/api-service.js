import axios from 'axios';

class Trainers {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
      withCredentials: true,
    });
  }

  getMatchTrainers() {
    return this.apiInstance.get('/trainers')
    .then((response) => {
      return response.data
    })
}

getDetailTrainer(id) {
  return this.apiInstance.get(`/trainers/${id}`)
    .then((response) => {
      return response.data
    })
}

setPreferences(data) {
  return this.apiInstance.put('/preferences', data)
  .then(response => response.data)
}

followTrainer(id) {
  return this.apiInstance.post(`/trainers/${id}/follow`)
  .then(response => response.data)
}

sendEmail(email) {
  const  {reciver, sender, topic, text} = email
  return this.apiInstance.post(`/trainers/email` , {reciver, sender, topic, text})
  .then(response => response.data)
}

}

const trainersService = new Trainers();

export default trainersService