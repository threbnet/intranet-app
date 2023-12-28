// Import necessary libraries
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// BarChart component
const BarChart = ({ data }) => {
        const [chartData, setChartData] = useState({});
      
        useEffect(() => {
            
            if (data && data.length > 0) {
          // Assuming data is an array of objects with player information
          // Example: [{ name: 'Player1', points: 200 }, { name: 'Player2', points: 180 }, ...]
      
          // Extracting the top 3 players
          const topPlayers = data?.slice(0, 3);
                
          // Extracting player names and points for the chart
          const playerNames = topPlayers?.map(player => player.name);
          const playerPoints = topPlayers?.map(player => player.points);
          console.log(playerNames)
      
          // Chart data
          const newChartData = {
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
      
          setChartData(newChartData);
         
        }
        }, [data]);
  return <Bar data={data} />;
};

const LeaderboardPage = () => {
    const playerData = [
        { name: 'Player1', points: 200 },
        { name: 'Player2', points: 180 },
        { name: 'Player3', points: 150 },
        // Add more player data as needed
      ];
  return (
    <div className="w-full">
      <h2 className="text-3xl text-white font-bold ">
            Leaderboard 
      </h2>
      <div className="w-full">
        <div className="rounded-lg bg-gray-200 w-1/2">
            <div>
                  {/* Render the BarChart component */}
                <BarChart data={playerData} />
            </div>
        </div>

      </div>
 

    </div>
  );
};

export default LeaderboardPage;
