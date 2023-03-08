import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const About = () => {  
  const polarData = {
    labels: ['C#', 'Javascript', 'Oracle Pl/sql', 'React', 'Unity', 'Python'],
    datasets: [
      {
        label: 'Qualifications',
        data: [20, 18, 16, 14, 7, 13],
        backgroundColor: [
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData= {
    labels: ['Rap', 'Rock', 'Jpop', 'Funk', 'Trance', 'Trap'],
    datasets: [
      {
        label: 'Listening percentage',
        data: [30, 12, 15, 30, 8, 5],
        backgroundColor: [
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  } 

  const getGreeting = () => {
    const hours = new Date().getHours();
    
    console.log(hours)

    if (4 < hours && hours < 12) return 'morning';
    if (12 < hours && hours < 16) return 'afternoon';
    if (16 > hours && hours > 21) return 'evening';
    return 'night';
  }

  const getAge = () => {
    const bday = new Date(2002, 10, 1, 11, 13),
          diffMs = new Date() - bday,
          diffSec = diffMs / 1000,
          diffMin = diffSec / 60,
          diffHr = diffMin / 60,
          diffDay = diffHr / 24,
          diffMonth = diffDay / 30.44, // average number of days in a month
          diffYear = diffDay / 365.25, // average number of days in a year
  
          years = Math.floor(diffYear),
          months = Math.floor(diffMonth % 12),
          days = Math.floor(diffDay % 30.44),
          hours = Math.floor(diffHr % 24),
          minutes = Math.floor(diffMin % 60),
          seconds = Math.floor(diffSec % 60);
  
    return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  return (
    <div>
      <div class="greeting">
        Good {getGreeting()}!
      </div>
      <div class="text">
        My name is <strong>Ângelo</strong>, I am <br/>
        {getAge()} years old
      </div>
      <div class="chartarea">
        <div class="polararea">
          <PolarArea data={polarData} />
        </div>
        <div class="textoinformativo">
          Two chart with some important facts about me<br/><br/><br/>
          <strong>Polar area chart</strong> is having the value 20 as my best competence<br/><br/><br/>
          <strong>Doughnut chart</strong> is the porcentage of my music listening time
        </div>
        <div class="doughnut">
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};
  
export default About;