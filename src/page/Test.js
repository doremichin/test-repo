import styled from 'styled-components'
import TestContainer from "../views/test/containers/TestContainer";
import TestComponent from "../views/test/components/TestComponent";

const Test = () => {
    return(
        <Container>
            <TestContainer/>
            <TestComponent/>
        </Container>
    )
};

const Container = styled.div`

`;

export default Test;