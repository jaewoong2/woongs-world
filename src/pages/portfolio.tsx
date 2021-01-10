import { graphql, PageProps } from 'gatsby';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import PortfolioImage from '../components/PortfolioImage';
import Description from '../components/Description';

interface PortfolioProps extends PageProps {
    data: {
        allImageSharp: {
            edges: {
                node: {
                    fluid: {
                        src: string;
                        originalName: string;
                    };
                    id: string;
                };
            }[];
        };
    };
}

const Section = styled.section`
    width: 100%;
    height: 100%;
    .canvas,
    .firebase {
        margin-top: 30px;
    }

    .project-introduce-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        .project-image-section {
            .description-wrapper {
                width: 90%;
                margin-left: 10px;
                font-size: 0.9em;
                .description,
                .review {
                    position: relative;
                    display: flex;
                    word-break: break-all;
                    line-height: 1.5em;
                    .first {
                        font-weight: 400;
                        font-size: 1.4rem;
                        height: 1.4rem;
                    }
                }
                .source-code {
                    &:hover {
                        color: rgba(100, 81, 207, 0.747);
                    }
                    margin-right: 5px;
                }
            }
        }
    }
`;

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    const images = useMemo(
        () =>
            data.allImageSharp.edges
                .map(edge => edge.node.fluid.originalName.includes('portfolio') && edge.node.fluid.src)
                .filter(image => !!image),
        [],
    );

    const canvasImages = useMemo(() => {
        return data.allImageSharp.edges
            .map(edge => (edge.node.fluid.originalName.includes('canvas') ? edge.node.fluid.src : ''))
            .filter(image => !!image);
    }, []);

    const firebaseImages = useMemo(() => {
        return data.allImageSharp.edges
            .map(edge => (edge.node.fluid.originalName.includes('firebase') ? edge.node.fluid.src : ''))
            .filter(image => !!image);
    }, []);

    return (
        <Layout>
            <Section>
                <div className="project-introduce-container">
                    <PortfolioImage
                        position="left"
                        description={
                            <Description
                                title="Woongs` Community"
                                review={
                                    <span className="description-text">
                                        <span className="text first">처</span>
                                        음으로 Node.js 와 DB를 사용하여 재미있었습니다. 하지만, 디자인을 디자인
                                        라이브러리를 사용하여 만든것이 아쉬웠습니다. 이것저것 구현을 하면서 개발에
                                        재미를 느끼게 되었습니다.
                                    </span>
                                }
                                description={
                                    <span className="description-text">
                                        <span className="text first">게</span>
                                        시물을 올릴 수 있는 사이트 입니다. 기초적인 글쓰기, 올리기, 삭제하기, 수정하기
                                        등 학습하기 위하여 만들었고, 추가로 PageNation, Infinity Scroll, HashTag Search
                                        등 기능 구현 하였습니다.
                                    </span>
                                }
                                techDescription={
                                    <>
                                        <div className="front">Front: Next.JS(React), Redux, AntDesign</div>
                                        <div className="back">Back: NodeJs, MySQL</div>
                                        <div className="sorcue-code-wrapper">
                                            <a
                                                rel="noreferrer"
                                                className="source-code"
                                                href="https://github.com/jaewoong2/BolierPlate-2020"
                                                target="_blank"
                                            >
                                                소스코드 /
                                            </a>
                                            제작기간 2020.07 ~ 09
                                        </div>
                                    </>
                                }
                            />
                        }
                        className="project-image-section"
                        images={images.map(image => (image ? image : ''))}
                    />
                </div>
                <div className="project-introduce-container canvas">
                    <PortfolioImage
                        position="right"
                        description={
                            <Description
                                review={
                                    <span className="description-text">
                                        <span className="text first">C</span>
                                        anvas.js를 공부하기 위해 각종 블로그및 공식문서를 공부하며 만든 것 중, 처음부터
                                        끝까지 개발한 것들 입니다. 웹앱(블로그, 쇼핑몰 등)과 같이 기능이 구현되는 것을
                                        만드는것만이 웹개발이 아니라 디자인적으로도 웹 개발을 할 수 있다는 것을 알게 된
                                        프로젝트 였습니다.
                                    </span>
                                }
                                title="Canvas Series"
                                description={
                                    <span className="description-text">
                                        <span className="text first">라</span>
                                        이브러리 사용 없이 canvas를 학습하기 위해 만들 었습니다.
                                    </span>
                                }
                                techDescription={
                                    <>
                                        <div className="front">Typescript, Canvas</div>
                                        <div className="sorcue-code-wrapper">
                                            <a
                                                rel="noreferrer"
                                                className="source-code"
                                                href="https://github.com/jaewoong2/mini-project"
                                                target="_blank"
                                            >
                                                소스코드 /
                                            </a>
                                            제작기간 2020.11 ~ 11
                                        </div>
                                    </>
                                }
                            />
                        }
                        className="project-image-section"
                        images={canvasImages.map(image => (image ? image : ''))}
                    />
                </div>
                <div className="project-introduce-container firebase">
                    <PortfolioImage
                        position="left"
                        description={
                            <Description
                                title="일정관리 WEB"
                                review={
                                    <span className="description-text">
                                        <span className="text first">새</span>
                                        로운 라이브러리를 사용하였지만, firebase 라이브러리에 있는 기능에만 국한되어
                                        DB등의 사용이 가능한 것이 아쉬웠지만, RecoilJS와 Firebase 를 동시에 사용하는
                                        자료가 없어 코드구성 및 기능 구현을 혼자 만드는것에 자신감을 붙게 만든 프로젝트
                                        입니다. 또한, 컴포넌트들을 재사용하는 것에 초점을 두며 개발을 하여 다른 프로젝트
                                        에도 사용 할 수 있게 만들었습니다.
                                    </span>
                                }
                                description={
                                    <span className="description-text">
                                        <span className="text first">해</span>
                                        보지 못한 라이브러리 학습을 위해 만든 페이지 입니다. Firebase를 이용한 구글
                                        로그인 구현, Firebase Database를 이용한 DB관리 등을 중점적으로 학습 하였습니다.
                                        css, 디자인을 라이브러리 도움 없이 만들었습니다.
                                    </span>
                                }
                                techDescription={
                                    <>
                                        <div className="front">TypeScript, React</div>
                                        <div className="back">Recoil, Firebase</div>
                                        <div className="sorcue-code-wrapper">
                                            <a
                                                rel="noreferrer"
                                                className="source-code"
                                                href="https://github.com/jaewoong2/mini-project"
                                                target="_blank"
                                            >
                                                소스코드 /
                                            </a>
                                            제작기간 2020.10 ~ 10
                                        </div>
                                    </>
                                }
                            />
                        }
                        className="project-image-section"
                        images={firebaseImages.map(image => (image ? image : ''))}
                    />
                </div>
            </Section>
        </Layout>
    );
};

export default Portfolio;

export const query = graphql`
    query {
        allImageSharp {
            edges {
                node {
                    id
                    fluid {
                        ...GatsbyImageSharpFluid
                        originalName
                    }
                }
            }
        }
    }
`;
