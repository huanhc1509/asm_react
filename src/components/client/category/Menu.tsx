import { useContext } from "react";
import { categoryCT } from "../../../context/CategoryContext";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interfaces/Category";

const Menu = () => {
  const { categorys } = useContext(categoryCT);
  const firstFourProducts = categorys.slice(0, 4)

  return (
    <div className="grid grid-cols-4 gap-28 max-w-screen-lg mx-auto mb-8">
      {firstFourProducts.map((category: ICategory) => (
        <Link to={`/category/${category.id}`} key={category.id} className="bg-[#D2E8CD] flex items-center p-2 rounded">
          <img src={category.images} alt={category.name} className="h-8 pr-2" />
          <h3>{category.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
