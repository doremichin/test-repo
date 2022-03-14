import styled from 'styled-components'
import {FormGroup, Input, Label} from "reactstrap";

const EmailInput = ({register,onChange,value}) => {
    const hardRendering = (e) => {
        onChange(e.target.value)
    }
    // react hook form 은 리렌더링이 최소화 됨
    return(
        <Container>
            <input type="text" {...register('아래는 input 태그가 아니라 그럴까 아니면 ')} onChange={hardRendering} value={value}/>
            <input type="text" {...register('아래는 input 태그가 아니라 그럴까 아니면 ')}/>
            <input type="text" {...register('아래는 input 태그가 아니라 그럴까 아니면 ')}/>
            <input type="text" {...register('아래는 input 태그가 아니라 그럴까 아니면 ')}/>
            <input type="text" {...register('아래는 input 태그가 아니라 그럴까 아니면 ')}/>
            <input type="text" {...register('아래는 input 태그가 아니라 그럴까 아니면 ')}/>
            <FormGroup>
                <Label for="exampleEmail">
                    Email
                </Label>
                <Input
                    tag={'input'}
                    {...register('whassup')}
                />
                <Input
                    tag="input"
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    {...register('email')}
                />
            </FormGroup>
        </Container>
    )
};

const Container = styled.div`

`;

export default EmailInput;
