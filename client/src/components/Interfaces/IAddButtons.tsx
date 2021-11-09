export interface IAddButton {
    text: string;
  }

  export interface AddButtonProps {
    store: IAddButton;
    handleClick: () => void;
}