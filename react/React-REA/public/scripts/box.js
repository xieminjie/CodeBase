// var SavedList = React.createClass({
//   render:function(){
//     var savedCell = this.props.data.map(function(result){
//       return(
//         <Saved author={result.author} key = {result.id} age={result.age}>
//         </Saved>
//       );
//     });
//     return(
//       <div className="savedList">
//         {savedCell}
//       </div>
//     );
//   }
// });
// var Saved = React.createClass({
//   render:function(){
//     return (
//       <div className="save">
//         <h2 className="savedAuthor">
//           {this.props.age}
//         </h2>
//       </div>
//     );
//   }
// });
var ResultsList = React.createClass({
  render: function() {
    var resultCell = this.props.data.map(function(result){
      return(
        <Result price={result.price} key = {result.id}>
        </Result>
      );
    });
    return (
      <div className="resultsList">
        {resultCell}
      </div>
    );
  }
});

var Result = React.createClass({
  render:function(){
    return (
      <div className="result">
        <h2 className="resultPrice">
          {this.props.price}
        </h2>
      </div>
    );
  }
});
var Dashboard = React.createClass({
   loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({results: data.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {results:[]};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  //  setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="dashboard container">
        <ResultsList data = {this.state.results}/>
        {/*<SavedList data={this.state.data} />*/}
      </div>
    );
  }
});

ReactDOM.render(
  <Dashboard  url="/api/data" pollInterval={2000}/>,
  document.getElementById('content')
);