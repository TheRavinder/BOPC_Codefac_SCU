import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ManageComponent } from "./components/manage/manage.component";
import { BooklistComponent } from "./components/booklist/booklist.component";
import { ProductComponent } from "./components/product/product.component";
import { AddproductComponent } from "./components/addproduct/addproduct.component";
import { CartComponent } from "./components/cart/cart.component";
import { AboutComponent } from "./components/about/about.component";
import { CodefacComponent } from './components/codefac/codefac.component';

import { BooksComponent } from "./components/books/books.component";

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path:'codefac',
		component:CodefacComponent
	},
	{
		path: "home",
		component: HomeComponent,
		children: [
			{
				path: '',
				component: BooklistComponent,
			},
			{
				path: 'product/:id',
				component: ProductComponent
			},
			{
				path: 'cart',
				component: CartComponent
			},
			{
				path: 'about',
				component: AboutComponent
			}

		]
	},
	{
		path: "manage",
		component: ManageComponent,
		children: [
			{
				path: '',
				component: BooksComponent
			},
			{
				path: 'product/add',
				component: AddproductComponent
			},
			{
				path: 'product/add/:bookId',
				component: AddproductComponent
			}
		]
	}

]

export const routing = RouterModule.forRoot(routes);