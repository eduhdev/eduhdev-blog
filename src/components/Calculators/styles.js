import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #f2f2f2;
    padding: 1rem;
    border-radius: 5px;

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;

        div { 
            display: flex;
            align-items: center;
            font-size: 18px;
            font-weight: 300;
            flex-wrap: wrap;

            &.values {
                gap: 0.2rem;
            }
        }

        input {
            width: 90px;
        }
        button {
            height: 40px;
            border: 0;
            background-color: #333;
            color: #fff;
            margin-right: -0.2rem;
            font-size: 16px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            cursor: pointer;
            z-index: 5;
        }
    }

    .percentage-sign {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 1rem;
        font-size: 24px;
    }
    .hint {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #333;
        font-weight: 400;

        span {
            font-weight: 600;
        }
    }
`