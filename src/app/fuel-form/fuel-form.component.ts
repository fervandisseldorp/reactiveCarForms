import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Car} from '../core/model/car';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fuel-form',
  templateUrl: './fuel-form.component.html',
  styleUrls: ['./fuel-form.component.css']
})
export class FuelFormComponent implements OnInit, OnChanges {

  fuelForm: FormGroup;

  @Input() selectedCar: Car;
  @Output() fuelChanges = new EventEmitter();

  constructor() {
    this.fuelForm = new FormGroup({
      fuelCapacity: new FormControl(),
      fuelConsumption: new FormControl(),
      fuelEfficiency: new FormControl(),
      fuelType: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedCar) {
      console.log('changes to selectedCar');
      console.log('form at this moment: ', this.fuelForm);

      if (this.fuelForm) {
        this.fuelForm.patchValue({
          fuelCapacity: this.selectedCar.fuel.fuelCapacity,
          fuelConsumption: this.selectedCar.fuel.fuelConsumption,
          fuelEfficiency: this.selectedCar.fuel.fuelEfficiency,
          fuelType: this.selectedCar.fuel.fuelType
        });
      }
    }

  }

  onSubmit() {
    console.log('submitting form: ', this.fuelForm);

    if (this.fuelForm.valid) {
      this.fuelChanges.emit(this.fuelForm.value);
    } else {
      alert('Invalid form');
    }
  }

}
