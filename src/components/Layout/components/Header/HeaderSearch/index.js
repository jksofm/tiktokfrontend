import HeadLessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderSearch.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState, useRef, useInsertionEffect } from 'react';
import { useDebounce } from '~/hooks';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showFocus, setShowFocus] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced  = useDebounce(searchValue,500);

  const inputRef = useRef();
  console.log(inputRef);

  useEffect(() => {
    if (!debounced .trim()) {
        setSearchResults([]);
      return;
    }
    setLoading(true);
    setTimeout(() => {
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                debounced ,
            )}&type=less&fbclid=IwAR1-O5Qn9BjOXYIXm_Mhr2-WWnoTOLi0UXQNiA1DHzHh4dGNXGPz7qvlC44`,
          )
            .then((res) => res.json())
            .then((res) => {
              setSearchResults(res.data);
              setLoading(false);
            })
            .catch(() => {
              setLoading(false);
      
            })
    },100)
  }, [debounced]);
  const handleClear = () => {
    setSearchValue('');

    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowFocus(false);
  };

  return (
    <HeadLessTippy
      interactive={true}
      visible={searchResults.length > 0 && showFocus}
      render={(attrs) => (
        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResults.map((searchResult) => {
              return <AccountItem key={searchResult.id} data={searchResult} />;
            })}
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
          onFocus={() => {
            setShowFocus(true);
          }}
        />

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        <button onClick={handleClear} ref={inputRef} className={cx('clear')}>
          {!!searchValue && !loading && <FontAwesomeIcon icon={faCircleXmark} />}
        </button>
       
        {loading &&  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> }
      </div>
    </HeadLessTippy>
  );
}

export default HeaderSearch;
