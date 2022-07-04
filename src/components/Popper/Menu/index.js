import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Item from './Item';
import HeaderSubmenu from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  console.log('Current : ', current);
  let newTitle;
  const RenderItem = () => {
    return current.data.map((item, key) => {
      // const isParent = !!item.submenu;
      // console.log("isParent : ",isParent);
      return (
        <Item
          onClick={() => {
            if (item.submenu) {
              newTitle = item.submenu.title;
              setHistory((pre) => [...pre, item.submenu]);
            } else {
              onChange(item);
            }
          }}
          key={key}
          item={item}
        />
      );
    });
  };

  const onBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <Tippy
      interactive={true}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <HeaderSubmenu onBack={onBack} title="language" />}
            <RenderItem />
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
