import styled from "styled-components";
export const Container = styled.div`
display: flex;
justify-content: ${prop => prop.rowView?'space-between':'space-around'};
flex-direction: ${prop => prop.rowView?'column':'row'};
align-content: center;
padding: 130px 0 20px;
flex-wrap: wrap;
position: relative;
width: 950px;
margin: 0 auto;

.card__image-container{
  ${prop => prop.rowView?'width: 80px; min-height: 70px;':''};
  img {
    border-radius: ${prop => prop.rowView?'10px':'10px 10px 0 0'};
  }
}

.card {
  ${prop => prop.rowView?'display: flex;align-items: center;justify-content: space-around;padding: 30px 10px;width: 90%;flex-basis: 50px;min-height: 100px;':''};
}
`