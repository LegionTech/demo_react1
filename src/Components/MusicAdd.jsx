import {Button, Form, Segment} from "semantic-ui-react";
import React, {useState} from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddMusic(props)
{
    const initState = {
        title: "",
        artist: ""
    };

    const[music, setMusic] = useState(initState);

    function handleSubmit(e)
    {
        e.preventDefault();

        if(!music.title)
        {
            toast.error("Please fill all the details!", {position: toast.POSITION.TOP_Right});

            return;
        }

        props.handleAddSubmit(music);
        setMusic(initState);
    }

    function handleInputChange(event)
    {
        const {name, value} = event.target;
        setMusic({...music, [name]: value});
    }

    return (
        <>
        <h1 style={{ marginLeft: "15px" }}>Add Music</h1>
        <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder="Title" name="title" value={music.title} onChange={handleInputChange}/>
                <Form.Input placeholder="Artist" name="artist" value={music.artist} onChange={handleInputChange} />               
                <Button type="submit" positive content="Submit" />
                <Button type="button" content="Cancel" onClick={() => props.closeForm()} />
            </Form>
        </Segment>
        </>
    );
}

