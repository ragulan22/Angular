import { Component, OnInit } from '@angular/core';
import { Status } from '../status.modal';
import { StatusService } from '../status.service';
import {TypeService} from '../type.service';
import { Types } from '../types.modal';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

status : Status[];
statusObj= new Status();

type :Types[];
typeObj=new Types();

msg:any;

  constructor(private statusService:StatusService,private typeService:TypeService) { }

  ngOnInit() {
    this.getStatus();
    this.getType();
  }

  getType(){
    this.typeService.getAllType().subscribe(data=>{
      this.type=data;
      console.log(data);
    })
  }

  getStatus(){
    this.statusService.getAllStaus().subscribe(data=>{
      this.status=data;
      console.log(data);
    })
  }

  createStatus(){
    // alert("Test");
    this.statusService.createStatus(this.statusObj).subscribe(data=>{
      console.log(data);
      // alert("role created");
      this.msg="Data created successfully";
      this.getStatus();
    });
  }

  deleteId(status){
    // alert(this.statusObj.id);
    this.statusObj=Object.assign({},status);
  }
  deleteStatus(){
    // console.log(status);
    this.statusService.deleteStatus(this.statusObj).subscribe(data=>{
      // alert("role deleted");
      this.msg="Data deleted successfully";
      this.getStatus();
    });
  }

  updateId(status){
    // alert(this.statusObj.id);
    this.statusObj=Object.assign({},status);
  }

  updateStatus(){
    this.statusService.updateStatus(this.statusObj).subscribe(data=>{
      console.log(data);
      this.msg="Data updated successfully";
      this.getStatus();
    })
  }


  createType(){
    // alert("Test");
    this.typeService.createType(this.typeObj).subscribe(data=>{
      console.log(data);
      // alert("role created");
      this.msg="Data created successfully";
      this.getType();
    });
  }

 
  deleteType(){
    // console.log(status);
    this.typeService.deleteType(this.typeObj).subscribe(data=>{
      // alert("role deleted");
      this.msg="Data deleted successfully";
      this.getType();
    });
  }


  updateType(){
    this.typeService.updateType(this.typeObj).subscribe(data=>{
      console.log(data);
      this.msg="Data updated successfully";
      this.getType();
    })
  }



}
