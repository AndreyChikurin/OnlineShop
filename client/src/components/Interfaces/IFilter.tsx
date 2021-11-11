import { Product } from "src/models/Product";

  export interface IFilter {
    productsList: Product[];
    totalItemsCount: number;
}