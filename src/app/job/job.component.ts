import { Component, OnInit } from '@angular/core';
import { JsonServiceService} from '../json-service.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(public svc: JsonServiceService) { 

  }

  ngOnInit() {
    this.svc.getPosts().subscribe((e)=>{
      console.log(e);
    })
  }

   get(){
    
  }

}
