import { NavLink } from 'react-router-dom';

import { classNameJoin } from '../../../services/helpers';

import styles from './CategoryItem.module.scss';

const CategoryItem = ({ name }) => {
  const navLinkClassName = classNameJoin(['nav-link', styles.categoryItem]);
  return (
    <NavLink 
      isActive= {(match) => {
        if (match) {
          return true;
        }
      }} 
      activeClassName={styles.selected}
      className={navLinkClassName}
      to={`/${name.replace(/\s+/g, '-').toLowerCase()}`}>
     {name}
    </NavLink>
  )
}

export default CategoryItem
