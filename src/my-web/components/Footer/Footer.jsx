//react
import { Link } from 'react-router-dom';
import { useContext} from 'react';
//css
import './Footer.css';
import '../Header/Header.css';
import '../Menu/ProductMenu.css';
//img
import Plus from '../../img/golden-star.png';
//context
import CartContext from '../../context/cart/CartContext';
//constant
import ProductMenuList  from '../../constant/menu_p_constant';
import {footerlink} from './FooterConstant';


function Footer() {
    const {menuselected} = useContext(CartContext);
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-row">
                    <div class="footer-col-2"> 
                      <div className='header-logo '>
                        <div>
                            <Link to="/" > 
                                <i style={{color:"white"}}>  <h2> cheapKart </h2> </i>
                            </Link>
                        </div>
                        <div className='footer-logo-sub-heading'>
                            <small className='small-logo-content'> Explore Plus </small> 
                            <img className='logoimage-size-small' src={Plus}/>
                        </div>
                      </div>
                      <div className='productMenu-container-flex'> 
                      {
                        ProductMenuList.ProductMenuList.map((item,index)=>{
                            return(
                                <ul className='productdrodown-submenu' key={index} onClick={(e)=>menuselected(item.menu_name)}>
                                    <Link to={item.Link}> 
                                        <li className='productMenu-item'>
                                            <div className='productmenu-item-label'> {item.menu_name} </div>
                                        </li>
                                    </Link>
                                </ul>  
                            )
                        })  
                        }
                        </div>
                     </div>
                      <div class="footer-col-3"> 
                          <h3> Useful links  </h3>
                          <ul>
                              <li> coupons </li>
                              <li> return policy </li>
                              <li> offer </li>
                              <li> membership </li>
                          </ul>
                       </div>
                       <div class="footer-col-3"> 
                        <h3> Follow us </h3>
                        <ul>
                            {
                                footerlink.map((item,index)=>{
                                    return <li key={index}> 
                                             <a href={item.link} target="_blank" rel="noopener noreferrer"> {item.name} </a>  
                                            </li>
                                })
                            }
                        </ul> 
                       </div>
                   </div>
                   <hr/>
                   <p class="copyright">  copyright 2022 - @chanchalpanpaliya </p>
                </div>
        </footer>

    )
}

export default Footer ;