

export const reducer=(state,action)=>{
switch(action.type){

    case "signup":
        return [...state,action.payload];

        default:
            return state;
}

}