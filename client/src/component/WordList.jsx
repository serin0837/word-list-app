import React from "react";
import { Component } from 'react';
import axios from "axios"
import WordCard from "./WordCard"

class WordList extends Component {
  constructor(props){
  super(props)
  this.removeWord=this.removeWord.bind(this)
    this.state={
    words:[]
  }
  }
  componentDidMount(){
    axios.get("https://word-back.herokuapp.com/api/words/")
    .then(({data})=>{
      this.setState({words:data})
    })
  }

  
  removeWord(id){
    axios.delete("https://word-back.herokuapp.com/api/words/"+id)
    .then(res=>{console.log(res.data)})//delete working

    this.setState({
      words:this.state.words.filter(word=>word._id!==id)//after bind it's working
    })
  }

  render() {
    return (
      <section className="cards">
       {this.state.words.map((word) => {
        return <WordCard word={word} key={word._id} removeWord={this.removeWord}/>;
      })}
      </section>
    );
  }
}

export default WordList;

//  WordList = ({ words, removeWord }) => {
//   return (
//     <section className="cards">
//       {words.map((word) => {
//         return <WordCard word={word} key={word.name} removeWord={removeWord} />;
//       })}
//     </section>
//   );
// };

// export default WordList;
