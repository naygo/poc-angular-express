import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
})
export class TestComponent implements OnInit {
  variavel = 1;
  dados

  constructor(private testService: TestService) {
    this.dados = this.testService.teste()
  }

  ngOnInit(): void {
    console.log('Hello from TestComponent.');
  }
}
