import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  productArray = ['Mobile', 'Clothing', 'Home Appliance'];

  productCategories = [
    {
      Mobile: [
        { brandName: 'Iphone 14 Pro', Color: 'Gray', Price: '140000' },
        {
          brandName: 'Oppo F14 Pro',
          Color: 'Charcol Green',
          Price: '45000',
        },
      ],
      Clothing: [
        { brandName: 'Zara', Color: 'White', Price: '2999' },
        { brandName: 'Fort Collin', Color: 'Black', Price: '1999' },
      ],
      'Home Appliance': [
        { brandName: 'Prestige Fridge', Color: 'Maroon', Price: '21999' },
        { brandName: 'Bajaj AC', Color: 'White', Price: '38000' },
      ],
    },
  ];

  selectedProductList: any;
  getProductList(event: any) {
    let anyItem = event.target.value;
    console.log(anyItem);
    let selectedList: any = this.productCategories[0];
    this.selectedProductList = selectedList[anyItem];
  }

  ngOnInit(): void {}
}
