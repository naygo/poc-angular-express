import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent } from './test-component.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TestComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [TestComponent],
  providers: [TestService],
  bootstrap: [TestComponent],
})
export class TestModule {}
