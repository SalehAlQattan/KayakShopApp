// mobx
import { makeAutoObservable } from 'mobx';

// axios
import instance from './instance';

// jwt
import decode from 'jwt-decode';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// store class
class AuthStore {
  user = null;
  // setting the constructor to watch the data
  constructor() {
    makeAutoObservable(this);
  }
  // create new user
  signup = async (newUser) => {
    try {
      const res = await instance.post('/signup', newUser);
      await instance.post('/signup', newUser);
      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  //
  signin = async (userDate) => {
    try {
      const res = await instance.post('/signin', userDate);
      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  setUser = async (token) => {
    await AsyncStorage.setItem('myToken', token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };
  signuot = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem('myToken');
    this.user = null;
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem('myToken');
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signuot();
      }
    }
  };
}
// creating new instance of the class
const authtStore = new AuthStore();
// auto signin
authtStore.checkForToken();
// exporting the new instance
export default authtStore;
