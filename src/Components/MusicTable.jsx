import {Fragment} from "react";
import {Table, Button} from "semantic-ui-react";
import "../index.css";

export default function MusicTable(props)
{
    //console.log("MusicTable: ", props.musics);

    return(
        <Fragment>
            <h1 style={{ marginLeft: "30px" }}>Musics</h1>
            <Table celled style={{
                marginLeft: "30px",
                marginTop: "30px",
                width: "1100px",
                border: "1px solid black"
            }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Artist</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {props.musics.map(m => (
                        <Table.Row key={m.id}>
                            <Table.Cell>{m.title}</Table.Cell>
                            <Table.Cell>{m.artist}</Table.Cell>
                            <Table.Cell>
                                <Button positive onClick={() => props.editForm(m)}>Edit</Button>
                                <Button negative onClick={() => props.deleteMusic(m.id)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Fragment>
    );
}