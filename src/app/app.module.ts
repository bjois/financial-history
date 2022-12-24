import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '269175845684-uum9cehsrpfl4sgnornlq1bnntua9828',
              {
                oneTapEnabled: false,
                scopes: [
                  "https://www.googleapis.com/auth/drive.metadata.readonly",
                  "https://www.googleapis.com/auth/drive.readonly"
                ]
              }
            ),
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
