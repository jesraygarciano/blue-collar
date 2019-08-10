import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-worker',
  templateUrl: './registration-worker.component.html',
  styleUrls: ['./registration-worker.component.css']
})
export class RegistrationWorkerComponent implements OnInit {
  skillsList: string[] = ['Carpenter', 'Driver', 'baby Sitter', 'Tutor', 'Cook', 'Plumber'];
  constructor() { }

  ngOnInit() {
  }
  

  // workerRegForm = new FormGroup({
  //   emailAddress: new FormControl(''),
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   skillsSet: new FormControl(''),
  //   gender: new FormControl(''),
  //   address: new FormControl(''),
  //   city: new FormControl(''),
  //   zipCode: new FormControl(''),
  // });

}
