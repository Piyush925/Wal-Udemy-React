
import { ADD,SUBSTRACT} from './action'

const initialState={
    counter:0   
}

const counter=(state=initialState,action)=>{
    switch(action.type)
    {
        case ADD:{
           state.counter=state.counter+1
        return state.counter+1;
        }
        case SUBSTRACT:
           
        return state+1;
        default:
            return state;

    }
}

export default counter;