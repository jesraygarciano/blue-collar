import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../service/json-placeholder.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-worker',
  templateUrl: './registration-worker.component.html',
  styleUrls: ['./registration-worker.component.css']
})
export class RegistrationWorkerComponent implements OnInit {

  formGroup = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
  });

  skillsList: string[] = ['Carpenter', 'Driver', 'baby Sitter', 'Tutor', 'Cook', 'Plumber'];

  titleAlert: string = 'This field is required';
  post: any = '';

	constructor(
    private apiService: JsonPlaceholderService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}
  
  onSubmit(post) {
    this.post = post;
  }

}