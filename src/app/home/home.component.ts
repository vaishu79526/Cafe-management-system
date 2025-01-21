import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuItems = [
    { name: 'Espresso', description: 'Rich and bold coffee with a full-bodied flavor', price: 2.5, image: 'assets/coffee1.jpg' },
    { name: 'Latte', description: 'A creamy blend of espresso and steamed milk', price: 3.5, image: 'assets/latte.jpg' },
    { name: 'Cappuccino', description: 'Espresso topped with steamed milk and foam', price: 3.0, image: 'assets/cappuccino.jpg' }
  ];

  orders = [
    { orderId: '#001', customerName: 'John Doe', items: 'Espresso, Muffin', total: 5.00 },
    { orderId: '#002', customerName: 'Jane Smith', items: 'Latte, Croissant', total: 6.00 },
    { orderId: '#003', customerName: 'Mike Lee', items: 'Cappuccino, Cake', total: 7.00 }
  ];
}
