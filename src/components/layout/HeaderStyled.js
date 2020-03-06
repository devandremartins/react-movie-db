import styled from 'styled-components';

export const HeaderStyled = styled.header`
  min-height: 6rem;
  width: 100%;
  padding: 3rem;
  background: #fff;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.08);
  .logo {
    font-weight: 700;
    font-size: 1.8rem;
  }
  nav {
    display: inline-block;
    margin-left: 3rem;
    a {
      color: #fd807f;
      display: inline-block;
      margin: 0 0.5rem;
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
  .header-user {
    text-align: right;
  }
`;
