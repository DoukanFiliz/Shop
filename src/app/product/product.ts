export class Product{
    id: number;
    name: string;
    price: number;
    categoryId: number;
    description: string;
    imageUrl: string;

    constructor(){
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.categoryId = 0;
        this.description = '';
        this.imageUrl = '';
    }
}