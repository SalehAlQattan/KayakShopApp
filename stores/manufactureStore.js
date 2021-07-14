// improting packages
import { makeAutoObservable } from 'mobx';
import instance from './instance';
// class store
class ManufactureStore {
  // empty array to store fetched data in
  manufactures = [];
  loading = true;
  // setting the constructor to watch the data
  constructor() {
    makeAutoObservable(this);
  }
  // fetting data
  fetchManufacture = async () => {
    try {
      const response = await instance.get('/manufactures');
      this.manufactures = response.data;
      this.loading = false;
    } catch (error) {
      console.error('fetch Manufactures: ', error);
    }
  };
}
// creating new instance of the class
const manufactureStore = new ManufactureStore();
// fetching data on load
manufactureStore.fetchManufacture();
// exporting the new instance
export default manufactureStore;
