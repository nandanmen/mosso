import { styled } from 'twin.macro'

export default function Modal({ onClose, children }) {
  return (
    <ModalContainer>
      <Backdrop onClick={onClose} />
      <Content>{children}</Content>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  opacity: 0.5;
  z-index: 10;
`

const Content = styled.div`
  position: relative;
  z-index: 20;
`
