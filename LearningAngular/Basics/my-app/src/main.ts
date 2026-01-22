import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) // allows us to initiate our application, since it's a modular framework, we start with the app component
  .catch((err) => console.error(err));
