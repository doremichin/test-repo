import styled from 'styled-components'
import { useTranslation } from "react-i18next";

const TestContainer = () => {
    const { t } = useTranslation();
    return(
        <Container>
            {t('Welcome to React')}
        </Container>
    )
};

const Container = styled.div`
    background-color: #18f;
  width: 300px;
  height: 300px;
  position: absolute;
`;

export default TestContainer;