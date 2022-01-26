import React from 'react';


class ImageContainer extends React.Component {
    apiKey = "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq";

    render() {

      return <h1>Hello, {this.props}</h1>;
    }

    componentDidMount() {
        //fetch(`https://api.giphy.com/v1/stickers/search?q=${query}}&limit=${limit}&rating=g&api_key=${apiKey}`)
        fetch(`https://api.giphy.com/v1/stickers/search?q=cat&limit=10&rating=g&api_key=${this.apiKey}`)
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
                isLoaded: true,
                result: result
              });        
            },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
 this.setState({
            isLoaded: true,
            error
          });        }
        )
      }
  }


  
  export default ImageContainer;
