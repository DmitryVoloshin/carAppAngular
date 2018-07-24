import { Car } from "../car.model";
import { Action } from "@ngrx/store";


const initialState = {
    cars : [   
    
    new Car('Ford', '12.12.12','Focus',false,1),
    new Car('Audi','08.08.12','a4',false,2)]

}


export function carsReducer(state = initialState , action : Action ) {

}