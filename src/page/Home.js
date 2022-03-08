import styled from 'styled-components'
import HomeContainer from "../views/home/containers/HomeContainer";
import { Outlet } from 'react-router-dom';

const Home = () => {
    //Outlet을 사용하면 Route의 자식요소로 들어온 컴포넌트를 렌더링 할 수 있음
    return(
        <Container>
            <HomeContainer/>
            <Outlet/>
        </Container>
    )
};

const Container = styled.div`

`;

export default Home;