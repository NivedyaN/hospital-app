import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  
  dtId:any;
  dtDetails:any;
  doctors:any;

  constructor (private activatedRoute: ActivatedRoute,private apiService:ApiService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      this.dtId=result['id']
    })


    //apiService call -to get all dept list -async fnc call
    this.apiService.viewDoctors(this.dtId)
    .subscribe((result:any)=>{
     console.log(result);
      this.dtDetails=result
      
      
    })
  }


}

