import React from 'react'
import Navbarlogin from '../common/Navbarlogin'
import { AiFillDelete } from "react-icons/ai";

function Commonlist(props) {
    return (
        <div>
            <Navbarlogin />
            <div className="tablecontainer">
                <table style={{width:"100%"}}>
                    <tr>
                        <th>Name</th>
                        <th>USN</th>
                        <th>Phone no</th>
                        <th>Email</th>
                        {props.delete&&<th>Delete</th>}
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        {props.delete&&<td><AiFillDelete/></td>}
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Commonlist