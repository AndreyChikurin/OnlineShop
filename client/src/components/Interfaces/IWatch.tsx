type Watch ={
    name: string;
    price: number;
    imgUrl: string;
    quantity: number;
    categoryTypeId: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    setImgUrl: React.Dispatch<React.SetStateAction<string>>;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    setCategoryTypeId: React.Dispatch<React.SetStateAction<string>>;
}

export interface IWatch {
  watch:Watch
}