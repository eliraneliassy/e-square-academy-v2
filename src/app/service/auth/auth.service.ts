import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  status$: BehaviorSubject< boolean | null> = new BehaviorSubject<boolean | null> (null);

  getUser(): Observable<string | null>{
    return this.user$.asObservable();
  }

  setUser(user: string): void{
    this.user$.next(user);
  }

  getStatus():Observable<boolean | null>{
    return this.status$.asObservable();
  }

  setStatus(status: boolean): void{
    this.status$.next(status)
  }

  login(user: string, status: boolean){
    //login check
    this.setStatus(status);
    if(!!status){
      this.setUser(user);
      this.router.navigateByUrl('/feed');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }

  isLoggedIn(){
    return this.getStatus();
  }
  constructor(private router: Router) { }
}
