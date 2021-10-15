export const styles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

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