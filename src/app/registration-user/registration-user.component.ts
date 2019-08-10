import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../service/json-placeholder.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// export class Worker {
// 	emailAdrress : any = ''
// 	lastName: any = ''
//   firstname:  any = ''

// 	constructor() {

// 	}
// }

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent implements OnInit {
	// posts: Worker[] = []
  // feed = new Worker()
  formGroup = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    phone_num: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
  });
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
