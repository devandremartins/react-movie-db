import styled from 'styled-components';

export const ItemStyled = styled.div`
  .movie-hero {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 65vh;
    position: relative;
    h1 {
      font-size: 4.8rem;
      background-color: #fd807f;
      color: #fff;
      display: inline-block;
      max-width: 50vw;
      padding: 0.5rem 1rem;
      position: absolute;
      bottom: 4rem;
      left: 4rem;
    }
  }
  .movie-detail-wrapper {
    max-width: 96rem;
    margin: 6rem auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }
  .tagline {
    font-size: 2.4rem;
    font-style: italic;
  }
  p {
    margin-bottom: 1.5rem;
  }
  a {
    color: #fd807f;
  }
`;
