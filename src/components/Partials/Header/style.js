import styled from 'styled-components';

export const HeaderArea = styled.header`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;
  
  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  };

  a {
    text-decoration: none;
  };

  .logo {
    height: 60px;
    flex: 1;
    display: flex;
    align-items: center;

    .logo-1, .logo-2, .logo-3{
      font-size: 27px;
      font-weight: bold;
    };

    .logo-1 {
      color: rgb(110, 10, 214);
    };

    .logo-2 {
      color: rgb(140, 229, 99);
    };

    .logo-3 {
      color: rgb(242, 128, 0);
    };
  };

  nav {
    padding: 10px 0;

    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    };

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    };

    li {
      margin: 0 20px;

      a, button {
        border: 0;
        background: none;
        cursor: pointer;
        outline: 0;
        color: #000;
        font-size: 14px;
        transition: all 0.2s ease-in-out 0s;

        &:hover {
          color: #999;
        };

        &.button {
          background-color: #ff8100;
          border-radius: 4px;
          color: #fff;
          padding: 5px 10px;
          transition: all 0.2s ease-in-out 0s;

          &:hover {
            background-color: #e57706;
          };
        };
      };
    };
  };
`;