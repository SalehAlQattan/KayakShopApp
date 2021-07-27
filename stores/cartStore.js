import { makeAutoObservable } from 'mobx';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// axios
import instance from './instance';

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchItems = async () => {
    const items = await AsyncStorage.getItem('cart');
    this.items = items ? JSON.parse(items) : [];
  };

  addToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.kayakId === newItem.kayakId
    );

    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);

    await AsyncStorage.setItem('cart', JSON.stringify(this.items));
  };

  deleteFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.kayakId !== itemId);
    await AsyncStorage.setItem('cart', JSON.stringify(this.items));
  };

  checkout = async () => {
    await instance.post('/checkout', this.items);
    this.items = [];
    await AsyncStorage.removeItem('cart');
    alert('Give Me Your Money!');
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}
const cartStore = new CartStore();
cartStore.fetchItems();
export default cartStore;
