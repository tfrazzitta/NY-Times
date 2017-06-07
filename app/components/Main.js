
var React = require("react");
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");
var routes = require('./utils/routes');

var Main = React.createClass({
 
 getInitialState: function() {
     return {
      term:"",
      begin_date:"",
      end_date:""
    };
  },

render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
          <h1>New York Times</h1>
          </div>
             <Search/><br/>
          <Results/><br/>
         <Saved/>
      </div>
  </div>
      
   )
 }
})

module.exports=Main;
