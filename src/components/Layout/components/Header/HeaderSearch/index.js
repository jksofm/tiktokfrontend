import HeadLessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderSearch.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState, useRef } from 'react';

import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showFocus,setShowFocus] = useState(true);
  const inputRef = useRef();
  console.log(inputRef);

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([1,2,3]);
    }, 3000);
  }, []);
  const handleClear=()=>{
    setSearchValue('');
    setSearchResults([]);
    inputRef.current.focus();

  }
  const handleHideResult=()=>{
      setShowFocus(false);

  }

  return (
    <HeadLessTippy
      interactive={true}
      visible={searchResults.length > 0 && showFocus}
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
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search accounts and videos..."
          spellCheck={false}
          onFocus={()=>{
            setShowFocus(true);
          }}
        />

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        <button
          onClick={handleClear}
          ref={inputRef}
          className={cx('clear')}
        >
          {!!searchValue && <FontAwesomeIcon icon={faCircleXmark} />}
        </button>
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
      </div>
    </HeadLessTippy>
  );
}

export default HeaderSearch;
