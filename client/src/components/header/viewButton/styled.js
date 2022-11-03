import styled from "styled-components";

export const ViewButtonWrapper = styled.div`
font-size: 28px;
cursor: pointer;
color: ${prop=>prop.active?'gold':'white'};
`