// import { FilterPipe } from './../filter.pipe';
import { Component, OnInit } from '@angular/core';
import { ComparedataService } from 'src/app/services/comparedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparemobile',
  templateUrl: './comparemobile.component.html',
  styleUrls: ['./comparemobile.component.css']
})
export class ComparemobileComponent implements OnInit {
  
searchQuery: any;
searchResults: any;
searchResults2: any;
searchQuery2: any;
compareItem: any;
compareArray : any = []
compare1:any
compare2:any

constructor(private comparedataService: ComparedataService, private route: ActivatedRoute) {}
ngOnInit(): void {
  // fetch('https://dummyjson.com/products/category/smartphones')
  // .then(res => res.json())
  // .then(console.log);
  // debugger
  this.compareItem = this.route.snapshot.paramMap.get("id2")
  console.log(this.compareItem)
  this.compareArray = this.compareItem.split("vs")
  
  console.log(this.compareArray)
  this.compare1=parseInt(this.compareArray[0])
  this.compare2=parseInt(this.compareArray[1])
 console.log( this.comparedataService.device_id.filter(device => device.id === this.compare1))
 this.searchResults = this.comparedataService.device_id.filter(device => device.id === this.compare1)
 this.searchResults2 = this.comparedataService.device_id.filter(device => device.id === this.compare2)

  
}



searchDevices(query: string): void {
  debugger
  if (query) {
    this.searchResults = this.comparedataService.device_id.filter(device =>
      device.name.toLowerCase().includes(query.toLowerCase()))
      console.log(this.searchResults = this.comparedataService.device_id.filter(device =>
        device.name.toLowerCase().includes(query.toLowerCase())))
  } else {
    this.searchResults = this.comparedataService.device_id.filter(device => device.id === this.compare1)
  }
}

searchDevices2(query: string): void {
  if (query) {
    this.searchResults2 = this.comparedataService.device_id.filter(device =>
      device.name.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    this.searchResults2 = this.comparedataService.device_id.filter(device => device.id === this.compare2)
  }
}

}