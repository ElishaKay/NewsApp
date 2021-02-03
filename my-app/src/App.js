import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'

import { getAllArticles } from './services/ArticleService'
import { Articles } from './components/Articles'
import Select from 'react-select';

const aquaticCreatures = [
  { label: 'Business', value: 'Business' },
  { label: 'Technology', value: 'Technology' },
  { label: 'Entertainment', value: 'Entertainment' },
  { label: 'Sports', value: 'Sports' },
  { label: 'Science', value: 'Science' },
  { label: 'Health', value: 'Health' },
];

class App extends Component {

  state = {
    articles:[]
  }

  componentDidMount(){
    getAllArticles()
      .then(articles => {
        console.log('articles', articles)
        this.setState({articles})
      });
  }

  onSelectCategory(opt){
    console.log(opt)
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="row dropdown">
            <div className="col-md-2">
                <Select
                  options={aquaticCreatures}
                  onChange={this.onSelectCategory}
                />  
            </div>  
        </div>

        <div className="row mrgnbtm">
          <Articles articles={this.state.articles}></Articles>
        </div>

      </div>
    );
  }
}

export default App;
