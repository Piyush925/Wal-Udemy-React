import {createStore } from 'redux';
import counter from './Reducer/index'
const store=createStore(counter);

console.log(store.getState());

export default store;