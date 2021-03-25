import styled from 'styled-components';

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;

  .searchBox {
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
`;

export const PageArea = styled.div``;