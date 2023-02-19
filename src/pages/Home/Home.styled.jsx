import styled from "styled-components";
import {RiContactsBookLine} from 'react-icons/ri'

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    padding:20px;
    width: 500px;
    margin-top: 20px;
    margin-left:auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`
export const ContactsBookLine = styled(RiContactsBookLine)`
color: #525355;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
border-radius: 5px;
transition: all 300ms ease;
&:hover{
    color: orange;
    transition: all 300ms ease;
}
`

export const Phonebook = styled.h1`
    margin-top: 10px;
    color: #1651B8;
    `

export const UseInfo = styled.h3`
    margin: 5px;
    color: #F45707;
    font-style: italic;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
