import {Grid} from "semantic-ui-react";
import MusicAdd from "./MusicAdd";
import MusicEdit from "./MusicEdit";
import MusicTable from "./MusicTable";

export default function MusicDashboard(props)
{
    //console.log("MusicDashboard: ", props.musics);

    return(
        <Grid>
            <Grid.Column width="10">                
                <MusicTable musics = {props.musics} editForm = {props.editForm} deleteMusic = {props.deleteMusic} />
            </Grid.Column>
            <Grid.Column width="6">
                {props.showAddForm && (<MusicAdd closeForm={props.closeForm} handleAddSubmit={props.handleAddSubmit} />)}
                {props.showEditForm && (<MusicEdit music={props.music} closeForm={props.closeForm} handleEditSubmit={props.handleEditSubmit} />)}
            </Grid.Column>
        </Grid>
    );
}

