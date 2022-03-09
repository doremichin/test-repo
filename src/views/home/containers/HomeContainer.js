import styled from 'styled-components'
import {variables} from "../../../style/_vriables";
import TableComponent from "../components/TableComponent";
import {gql, useQuery} from "@apollo/client";
import i18n from "i18next";

export const QUERY_BOARD_NOTICE = gql`
    query boardCodeConnection($where: BoardCodeConnectionWhere!) {
  boardCodeConnection(where: $where) {
    nodes {
      code
      name
      description
    }
    groupCode
    groupName
    description
  }
}

`;

const HomeContainer = () => {
    const language = i18n.language;
    const {data, error,loading} = useQuery(QUERY_BOARD_NOTICE,{
        variables : {
            where: {
                code: 20100,
                langType: "EN"
            }
        }
    })
    if(loading) return null;
    console.log(data)
    return(
        <Container>
            home~
            {/*<ColorBox></ColorBox>*/}
            {/*<ColorBox2 className={'box'}></ColorBox2>*/}
            <TableComponent/>
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