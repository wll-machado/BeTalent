import { styled } from "styled-components";


export const MainContainer = styled.main`
padding:24px 20px ;
display: flex;
flex-direction: column;
justify-content: center;
`

export const SearchContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;


h1{
 font-family: Helvetica Neue;
font-weight: 500;
font-size: 20px;
line-height: 24.42px;
letter-spacing: 0%;
color: ${({theme})=>theme.colors["black-neutral"]};
 }

 div{
     position: relative;
     width: 100%;
     min-width: 335px;
     height: 48px;
     margin-bottom: 24px;
    img{
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
    }
 
     input{
    width: 100%;
    height: 100%;
    justify-content: space-between;
    border-radius: 8px;
    border-width: 1px;
    padding:12px 16px;

    }
    }
 
`

export const EmployeeTable = styled.ul`
border-radius: 8px;
overflow: hidden;
    
li{
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
}

li:last-child{
    box-shadow: none;
}

>div{
    width: 100%;
    height: 47px;
    padding: 0 14.5px;
    background: ${({theme})=>theme.colors["blue-primary"]};
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
`
export const Tags = styled.div`
display: flex;
gap: 24px;

    span{
        font-family: Helvetica Neue;
font-weight: 500;
font-size: 16px;
line-height: 19.54px;
letter-spacing: 0%;
color: ${({theme})=>theme.colors["white"]};
    }
`

export const Dote = styled.div`
 width: 8px;
 height: 8px;
 border-radius: 8px;
 background: ${({theme})=>theme.colors["white"]};
 margin-right: 12px;

`

export const EmployeeCard = styled.li<{ expanded: boolean }>`
    width: 100%;
    height: ${(props) => (props.expanded ? "200px" : "60px")};
    margin-bottom: 1px;
    padding: 13px 16px;
    background: ${({theme})=>theme.colors["white"]};
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    display: flex;
    align-items: flex-start;
    gap: 30px;
    flex-direction: column;
    
`
export const EmployeeInfo = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:20px;
    width: 100%;

    span{
        display: flex;
        justify-content: space-between;
        width: 18.93rem;
        font-family: Helvetica nue;
        font-weight: 500;
        font-size: 16px;
        line-height: 19.54px;
        letter-spacing: 0%;
        color: ${({theme})=>theme.colors["black-neutral"]};
        border-bottom: 1px dotted ${({theme})=>theme.colors["gray-10"]};
        p:nth-child(even){
            font-weight: 400; 
        }
    }

`

export const CardHeader = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
    
div{
    display: flex;
    justify-content: flex-start;
    gap: 24px;
    width: 100%;
    img{
        width: 34px;
        height: 34px;
        border-radius: 50%;
        object-fit: cover;
    }

    h3{
        align-self: center;
        font-family: Helvetica Neue;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.09px;
        letter-spacing: 0%;
        color: ${({theme})=>theme.colors["black-neutral"]};
    }
}


`

export const Arrow = styled.span<{ rotated: boolean }>`
   width: 32px;
    height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(props) => (props.rotated ? "180deg" : "0deg")});
`;