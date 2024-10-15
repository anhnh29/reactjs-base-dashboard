import { Button, ButtonProps } from 'antd';
import classes from './CButton.module.scss';
import clsx from 'clsx';

interface IProps extends ButtonProps {
  ctype: 'default' | 'primary' | 'outline';
  fontStyle?: 'light' | 'bold';
  text?: string;
  loading?: boolean;
  csize?: 'lg' | 'md' | 'sm';
  disabled?: boolean;
  children?: React.ReactNode;
}

const CButton = (props: IProps) => {
  const {
    text,
    ctype = 'primary',
    csize = 'md',
    loading,
    className,
    fontStyle = 'bold',
    disabled,
    children,
    ...prs
  } = props;

  const customClass = clsx(
    className,
    classes.button,
    classes[`button__${csize}`],
    classes[`button__${ctype}`],
    classes[`button__${fontStyle}`]
  );
  console.log('customClass', prs);
  return (
    <Button
      {...props}
      className={customClass}
      loading={loading}
      type="primary"
      disabled={disabled}
    >
      <div className={classes.content}>
        <span>{text}</span>
        {children}
      </div>
    </Button>
  );
};

export default CButton;
