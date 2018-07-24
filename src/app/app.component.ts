import { Component } from '@angular/core';
import { Cars, Car } from './car.model';
import { CarsFormComponent } from './cars-form/cars-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars : Car [] = [
    new Car('Ford', '12.12.12','Focus',false,1),
    new Car('Audi','08.08.12','a4',false,2)
  ]


onAdd(car: Car){
  this.cars.push(car)
}

onDelete(car: Car){
  this.cars = this.cars.filter(c => c.id !== car.id)

}

}


