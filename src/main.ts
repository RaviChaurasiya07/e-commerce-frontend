import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouteReuseStrategy, provideRouter, withHashLocation, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/shared/http/auth.interceptor';
import { errorInterceptor } from './app/shared/http/error.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    provideRouter(routes, withHashLocation(), withPreloading(PreloadAllModules)),
  ],
});
