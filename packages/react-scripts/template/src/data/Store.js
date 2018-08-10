import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Immutable from 'immutable';

class TodoStore extends ReduceStore {
    constructor(){
        super(Dispatcher);
    }
    getInitialState(){
        return Immutable.OrderedMap();
    }

    reduce (state, action){
        switch (action.type){
            /*
            case ActionTypes.ACTION_NAME:
                return state;

            default:
                return state;

            */
        }
    }
}

export default new Store();