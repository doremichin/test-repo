

react-i18n

react-router-dom

lazy import / suspense

reactstrap

mui

react-draggable

graphql-apollo

livekit-react

livekit-client

예제폴더 참고

PreJoinPage.tsx
- \<VideoRenderer/> from 'livekit-react'
- 비디오 화면 렌더링 하는 컴포넌트
- connectRoom() 로 여러 params 값을 담은 쿼리스트링을 생성 후 도메인 이동
- \<Roompage/> 렌더링

RoomPage.tsx

- \<LiveKitRoom/> props 값으로 url, token 전달

craco

--------------------------------
### react-hook-form + reactstrap 
```javascript
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
```
