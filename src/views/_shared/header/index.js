import styled from 'styled-components'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <Container>
            <Nav>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/live'}>Live</NavItem>
                <NavItem to={'/form'}>Form</NavItem>
            </Nav>
        </Container>
    )
};

const Container = styled.div`
  height: 60px;
  box-shadow:  1px 1px 10px #333;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavItem = styled(Link)`
  
  padding: 10px;
`;

export default Header;
