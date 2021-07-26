import { makeAutoObservable } from 'mobx';
import instance from './instance';
class KayakStore {
  kayaks = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchKayaks = async () => {
    try {
      const response = await instance.get('/kayaks');
      this.kayaks = response.data;
      this.loading = false;
    } catch (error) {
      console.error('fetch kayak: ', error);
    }
  };
  getKayakById = (kayakId) => this.kayaks.find((kayak) => kayak.id === kayakId);
}
const kayakStore = new KayakStore();
kayakStore.fetchKayaks();
export default kayakStore;
