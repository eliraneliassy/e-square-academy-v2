import {
  AfterContentChecked,
  AfterContentInit, AfterViewInit,
  Component, DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';


@Component({
  selector: 'app-life-cycles-implementation',
  templateUrl: './life-cycles-implementation.component.html',
  styleUrls: ['./life-cycles-implementation.component.scss']
})
export class LifeCyclesImplementationComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, OnDestroy {

  @Input() name = 'aviv';

  @Input() set secondName(secondName: string) {
    // this can be used instead of ngOnChanges
  }

  job = 'developer';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
    const nameChanges = changes['name'];
    if (nameChanges && nameChanges.currentValue !== nameChanges.previousValue) {
      // this.doSomething();
    }

  }

  // after ngOnChange only once!
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // after ngOnInit
  // after ngOnChanges
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // after ngDoCheck only once!
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // after ngAfterContentInit
  // after ngDoCheck
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // after ngAfterContentChecked only once!
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // after ngAfterViewInit
  // after ngAfterContentChecked
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // when the component destroyed
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
