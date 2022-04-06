//react
import { Link } from 'react-router-dom';
import { useContext} from 'react';
//css
import './ProductMenu.css';
//constant
import ProductMenuList  from '../../constant/menu_p_constant';
//context
import CartContext from '../../context/cart/CartContext';

const ProductMenu = () =>{
    const {menuselected,selectedMenu} = useContext(CartContext);
    return(
        <div className='productmenu-container'>
        <div className='productMenu-container-flex'>
            {
              ProductMenuList.ProductMenuList.map((item,index)=>{
                  return(
                    <ul className='productdrodown-submenu' key={index} onClick={(e)=>menuselected(item.menu_name)}>
                        <Link to={item.Link}> 
                            <li className={selectedMenu === item.menu_name ?'productMenu-item productMenu-item-selected':'productMenu-item'} >
                                <div className='productmenu-item-label'> {item.menu_name} </div>
                            </li>
                        </Link>
                    </ul>  
                  )
              })  
            }

        </div>
    </div>
    )
}

export default ProductMenu;