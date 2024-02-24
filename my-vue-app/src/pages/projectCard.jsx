import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = () => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 250 }}>
            <CardContent>
                <Typography gutterBottom variant="h5">DailyPlan Forecast</Typography>
                <Typography variant="body2" color="text.secondary">
                This project allows users to plan out their week in relation to the predicted weathers for each day
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;