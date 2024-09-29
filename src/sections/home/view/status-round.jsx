import React, { useState } from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { m } from 'framer-motion';

const statuses = [
    {
        id: 1,
        image: '/status/lakshadweep/lakshadweep.jpg',
        title: 'Lakshadweep',
        video: '/status/lakshadweep/lakshadweep.mp4',
    },
    {
        id: 2,
        image: '/status/malaysia/malaysia.jpg',
        title: 'Malaysia',
        video: '/status/malaysia/malaysia.mp4',
    },
    {
        id: 3,
        image: '/status/launch/launch.png',
        title: 'Launch',
        video: '/status/launch/launch.mp4',
    },
    {
        id: 4,
        image: '/status/getready/getready.png',
        title: 'Ready',
        video: '/status/getready/getready.mp4',
    },
    {
        id: 5,
        image: '/status/logo/logo.png',
        title: 'Logo',
        video: '/status/logo/logo.mp4',
    }
];

const StatusRound = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // For mobile
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // For tablets

    const handleOpen = (video) => {
        setSelectedVideo(video);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSelectedVideo('');
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, p: 2, mt: 2, overflowX: 'scroll', overflowY: 'hidden', pb:5 }}>
            {statuses.map((status) => (
                <m.div
                    key={status.id}
                    onClick={() => handleOpen(status.video)}
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: 'pointer', position: 'relative' }}
                >
                    <Box
                        sx={{
                            width: 100,
                            height: 100,
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '5px solid #0d5d54',
                            borderRadius: '50%',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.3s ease',
                        }}
                    >
                        <Box
                            component="img"
                            src={status.image}
                            alt={status.title}
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                    <Typography
                        variant="caption"
                        align="center"
                        sx={{
                            position: 'absolute',
                            bottom: -25,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: '#fff',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                        }}
                    >
                        {status.title}
                    </Typography>
                </m.div>
            ))}

            {modalOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 9999,
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 10, right: 10, color: '#fff' }}
                    >
                        X
                    </IconButton>
                    <video
                        controls
                        style={{
                            width: isMobile ? '100%' : isTablet ? '60%' : '25%', // Width based on screen size
                            height: '90%', // Height based on screen size
                        }}
                        src={selectedVideo}
                        autoPlay
                    />
                </Box>
            )}
        </Box>
    );
};

export default StatusRound;
