import { ModalContainer,ModalHeader,ModalClose,ModalFooter,ModalMain,OutsideModal } from './styles';
import { ReactComponent as MyLogo }  from './cross.svg'
import PropTypes from 'prop-types';
const Modal = ({header,text,closeButton,onClose,children}) => {
    const btnClose = closeButton?<ModalClose><MyLogo onClick={onClose} style={{width: "inherit",height: "inherit"}}/></ModalClose>:null;
    return (
      <>
    <OutsideModal onClick={onClose}/>
    <ModalContainer className='modal'>
     <ModalHeader>
      <h1>{header}</h1>
      {btnClose}
     </ModalHeader>
     <ModalMain>
      <p>{text}</p>
     </ModalMain>
     <ModalFooter>
      {children}
     </ModalFooter>
    </ModalContainer>
    </>
      )
}

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  header: "Message",
  text: "",
  onClose: null
};

export default Modal;
