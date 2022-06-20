import css from 'styled-jsx/css';

export const styles = css`
  .Input {
    display: inline;
    width: fit-content;
    .label {
      margin-bottom: 8px;
      color: #555;
      font-size: 14px;
      font-weight: bold;
      user-select: none;
    }
    :hover .input {
      border: 2px solid #777;
    }
    .input {
      position: relative;
      z-index: 0;
      display: inline-flex;
      align-items: center;
      width: 100%;
      padding: 8px;
      background: #fff;
      border: 2px solid #aaa;
      border-radius: 5px;
      &:focus-within {
        border: 2px solid blue;
      }
      input {
        width: 100%;
        border: none;
        outline: none;
        color: #111;
        font-size: 14px;
        &.no-caret {
          caret-color: transparent;
          cursor: pointer;
        }
        ::placeholder {
          color: #aaa;
          user-select: none;
        }
      }
    }
    &.disabled {
      pointer-events: none;
      .label {
        color: #ccc;
      }
      .input {
        border: 2px solid #ccc;
        input {
          ::placeholder {
            color: transparent;
          }
        }
      }
      .icon {
        opacity: .3;
      }
    }
  }
`;
