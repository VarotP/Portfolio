import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ title, description }) => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 250 }}>
            <CardContent>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
