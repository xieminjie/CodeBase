var SavedList = React.createClass({
  render:function(){
    var savedCell = this.props.data.map(function(result){
      return(
        <Saved author={result.author} key = {result.id} age={result.age}>
        </Saved>
      );
    });
    return(
      <div className="savedList">
        {savedCell}
      </div>
    );
  }
});
var Saved = React.createClass({
  render:function(){
    return (
      <div className="save">
        <h2 className="savedAuthor">
          {this.props.age}
        </h2>
      </div>
    );
  }
});
var ResultsList = React.createClass({
  render: function() {
    var resultCell = this.props.data.map(function(result){
      return(
        <Result author={result.author} key = {result.id} age={result.age}>
          {result.author}  {/*props.children*/}
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
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render:function(){
    return (
      <div className="result">
        <h2 className="resultAuthor">
          {this.props.age}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
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
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  //  setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="dashboard container">
        <ResultsList data = {this.state.data}/>
        <SavedList data={this.state.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <Dashboard  url="/api/list" pollInterval={2000}/>,
  document.getElementById('content')
);