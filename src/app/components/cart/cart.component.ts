import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { GlobalService } from '../../services/global.service';
declare let paypal: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	 
	private didRenderPaypal: boolean = false;
	shoppingCart: any = [];
	globalService;
	total: number = 0;

	private loadPaypalScript(): Promise<any> { this.didRenderPaypal = true; 
		return new Promise((resolve, reject) => { const scriptElement = document.createElement('script'); 
		scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js'; 
		scriptElement.onload = resolve; document.body.appendChild(scriptElement); }); }

	static get parameters() {
		return [GlobalService];
	}

  constructor(globalService) {
  	this.globalService = globalService;
  }

  ngOnInit() {
		 
  	this.shoppingCart = this.globalService.getCart();
  	for(var a = 0; a < this.shoppingCart.length; a++) {
  		this.total += this.shoppingCart[a].total;
  	}
  }

  emptyCart() {
  	this.globalService.emptyCart();
  	this.shoppingCart = [];
	}
	paypalConfig ={ env: 'sandbox',  style: {
            label: 'checkout',
            size:  'responsive',    // small | medium | large | responsive
            shape: 'pill',     // pill | rect
            color: 'black'      
				},
					client: { sandbox: 'AVmA0nkoRmgwiowMAfq6Llqh0FOa5Dux-ZTR6pLDxiaU7nWJ9MpmCmoibpErkEzbATTGLFhn3x4OyGfv', production: 'xxxxxxxxxx' }, 
	commit: true, payment: (data, actions) => { return actions.payment.create({ payment: {transactions: [{amount: {total:this.total, currency: 'AUD'}}]} }); }, 
	onAuthorize: (data, actions) => { return actions.payment.execute().then(() => { /*show success*/ }); } };
	
	ngAfterViewChecked() { if(!this.didRenderPaypal) 
		{ this.loadPaypalScript().then(() => { paypal.Button.render(this.paypalConfig, '#paypal-btn'); }); } }
}
