import { useState } from 'react'
import styles from './menu.module.scss'


export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={handleMenuClick}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      {isOpen && (
        <ul className={`${styles.menuItems} ${isOpen ? styles.open : ''}`}>
          <li>Game</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}
