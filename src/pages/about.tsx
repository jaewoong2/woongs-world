import { keyframes } from "styled-components"
import { graphql, PageProps } from "gatsby"
import React, { useRef } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { FiGithub } from "react-icons/fi"
import { BsFilePost } from "react-icons/bs"
import { loadAnimation } from "../components/style/global-theme"
import MyImageSlide from "../components/MyImageSlide"

interface AboutPageProps extends PageProps {
  data: {
    fileName: {
      childImageSharp: {
        fluid: {
          src: string
        }
      }
    }
  }
}

const graphAnimation = keyframes`
  from {
    width: 0;
  }
`

const SectionTechStack = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;

  .stack {
    position: relative;
    ::after {
      content: "";
      font-size: 0.3em;
      top: 1.2rem;
      position: absolute;
      height: 10px;
      left: 0;
      animation: ${graphAnimation} 2s linear;
    }
  }

  .cpp {
    ::after {
      width: 70%;
      background-color: rgba(188, 202, 198, 0.767);
    }
  }
  .cs {
    ::after {
      width: 40%;
      background-color: rgba(150, 150, 220, 0.7);
    }
  }
  .py {
    ::after {
      width: 60%;
      background-color: rgba(40, 100, 250, 0.5);
    }
  }
  .js {
    ::after {
      width: 110%;
      background-color: rgba(248, 114, 4, 0.836);
    }
  }
  .ts {
    ::after {
      width: 100%;
      background-color: #0084ff;
    }
  }
  .react {
    ::after {
      width: 100%;
      background-color: #48afeb;
    }
  }
  .node {
    ::after {
      width: 50%;
      background-color: #64e684;
    }
  } 
`

const Contact = styled.section`
  width: 100%;
  display: flex;
  margin-top : 15px;
  margin-left: 10px;
  flex-direction: column;
  .contact-icon {
    color: inherit;
    text-decoration: none;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center
  }
`

const Article = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 30px;
  
  .my-img {
    border-radius: 30px;
    width: 35%;
    max-width: 400px;
    min-width: 150px;
    height: auto;
    margin: 0;
    padding: 0;
    box-shadow: 1px 1px 5px ${({ theme }) => theme.color.dark}, -1px -1px 5px ${({ theme }) => theme.color.dark};
    animation: ${loadAnimation} 0.5s linear;
  }

  .introduce-section {
    width: 65%;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
    span {
      animation: ${loadAnimation} 0.5s linear;
      padding: 6px;
    }
  }
`

const IntroduceOneLine = styled.div`
  width: 100%;
  margin-top: 25px;
  text-align: center;
`


export default function About({ data } : AboutPageProps) {
  return (
    <Layout>
      <Article>
        <img className="my-img" src={data.fileName.childImageSharp.fluid.src} />
        <section className="introduce-section text">
          <span>- 임재웅</span>
          <span>- 1995년 12월 1일</span>
          <span>- 숭실대학교 전자정보공학부</span>
          <span>
            - 개발:
            <span>
              2019/12 ~ 
            </span>
          </span>
          <Contact>
            <a className="contact-icon text" href="https://github.com/jaewoong2" target="_blank">
              <FiGithub size="42" /> https://github.com/jaewoong2
            </a>
            <a className="contact-icon text" href="https://velog.io/@jwisgenius" target="_blank">
              <BsFilePost size="42" /> https://velog.io/@jwisgenius
            </a>
          </Contact>
        </section>
      </Article>
      <SectionTechStack>
        <span className="stack cpp text">
          C++
        </span>
        <span className="stack cs text">C#</span>
        <span className="stack py text">Python</span>
        <span className="stack js text">
          ECMA2020
          </span>
        <span className="stack ts text">TypeScript</span>
        <span className="stack react text">Recat Hooks</span>
        <span className="stack node text">NodeJS</span>
      </SectionTechStack>
      <IntroduceOneLine className="text">
        <span>
          저는 친절한 사람입니다. 프론트엔드 개발자가 되어, 친절한 UI를 개발하고 싶습니다.
        </span>
      </IntroduceOneLine>
    </Layout>
  )
}


// pages 폴더에 있는 것은 이렇게 
export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`