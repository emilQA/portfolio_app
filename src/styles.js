import styled from "styled-components";
// --------------------------------
// ABOUT
// --------------------------------

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

// --------------------------------
//SERVICES
// --------------------------------

export const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      cursor: pointer;
    }

  }
`;

// --------------------------------
// FAQ
// --------------------------------

export const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

// --------------------------------
// NAVIGATION BAR
// --------------------------------

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style-type: none;
  }

  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

`


// --------------------------------
// OURWORK
// --------------------------------

export const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

export const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #ccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  color: white;
`;

// --------------------------------
// MOVIE DETAIL
// --------------------------------
export const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translate(-50%, -7%);
  }

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
`;
export const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
export const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line{
    width:100%;
    background: #23d997;
    height:0.5rem;
    margin:1rem 0;
  }
  p{
    padding:2rem 0;
  }
`;
export const imageDisplay = styled.div`
min-height: 50vh;
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;









