import styled from 'styled-components'
import {Progress} from "reactstrap";

const TestComponent = () => {
    return(
        <Container>
            <div>
            <Progress
                animated
                value={10}
            />
            <Progress
                animated
                color="success"
                value="25"
            />
            <Progress
                animated
                color="info"
                value={50}
            />
            <Progress
                animated
                color="warning"
                value={75}
            />
            <Progress
                animated
                color="danger"
                value="100"
            />
            <Progress multi>
                <Progress
                    animated
                    bar
                    value="10"
                />
                <Progress
                    animated
                    bar
                    color="success"
                    value="30"
                />
                <Progress
                    animated
                    bar
                    color="warning"
                    value="20"
                />
                <Progress
                    animated
                    bar
                    color="danger"
                    value="20"
                />
            </Progress>
        </div>

        </Container>
    )
};

const Container = styled.div`
position: absolute;
  top: 200px;
  z-index: 10000;
  left: 0;
  right: 0;
`;

export default TestComponent;