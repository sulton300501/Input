import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/createUser';
import { GrudService } from '../../grud.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css'
})
export class PostDataComponent implements OnInit {


  ngOnInit(): void {

  }

constructor(private data:GrudService){}

// postData(data:CreateUser):CreateUser{
//   this.data.postData(data).subscribe({
//     next:(data)=> {

//     }
//   })
// }




}
