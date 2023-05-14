//This is an Angular component that makes use of a service to retrieve data from a server

//imports Component and OnInit from @angular/core 
//MarvellousService from the marvellous.service.ts file.

import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{

//The message variable is defined to store the data retrieved from the server.

 message:any;

 // The constructor initializes the MarvellousService dependency injection.
 constructor(private service:MarvellousService)
 {

 }

 /*
The ngOnInit() lifecycle hook is implemented, which is called by Angular when the component is initialized. Inside ngOnInit(), it makes a call to getBatches() function from the MarvellousService instance and subscribes to the observable returned by the function. 
When the data is received, the data is assigned to this.message.
 */
  ngOnInit() 
  {
   this.service.getBatches().subscribe(data => { this.message=data;
  })
  }

//Overall, this code sets up an Angular component that retrieves data from a server using a service and displays the data in the component's template.

}
