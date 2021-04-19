import styled from 'styled-components';

export const Fake = styled.div`
  @keyframes loader {
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
}

  @-webkit-keyframes loader {
      0% {
          background-color: rgba(165, 165, 165, 0.1);
      }
      50% {
          background-color: rgba(165, 165, 165, 0.3);
      }
      100% {
          background-color: rgba(165, 165, 165, 0.1);
      }
  };

  background-color: #ddd;
  height: ${props => props.height ? `${props.height}px` : '20px'};
  flex: ${props => props.fillContent ? 1 : 'unset'};
  animation: loader 1.5s infinite ease-in-out;
`;

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: 1px solid #ccc;
  padding: 20px 0px;

  .searchBox {
    max-width: 1000px;
    margin: auto;
    background-color: #9bb83c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
    display: flex;

    form {
      flex: 1;
      display: flex;

      input, select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #000;
        margin: 0 10px;
      };

      input {
        flex: 1;
        padding: 0 10px;
      };

      select {
        background-color: #fff;
        width: 100px;
      };

      button {
        background-color: #49aeef;
        font-size: 15px;
        border: 0;
        border-radius: 5px;
        color: #fff;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
        margin: 0 10px;
      };
    };
  };

  .categoryList {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-flow: wrap;
    margin-top: 10px;

    .categoryItem {
      width: 25%;
      justify-content: center;
      display: flex;
      align-items: center;
      color: #000;
      text-decoration: none;
      height: 50px;
      margin: 10px 0;
      transition: all 0.2s ease-in-out 0s;

      &:hover {
        color: #999;
      };

      img {
        width: 45px;
        height: 45px;
        margin: 10px;
      };
    };
  };

  @media(max-width: 600px) {
    .searchBox form {
      flex-direction: column;

      input {
        padding: 10px;
        margin: 0;
        margin-bottom: 10px;
      };

      select {
        width: 100%;
        margin: 0;
        margin-bottom: 10px;
      };

      button {
        margin: 0;
      };
    };

    .categoryList .categoryItem {
      width: 50%;
      justify-content: unset;
      padding: 10px;
    };
  };
`;

export const PageArea = styled.div`
  h2 {
    font-size: 20px;
  };

  .list {
    margin: 20px 0;
    display: flex;
    flex-flow: wrap;

    .aditem {
      width: 25%;
    };
  };

  .seeAllLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  };

  .text {
    margin-top: 20px;
  }

  @media(max-width: 600px) {
    & {
      margin: 10px;
    };

    .list .aditem{
      width: 50%;
    };
  };
`;