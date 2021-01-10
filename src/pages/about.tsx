import { graphql, PageProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { FiGithub } from 'react-icons/fi';
import { BsFilePost } from 'react-icons/bs';
import { graphAnimation, loadAnimation } from '../components/style/global-theme';
import AboutMySelf from '../components/AboutMySelf';

interface AboutPageProps extends PageProps {
    // data: {
    //   fileName: {
    //     childImageSharp: {
    //       fluid: {
    //         src: string
    //       }
    //     }
    //   }
    // }
    data: {
        allImageSharp: {
            edges: {
                node: {
                    fluid: {
                        aspectRatio: number;
                        base64: string;
                        sizies: string;
                        src: string;
                        srcSet: string;
                    };
                    id: string;
                };
            }[];
        };
    };
}

const SectionTechStack = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    /* margin-top: 10px; */

    .stack {
        position: relative;
        ::after {
            content: '';
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
`;

const Contact = styled.section`
    width: 100%;
    display: flex;
    margin-top: 15px;
    margin-left: 10px;

    .contact-icon {
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 15px;
        text-decoration: none;
        color: ${({ theme }) => theme.color.dark};

        svg {
            color: ${({ theme }) => theme.color.icon};
            min-width: 24px;
            min-height: 24px;
            margin-right: 7px;
        }
    }
`;

const Paragraph = styled.p`
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
        content: '';
        width: 95%;
        margin-bottom: 20px;
        height: 1.5px;
        background-color: ${({ theme }) => theme.color.dark};
    }
`;

const Span = styled.span`
    width: fit-content;
    height: 1em;
`;

type myHistoryProps = {
    date: string;
    description: string | React.ReactNode | JSX.Element;
    clarification: string;
};

const histories: myHistoryProps[] = [
    {
        date: '1995.12.01',
        description: '출생',
        clarification: '느긋한 성격을 갖고 있습니다.',
    },
    {
        date: '2014.02',
        description: '강원대학교 사범대학부설고등학교 졸업',
        clarification: '문과',
    },
    {
        date: '2014.03',
        description: '한국외국어대학교 글로벌캠퍼스 인문학부 입학',
        clarification: '인문학이 맞지않아 방황을 하며 하고싶은 것을 찾기 시작한 때 입니다.',
    },
    {
        date: '2014.09 - 2015.11',
        description: '1학기 후 휴학후, 수능 준비.',
        clarification: '휴학하며 하고 싶은 것을 찾았고, 상경계열 및 이공계열 을 가기 위해 수능 준비를 하였습니다.',
    },
    {
        date: '2016.03',
        description: '숭실대학교 전자정보공학부 IT융합전공 입학',
        clarification: 'IT 업계를 가고 싶어 IT융합전공을 선택하여 입학 하였습니다.',
    },
    {
        date: '2017.05 - 2019.04',
        description: '대한민국 해군 641기 병장 만기전역',
        clarification: '남들과 다른 군입대를 하고 싶었기 때문에, 주위에서 비교적 가지 않은 해군에 입대하였습니다.',
    },
    {
        date: '2020.11',
        description: '휴학 후, 아르바이트를 병행하며 개발공부 시작',
        clarification: '여러사람을 만나며 하고싶은 것에 대해 구체화를 하였고, 결단 끝에 개발공부를 시작하였습니다.',
    },
    {
        date: '2020.03',
        description: '2020학기 복학',
        clarification: '궁극적인 목표(개발자) 를 위해 복학을 하였습니다.',
    },
];

const About: React.FC<AboutPageProps> = ({ data }) => {
    // imageSrc={data.allImageSharp.edges[0].node.fluid.src}
    return (
        <Layout>
            <AboutMySelf myHistory={histories} />
            <Span className="text">사용빈도-</Span>
            <SectionTechStack>
                <span className="stack cpp text">C++</span>
                <span className="stack cs text">C#</span>
                <span className="stack py text">Python</span>
                <span className="stack js text">ECMA2020</span>
                <span className="stack ts text">TypeScript</span>
                <span className="stack react text">Recat Hooks</span>
                <span className="stack node text">NodeJS</span>
            </SectionTechStack>
            <Contact>
                <a rel="noreferrer" className="contact-icon text" href="https://github.com/jaewoong2" target="_blank">
                    <FiGithub className="icon" size="36px" />
                    https://github.com/jaewoong2
                </a>
                <a rel="noreferrer" className="contact-icon text" href="https://velog.io/@jwisgenius" target="_blank">
                    <BsFilePost className="icon" size="36px" /> https://velog.io/@jwisgenius
                </a>
            </Contact>
            <Paragraph className="text">
                경력은 없지만, 꾸준히 개인 프로젝트를 해왔습니다. 현재, 숭실대학교 YOURSSU 프론트엔드 팀에서 부족하지만
                열심히 하고 있습니다. 배우는 걸 좋아하고, 그 누구에 못지않는 열정을 갖고 있습니다.
            </Paragraph>
        </Layout>
    );

    // return (
    //   <Layout>
    //     <Article>
    //       <figure className="my-image-wrapper">
    //         <img className="my-image" src={data.allImageSharp.edges[0].node.fluid.src} />
    //       </figure>
    //       <section className="introduce-section text">
    //         <div className="introduce-wrapper">
    //           <span>- 임재웅</span>
    //           <span>- 1995년 12월 1일</span>
    //           <span>- 숭실대학교 전자정보공학부</span>
    //           <span>
    //             - 개발:
    //             <span>
    //               2019/12 ~
    //             </span>
    //           </span>

    //         </div>
    //       </section>
    //     </Article>
    //     <SectionTechStack>
    //       <span className="stack cpp text">
    //         C++
    //       </span>
    //       <span className="stack cs text">C#</span>
    //       <span className="stack py text">Python</span>
    //       <span className="stack js text">
    //         ECMA2020
    //         </span>
    //       <span className="stack ts text">TypeScript</span>
    //       <span className="stack react text">Recat Hooks</span>
    //       <span className="stack node text">NodeJS</span>
    //     </SectionTechStack>
    //     <IntroduceOneLine className="text">
    //       <span>
    //         저는 친절한 사람입니다. 프론트엔드 개발자가 되어, 친절한 UI를 개발하고 싶습니다.
    //       </span>
    //     </IntroduceOneLine>
    //   </Layout>
    // )
};

export default About;

// pages 폴더에 있는 것은 이렇게
// export const query = graphql`
//   query {
//     fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000, maxHeight: 1500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export const query = graphql`
    query {
        allImageSharp {
            edges {
                node {
                    id
                    fluid(maxWidth: 3000, maxHeight: 3000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;
