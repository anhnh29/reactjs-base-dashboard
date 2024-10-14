import React from 'react';
import { Modal, ModalProps } from 'antd';
import classes from './CModal.module.scss';
import { CloseOutlined } from '@ant-design/icons';
import CButton from '../CButton/CButton';

type Props = {
  open: boolean;
  title?: React.ReactNode;
  txtCancel?: string;
  txtConfirm?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
  loading?: boolean;
  showFooter?: boolean;
  classWrapContent?: string;
  disabledConfirm?: boolean;
  disabledCancel?: boolean;
  isIconClose?: boolean;
};

const CModal: React.FC<Props & ModalProps> = ({
  open,
  title,
  txtCancel,
  txtConfirm,
  onConfirm,
  onCancel,
  children,
  loading = false,
  showFooter = true,
  classWrapContent,
  disabledConfirm = false,
  disabledCancel = false,
  isIconClose = true,
  ...props
}) => {
  return (
    <Modal
      open={open}
      closable={false}
      footer={null}
      className={classes.modal}
      centered
      width={820}
      {...props}
    >
      <div className={classes.modal__top}>
        <p className={classes.modal__title}>{title}</p>
        {isIconClose && (
          <div className={classes.close} onClick={onCancel}>
            <CloseOutlined />
          </div>
        )}
      </div>
      <div className={showFooter ? classes.modal__content : classWrapContent}>
        {children}
      </div>
      {showFooter && (
        <div className={classes.modal__buttons}>
          <CButton
            htmlType="submit"
            csize="lg"
            ctype="outline"
            onClick={onCancel}
            disabled={disabledCancel}
            text={txtCancel ?? 'Cancel'}
          ></CButton>
          <CButton
            // className={clsx(
            //   { ['cursor-not-allowed']: disabledConfirm && loading },
            //   'w-full'
            // )}
            htmlType="submit"
            csize="lg"
            loading={loading}
            ctype="primary"
            onClick={onConfirm}
            disabled={disabledConfirm && !loading}
            text={txtConfirm ?? 'Confirm'}
          ></CButton>
        </div>
      )}
    </Modal>
  );
};

export default CModal;
