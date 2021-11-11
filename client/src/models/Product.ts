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

export class Filter {
  constructor(
    public quantityPerPage?: number,
    public pageNumber?: number,
    public priceIsMore?: number,
    public priceIsLess?: number,
    public filter?: string,
    public categoryId?: string,
  ) {}
}
