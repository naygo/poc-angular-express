import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test-component.component';
import { TestService } from './test-component/test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [TestComponent],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
