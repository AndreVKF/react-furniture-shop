import React from "react"
import styled from "styled-components"
import { PageHero } from "../components"
import aboutImg from "../assets/hero-bcg.jpeg"

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline" />
          </div>
          <p>
            Non do non sunt minim laborum commodo pariatur anim ea laboris. Sit
            incididunt consequat fugiat et irure et laborum id pariatur laborum
            id. Mollit reprehenderit ipsum non est irure reprehenderit
            exercitation Lorem ullamco velit pariatur occaecat velit. Ut amet
            occaecat quis ullamco consectetur est excepteur exercitation veniam
            nulla ex aliquip labore in. Labore dolore duis laboris sint deserunt
            dolore cillum Lorem pariatur laboris et. Excepteur id esse in minim
            eu elit culpa quis ullamco adipisicing. Esse voluptate minim ea
            consectetur commodo tempor est proident aliqua Lorem in excepteur
            officia anim.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
