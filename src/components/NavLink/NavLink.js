import styled from "styled-components";
import { WEIGHTS } from "../../constants";

export default function NavLink({ children, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Top>{children}</Top>
      <Bottom>{children}</Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Top = styled.div`
  transition: transform 400ms, opacity 400ms;
  transform: translateY(0%);

  ${Wrapper}:hover & {
    transform: translateY(-100%);
  }
`;

const Bottom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 400ms, opacity 400ms;
  font-weight: ${WEIGHTS.bold};
  transform: translateY(100%);

  ${Wrapper}:hover & {
    transform: translateY(0%);
  }
`;
