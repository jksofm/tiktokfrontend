import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles);
function Button({
  rounded = false,
  disabled = false,
  text = false,
  to,
  href,
  primary = false,
  outline = false,
  children,
  className,
  size,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    
    ...passProps,
  };
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    [size]: size,
    
    text,
    disabled,
    rounded,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
       { leftIcon && 
       <span className = {cx('icon')} >
        {leftIcon} </span>}
      <span className={cx('title')}>{children}</span>
      { rightIcon && <span className={cx('icon')}>
        {rightIcon}</span>}
    </Comp>
  );
}

export default Button;