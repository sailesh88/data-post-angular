import { Component } from '@angular/core';
import { NetworkService} from './network.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data;
  userlist: string[];

  constructor(private networkService: NetworkService) {
    this.userlist = [ "Ajay","Bunty","Chintan","Darshan","Rakesh","Mayank","Ramesh","Suresh","Jay","Prem"];
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.networkService.getPosts().subscribe(
      data => { this.data = data},
      () => console.log('done loading foods')
    )
  }

}
