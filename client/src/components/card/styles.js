import styled from "styled-components";
export const CardContainer = styled.div`
min-height: 300px;
margin: 15px 5px;
background-color: white;
border-radius: 10px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
padding-bottom: 10px;
flex-basis: 280px;
`
export const ImageContainer = styled.div`
position: relative;
width: 100%;
min-height: 200px;
 img{
  width: inherit;
  border-radius: 10px 10px 0 0;
  display: block;
 }

 .btn-close{
  position: absolute;
  color: white;
  cursor: pointer;
  right: 10px;
  top: 0px;
  font-size: 30px;
  transition: transform 0.7s ease;
 }

 .btn-close:hover {
  transform: scale(1.3);
 }

 .btn-close:active {
  transform: scale(1.0);
  color: red;
 }
`
export const CardDesc = styled.div`
margin: 10px 15px 10px;
.card__product-desk{
  margin: 5px 0 5px;
  font-size: 20px;
}
`
export const CardHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 8px 10px;
.card__title{
   color: ${props => props.isFavorite ? "#afaf23" : "chocolate"};
   font-size: 24px;
   cursor: pointer;
   margin-right: 8px;
  }
`

export const CardFooter = styled.div`
display: flex;
justify-content: space-around;
padding: 5px 10px;

.card__product-price {
  font-size: 24px;
  color: green;
  text-align: center;
  margin: 10px 10px;
 }
`