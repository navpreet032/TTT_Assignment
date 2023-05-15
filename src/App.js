import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import ReactApexChart from 'react-apexcharts';
import './App.css';
import './anim.css';
import IconButton from '@mui/material/IconButton';
import CachedIcon from '@mui/icons-material/Cached';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';


const App = () => {
  const [wordCounts, setWordCounts] = useState([]);
  const [SingleLetterAsWord, setSingleLetterAsWord] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  const handleSubmit = async (event) => {
    console.log(event)
    event.preventDefault();
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.split(/\W+/);
    const counts = {};
    for (const word of words) {
      if (SingleLetterAsWord === false) {
        const lowercaseWord = word.toLowerCase();
        if (lowercaseWord.length > 1)
          counts[lowercaseWord] = (counts[lowercaseWord] || 0) + 1;
      } else {
        const lowercaseWord = word.toLowerCase();
        counts[lowercaseWord] = (counts[lowercaseWord] || 0) + 1;
      }
    }
    const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setWordCounts(sortedCounts.slice(0, 20));
    console.log(sortedCounts.slice(0, 20))
  };

  const chartData = wordCounts.map((count) => ({
    name: [count[0]],
    data: [count[1]],
  }));

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 450,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        vertical: true,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    dataLabels: {//color of numbers thet appera on bars
      enabled: true,
      offsetY: 6,
      style: {

        fontSize: '12px',
        colors: ['#4C4C4C'],
      },
    },
    xaxis: {
      categories: chartData.map((count) => count.data),
      labels: {
        show: false,
      },
    },

    yaxis: {

      title: {
        text: "Word Count",
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName) => '',
        },
      },
    },
  };

  const csvData = wordCounts.map((count) => ({
    word: count[0],
    count: count[1],
  }));


  return (
    <div className="App">

      {wordCounts == 0 && (

        <div >
          <form onSubmit={handleSubmit}>
            <Button type="submit" className='Button'style={{
        marginTop:'20%',
        marginBottom:'20%',
        backgroundColor: "#e4324c"
        
    }} variant="contained">Submit</Button>
          </form>

        </div >

      )}


      {wordCounts.length > 0 && (
        <div className='Container'>
          <div className='Histogram'>
            <ReactApexChart
              options={chartOptions}
              series={chartData}
              type="bar"
              height={350}
            />
          </div>
        </div>)}

      {wordCounts.length > 0 && (
        <div>
          <div className='stackContainer' onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} >
            <Stack direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2} className='stack'>

              <CSVLink data={csvData} filename="word_counts.csv">
                <Button className='Button' variant="outlined">export</Button>
              </CSVLink>

              <IconButton color="primary" onClick={handleSubmit} className='infoIcon'>
                <CachedIcon color='red' className='cachedIcon' />
              </IconButton>

              <FormControlLabel control={<Switch checked={SingleLetterAsWord} onChange={() => { setSingleLetterAsWord(!SingleLetterAsWord); }} />} label='toggel' />

              <InfoOutlinedIcon className='infoIcon' />
            </Stack>
            {isHovering && (
              <div className='INFO'>
                <p>
                  when 'toggel' turned on single characters will also be counted as words.
                  Click 'reload' to see changes <br/>
                  ex:( 'i' is also counted as word)
                </p>
              </div>

            )}
          </div>
        </div>
      )}


    </div>
  );
};

export default App;


