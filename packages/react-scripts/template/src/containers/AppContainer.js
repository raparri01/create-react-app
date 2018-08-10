//import Home from '../routes/Home';
import { Container } from 'flux/utils';
import TodoStore from '../data/Store';

function getStores(){
    return [
        Store,
    ];
}

function getState(){
    return {
        //state_name:Store.getState(),
    };
}

export default Container.createFunctional(Home, getStores, getState);
