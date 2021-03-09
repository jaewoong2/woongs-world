import React, { useCallback, useState } from 'react';
import { AiFillRightCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { loadAnimation } from '../style/global-theme';

const Section = styled.section`
    h3 {
        color: ${({ theme }) => (theme.isDarkMode === true ? 'rgb(140, 127, 212)' : 'black')};
    }
    .description-wrap {
        width: 100%;
        position: relative;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .icon {
            &:hover {
                cursor: pointer;
                color: rgba(100, 81, 207, 0.747);
                transition: color 0.2s;
            }
            transition: color 0.2s;
        }
        .description {
            animation: ${loadAnimation} 0.5s;
            display: flex;
            word-break: break-all;
            line-height: 1.5em;
        }
        .review {
            animation: ${loadAnimation} 0.5s;
        }
        &::after {
            content: '';
            width: 92%;
            height: 3px;
            background-color: ${({ theme }) => theme.color.border};
            position: absolute;
            bottom: -10px;
            left: 0;
            margin-left: 4%;
        }
    }
    .tech-description-wrapper {
        float: right;
        text-align: right;
    }
`;

type DescriptionProps = {
    classNames?: string;
    title?: string;
    description?: React.ReactNode | JSX.Element | string;
    techDescription?: React.ReactNode | JSX.Element | string;
    review?: React.ReactNode | JSX.Element | string;
};

const Description: React.FC<DescriptionProps> = ({ review, classNames, techDescription, title, description }) => {
    const [isShow, setIsShow] = useState(false);
    const onClickShowReview = useCallback(() => {
        setIsShow(prev => !prev);
    }, []);

    return (
        <Section className={`description-wrapper ${classNames}`}>
            <h3 className="text">{title}</h3>
            <div className="description-wrap">
                <AiFillRightCircle onClick={onClickShowReview} className="icon" />
                {!isShow && <div className="description">{description}</div>}
                {isShow && <div className="review">{review}</div>}
            </div>
            <div className="tech-description-wrapper">{techDescription}</div>
        </Section>
    );
};

export default Description;
