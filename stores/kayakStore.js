// improting packages
import { makeAutoObservable } from 'mobx';
import instance from './instance';
// class store
class KayakStore {
  // empty array to store fetched data in
  kayaks = [];
  loading = true;
  // setting the constructor to watch the data
  constructor() {
    makeAutoObservable(this);
  }
  // fetting data
  fetchKayaks = async () => {
    try {
      const response = await instance.get('/kayaks');
      this.kayaks = response.data;
      this.loading = false;
      console.log(this.loading);
    } catch (error) {
      console.error('fetch kayak: ', error);
    }
  };
  // ???
  getKayakById = (kayakId) => this.kayaks.find((kayak) => kayak.id === kayakId);
}
// creating new instance of the class
const kayakStore = new KayakStore();
// fetching data on load
kayakStore.fetchKayaks();
// exporting the new instance
export default kayakStore;
