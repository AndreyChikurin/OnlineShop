export class Product {
    static find(arg0: (x: any) => boolean) {
        throw new Error('Method not implemented.');
    }
    constructor(
      public name: string,
      public price: number,
      public img: string,
      public quantity: number,
      public categoryType: {
        name: string,
        id?: string,
        description: string,
      },
      public id?: string,
    ) {}
  }