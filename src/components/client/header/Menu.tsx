import { Link } from 'react-router-dom'
import { ICategory } from '../../../interfaces/Category'

type Props = {
    category: ICategory
}


const Menu = ({ category }: Props) => {
    return (
        <li className="group relative">
            <Link to={`category/${category.id}`} className="hover:underline pb-4 text-white">{category.name}</Link>
            <ul className="absolute inset-x-0 mt-2 w-48 bg-white hidden group-hover:block z-20">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Eckige Töpfe</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Runde Töpfe</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Untersetzer</a>
                </li>
            </ul>
            {/* <i className="fa-solid fa-angle-down ml-2"></i> */}
        </li>
    )
}

export default Menu