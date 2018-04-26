import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router) {

    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
      
    }

    login() {
        // this.oidcSecurityService.authorize();
        this.router.navigate(['home']);
    }

    logout() {

    }


}
