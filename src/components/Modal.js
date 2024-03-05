import ReactDOM from 'react-dom'
import BoopButton from './BoopButton'
import './Modal.css'

export default function Modal({ children, handleClose, color, audio }) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className='modal' style={{
            border: "4px solid", 
            borderColor: color,
            textAlign: "center"
            }}>
            {children}
            {/* <button 
            onClick={handleClose}>close</button> */}
            <BoopButton audio={audio} color={color} changeColor={handleClose} label={'Close Resume'} />
        </div>
    </div>
  ), document.body)
}