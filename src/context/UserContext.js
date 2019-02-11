import {createContext} from 'react';
import {initialState} from '../state/reducers/UserReducer';

const UserContext = createContext(initialState);

export default UserContext;
