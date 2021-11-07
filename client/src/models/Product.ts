export class Product {
  constructor(
    public name: string,
    public price: number,
    public imgUrl: string,
    public quantity: number,
    public categoryType: {
      name: string,
      id: string,
      description: string,
    },
    public id: string,
  ) {}
}

export class NewProduct {
  constructor(
    public name: string,
    public price: number,
    public imgUrl: string,
    public quantity: number,
    public categoryTypeId: string,
    public id?: string,
  ) {}
}
