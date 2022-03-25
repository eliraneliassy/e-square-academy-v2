import { Component, OnDestroy, OnInit } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {CountriesService} from "src/app/service/countries/countries.service";
import {Country} from "src/app/interface/countries/countries.interface";
import {FormControl} from "@angular/forms";
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  ReplaySubject,
  startWith, Subject, switchMap, takeUntil
} from "rxjs";

@Component({
  selector: 'app-countires',
  templateUrl: './countires.component.html',
  styleUrls: ['./countires.component.scss']
})
export class CountiresComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<void>();
  filterForm = new FormControl();

  filter$ = this.filterForm.valueChanges.pipe( /* when there's a change in the array of the form contol, filterForm.valueChanges returns an observable with the latest value of the control */
    debounceTime(300), /* wait for 300ms */
    distinctUntilChanged(), /* ignore changes that change nothing (value-wise) */
    startWith(''), /* give an empty string when there's no value at the start (can be used with subject and behaviorSubject) */
  );

  search$ = this.filterForm.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter(str => !!str) 
    /* 
        filter here returns all the strings that aren't falsey.

        !! --> returns the boolean value of str as true or false.
        falsey: 0, -0, '', null, undefined, Nan, false
    */
  );

  searchData$ = this.search$.pipe(
    /* on each emission a new observable is subscribed, while the previous one is cancelled. */
    switchMap(str => {
      return this.countriesService.search(str)
    }));

  private _rowData$ = new ReplaySubject<Country[]>(1);

  data$ = combineLatest([
    this.filter$,
    this._rowData$.asObservable()
  ]).pipe(
    map(([str, countries]: [string, Country[]]) =>
      countries.filter(c => !str || (c.name.toLowerCase().includes(str.toLowerCase())))
    )
  )
  
  columnDefs: ColDef[] = [
    {field: 'name'},
    {field: 'flag'}
  ];
  // private _user$ = new BehaviorSubject<IUser>();
  public get rowData$(): Observable<Country[]> {
    return this._rowData$.asObservable();
  }
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.search$.pipe(
      takeUntil(this.onDestroy$), 
      switchMap(str => {
        return this.countriesService.search(str)
      })).subscribe(res => {
      this._rowData$.next(res);
    });

    this.filter$.subscribe(console.log)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
