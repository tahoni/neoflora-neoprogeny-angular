import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {HybridService} from "../hybrid.service";

@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.css']
})
export class HybridComponent implements OnInit {

  @Input()
  isLink = true;
  @Input()
  hybrid: any;

  routeHybridEdit: any;

  constructor(private router: Router, private hybridService: HybridService) {
  }

  ngOnInit(): void {
    console.log(this.hybrid);
    if (!this.hybrid) {
      this.hybrid = {id: 0, code: ''};
    }
    this.routeHybridEdit = [this.hybridService.getHybridEditPath(), this.hybrid.id];
  }

  onDblClick() {
    this.router.navigate(this.routeHybridEdit);
  }

}
