import { useMenu } from './MenuContext';
import MenuItem from './MenuItem';

function Menu() {
  const {menuList} = useMenu();
  return (
  <nav>
    <ul className="menu">
      {menuList.map(({title, ...props}) => (
        <MenuItem key={title} {...props}>{title}</MenuItem>
      ))}
    </ul>
  </nav>
  );
}

export default Menu;
