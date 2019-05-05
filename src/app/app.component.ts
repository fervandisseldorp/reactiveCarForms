import {Component, OnInit} from '@angular/core';
import {CarService} from './core/service/car.service';
import {Car} from './core/model/car';
import {FuelModel} from './core/model/fuel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getList().subscribe(data => {
      this.cars = data;
    });
  }

  onClick(clickedCar: Car) {
    this.selectedCar = clickedCar;
  }

  onGeneralChanges(event: Car) {
    this.selectedCar.name = event.name;
    this.selectedCar.brand = event.brand;
    this.selectedCar.color = event.color;
  }

  onFuelChanges(event: FuelModel) {
    this.selectedCar.fuel = event;
  }


}



