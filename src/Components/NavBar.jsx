import {Button, Menu} from "semantic-ui-react";
import "../index.css";

// interface Props{
//     addForm: () => void; 
// }

export default function NavBar(props)
{
    return(
        <Menu fixed="top">
            <Menu.Item header>
        </Menu.Item>
        <Menu.Item>
            <Button positive content="Add Music" onClick={() => props.addForm()} />
        </Menu.Item>
        </Menu>
    );
}