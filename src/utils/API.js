import axios from 'axios';

export default {
  getRandomUser: function () {
    return axios.get('https://randomuser.me/api/');
  },
  getUserByGender: function (gender) {
    return axios.get('https://randomuser.me/api/?gender=' + gender);
  },
  getUserList: function () {
    return axios.get('https://randomuser.me/api/?results=10');
  },
};
