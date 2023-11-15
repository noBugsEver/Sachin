import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 jsonData: any;
  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/Data")
      .subscribe({
        next: (data) => {
          console.log(data);
          this.jsonData = data;
          console.log('Data from server:', this.jsonData);
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
        complete: () => {
          // Handle completion if needed
       }
      });
  }
}


