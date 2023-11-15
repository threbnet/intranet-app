import { useEffect } from "react";
import React from 'react';

const DashboardPage = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const notifications = [
        {
            id: 1,
            message: 'New package request received.',
            time: '2 hours ago',
            read: false,
        },
        {
            id: 2,
            message: 'Your recent package delivery is complete.',
            time: 'Yesterday',
            read: true,
        },
        // Add more notifications as needed
    ];

    const packageHistory = [
        {
            id: 1,
            date: '2023-01-15',
            location: 'City A to City B',
            earnings: 'GHC 30',
        },
        {
            id: 2,
            date: '2023-02-05',
            location: 'City C to City D',
            earnings: 'GHC 25',
        },
        // Add more delivery history data as needed
    ];

    // Other data and functions for additional sections can be added here
    const handleInviteClick = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Invite Friends',
              text: 'Join us and earn rewards!',
              url: 'https://example.com/referral', // Replace with your referral URL
            });
          } catch (error) {
            console.error('Error sharing:', error);
          }
        } else {
          // Fallback for browsers that don't support the share API
          alert('Share functionality is not supported in this browser. You can manually copy and share the referral code.');
        }
      };
    return (
        <div className="text-white">
            <h2 className="text-2xl ">Dashboard</h2>
        </div>
    )
}

export default DashboardPage;