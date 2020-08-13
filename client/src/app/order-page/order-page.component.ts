import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { Observable, Subscription } from 'rxjs';
import { Category, OrderPosition, Order } from '../shared/interfaces';
import { Router, NavigationEnd } from '@angular/router';
import { Element } from '@angular/compiler';
import { MaterialService, MaterialInstance } from '../shared/classes/material.service';
import { OrderService } from './order.service';
import { OrdersService } from '../shared/services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
  providers: [OrderService]
})

export class OrderPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modal', {static: false}) modalRef: ElementRef;
  modal: MaterialInstance;
  isRoot: boolean ;
  pending = false;
  oSub: Subscription;

  constructor(private router: Router, private order: OrderService, private ordersService: OrdersService) {

   }

  ngOnInit() {
    this.isRoot = this.router.url === '/order';
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.isRoot = this.router.url === '/order';
      }
    });
  }

  ngOnDestroy() {
    this.modal.destroy();
    if (this.oSub) {
      this.oSub.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef);
  }

  removePosition(orderPosition: OrderPosition) {
    this.order.remove(orderPosition);
  }

  open() {
    this.modal.open();
  }
  cancel() {
    this.modal.close();
  }

  submit() {
    this.pending = true;
    const order: Order = {
      list: this.order.list.map( item => {
        delete item._id;
        console.log(item);
        return item;
      })
    };
    console.log("test");
    this.oSub = this.ordersService.create(order).subscribe(
      newOrder => {
       MaterialService.toast(`Order ${newOrder.order}  added.`);
        this.order.clear();
      },
      error => MaterialService.toast(error.error.message),
      () => {
        this.modal.close();
        this.pending = false;
      }
     );

  }

}
