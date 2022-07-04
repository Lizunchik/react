import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Avatar, ListItemAvatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

const Chats = ({ name }) => {
    return (
        <>
            <ListItem>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                    <ListItemText primary={name}/>
                </ListItemButton>
            </ListItem>

        </>

    )
}

export default Chats;