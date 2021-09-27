export class Product {
    constructor(
      public name: string,
      public price: number,
      public img: string,
      public quatity: number,      
      public categoryType: object,
      public id?: string,
    ) {}
  }