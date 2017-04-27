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
    sessionStorage.lastClicked=0;
    for(var s=0;s<8;s++){
        document.getElementsByClassName("numAlign")[s].classList.add("hidden");
    }

    return  {
        type: 'RANDOMIZE_ARRAY',
        payload: numList
    }
};