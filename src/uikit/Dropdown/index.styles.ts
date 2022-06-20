import css from 'styled-jsx/css';

export const styles = css`
  .Dropdown {
    display: inline-block;
    position: relative;
    width: fit-content;
    cursor: pointer;

    &.disabled {
      pointer-events: none;
    }
  }
`;
