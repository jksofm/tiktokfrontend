import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Item({ item, onClick }) {
  console.log(item);
  return (
    <Button onClick={onClick} className={cx('ButtonMenu')} leftIcon={item.icon} to={item.to}>
      <h4>{item.title}</h4>
    </Button>
  );
}

export default Item;
