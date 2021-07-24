import { makeAutoObservable } from 'mobx';
import instance from './instance';
class ManufactureStore {
  manufactures = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
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
const manufactureStore = new ManufactureStore();
manufactureStore.fetchManufacture();
export default manufactureStore;
