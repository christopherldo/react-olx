import styled from 'styled-components';

export const AdItem = styled.div`
  a {
    display: flex;
    flex-flow: column;
    height: 95%;
    border: 3px solid #fff;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all 0.2s ease-in-out 0s;

    &:hover {
      background-color: #eee;
      border-color: #777;
    };

    .itemName {
      font-weight: bold;
    };
  };
`;

export const AdImage = styled.div`
  height: 204px;
  width: 100%;
  border-radius: 5px;
  background-image: url(${props => props.defaultImage});
  background-size: cover;
  background-position: center;
`;