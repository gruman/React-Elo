# React Elo
 
Get Elo rankings for your chess, backgammon, or other strategy games.

## Install

    yarn add react-elo

or

    npm install react-elo

## Usage

    import { getElo } from 'react-elo';

    console.log(getElo(1200, 1500))

    output: {winNewElo: 1218, loseNewElo: 1482}

Match length defaults to 1. You can change it by adding the numer of matches as a third parameter.