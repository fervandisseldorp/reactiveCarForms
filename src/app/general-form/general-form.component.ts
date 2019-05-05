import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})
export class GeneralFormComponent implements OnInit, OnChanges {
  generalForm: FormGroup;

  @Input() selectedCar;

  @Output() generalChanges = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.generalForm = new FormGroup({
      name: new FormControl(),
      brand: new FormControl(),
      color: new FormControl(),
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedCar) {
      if (this.generalForm) {
        this.generalForm.patchValue({
          name: this.selectedCar.name,
          brand: this.selectedCar.brand,
          color: this.selectedCar.color
        });
      }
    }
  }

  onSubmit() {
    if (this.generalForm.valid) {

      console.log('submitting general form: ', this.generalForm.value);
      this.generalChanges.emit(this.generalForm.value);
    } else {
      alert('Invalid form');
    }
  }

}
