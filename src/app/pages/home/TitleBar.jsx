import { Button } from 'react-bootstrap';
import { FaRegBookmark } from 'react-icons/fa';

import { ReactComponent as LineToday } from '../../../assets/img/brand-logo-today-solid.svg';

import styles from './TitleBar.module.scss';

const TitleBar = ({ onClickLogo, onClickBookmarkList }) => {
  return (
    <div className={styles.titlebar}>
      <LineToday className={styles.titlebarBtn} onClick={onClickLogo}/>
      <div className={styles.titlebarLogin}>
        <Button className={styles.primaryBtn} onClick={onClickBookmarkList} data-testid="bookmarkListBtn">
          Bookmark List
          <FaRegBookmark size="15px" className={styles.icon}/>
        </Button>
      </div>
    </div>
  )
}

export default TitleBar
