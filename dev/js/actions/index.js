/*
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
*/
export const getNumber = (val) => {
    console.log("Inside action->index.js->getNumber");

    return  {
        type: 'SET_NUMBER',
        payload: val
    }
};

export const randomize = (numList) => {
    console.log("Inside action->index.js->randomize");
    return  {
        type: 'RANDOMIZE_ARRAY',
        payload: numList
    }
};