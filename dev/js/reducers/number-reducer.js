export default function(state=[],action){
    console.log("Inside number-reducer: ");
    switch(action.type){
        case 'SET_NUMBER':

           return  state.concat(action.payload);

            break;
    }
    return state;
}
