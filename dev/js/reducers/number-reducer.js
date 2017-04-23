export default function(state=[],action){
    console.log("Inside number-reducer: ");
    switch(action.type){
        case 'SET_NUMBER':
           console.log("Inside number-reducer: SET_NUMBER");
           return  state.concat(action.payload);

            break;
        case 'RANDOMIZE_ARRAY':

            console.log("Inside number-reducer: RANDOMIZE_ARRAY");
            console.log("Value of state: "+state[0]);
            for(var i=0;i<state.length;i++){
                var val=(Math.round(Math.random()*10,1)%4);
                var temp=state[val];
                state[val]=state[i];
                state[i]=temp;
            }
            return state;
            break;
    }
    return state;
}
