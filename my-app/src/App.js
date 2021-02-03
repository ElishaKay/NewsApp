import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'

import { getAllArticles,
          getCategoryArticles,
            getCountryArticles
       } from './services/ArticleService'

import { Articles } from './components/Articles'
import Select from 'react-select';

const Categories = [
  { label: 'Business', value: 'Business' },
  { label: 'Technology', value: 'Technology' },
  { label: 'Entertainment', value: 'Entertainment' },
  { label: 'Sports', value: 'Sports' },
  { label: 'Science', value: 'Science' },
  { label: 'Health', value: 'Health' },
];

const Countries = [
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Israel', value: 'Israel' },
  { label: 'United States', value: 'United States' },
  { label: 'France', value: 'France' },
  { label: 'England', value: 'England' }
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
    getCategoryArticles(opt.value)
      .then(articles => {
        console.log('articles', articles)
        this.setState({articles})
      });
  }

  onSelectCountry(opt){
    console.log(opt)
    getCountryArticles(opt.value)
      .then(articles => {
        console.log('articles', articles)
        this.setState({articles})
      });
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="row dropdown">
            <div className="col-md-2">
                <Select
                  options={Categories}
                  onChange={this.onSelectCategory.bind(this)}
                />  
            </div>
            <div className="col-md-2">
                <Select
                  options={Countries}
                  onChange={this.onSelectCountry.bind(this)}
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
