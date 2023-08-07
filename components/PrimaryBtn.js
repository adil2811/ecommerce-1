import React from 'react'
import styled,{css} from "styled-components"


const StyledButton = styled.button`
background-color: #5542FC;
border:0;
color:#FFF;
padding: 8px 15px;
border-radius: 5px;
display:inline-flex;
svg{
  height:23px;
  margin-right: 5px;
  align-items: center;


}
font-size:1.2rem;

cursor: pointer;
`;

export default function PrimaryBtn({children}){

  return (
    
    <StyledButton>
        {children}
      
    </StyledButton>
  )
}
