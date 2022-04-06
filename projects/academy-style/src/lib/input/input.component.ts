import {ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AcademyInputConfig} from "./input.interface";
import {map, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'ac-input [config]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor,OnDestroy {
  onDestroy$ = new Subject<void>();
  formControl = new FormControl();
  public type = 'text';

  constructor() {
  }

  onChange = (str: string) => {
  };
  errorMessage = 'Field is invalid';
  @Input() fieldLabel = 'Field';
  @Input() config?: AcademyInputConfig;

  ngOnInit(): void {
    if(this.config?.type === 'password'){
      this.type = 'password'
    }
    this.formControl.valueChanges.pipe(
      takeUntil(this.onDestroy$),
      map(val => {
        if(this.formControl.valid){
          this.onChange(val);
        }

      })

    ).subscribe();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable():this.formControl.enable();
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
