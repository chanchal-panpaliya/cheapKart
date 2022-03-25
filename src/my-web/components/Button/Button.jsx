import './Button.css';

const Button = ({children, handleClick}) => <button className="Button" onClick={handleClick}>{children}</button>

export default Button
