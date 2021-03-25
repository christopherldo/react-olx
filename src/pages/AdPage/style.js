import styled from 'styled-components';

export const Fake = styled.div`
  background-color: #ddd;
  height: ${props => props.height || 20}px;
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

    .adImage {

    };

    .adInfo {
      padding: 10px;

      .adName {
        margin-bottom: 20px; 
      };

      .adDescription {

      };
    };
  };

  .rightSide {
    width: 250px;
  };
`;