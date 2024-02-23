import {Button, Form, Segment} from "semantic-ui-react";
import React, {useState} from "react";

export default function EditMusic(props)
{
    const [music, setMusic] = useState(props.music);

    function handleSubmit(e)
    {
        e.preventDefault();
        props.handleEditSubmit(music);
    }

    function handleInputChange(e)
    {
        const {name, value} = e.target;

        //console.log("handleInputChange: ", e.target, name, value);

        setMusic({...music, [name]: value});
    }

    return(
        <>
        <h1 style={{ marginLeft: "15px" }}>Edit Music</h1>
        <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder="Title" name="title" value={music.title} onChange={handleInputChange} />
                <Form.Input placeholder="Artist" name="artist" value={music.artist} onChange={handleInputChange} />

                <Button type="submit" content="Submit" />
                <Button type="button" content="Cancel" onClick={() => props.closeForm()} />
            </Form>
        </Segment>        
        </>
    );
}

