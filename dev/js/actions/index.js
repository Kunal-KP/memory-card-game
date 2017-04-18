/*
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
*/
export const getNumber = () => {
    console.log("Inside action->index.js");
    var val=(Math.round(Math.random()*10,1)%4)+1;
    return  {
        type: 'SET_NUMBER',
        payload: val
    }
};