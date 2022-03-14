import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {CountriesService} from "./countries.service";
import {Country} from "./countries.interface";
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
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();
  filterForm = new FormControl();
  filter$ = this.filterForm.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    startWith(''),
  );
  search$ = this.filterForm.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter(str => !!str)
  );
  searchData$ = this.search$.pipe(
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

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    // this.countriesService.getAll().subscribe(arr => {
    //   this._rowData$.next(arr);
    // });
    // this.countriesService.getAll().subscribe(arr => {
    // this._rowData$.next(arr);
    // // });
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
