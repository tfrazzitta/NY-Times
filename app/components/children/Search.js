var React = require("react");
var Results = require("./Results");

var Search = React.createClass({

  getInitialState: function() {
    return {
      term:"",
      begin_date:"",
      end_date:""
    };
  },

  handleChange_term:function(){
    this.setState({
        term:event.target.value
    })
  },

  handleChange_begin:function(){
    this.setState({
      begin_date:event.target.value
    })
  },

  handleChange_end:function(){
    this.setState({
      end_date:event.target.value
    })
  },

  render: function() {
    return (
        <div className="container">
          <div className="row row-search-title">
            <div className="col col-sm-8 col-search-title">
               <h2><i className="fa fa-search"></i> NY TIMES</h2>
            </div>
          </div>
     
      <div className="row row-search-results">
        <form onSubmit={this._handleSubmit}>
          <div className="col col-sm-3 col-search-results">
            <label htmlFor="query">Search for</label><br />
            <input value={this.state.term7} type="text"id="query"onChange={this.handleChange_term}/>
          </div>
          
          <div className="col col-sm-3 col-search-results">
            <label htmlFor="begin-date">Earliest Date</label><br />
            <input value={this.state.begin_date}type="text"id="begin-date" onChange={this.handleChange_begin}/>
          </div>
          
          <div className="col col-sm-3 col-search-results">
            <label htmlFor="end-date">Latest Date</label><br />
            <input value={this.state.end_date} type="text" id="end-date"onChange={this.handleChange_end}/>
          </div>  

          <div className="col col-sm-3 col-search-results">
            <label></label><br />
            <button type="submit" className="btn btn-large btn-this" id="submit-button"> Search Articles </button><br/>
          </div>
        
        </form>
      </div>
    </div>
    );
  }
});


module.exports = Search;

