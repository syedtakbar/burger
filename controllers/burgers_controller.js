const express = require("express");
const router = express.Router();
const burger = require("./../models/burger");

router.get("/", (req, res) => {
	res.redirect("/index");
});

router.get("/index", (req, res) => {
	burger.all().then(x => { 		
		res.render("index", { burgers: x });
	});
});


router.post("/index/create", (req, res) => {	
	burger.create(["burger_name", "devoured", "devoured_date", "create_date"], 
				  [req.body.burger_name, "0","NULL", "CURRENT_TIMESTAMP"])
				  .then(() => res.redirect("/index"));
				   
});

router.put("/index/update/:id", function(req, res){	
	var condition = " WHERE id = " + req.params.id;	
	burger.update({devoured: req.body.devour}, condition)
				.then(() => res.status(200).end()); 								
});

module.exports = router;