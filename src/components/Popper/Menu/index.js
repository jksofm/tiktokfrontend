import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Item from './Item'
const cx = classNames.bind(styles);
function Menu({ children,items=[] }) {
    console.log(items);
    const RenderItem = ()=>{
        return items.map((item,key)=>(
            
            <Item key={key} item= {item} />
            
        ))
    }
  return (
    <Tippy
      interactive={true}
      
      delay={[0,700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')} >
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
