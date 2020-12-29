import { keyframes } from "styled-components"
import { graphql, PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

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
  margin-top: 10px;

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

const LibrarySection = styled.section`
  width: 100%;
  display: flex;
  margin-top : 15px;
  margin-left: 10px;
  flex-direction: column;
  
  .library-container {
    width: 100%;
    display: flex;
    span {
      margin-left: 10px;
    }
  }
`

const Article = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  /* box-shadow: 3px 3px 4px rgba(102, 209, 182, 0.25), 
  -3px -3px 4px rgba(102, 209, 182, 0.25); */
  border-radius: 30px;
  
  .my-img {
    border-radius: 30px;
    width: 40%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  .introduce-section {
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.9em;
    span {
      padding: 6px;
    }
  }

`


export default function About({ data } : AboutPageProps) {
  return (
    <Layout>
      <Article>
        <img className="my-img" src={data.fileName.childImageSharp.fluid.src} />
        <section className="introduce-section">
          <span>이름 - 임재웅</span>
          <span>생년월일 - 1995년 12월 1일</span>
          <span>학력 - 숭실대학교 전자정보공학부</span>
          <span>
            자기소개 - 
            <span>
            2019년 4월 군전역후, 개발공부에 흥미가 생겼습니다.
            User Interface를 만드는 프론트 엔드 개발에 꽂혀 시간을 짬내며
            개발공부를 하고 있습니다.
            </span>
          </span>
        </section>
      </Article>
      <SectionTechStack>
        <span className="stack cpp">
          C++
        </span>
        <span className="stack cs">C#</span>
        <span className="stack py">Python</span>
        <span className="stack js">
          ECMA2020
          </span>
        <span className="stack ts">TypeScript</span>
        <span className="stack react">Recat Hooks</span>
        <span className="stack node">NodeJS</span>
      </SectionTechStack>
        <LibrarySection>
      라이브러리 -
          <div className="library-container">
            <span>Redux</span>
            <span>/</span>
            <span>Recoil</span>
          </div>
        </LibrarySection>
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