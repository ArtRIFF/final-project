import styled from "styled-components";
export const Btn = styled.div`
min-width: 80px;
max-height: 30px;
border-radius: 6px;
border: 1px solid transparent;
cursor:pointer;
padding: 10px 10px;
text-align: center;
background-color:${props =>  props.backgroundColor};
font-size: 20px;
text-transform: uppercase;


&:active {
  background-color: #68b7ee;
}

&:hover {
  border-color: green;
  color: white;
}
`