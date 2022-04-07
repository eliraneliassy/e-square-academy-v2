import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {ITwoFactoryInterface} from "./google-authenticator.interface";

const FORBIDDEN_KEYS = ['e', '-', '+', '=']
const GOOGLE_AUTHENTICATOR_VALIDATORS = Validators.compose([Validators.min(0), Validators.max(9)]);

@Component({
  selector: 'app-google-authenticator',
  templateUrl: './google-authenticator.component.html',
  styleUrls: ['./google-authenticator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GoogleAuthenticatorComponent),
      multi: true
    }
  ]
})
export class GoogleAuthenticatorComponent implements OnInit, ControlValueAccessor {
  arr = [
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6'
  ];
  form = this.fb.group({
    a1: ['', GOOGLE_AUTHENTICATOR_VALIDATORS],
    a2: ['', GOOGLE_AUTHENTICATOR_VALIDATORS],
    a3: ['', GOOGLE_AUTHENTICATOR_VALIDATORS],
    a4: ['', GOOGLE_AUTHENTICATOR_VALIDATORS],
    a5: ['', GOOGLE_AUTHENTICATOR_VALIDATORS],
    a6: ['', GOOGLE_AUTHENTICATOR_VALIDATORS]
  });
  isDisabled = false;
  onChange = (str: string) => {
  };
  @ViewChild('formBody') formBody!: ElementRef;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerFormChanges();
  }

  onKeyDown(event: KeyboardEvent) {
    const {key} = event;
    if (FORBIDDEN_KEYS.includes(key)) {
      event.preventDefault();
      event.stopPropagation();

    }

  }

  registerFormChanges() {
    this.form.valueChanges.subscribe((value:ITwoFactoryInterface) => {
      const {a1,a2,a3,a4,a5,a6} = value;
      if(this.form.valid){
        this.onChange(''+a1+a2+a3+a4+a5+a6);
      }
    })
  }

  isValidKey() {

  }

  next(i: number) {
    const control = this.form.get(this.arr[i]);
    if (control) {
      const el = this.formBody.nativeElement.getElementsByClassName('input-a' + (i + 1));
      el[0]?.focus();
    } else {
      const el = this.formBody.nativeElement.getElementsByClassName('input-a6');
      el[0]?.focus();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('isDisabled',isDisabled);
    this.isDisabled = isDisabled;
    isDisabled ? this.form.disable() : this.form.enable();
  }

  writeValue(obj: ITwoFactoryInterface): void {
    console.log(obj);
    this.form.patchValue({...obj})
  }

}
