//react
import { Link } from 'react-router-dom';
import { useContext} from 'react';
//css
import './Menu.css';
//constant
import menulist  from '../../constant/menuconstant';
//context
import CartContext from '../../context/cart/CartContext';


const Menu =() =>{
    const {menuselected} = useContext(CartContext);
    return(
        <div className='menu-container'>
            <div className='Menu-container-flex flex-gap-5'>
                {
                  menulist.menulist.map((item,index)=>{
                      return(
                        <ul className='drodown-submenu' key={index} onClick={(e)=>menuselected(item.menu_name)}>
                            <Link to={item.Link}> 
                                <li className='Menu-item Menu-container-flex'>
                                    <div> <img className='menu-item-img' src={item.menu_img} /> </div>
                                    <div className='menu-item-label'> {item.menu_name} </div>                                
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

export default Menu;