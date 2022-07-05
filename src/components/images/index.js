import {useState, forwardRef} from 'react'
//Để  tippy xác dịnh được vị trí của thẻ img và hiển thị dưới nó thì children của tippy(popper menu) phải có ref , nhưng khi chugn ta truyên một component tự tạo vào thì phải forwardRef cho nó để tippy nhận đươc ref
import images from '../../assets/images';
import styles from './images.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({src,alt,className,falseback:customFalseback = images.noImage,...props},ref) => {
    const [falseback,setFalseBack]= useState("");
    

    const handleError = (err) => {
          setFalseBack(images.noImage);
    }
    return <img ref={ref} className={classNames(styles.wrapper,className)} src={customFalseback||falseback|| src } alt={alt} {...props} onError={handleError} />
})

export default Image;

