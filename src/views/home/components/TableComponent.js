import styled from 'styled-components'
import {Table} from "reactstrap";
import Draggable from "react-draggable";

const TableComponent = () => {
    return(
        <Draggable
            defaultPosition={{x: 100, y: 500}}
        >
            <Table borderless dark>
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Username
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        Mark
                    </td>
                    <td>
                        Otto
                    </td>
                    <td>
                        @mdo
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Jacob
                    </td>
                    <td>
                        Thornton
                    </td>
                    <td>
                        @fat
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Larry
                    </td>
                    <td>
                        the Bird
                    </td>
                    <td>
                        @twitter
                    </td>
                </tr>
                </tbody>
            </Table>
        </Draggable>
    )
};

const Container = styled.div`

`;

export default TableComponent;