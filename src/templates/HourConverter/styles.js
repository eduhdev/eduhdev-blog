import styled from "styled-components"

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  margin: 0 1rem;
  background: #f2f2f2;
  padding: 1.2rem;
  border-radius: 10px;
  gap: 1rem;

  .flex {
    display: flex;
    justify-content: space-between;
  }
  input {
    height: 40px;
    width: 80px;
    text-align: center;
  }
  p {
    margin: 0;
    padding: 0;
    color: #333;
  }
  .btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  button {
    height: 40px;
    background: #333;
    color: #fff;
    border: 0;
    font-weight: 600;
    cursor: pointer;

    &.outlined {
      background: transparent;
      color: #333;
      border: 1px solid #333;
    }
  }
  .result {
    padding-top: 1rem;
    border-top: 1px solid #333;
  }
  .converter {
    text-align: right;
    border-bottom: 1px solid #333;
    padding-bottom: 1rem;
  }
`