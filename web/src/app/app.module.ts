import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test-component.component';
import { TestService } from './test-component/test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  exports: [TestComponent],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
