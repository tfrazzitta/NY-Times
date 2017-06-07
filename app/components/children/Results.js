var React = require("react");

var Results = React.createClass({

  getInitialState: function() {
    return {
      number: 0
    };
  },
  render: function() {
    return (
     
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
               <div className="panel-heading">
                 <h3 className="panel-title text-center">Results</h3>
               </div>
                  <div className="panel-body text-center"></div>
             </div>
           </div>
        </div>
 );
  }
});
module.exports = Results;

