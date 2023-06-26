import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  title = 'Ürün Listesi';
  products: Product[] = [
    {id: 1, name: "Toptop", price: 25000, categoryId: 2, description: "Lenovo Ideapad", imageUrl:"https://resim.epey.com/131751/m_lenovo-ideapad-330-81de0054tx-8.png"},
    {id: 2, name: "Mouse", price: 2500, categoryId: 1, description: "Microsoft Modern Mobile Pastel Blue", imageUrl:"https://m.media-amazon.com/images/I/619T8JcKnmL._AC_UF1000,1000_QL80_.jpg"},
    {id: 3, name: "Headphone", price: 330, categoryId: 1, description: "James Donkey", imageUrl:"https://productimages.hepsiburada.net/s/22/1500/9988887707698.jpg"},
    {id: 4, name: "Mobile Phone", price: 40000, categoryId: 3, description: "Samsung S23 Lilac", imageUrl:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/137420-1_large.jpg"},
    {id: 4, name: "Music", price: 16, categoryId: 4, description: "Spotify Account", imageUrl:"https://play-lh.googleusercontent.com/WB0j9PZGUofgwNbJ8Jm0-v03FIwBMj5Ovi5eso8xaBVTh6FGOyc4xyNjwMkTziKgkBs"},
    {id: 5, name: "Drink", price: 26, categoryId: 5, description: "Red Bull", imageUrl:"https://images.migrosone.com/sanalmarket/product/08110030/08110030-a4b666-1650x1650.png"}
  ];
  deger: boolean = true;
}
