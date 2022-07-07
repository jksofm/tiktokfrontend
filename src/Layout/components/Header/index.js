import { Menu as PopperMenu } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/icons';
import Image from '~/components/images';
import HeaderSearch from './HeaderSearch';
import { Link } from 'react-router-dom';
import config from '~/config';

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
        {
          type: 'language',
          code: 'العربية',
          title: 'العربية',
        },
        {
          type: 'language',
          code: 'বাঙ্গালি (ভারত)',
          title: 'বাঙ্গালি (ভারত)',
        },
        {
          type: 'language',
          code: 'Cebuano (Pilipinas)',
          title: 'Cebuano (Pilipinas)',
        },
        {
          type: 'language',
          code: 'Čeština (Česká republika)',
          title: 'Čeština (Česká republika)',
        },
        {
          type: 'language',
          code: 'Deutsch',
          title: 'Deutsch',
        },
        {
          type: 'language',
          code: 'Ελληνικά (Ελλάδα)',
          title: 'Ελληνικά (Ελλάδα)',
        },
        {
          type: 'language',
          code: 'Español',
          title: 'Español',
        },
        {
          type: 'language',
          code: 'Filipino (Pilipinas)',
          title: 'Filipino (Pilipinas)',
        },
        {
          type: 'language',
          code: 'Français',
          title: 'Français',
        },
        {
          type: 'language',
          code: 'Čeština (Česká republika)',
          title: 'Čeština (Česká republika)',
        },
        {
          type: 'language',
          code: 'Deutsch',
          title: 'Deutsch',
        },
        {
          type: 'language',
          code: 'Ελληνικά (Ελλάδα)',
          title: 'Ελληνικά (Ελλάδα)',
        },
        {
          type: 'language',
          code: 'Español',
          title: 'Español',
        },
        {
          type: 'language',
          code: 'Filipino (Pilipinas)',
          title: 'Filipino (Pilipinas)',
        },
        {
          type: 'language',
          code: 'Français',
          title: 'Français',
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
    separate: true,
  },
];

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  const handleMenuChange = (Item) => {
    console.log(Item);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.Home}>
          <div className={cx('logo')}>
            <img src={images.logo} alt="logo" />
          </div>
        </Link>

        <HeaderSearch />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button className={cx('action-btn-upload')} onClick={console.log('Hi')}>
                <UploadIcon className={cx('action-icon')} />

                <h4>Upload</h4>
              </Button>
              <Tippy delay={[0, 100]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  {/* <FontAwesomeIcon className={cx('action-icon')} icon={faCloudUpload} /> */}
                  <InboxIcon className={cx('action-icon')} />
                </button>

                {/* <MessageIcon className = {cx('action-icon','action-mesage-icon')}  /> */}
              </Tippy>
              <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                <button className={cx('action-btn', 'action-message-btn')}>
                  {/* <FontAwesomeIcon className={cx('action-icon')} icon={faCloudUpload} /> */}
                  <span className={cx('action-message-alert')}>12</span>

                  <MessageIcon className={cx('action-icon')} />
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
          <PopperMenu
            hideOnClick={true}
            items={currentUser === true ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              // <div className={cx('user-avatar-box')}>
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ec5114cce9483d32f1c5d55a7b39f108~c5_100x100.jpeg?x-expires=1657177200&x-signature=QoiASBPBWcTXNjo%2B57N3cyK%2B1cc%3D"
                className={cx('user-avatar')}
                // customFalseback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e86867bdcd0d0fa4649f4731b60677ad~c5_100x100.jpeg?x-expires=1657177200&x-signature=z7Py03Avpq%2FRT8WB2tJLL%2FUP5oo%3D"
              />
            ) : (
              // </div>
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
