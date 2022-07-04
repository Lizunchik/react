import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function Message({ author, text }) {
    return (
        <div className='messageText'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div"> {author}:
                    </Typography>
                    <Typography variant="body2">{text}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message;