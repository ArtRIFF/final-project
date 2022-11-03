import styled from "styled-components";
export const FormContainer = styled.div`
width: 800px;
background-color: #c0fffb99;
border-radius: 20px;
padding: 30px 40px;
margin: 0 auto 50px;
.form-title {
  color: chocolate;
  text-align: center;
  font-size: 30px;
}
.form {
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .form-item {
    color: green;
    min-height: 161px;
    flex-basis: 50%;
    text-align: center;
    font-size: 18px;
    .error-message {
      color: red;
    }
  }

  .form-item  input{
   padding: 5px 10px;
   width 200px;
   font-size: 18px;
  }

  .form-btn {
   padding-top: 50px;
   width: 100%;
   text-align: center;
    }

  .form-btn input{
  text-transform: uppercase;
  background: chocolate;
	color: white;
	border: 1px solid black;
  border-radius: 8%;
	padding: 20px 20px;
	font: inherit;
	cursor: pointer;
	outline: inherit;

  &:active {
    background-color: green;
  }
  
  &:hover {
    border-color: green;
    color: white;
  }
  }
}
`