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
  height: ${props => props.fillContent ? 'unset' : props.height ? `${props.height}px` : `${20}px`};
  flex: ${props => props.fillContent ? 1 : 'unset'};
  animation: loader 1.5s infinite ease-in-out;
`;

export const BreadCrumb = styled.div`
  font-size: 13px;
  margin-top: 20px;

  a {
    display: inline-block;
    margin: 0 5px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
  };

  @media(max-width: 600px) {
    & {
      margin: 20px;
    };
  };
`;

export const PageArea = styled.div`
  margin-top: 20px;
  display: flex;

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #999;
    margin-bottom: 20px;
  };

  .box--padding {
    padding: 10px;
  };

  .leftSide {
    flex: 1;
    margin-right: 20px;

    .box {
      display: flex;
    };

    .adImage {
      width: 320px;
      height: 320px;
      margin-right: 20px;
    };

    .adInfo {
      display: flex;
      flex-flow: column;
      flex: 1;

      .adName {
        margin: 20px 0;

        h2 {
          margin: 0;
        };

        small {
          color: #999;
        };
      };

      .adDescription {
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        flex: 1;

        .adDescriptionContent{
          padding-right: 20px;
        };

        .adDescriptionContentBottom{
          hr {
            width: 100%;
          };
          
          small {
            display: block;
            color: #999;
            padding-bottom: 10px;
          };
        };
      };
    };
  };

  .rightSide {
    width: 250px;

    .price span {
      color: rgb(110,10,214);
      display: block;
      font-size: 27px;
      font-weight: bold;
    };

    .box-blue{
      background-color: rgb(110,10,214);
    };

    .contactSellerLink {
      background-color: rgb(110,10,214);
      color: #fff;
      height: 30px;
      border-radius: 5px;
      box-shadow: 0px 0px 0px 1px #999;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-bottom: 20px;
      transition: all 0.2s ease-in-out 0s;

      &:hover {
        background-color: rgb(110, 100, 255);
      };
    };

    .createdBy{
      
      strong {
        display: block;
        margin-top: 2px;
      };

      small{
        display: block;
        color: #999;
        margin-top: 10px;
      };
    };
  };

  @media(max-width: 600px) {
    & {
      flex-flow: column;
    };

    .leftSide{
      margin-right: 0;

      .box {
        margin: auto;
        width: 320px;
        flex-flow: column;
      };

      .adInfo {
        padding: 10px;
      };
    };

    .rightSide {
      margin-top: 20px;
      width: auto;

      .box {
        margin: auto;
        width: 320px;
      };

      .contactSellerLink {
        margin: 20px auto;
        width: 320px;
      };
    };
  };
`;

export const AdImage = styled.div`
  width: 320px;
  height: 320px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const OthersArea = styled.div`
  
  h2 {
    font-size: 20px;
  };

  .list {
    display: flex;
    flex-flow: wrap;

    .aditem {
      width: 25%;
    };
  };

  @media(max-width: 600px) {
    & {
      margin: 10px;
    };

    .list .aditem {
      width: 50%;
    };
  };
`;