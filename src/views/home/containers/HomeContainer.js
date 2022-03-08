import styled from 'styled-components'
import {variables} from "../../../style/_vriables";

const HomeContainer = () => {
    return(
        <Container>
            home~
            {/*<ColorBox></ColorBox>*/}
            {/*<ColorBox2 className={'box'}></ColorBox2>*/}
        </Container>
    )
};

const Container = styled.div`

`;
const ColorBox = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;
  background-color: ${variables["second-green-700"]};
`;
const ColorBox2 = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;
`;

export default HomeContainer;