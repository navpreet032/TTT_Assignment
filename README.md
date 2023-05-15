# Word Count Analyzer

This is a simple React application that allows you to analyze the word count in a text file. It retrieves the text from the [Terribly Tiny Tales](https://www.terriblytinytales.com/test.txt) website and displays the top 20 most frequent words in a bar chart.

## Installation

To run this application locally, please follow these steps:

1. Clone the repository: 

```bash
git clone https://github.com/navpreet032/TTT_Assignment.git
```
2. Install the dependencies:
```bash
npm install
```
3. Start the development server:
```shell
npm start
```
4. Open your browser and visit http://localhost:3000 to view the application.

## Visit the Site
If you want to visit the site directly, you can go to

https://tinytailsassignment.netlify.app/


## Components
App

The main component of the application is App.js. It uses the following components and libraries:
Libraries
```shell
    React: A JavaScript library for building user interfaces.
    react-csv: A library for generating CSV files from data.
    react-apexcharts: A React wrapper for ApexCharts, which provides interactive charts.
```
## Material widget

The following Material widget are used from the Material-UI library:

    IconButton: A button component with an icon.
    CachedIcon: An icon component for the reload button.
    InfoOutlinedIcon: An icon component for the information button.
    Button: A button component.
    Switch: A switch component.
    Stack: A layout component that stacks its children horizontally or vertically.
    FormControlLabel: A component to integrate an input with a label.

## State and Hooks

    useState: A hook for managing state variables.
    

## Functions and Handlers

    handleMouseOver: A handler function for mouseover event.
    handleMouseOut: A handler function for mouseout event.
    handleSubmit: An async function that retrieves the text from the provided URL, splits it into words, and counts the occurrences of each word. It updates the state variable wordCounts with the sorted word count data.
    setSingleLetterAsWord: set the state of variable SingleLetterAsWord
## 
## Chart
```shell

The component uses ReactApexChart from react-apexcharts to render a bar chart. It uses the chartData and chartOptions variables to configure the chart.
```
## CSV Export
```shell

The component uses CSVLink from react-csv to generate a CSV file from the word count data. It exports the data as csvData and allows the user to download the file.
Usage
```

1. Upon loading the application, you will see a submit button.

2. Click the submit button to retrieve the text from the Terribly Tiny Tales website and analyze its word count.

3. The top 20 most frequent words will be displayed in a bar chart.
4. You can hover over the chart to see the exact count for each bar.

5. Below the chart, you will find the following options:
```shell
  Export: Click this button to download the word count data as a CSV file.
  Reload: Click this button to refresh the word count analysis.
  Toggle: Switch this option on/off to include/exclude single characters as words.
  Info: Hover over this icon to see additional information about the "Toggle" option.
```
