import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Item({ item, onClick }) {
  console.log(item);
  return (
    <Button onClick={onClick} className={cx('ButtonMenu',{
      separate : item.separate
    })} leftIcon={item.icon} to={item.to}>
      <h4>{item.title}</h4>
    </Button>
  );
}

Item.propTypes = {
  item : PropTypes.object.isRequired,
  onClick : PropTypes.func,
}

export default Item;
