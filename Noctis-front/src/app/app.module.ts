import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { environment } from '../environments/environment.development';
import { NewModule } from './new/new.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';



register();

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    NewModule,
    OrdersModule,
    
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue : {
        autoLogin: false,
        providers: [
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider : new GoogleLoginProvider(environment.googleClientId)
            }
        ],
        onError:((error : Error) => {
            console.log(error);
        })
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
