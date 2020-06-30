import { createStore, combineReducers } from 'redux';
import { postsReducer} from '../reducers/postsReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer
        })
    );

    return store;
}