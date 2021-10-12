import React, { useState } from 'react'
import "./index.css";

const App = () => {
//Reviews
 const [goodTotal, addGood] = useState(0);
 const [neutralTotal, addNeutral] = useState(0);
 const [badTotal, addBad] = useState(0);
 const [average, updateAverage] = useState(0);
 const totalReviews = goodTotal + neutralTotal + badTotal;
 const positivePercentage = Math.round(goodTotal/totalReviews * 100);
 
//Anecdotes
const [anecdote, setAnecdote] = useState(0);
const [votes, addVote] = useState({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
})
const anecdotesList = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]
const changeAnecdote = () => {
  setAnecdote(Math.floor(Math.random() * 7));
}
const submitVote = () => {
  const copy = {...votes};
  copy[anecdote] += 1;
  addVote(copy);
}
//findTopAnecdote
  const votesArray = Object.entries(votes);
  const simplifiedArray = [];
  votesArray.forEach(element => {
    simplifiedArray.push(element[1])
  })
  const topVoted = Math.max(...simplifiedArray);
  const positionOfTopAnecdote = simplifiedArray.indexOf(topVoted);

  return (
    <div>
      <h1>Give Feedback...</h1>
      <div className="buttons">
        <GoodButton setGood={() => {addGood(goodTotal + 1); updateAverage(average + 1);}}/>
        <NeutralButton setNeutral={() => {addNeutral(neutralTotal + 1)}}/>
        <BadButton setBad={() => {addBad(badTotal + 1); updateAverage(average - 1);}} />
      </div>
      <Statistics goodTotal={goodTotal} neutralTotal={neutralTotal} badTotal={badTotal} totalReviews={totalReviews} average={average} positivePercentage={positivePercentage}/>
      <Anecdote changeAnecdote={changeAnecdote} anecdote={anecdote} anecdotesList={anecdotesList} votes={votes} addVote={submitVote} positionOfTopAnecdote={positionOfTopAnecdote} />
    </div>
  )
}

//Reviews
const GoodButton = ({setGood}) => {
  return (
    <div>
      <button onClick={setGood}>Good</button>
    </div>
  )
}
const NeutralButton = ({setNeutral}) => {
  return (
    <div>
      <button onClick={setNeutral}>Neutral</button>
    </div>
  )
}
const BadButton = ({setBad}) => {
  return (
    <div>
      <button onClick={setBad}>Bad</button>
    </div>
  )
}
const Statistics = ({goodTotal, neutralTotal, badTotal, totalReviews, average, positivePercentage}) => {
  return (
    <div>
      <h1>Statistics...</h1>
      <table>
        <tbody>
          <tr>
            <td>Good: {goodTotal}</td>
          </tr>
          <tr>
            <td>Neutral: {neutralTotal}</td>
          </tr>
          <tr>
            <td>Bad: {badTotal}</td>
          </tr>
          <tr>
            <td>Total Reviews: {totalReviews}</td>
          </tr>
          <tr>
            <td>Average: {average}</td>
          </tr>
          <tr>
            <td>Positive Review Percentage: {positivePercentage}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

//Anecdotes
const Anecdote = ({changeAnecdote, anecdote, anecdotesList, votes, addVote, positionOfTopAnecdote}) => {
  return (
    <div>
      <h1>Anecdotes...</h1>
      <p>{anecdotesList[anecdote]}</p>
      <p>{votes[anecdote]} votes</p>
      <button onClick={changeAnecdote}>Next Anecdote...</button>
      <button onClick={addVote}>Vote</button>
      <h2>most popular anecdote...</h2>
      <TopAnecdote anecdotesList={anecdotesList} votes={votes} positionOfTopAnecdote={positionOfTopAnecdote} />
    </div>
  )
}
const TopAnecdote = ({anecdotesList, votes, positionOfTopAnecdote }) => {
  return (
    <div>
      <p>{anecdotesList[positionOfTopAnecdote]}</p>
      <p>{votes[positionOfTopAnecdote]} votes</p>
    </div>
  )
}
export default App