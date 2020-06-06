import React, { Component } from "react";
import GifCard from './GifCard.js';
import axios from "axios";

class SearchField extends Component {
    constructor(props){
    super(props)
    this.state={
        searchInput:"",
        searchResult:[],
    }
    //  this.handleGifInput = this.handleGifInput.bind(this);
    //  this.handleGifSearchWay = this.handleGifSearchWay.bind(this);
    //  this.handleGifSearch = this.handleGifSearch.bind(this);
    }
    handleGifInput=(e)=>{
        this.setState({ searchInput: e.target.value });
    }

    handleGifSearch=(e)=>{
        const API_KEY = process.env.REACT_APP_API_KEY;
        let url;
        if (e.target.value === "0"){
            url = "http://api.giphy.com/v1/gifs/search?q="+ this.state.searchInput + "&api_key=" + API_KEY+"&limit=10";
        }
        else {
            url = "http://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY + "&limit=10";
        }

        console.log(url);
        axios
            .get(url)
            .then((response) => {
                console.log(response.data);
                const data = response.data.data;
                //console.log(data); //check  
                this.setState({ 
                    searchResult: data
                });
               // console.log(this.state.searchResult);
             })
            .catch((err) =>{ 
                console.log(err);
                this.setState({
                    searchResult:[],
                    searchMethod:""
                });
            });
    }

    render() {
        //console.log("render"+this.state.searchResult);
        return (
          <div className="search">
            <div>
                <label htmlFor="gifSearch">Enter a word to search: </label>
                <input type="text" name="input" onChange={this.handleGifInput}></input>
                <button value="0" onClick={this.handleGifSearch} >Search</button>
            </div>
            <div>
                <p><button value="1" onClick={this.handleGifSearch}>Trending Search</button></p>
            </div>
            <div className="result">
                  {this.state.searchResult.map((data) => {
                return (
                    <GifCard
                    imagetitle={data.title}
                    imageSource={data.images.original.url}
                    key={data.id}
                    />
                );
                })} 
            </div>
          </div>
        );
    }
}

export default SearchField;