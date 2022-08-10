import CloseIcon from '@mui/icons-material/Close';
import React, {useState} from "react";
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import './BaseModal.scss'

const BackdropUnstyled = React.forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string }
    >((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

const MUIBaseModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
interface PropsI  {
    purpose: string;
    showModal: boolean;
    onClose:  () => void;
    children: JSX.Element;
}
const BaseModal = ({ showModal, onClose, children, purpose} : PropsI ) => {
    return (
        <MUIBaseModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={showModal}
            onClose={onClose}
            BackdropComponent={Backdrop}
        >
            <div className="modal-container">
                <div onClick={onClose} className="modal-close">
                    <CloseIcon />
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </MUIBaseModal>
    )
}

export default BaseModal;
