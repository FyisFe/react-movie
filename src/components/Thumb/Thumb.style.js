import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 720px;

  object-fit: cover;
  border-radius: 20px;

  :hover {
    opacity: 0.8;
  }

  transition: all 0.3;
  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
