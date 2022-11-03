import styled from "styled-components";

export const Container = styled.div`
position: fixed;
width: 100%;
z-index: 2;
background-color: rgb(215, 201, 184);
padding: 30px 0 30px 0;
border-bottom: 1px solid black;

nav {
  padding: 0 30px 0 30px;
  margin: 0 auto;
  width: 950px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icons-container{
  display: flex;
  width: 130px;
  justify-content: space-between;
  a {
    color: white;
  }
  .active {
   color: yellow;
  }
}
`

export const HeaderSection = styled.div`
 font-size: 50px;
 text-transform: uppercase;
 color: white;
`

export const Cart = styled.div`
 font-size: 50px;
 color: inherit;
 cursor: pointer;
 position: relative;
  span{
    position: absolute;
    background-color: #00800099;
    top: 19px;
    right: -9px;
    padding: 2px 10px;
    font-size: 25px;
    border-radius: 50%;
  }
`

export const Favorite = styled.div`
 font-size: 50px;
 color: inherit;
 cursor: pointer;
 position: relative;

 span{
  position: absolute;
  background-color: #00800099;
  top: 19px;
  right: -9px;
  padding: 2px 10px;
  font-size: 25px;
  border-radius: 50%;
}
`