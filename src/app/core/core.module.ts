import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRoutingModule } from '@core/core-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// store
import { metaReducers, reducers } from '@core/store/reducers';

// components
import { MainContentComponent } from '@core/components/main-content/main-content.component';
import { MainPageComponent } from '@core/components/main-page/main-page.component';
import { HomeComponent } from '@core/components/home/home.component';
import { ErrorPageComponent } from '@core/components/error-page/error-page.component';

// pipes
import { GetRouterNamePipe } from '@core/pipes/get-router-name.pipe';

// services
import { ResponseHandlingHelper } from '@core/store/helpers/response-handling.helper';
import {ShowEffects} from "@core/store/effects/show.effects";


@NgModule({
  declarations: [
    MainContentComponent,
    MainPageComponent,
    HomeComponent,
    GetRouterNamePipe,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreRoutingModule,
    RouterModule,
    EffectsModule.forRoot([ ShowEffects ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    ReactiveFormsModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    MainContentComponent,
  ],
  providers: [ ResponseHandlingHelper ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }

  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }

}
