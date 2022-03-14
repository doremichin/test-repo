import styled from 'styled-components'
import {FormGroup, Input, Label} from "reactstrap";

const EmailInput = ({register,onChange,value}) => {
    const hardRendering = (e) => {
        onChange(e.target.value)
    }
    // react hook form 은 리렌더링이 최소화 됨
    // reactstrap , react-hook-form 같이 쓰는 로직
    const {ref, ...emailFField} = register('email')
    return(
        <Container>
            <FormGroup>
                <Label for="exampleEmail">
                    Email
                </Label>
                <Input
                    tag="input"
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    innerRef={ref}
                    {...emailFField}
                />
            </FormGroup>
        </Container>
    )
};

const Container = styled.div`

`;

export default EmailInput;
