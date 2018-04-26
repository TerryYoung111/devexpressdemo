import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxButtonModule,DxPivotGridModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';

export const ROUTES: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'direct', component: RedirectComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DxButtonModule,
    DxPivotGridModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
