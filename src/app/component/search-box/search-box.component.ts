import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

	private user: User = new User();
  private submitted: boolean = false

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.userService.sendData(this.user).subscribe(
  		res => {
  			console.log(res);
        this.submitted = true;
  		},
  		error => {
  			console.log(error);
  		});

  }

}
