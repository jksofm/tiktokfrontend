import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);
function HeaderSubmenu({ title, onBack}) {
  return (
    <header className={cx('header-submenu')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('headerTitile-submenu')}>{title}</h4>
    </header>
  );
}
HeaderSubmenu.propTypes = {
  title : PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  
}

export default HeaderSubmenu;
