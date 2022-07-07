import HeadLessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderSearch.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchAPI } from '~/Services/searchService';

const cx = classNames.bind(styles);

function HeaderSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showFocus, setShowFocus] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();
  // console.log(inputRef);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResults([]);
      return;
    }
    setLoading(true);

    const fetchAPI = async () => {
      const result = await searchAPI(debounced);
      setSearchResults(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');

    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowFocus(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ') || searchValue.trim()) {
      setSearchValue(searchValue);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
        //Tippy warning => div
    <div>
      <HeadLessTippy
        appendTo = {()=>{
         return document.body
        }}
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
            onChange={handleChange}
            placeholder="Search accounts and videos..."
            spellCheck={false}
            onFocus={() => {
              setShowFocus(true);
            }}
          />
          <button className={cx('search-btn')} onMouseDown={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button onClick={handleClear} ref={inputRef} className={cx('clear')}>
            {!!searchValue && !loading && <FontAwesomeIcon icon={faCircleXmark} />}
          </button>
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default HeaderSearch;
