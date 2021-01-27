import React from "react";
import { Component } from 'react';
import axios from "axios"
import WordCard from "./WordCard"

class WordList extends Component {
  state = {
    words: []
  }
  
  componentDidMount(){
    axios.get(`https://word-back.herokuapp.com/api/words/userId/${this.props.googleId}`)
    .then(({ data })=>{
      this.setState({words: data})
    })
  }

  componentDidUpdate(prevProp){
    if(prevProp.googleId !== this.props.googleId){
      axios.get(`https://word-back.herokuapp.com/api/words/userId/${this.props.googleId}`)
      .then(({ data })=>{
        this.setState({words: data})
      })
    }
  }
  
  removeWord = (id) => {
    axios.delete("https://word-back.herokuapp.com/api/words/"+id)
    .then(res => { this.setState({
      words:this.state.words.filter(word => word._id !== id)//after bind it's working
      })
      }
    )
  }

  render() {
    return (
      <section className="cards">
        {this.state.words.map(word => {
        return <WordCard word = {word} key = {word._id} removeWord = {this.removeWord}/>;
      })}
      </section>
    );
  }
}

export default WordList;
