import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: regular;
    color: black;
  }


  .dropdown {
    background: #ddd;
    max-width: 300px;
    border-radius: 20px;
    transition: all .2s ease;
    padding: 5px;

    .is-open {
      .dropdown-control {
        display: none
      }
    }
  }

  .dropdown-control {
    min-width: 200px;
    padding: 0;
    padding: 10px;
    cursor: pointer;

  }


  .dropdown-menu {
    background: #ccc;

    border-radius: 12px;
    width: 100%;
    max-width: 300px;
    top: 45%;
    transition: all .2s ease;
  }

  .dropdown-arrow {
    color: white;
    right: 24px;
    top: 32px;
  }

  .Dropdown-option {
    padding: 8px 24px;
    border: solid 1px #bbb;
    border-radius: 12px;


    :hover {
      background: rgba(255, 255, 255, .3);
      border-radius: 12px;
    }
  }
`;

export default GlobalStyle;
