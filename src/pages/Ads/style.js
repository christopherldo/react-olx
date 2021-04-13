import styled from 'styled-components';

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .leftSide {
    width: 250px;
    margin-right: 10px;

    .filterName {
      font-size: 15px;
      margin: 10px 0;
    };

    input, select {
      width: 100%;
      height: 40px;
      border: 2px solid #9bb83c;
      border-radius: 5px;
      outline: 0;
      font-size: 15px;
      color: #000;
      padding: 10px;
    };

    select {
      cursor: pointer;
      background-color: #fff;
    };

    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    };

    .categoryItem {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      color: 5px;
      cursor: pointer;
      transition: all 0.2s ease-in-out 0s;
      margin: 5px 0;

      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      };

      span {
        font-size: 14px;
      };
    };

    .categoryItem:hover, .categoryItem.active {
      background-color: #9bb83c;
      color: #fff;
    };
  };

  .rightSide {
    flex: 1;

    h2 {
      margin: 0 10px;
      font-size: 18px;
    };

    .list {
      display: flex;
      flex-flow: wrap;
      opacity: ${props => props.resultOpacity};

      .aditem {
        width: 33.33%;
      };
    };
  };
`;