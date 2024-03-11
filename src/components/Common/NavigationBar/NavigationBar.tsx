import { NavLink } from 'react-router-dom';

import { menuName, container, link, list } from './navigationBar.css';
import SvgIcon from '../Svg/SvgIcon';

import { NAVIGATION_MENU } from '@/constants';

const NavigationBar = () => {
  return (
    <nav className={container}>
      <ul className={list}>
        {NAVIGATION_MENU.map(({ variant, name, path }) => (
          <li key={variant}>
            <NavLink to={path} className={link}>
              {({ isActive }) => (
                <>
                  <SvgIcon
                    variant={variant}
                    width={20}
                    height={20}
                    fill="none"
                    stroke={isActive ? '#ffb017' : '#a0a0a0'}
                  />
                  <span className={isActive ? menuName['active'] : menuName['default']}>{name}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
