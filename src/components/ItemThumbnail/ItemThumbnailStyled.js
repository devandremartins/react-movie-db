import styled from 'styled-components';

export const ItemThumbnailStyled = styled.article`
  position: relative;
  .poster {
    border: 1px solid #fff;
    height: 100%;
  }
  h1 {
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 1.6rem;
    color: #333;
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .score {
    background: #fd807f;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0.3rem 0.6rem;
    position: absolute;
    top: -4px;
    left: -4px;
    border: 1px solid #fff;
  }
`;
