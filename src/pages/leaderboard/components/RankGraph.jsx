// Import necessary libraries
import React from 'react';
import { Bar } from 'react-chartjs-2';

// BarChart component
const BarChart = ({ data }) => {
  // Assuming data is an array of objects with player information
  // Example: [{ name: 'Player1', points: 200 }, { name: 'Player2', points: 180 }, ...]

  // Extracting the top 3 players
  const topPlayers = data.slice(0, 3);

  // Extracting player names and points for the chart
  const playerNames = topPlayers.map(player => player.name);
  const playerPoints = topPlayers.map(player => player.points);

  // Chart data
  const chartData = {
    labels: playerNames,
    datasets: [
      {
        label: 'Points',
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: playerPoints,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

// Example usage in a parent component
const RankGraph = () => {
  const playerData = [
    { name: 'Player1', points: 200 },
    { name: 'Player2', points: 180 },
    { name: 'Player3', points: 150 },
    // Add more player data as needed
  ];

  return (
    <div>
      <h1>Top 3 Players</h1>
      {/* Render other leaderboard components */}
      {/* ... */}
      {/* Render the BarChart component */}
      <BarChart data={playerData} />
    </div>
  );
};

export default RankGraph;
