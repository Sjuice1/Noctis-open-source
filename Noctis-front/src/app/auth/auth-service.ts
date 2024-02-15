import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class AuthService{
    isLoginMode! : Subject<boolean>
    
    constructor(){
        this.isLoginMode = new Subject()
    }

    changeToLoginMode(){
        this.isLoginMode.next(true);
    }
}