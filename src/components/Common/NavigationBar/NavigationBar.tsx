import { NavLink } from 'react-router-dom';

import { menuName, container, link, list } from './navigationBar.css';
import Indicator from '../Indicator/Indicator';
import SvgIcon from '../Svg/SvgIcon';

import { NAVIGATION_MENU } from '@/constants';
import { vars } from '@/styles/theme.css';

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
                    width={28}
                    height={28}
                    fill={isActive ? vars.colors.primary : vars.colors.gray2}
                    stroke={isActive ? vars.colors.primary : vars.colors.gray2}
                  />
                  <span className={isActive ? menuName['active'] : menuName['default']}>{name}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <Indicator />
    </nav>
  );
};

export default NavigationBar;
