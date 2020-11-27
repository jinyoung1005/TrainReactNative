/* eslint-disable prettier/prettier */
const initialState = {
    counter: [
        {
            counterNum:0,
        },
    ],
};

const counter = (state = initialState, action) => {
    const {counter} = state;

    console.log("Reducers connect()");

    switch (action.type) {//순수함수, 실제 로직 처리
        case 'INCREMENT':
            return ({
                counter:[
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum + action.index,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],//카운터 +
            });//실제 순수함수 로직 값증가
        case 'DECREMENT':
            return ({
                counter:[
                    ...counter.slice(0,action.index),
                    {
                        counterNum: counter[action.index].counterNum - 1,
                    },
                    ...counter.slice(action.index + 1 , counter.length),
                ],
            });//값감소
        case 'ADD':
            return ({
                counter: [
                    ...counter,
                    {
                        counterNum: 0,
                    },
                ],
            });//카운터 추가
        case 'REMOVE':
            return ({
                counter: counter.slice(0, counter.length - 1),

            });//카운터 삭제
        default:
            return state;
    }
};

export default counter;
