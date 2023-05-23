import styled from 'styled-components';
import { tablet } from 'Theme/media';

export default styled.div`
  width: 66%;
  max-width: 900px;
  min-height: 480px;
  height: 100%;
  position: absolute;
  left: -15px;
  top: 0px;
  background-repeat: no-repeat;
  background-image: url(${({ desktop }) => desktop});
  @media (${tablet}) {
    background-image: url(${({ mobile }) => mobile});
    background-position: right top;
    right: -15px;
    width: 100%;
    left: auto;
  }
`;
