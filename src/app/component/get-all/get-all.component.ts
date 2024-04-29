import { Component, OnInit } from '@angular/core';
import { GrudService } from '../../grud.service';
import { User } from '../../models/user';

@Component({
  selector: 'get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent implements OnInit {

  users!:User[]

  constructor(private crudService:GrudService){}

  getAllUsers(){
    this.crudService.getAll().subscribe({
      next:(data)=> {
        this.users=data
        console.log(data)
      },
      error:(err)=> {
  console.log("Error")
      }
    })
  }



  ngOnInit(): void {
    this.getAllUsers()
  }

}
