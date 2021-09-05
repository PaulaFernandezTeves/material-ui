
import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import CloudIcon from '@material-ui/icons/Cloud';
import DeckIcon from '@material-ui/icons/Deck';

function Listas() {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <CloudIcon />
                    </ListItemIcon>
                    <ListItemText primary='mi primer elemento'/>
                </ListItem> 

                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon />
                    </ListItemIcon>
                    <ListItemText primary='mi segundo element'/>
                </ListItem>               
            </List>

            <Divider />
        </div>
    )
}

export default Listas
