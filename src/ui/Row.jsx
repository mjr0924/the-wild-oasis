import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

function RowWrapper({ type = "vertical", ...props }) {
  return <Row type={type} {...props} />;
}

export default RowWrapper;
