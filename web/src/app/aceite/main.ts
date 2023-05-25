import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TestModule } from './app/test.module';


platformBrowserDynamic().bootstrapModule(TestModule)
  .catch(err => console.error(err));
