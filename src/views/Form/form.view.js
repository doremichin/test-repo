import styled from 'styled-components'
import { Form ,FormGroup ,Label, Input, FormText, Button} from 'reactstrap';
import EmailInput from "./component/email";
import {useForm} from "react-hook-form";
import {useState} from "react";

const FormComponent = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [value, setValue] = useState('');
    const onSubmit = (e) => {
        console.log('@@eee',e);
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)} tag={'form'}>
                <EmailInput register={register} onChange={setValue} value={value}/>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">
                        Select
                    </Label>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>
                        <option>
                            5
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">
                        Select Multiple
                    </Label>
                    <Input
                        id="exampleSelectMulti"
                        multiple
                        name="selectMulti"
                        type="select"
                    >
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>
                        <option>
                            5
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Text Area
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">
                        File
                    </Label>
                    <Input
                        id="exampleFile"
                        name="file"
                        type="file"
                    />
                    <FormText>
                        This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>
                        Radio Buttons
                    </legend>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Option one is this and that—be sure to include why it's great
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Option two can be something else and selecting it will deselect option one
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        disabled
                    >
                        <Input
                            disabled
                            name="radio1"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Option three is disabled
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                        Check me out
                    </Label>
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </Container>
    )
};

const Container = styled.div`

`;

export default FormComponent;
