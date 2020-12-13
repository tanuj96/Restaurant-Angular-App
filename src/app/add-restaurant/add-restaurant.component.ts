import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert : boolean = false;
  addRestaurant = new FormGroup({
    Name: new FormControl(''),
    Address: new FormControl(''),
    Email : new FormControl('')
  })
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  createResto(){
    // console.log(this.addRestaurant.value);
    this.commonService.addResto(this.addRestaurant.value).subscribe((result)=>{
      this.alert = true;
      this.addRestaurant.reset({});
      console.log("Get data from service", result);
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
