import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Menu as PopperMenu } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faMessage,
  faUser,
  faAslInterpreting,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    submenu: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'Vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hoa',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coins',
    
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate : true,
  },
]

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResults([]);
    }, 3000);
  }, []);

  const handleMenuChange = (Item) => {
    console.log(Item);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="logo" />
        </div>
        <HeadLessTippy
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
        </HeadLessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon className={cx('action-icon')} icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
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
            </>
          )}
          <PopperMenu items={currentUser ? userMenu :MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <div className={cx('user-avatar-box')}>
                <img
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b1d9b1404b254f514a7755a52c0cb2f9~c5_100x100.jpeg?x-expires=1657159200&x-signature=NSoxMb7ZJvXkepb9MLFLOBP5iJ8%3D"
                  className={cx('user-avatar')}
                />
              </div>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
