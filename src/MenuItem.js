function MenuItem({href, icon, children}) {
    const iconUrl = `/icons/${icon}.svg`;
    return (
        <li>
            <a href={href} className="menu-link">
                <img src={iconUrl} width="16" alt="" />
                {children}
            </a>
        </li>
    );
  }
  
  export default MenuItem;