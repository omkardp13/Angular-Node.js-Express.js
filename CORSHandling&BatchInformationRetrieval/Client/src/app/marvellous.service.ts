/*
This code defines an Angular service called MarvellousService. Services are used in Angular to organize and share code across different components of an application.
*/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarvellousService
{

  
  //This service is injecting the HttpClient service, which is used to make HTTP requests to remote servers. The getBatches() method is defined in this service, which uses the HttpClient service to send an HTTP GET request to the Node.js + Express.js server running at http://localhost:5100/getBatches.

  //Perform dependancy injection
  constructor(private http:HttpClient) 
  { 
      
  }

  //The getBatches() method returns an Observable object, which is an object that represents a stream of data that may arrive asynchronously over time. This stream of data is subscribed to in the AppComponent's ngOnInit() method, and when the data arrives, the message property of the component is updated with the response data.

  getBatches()
  {

   //Connect to the Node + Express Server

    return this.http.get("http://localhost:5100/getBatches");
  }

}
