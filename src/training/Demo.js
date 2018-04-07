import {createStore} from 'redux';
import {status, sort} from './actions/index';
import myReducer from './reduces/index';




const store = createStore(myReducer);
console.log('Default:', store.getState());

store.dispatch(status()); // cap nhat action vao store
console.log('TOGGLE_STATUS:', store.getState());

store.dispatch(sort({
    by : 'name',
    value : -1
}));

console.log('SORT:', store.getState());
