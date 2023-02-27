import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  deptName="List of departments"
  deptList:any=[]


  constructor (private apiService: ApiService){
    
  }
  ngOnInit(): void{

    //apiService call -to get all dept list -async fnc call
    this.apiService.getdeptList()
    .subscribe((result)=>{
      console.log(result);
      this.deptList=result
      console.log(this.deptList);
      
      
    })

  }


}
