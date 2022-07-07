import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Item from './Item';
import HeaderSubmenu from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ hideOnClick=false,children, items = [], onChange = defaultFn}) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  // console.log('Current : ', current);
  let newTitle;
  const RenderItem = () => {
    return current.data.map((item, key) => {
      // const isParent = !!item.submenu;
      // console.log("isParent : ",isParent);
      return (
        <Item
          onClick={() => {
            if (item.submenu) {
              // newTitle = item.submenu.title;
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
      hideOnClick={true}
      // visible={true}
      offset =  {[12,8]}
      delay={[0, 700]}
      placement="bottom-end"
      onHide = {()=>{
        setHistory((prev) => prev.slice(0,1));
      }}
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <HeaderSubmenu onBack={onBack} title={current.title} />}
            <div className={cx('menu-body')}>
            <RenderItem />
            </div>
            
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Menu;
