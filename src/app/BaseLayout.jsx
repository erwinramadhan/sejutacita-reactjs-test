import styles from './BaseLayout.module.scss';

const BaseLayout = ({ children }) => {
  return (
    <div className={styles.universalFrame}>
      <div className={styles.universalContainer}>
        {children}
      </div>
    </div>
  )
}

export default BaseLayout
