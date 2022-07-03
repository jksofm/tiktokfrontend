import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResults([]);
    }, 3000);
  }, []);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="logo" />
        </div>
        <Tippy
          interactive={true}
          visible={searchResults.length > 0}
          render={(attrs) => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos..." spellCheck={false} />

            <span></span>

            <button className={cx('search-btn')}>
              {/*search */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          </div>
        </Tippy>

        <div className={cx('actions')}>
          <Button text onClick={console.log('Hi')}>
            Upload
          </Button>
          <Button
            // leftIcon={<FontAwesomeIcon icon={faSpinner} />}
            primary
            // className={cx('custom-loggin')}
            // rounded
            onClick={console.log('Hi')}
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
