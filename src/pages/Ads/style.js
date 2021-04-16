import styled from 'styled-components';

export const PageArea = styled.div `
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

    .listWarning {
      padding: 30px;
      padding-top: 0;
      text-align: center;
    };

    .list {
      display: flex;
      flex-flow: wrap;
      opacity: ${props => props.resultOpacity};

      .aditem {
        width: 33.33%;
      };
    };

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;

      .pagItem {
        width: 30px;
        height: 30px;
        color: #6e0ad6;
        background-color: #fff;
        border: 1px solid #dee2e6;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin: 2.5px;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease-in-out 0s;

        &:hover,
        &.active {
          color: #0056b3;
          background-color: #e9ecef;
          border-color: #999;
        };

        &.lastPage {
          opacity: ${props => props.lastPageDisplay ? 1 : 0};
          cursor: ${props => props.lastPageDisplay ? 'pointer' : 'default'};
        };

        &.nextPage {
          opacity: ${props => props.nextPageDisplay ? 1 : 0};
          cursor: ${props => props.nextPageDisplay ? 'pointer' : 'default'};
        };
      };
    };
  };

  @media(max-width: 600px) {
    & {
      flex-direction: column;
    };

    .leftSide {
      width: auto;
      margin: 10px;

      ul {
        display: flex;
        flex-flow: wrap;

        li {
          width: 50%;
        };
      };
    };

    .rightSide {
      margin: 10px;

      .list .aditem {
        width: 50%;
      };
    };
  };
`;