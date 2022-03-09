import styled from 'styled-components'
import { useTranslation,withTranslation } from "react-i18next";
import i18n from "i18next";
import { Button } from 'reactstrap';
import TestComponent from "../components/TestComponent";
const TestContainer = () => {
    const { t } = useTranslation(['page']);
    const onChangeLang = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <h2>{t('page:startPage')}</h2>
            <Button onClick={onChangeLang} color={'danger'}>
                Change Language
            </Button>
            <Select onChange={onChangeLang}>
                <option value="en">en</option>
                <option value="ko">ko</option>
            </Select>
        </div>
    )
};

const Container = styled.div`
    background-color: #18f;
  width: 300px;
  height: 300px;
  position: absolute;
`;
const Select = styled.select`
  
`;

export default withTranslation('page', {})(TestContainer);