import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class AuthGard implements CanActivate {

    constructor( private authService: AuthService, private router: Router){
    
    }

    canActivate(
        next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot){
            if(this.authService.isAuth){
                return true;
            }else{
                this.router.navigate(['/auth']);
                return false;
            }
        }
    

}