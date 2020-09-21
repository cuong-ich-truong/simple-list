import styled from 'styled-components';
import { SpaceProps, space, LayoutProps, layout } from 'styled-system';

interface StLineProps extends SpaceProps, LayoutProps {}

const StLine = styled.div<StLineProps>`
  display: flex;
  justify-content: space-between;

  ${space}
  ${layout}
`;

export default StLine;
