import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function HeaderSubmenu({ title, onBack, children}) {
  return (
    <header className={cx('header-submenu')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('headerTitile-submenu')}>{title}</h4>
    </header>
  );
}

export default HeaderSubmenu;
