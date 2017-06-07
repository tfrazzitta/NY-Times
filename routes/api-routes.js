var news = require("../models/Articles.js");

module.exports=function(app){

app.post("/save", function(req,res){
	console.log(req.body)
	var newArticles = new Articles(req.body);
	newArticles.save({})(function(err,doc){
		if(err){
			console.log(err)
		}

		else{
			console.log(doc)
		}

	})
})


app.get("/find", function(req,res){
		Articles.find({}).exec(function(err,doc){
			if(err){
				console.log(err)
			}
			else{
				console.log(doc)
			}
		})
	res.send(doc);
})


app.delete("/delete/:id", function(req,res){
	Article.remove({_id: req.params.id}, function(error, doc)
	{
		if (error)
			console.log(error);
		else
		{
			console.log(doc);
			res.send({success: true});
		}
	});
});

}