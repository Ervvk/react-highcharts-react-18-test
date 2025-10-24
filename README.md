# React 18 + react-highcharts 16.1.0 Compatibility Test

This project tests the compatibility of the old `react-highcharts` library (version 16.1.0) with React 18.

## Purpose

To verify whether the legacy `react-highcharts@16.1.0` library works correctly with React 18.3.1.

## Dependencies

- React 18.3.1
- react-highcharts 16.1.0
- highcharts 6.2.0

## Features

The project includes three different chart types:
1. **Column Chart** - Monthly sales data
2. **Line Chart** - Temperature trends
3. **Pie Chart** - Market share distribution

## Installation

```bash
npm install
```

## Running the Project

```bash
npm start
```

Opens the app in development mode at [http://localhost:3000](http://localhost:3000).

## Important Note

React.StrictMode has been disabled in this project because the old react-highcharts library doesn't handle React 18's double-mounting behavior in development mode, which causes chart destruction errors.

## Build

```bash
npm run build
```

Builds the app for production to the `build` folder.
