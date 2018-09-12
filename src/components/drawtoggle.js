import React from 'react'
import styled from "styled-components";
import * as Spacing from '../style/spacing';
// import * as Colors from '../style/colors';
import HamburgerMenu from "react-hamburger-menu";



const ToogleButton = styled.button`
    height: ${Spacing.MEDIUM};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    Width: ${Spacing.MEDIUM};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    :hover {
        ouline: none;
    } 
`;



const DrawerToggleButton = props => (
        <ToogleButton onClick={props.click}>
            <HamburgerMenu
                width={25}
                height={18}
                strokeWidth={2}
                rotate={0}
                color='red'
                borderRadius={0}
                animationDuration={0.5}
            />
        </ToogleButton>
    );

export default DrawerToggleButton


// class DrawerToggleButton extends React.Component {

//     constructor(props) {
//         super(props);
//         this.props=props
//     }

//     handleClick() {
//         this.setState({
//             open: !this.state.open
//         });
//     }

//     render (props){
//         return (
     
//     <ToogleButton onClick={props.click}>
//         <HamburgerMenu
//             width={25}
//             height={18}
//             strokeWidth={2}
//             rotate={0}
//             color='black'
//             borderRadius={0}
//             animationDuration={0.5}
//         />
//     </ToogleButton>
//  );
        

//     }

// }

// export default DrawerToggleButton
