import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, PolarArea } from 'react-chartjs-2';
import { Chrono } from "react-chrono";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const About = () => {  
  const timelineItems = [{
    title: "Jan 2019",
    cardTitle: "Informática",
    url: "https://unisatc.com.br/tecnico/informatica/",
    cardSubtitle:"Início",
    cardDetailedText: "Técnico em informática, cursado no colégio SATC",
    // media: {
    //   type: "IMAGE",
    //   source: {
    //     url: "http://someurl/image.jpg"
    //   }
    // }
  }, {
    title: "Dec 2020",
    cardTitle: "Informática",
    url: "https://unisatc.com.br/tecnico/informatica/",
    cardSubtitle:"Conclusão",
    cardDetailedText: "Técnico em informática, cursado no colégio SATC",
  }, {
    title: "Feb 2021",
    cardTitle: "Useall",
    url: "https://www.useall.com.br",
    cardSubtitle:"Início",
    cardDetailedText: "Desenvolvimento web front-end",
  }, {
    title: "Apr 2021",
    cardTitle: "Useall",
    url: "https://www.useall.com.br",
    cardSubtitle:"Início",
    cardDetailedText: "Desenvolvimento web full-stack",
  }, {
    title: "Feb 2022",
    cardTitle: "Engenharia de software",
    url: "https://unisatc.com.br/graduacao/engenharia-de-software/",
    cardSubtitle:"Início",
    cardDetailedText: "Bacharelado em engenharia de software, cursado na faculade SATC",
  }, {
    title: "Mar 2023",
    cardTitle: "Useall",
    url: "https://www.useall.com.br",
    cardSubtitle:"Fim",
    cardDetailedText: "Desenvolvimento web full-stack",
  }, {
    title: "Mar 2023",
    cardTitle: "Nextfit",
    url: "https://nextfit.com.br",
    cardSubtitle:"Início",
    cardDetailedText: "Desenvolvimento web back-end",
  }];

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
      <div class="charts">
        <div class="greeting">
          <br/>
          Good {getGreeting()}!
        </div>
        <div class="text">
          My name is <strong>Ângelo</strong>, I am <br/>
          {getAge()} old
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
        <br/><br/>
      </div>

      <div class="box2">
        <div class="boxhistoria">
          <div class="historia">
            <br/>
            <strong>Short story</strong><br/>
            <hr/>
            <p>
              I was 15 years old when I have my first contact with programming
              on some python free class on youtube.
              With sixteen I started my technical course and for two years, 
              I learned the programming, web basics and made some interesting projects
              After the ending, I started to work in a software developer with a media of 
              300 coworkers for two years, and learned a lot 
              of C#, Entity, .net Core, Oracle and Javascript.
              One year after starting working, I started my 
              software engineering college, where I am learning a lot
              of new new technologies, like python API's, react projects and cloud computing. 
            </p>
          </div>
        </div>
        <div class="boxcarreira">
          <div class="carreira">
            <strong>Timeline</strong>
            <hr/>
            <div style={{ width: "500px", height: "400px" }}>
              <Chrono items={timelineItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default About;