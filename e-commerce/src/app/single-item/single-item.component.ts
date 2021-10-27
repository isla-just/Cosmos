import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {

  
  constructor(private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      console.log(params.id);

   var id = params.id;

    });

  }

  ngOnInit(): void {
  }

}
