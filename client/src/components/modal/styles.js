import styled from "styled-components";

export const OutsideModal = styled.div`
position: fixed;
top: 0;
width: 100vw;
height: 100vh;
background-color: rgb(0 0 0 / 70%);
z-index:1;
`

export const ModalContainer = styled.div`
position: fixed;
top: 40%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%);
width: 400px;
min-height: 100px;
border-radius: 7px;
z-index:2;
background-color: rgb(215, 201, 184);
color: white;
`
export const ModalClose = styled.div`
cursor:pointer;
width: 15px;
height: 20px;
`
export const ModalHeader = styled.div`
border-radius: 7px 7px 0 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 20px;
background-color: rgb(0 0 0 / 28%);

 h1{
  margin: 0;
  font-size: 28px;
  font-weight: 500;
 }
`

export const ModalMain = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
text-align: center;
min-height: 80px;

 p{
  margin: 0;
  font-size: 20px;
  font-weight: 500;
 }
`

export const ModalFooter = styled.div`
display: flex;
// justify-content: space-between;
justify-content: center;
align-items: center;
padding: 15px 0px;

div + div {
   margin-left: 10px;
}
`