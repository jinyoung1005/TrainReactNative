/* eslint-disable prettier/prettier */
import * as types from './ActionTypes';

export const increment = (index) => ({
    type: types.INCREMENT,
    index,
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index,
});

export const add = () => ({
    type: types.ADD,
});

export const remove = () => ({
    type: types.REMOVE,
});
