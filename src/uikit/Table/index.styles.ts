import css from 'styled-jsx/css';

export const styles = css`
  .Table {
    overflow: hidden;
    width: 100%;
    border-collapse: collapse;
    border-radius: 4px;
    outline: 1px solid #D2D6DF;

    thead,
    tbody {
      tr {
        :hover {
          background: #F4F6FB;
        }
        &:not(tr:last-of-type) {
          td {
            border-bottom: 1px solid #D2D6DF;
          }
        }
        td {
          padding: /*y*/ 13px /*x*/ 16px;
          font-size: 16px;
          &:not(td:last-of-type) {
            border-right: 1px solid #D2D6DF;
          }
          &.check-cell,
          &.menu-cell {
            width: 60px;
          }
        }
      }
    }

    thead {
      tr {
        background: #F4F6FB;
        border-bottom: 1px solid #D2D6DF;
        color: #111;
        font-weight: bold;
        user-select: none;
        td {
          .head-cell {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    tbody {
      &.checked {
        background: #DFEEFC;
      }
      tr {
        &.empty-row {
          pointer-events: none;
          user-select: none;
          td {
            padding: /*y*/ 13px /*x*/ 16px;
            text-align: center;
            font-size: 16px;
            font-style: italic;
          }
        }
        td {
          transition: padding 0.1s ease;
          &.collapsed {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            font-size: 0 !important;
            border-bottom-width: 0 !important;
          }
        }
      }
    }
  }
`;
