import { makeAutoObservable } from 'mobx';

class CartStore {
  items = [
    {
      kayakId: 1,
      quantity: 3,
    },
    {
      kayakId: 2,
      quantity: 5,
    },
  ];

  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  getKayakById = (kayakId) => this.kayaks.find((kayak) => kayak.id === kayakId);
}
const cartStore = new CartStore();

export default cartStore;
