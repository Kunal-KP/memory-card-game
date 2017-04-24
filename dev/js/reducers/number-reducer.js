export default function(state=[],action){
    console.log("Inside number-reducer: ");
    switch(action.type){
        case 'SET_NUMBER':
           console.log("Inside number-reducer: SET_NUMBER");
           return  state.concat(action.payload);

            break;
        case 'RANDOMIZE_ARRAY':
            var new_state=Object.assign([],state)
            console.log("Inside number-reducer: RANDOMIZE_ARRAY");
            console.log("Value of state: "+state[0]);
            for(var i=0;i<state.length;i++){
                var val=(Math.round(Math.random()*10,1)%4);
                var temp=new_state[val];
                new_state[val]=new_state[i];
                new_state[i]=temp;
            }
            return new_state;
            break;
    }
    return state;
}
