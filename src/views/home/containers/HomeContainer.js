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
    //refetch 기능이 캐싱여부를 파악해서 같은 쿼리는 알아서 두번 요청 안하는 듯
    const {data, error,loading, refetch} = useQuery(QUERY_BOARD_NOTICE,{
        variables : {
            where: {
                code: 20100,
                langType: "EN"
            }
        }
    })
    // const arrComponent = [
    //     <h1>헬롱</h1>,<h1>헬롱</h1>,<h1>헬롱</h1>,<h1>헬롱</h1>,<h1>헬롱</h1>
    // ]

    if(loading) return null;
    console.log(data)
    return(
        <Container>
            {/*{arrComponent}*/}
            {data.boardCodeConnection.nodes[0].name}
            <Button onClick={() => refetch({
                where : {
                    code : 20100,
                    langType : "KO"
                }
            })}>
                재요청
            </Button>
            {/*<ColorBox></ColorBox>*/}
            {/*<ColorBox2 className={'box'}></ColorBox2>*/}
            <TableComponent/>
        </Container>
    )
};

const Container = styled.div`

`;
const Button = styled.div`
  border-radius: 5px;
  font-weight: 800;
  color: #fff;
  width: 80px;
  height: 30px;
  background-color: #18f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    opacity: 0.3;
  }
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
