import axios from 'axios';

class Trainers {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: 'http://localhost:5000/api',
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

/*
  getMatchTrainers(preferences) {
    const { goals, goal, city, online, gender, profession} = preferences;
    return this.trainers.get('/trainers', { goals, goal, city, online, gender, profession })
      .then(({ data }) => data);
  }

  
  getTrainerDetail(id) {
    return this.auth.get('/tariners/:id', {user.id})
      .then(({ data }) => data);
  }

  updateTrainer(id, data) {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  toggleSavedTrainer(id) {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }

  savePreferences(data){

  }

  updateUser(data){

  }
  */
}

const trainersService = new Trainers();

export default trainersService