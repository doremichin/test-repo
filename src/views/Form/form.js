import styled from 'styled-components'
import FormComponent from "./form.view";

const FormContainer = () => {
    return(
        <Container>
            <FormComponent/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
  max-width: 500px;
  margin: 0 auto;
`;

export default FormContainer;
