import styled from 'styled-components';

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
      };

      .area--input {
        display: flex;
        flex: 1;

        input {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 3px;
          outline: 0;
          transition: all 0.4s ease-in-out 0s;

          &:focus{
            border: 1px solid #333;
            color: #333;
          };
        };

        select {
          width: 100%;
        };

        button {
          background-color: #0089ff;
          border: 0;
          outline: 0;
          padding: 5px 10px;
          border-radius: 4px;
          color: #fff;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s ease-in-out 0s;

          &:hover {
            background-color: #006fce;
          };
        };
      };
    };
  };

  @media(max-width: 600px){
    form {

      .area {
        flex-flow: column;

        .area--title {
          width: 100%;
          text-align: left;
          margin-bottom: 10px;
        };

        .area--input {
          width: 100%;

          select {
            padding: 5px;
          };

          button {
            width: 100%;
            padding: 10px;
          };
        };
      };
    };
  };
`;