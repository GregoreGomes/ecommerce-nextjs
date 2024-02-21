import { RiShoppingCartLine } from 'react-icons/ri';
import { GoTrash } from "react-icons/go";

interface TrashIconProps {
  onClick?: () => void
}

const CartIcon = () => {
  return <RiShoppingCartLine className="h-6 w-6 text-gray-600 hover:cursor-pointer" />;
};

const TrashIcon = ( { onClick }: TrashIconProps ) => {
  return <GoTrash onClick={onClick} className="h-6 w-6 text-gray-600 hover:cursor-pointer" />;
};


export {
  CartIcon,
  TrashIcon
} 
