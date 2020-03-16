import styled from 'styled-components';

export const HeaderStyled = styled.header`
  min-height: 6rem;
  width: 100%;
  padding: 3rem;
  background: #fff;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 736px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }

  .logo {
    font-weight: 700;
    font-size: 1.8rem;
    a {
      color: inherit;
    }
  }
  .filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    gap: 1rem;
    .filter {
      max-width: 22.5rem;
    }
  }
  #SearchBox {
    text-align: right;
    @media (max-width: 736px) {
      text-align: left;
    }

    .search-box {
      border: 0;
      border-bottom: 1px solid #fd807f;
      font-size: 1.4rem;
      padding: 0.5rem 1rem;
      outline: none;
      width: 18rem;
    }
  }
`;
