import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from '../shared/auth.service';
import { WebRequestService } from '../shared/web-request.service';

export interface PeriodicElement {
  srno: number;
  name: string;
  username: string;
  email: string;
  contact: number;
  standard: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, name: 'hasan', username: 'Hasan123', email: 'hasan@gmail.com', contact: 9168745120, standard: 10},
  {srno: 2, name: 'ash', username: 'Hasan123', email: 'hasan@gmail.com', contact: 9168745120, standard: 10},
  {srno: 3, name: 'altu', username: 'Hasan123', email: 'hasan@gmail.com', contact: 9168745120, standard: 10},
  {srno: 4, name: 'john', username: 'Hasan123', email: 'hasan@gmail.com', contact: 9168745120, standard: 10},
  {srno: 5, name: 'jane', username: 'Hasan123', email: 'hasan@gmail.com', contact: 9168745120, standard: 10},
  {srno: 6, name: 'jamie', username: 'Hasan123', email: 'hasan@gmail.com', contact: 9168745120, standard: 10},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['srno', 'name', 'username', 'email', 'contact', 'standard'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private webRequestService: WebRequestService,private authService: AuthService) { }

  ngOnInit(): void {
    this.webRequestService.getUsers().subscribe((res:any)=>{
      console.log(res);
    });
    var userId=this.authService.getUserId();
    console.log("UserId: " + userId);    
  }

}
