import { Button } from 'react-bootstrap';

import { ReactComponent as LineToday } from '../../../assets/img/brand-logo-today-solid.svg';

import styles from './TitleBar.module.scss';

const TitleBar = ({ onClickLogo, onClickBookmarkList }) => {
  return (
    <div className={styles.titlebar}>
      <LineToday className={styles.titlebarBtn} onClick={onClickLogo}/>
      <div className={styles.titlebarLogin}>
        <Button className={styles.primaryBtn} onClick={onClickBookmarkList} data-testid="bookmarkListBtn">Bookmark List</Button>
      </div>
    </div>
  )
}

export default TitleBar
