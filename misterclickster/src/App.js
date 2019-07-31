import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import KeanuCard from "./components/keanuCard";
import keanus from "./keanu.json";
import "./App.css";
import Counter from "./components/Counter";
import _ from "lodash";

class App extends Component {
  state = {
    keanus,
    score: 0,
    highScore: 0
  };
  resetCards=()=>{
   const newKeanus=[...this.state.keanus]
   for(let i=0; i<newKeanus.length;i++){
     newKeanus[i].clicked=false;
   }
   return newKeanus;
  }
  shuffleKeaunus=()=>{
    this.setState({
      keanus: _.shuffle(this.state.keanus)
    })
  }

  handleClick=(id,clicked)=>{
    console.log(clicked)
    //check to see if it's clicked 
    //if yes they lose game over
    
    if(clicked){
      this.setState({
        score:0,
        keanus: this.resetCards()
      });
    
    }else{

     
      if(this.state.score===11){
        alert("Winner!")
        this.setState({
          score: 0,
          highScore:12,
          keanus: this.resetCards()
      })
      }else if(this.state.score>=this.state.highScore){
        const otherKeanus=[...this.state.keanus]
        for(let j=0;j<otherKeanus.length;j++){
          if(otherKeanus[j].id===id){
            otherKeanus[j].clicked=true;
          }
        this.setState({
              keanus: otherKeanus,
              score: this.state.score +1,
              highScore: this.state.highScore +1
            });
      }
    }else{const otherKeanus=[...this.state.keanus]
      for(let j=0;j<otherKeanus.length;j++){
        if(otherKeanus[j].id===id){
          otherKeanus[j].clicked=true;
        }
      this.setState({
            keanus: otherKeanus,
            score: this.state.score +1,
          });
    }}
    }
    this.shuffleKeaunus();
  }


  render() {
    return (
      <>
      
      
      <Counter
      score={this.state.score}
      highScore={this.state.highScore}
      />
            
          <Wrapper>
            {this.state.keanus.map(keanu => (
              <KeanuCard
                name={keanu.name}
                image={keanu.image}
                key={keanu.id}
                id={keanu.id}
                onClick={this.handleClick}
                clicked={keanu.clicked}
              />
            ))}
          </Wrapper>
      </>
    );
  }
}

export default App;
