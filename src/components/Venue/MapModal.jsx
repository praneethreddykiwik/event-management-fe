/** @format */

import styled from 'styled-components';

const MapModal = ({ mapUrl, onClose }) => {
  if (!mapUrl) return null;

  return (
    <Overlay>
      <ModalBox>
        <CloseButton onClick={onClose}>✕</CloseButton>

        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '12px' }}
          loading="lazy"
        />
      </ModalBox>
    </Overlay>
  );
};

export default MapModal;

/* styles */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  width: min(90%, 900px);
  height: 480px;
  background: white;
  padding: 12px;
  border-radius: 18px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 12px;
  border: none;
  background: white;
  font-size: 20px;
  cursor: pointer;
`;
