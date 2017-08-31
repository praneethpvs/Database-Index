var user, password, port;
// argument in form of <username> <password> <port>
process.argv.forEach(function (val, index, array) {
	if(index == 2) {
		user = val
	}
	if(index == 3) {
		password = val
	}
	if(index == 4) {
		port = val
	}

});


//Load Express Framework
var express = require('express');

//Load Mustache Template Engine
var mustachex = require('mustachex');

//Load Oracle
var orawrap = require('orawrap');
var dbConfig = {
    user: user,
    password: password,
    connectString: 'csoracle.utdallas.edu/student.csoracle.utdallas.edu',
    poolMax: 20,
    poolMin: 2,
    poolIncrement: 2,
    poolTimeout: 10
};

//Call express
var app = express();

var bodyParser = require('body-parser');

//Set Global App Settings
app.engine('html', mustachex.express);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
 var user, password;
// argument in form of <username> <password> <port>

//get and post for querying MAJESTIC
app.get('/domain/no_idx', function(req, res) {
  res.render('domain_0.html');
});

app.post('/search_no_idx', function(req, res) {

 var domain = req.body.domain;


 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC where Domain='" + domain + "'";
 
      orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_0',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_domain_0.html', 
	       {	 
	       		 Domain: result.rows[0][0],
                 globalrank: result.rows[0][1],
                 
               }
               );
             }
	     else {
               res.render('error_0',
               {
                  message: "No Domain with such name in MAJESTIC"

               }
               );
             }  
	   }
        }
      );
    }
  );


app.get('/domain/idx1', function(req, res) {
  res.render('domain_1.html');
});

app.post('/search_idx1', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX1 where Domain='" + domain + "'";
orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_1',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_domain_1.html', 
	       {
                 Domain: result.rows[0][0],
                 globalrank: result.rows[0][1],
               }
               );
             }
	     else {
               res.render('error_1',
               {
                  message: "No Domain with such name in MAJESTIC_INDEX1"

               }
               );
             }  
	   }
        }
      );
    }
  );

//get and post for querying MAJESTIC_INDEX2

app.get('/domain/idx2', function(req, res) {
  res.render('domain_2.html');
});

app.post('/search_idx2', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where Domain='" + domain + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_2',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_domain_2.html', 
	       {
                 Domain: result.rows[0][0],
                 globalrank: result.rows[0][1],
               }
               );
             }
	     else {
               res.render('error_2',
               {
                  message: "No Domain with such name in MAJESTIC_INDEX2"

               }
               );
             }  
	   }
        }
      );
    }
  );


//get and post for querying MAJESTIC_INDEX3

app.get('/domain/idx3', function(req, res) {
  res.render('domain_3.html');
});

app.post('/search_idx3', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX3 where Domain='" + domain + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_3',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_domain_3.html', 
	       {
                 Domain: result.rows[0][0],
                 globalrank: result.rows[0][1],
               }
               );
             }
	     else {
               res.render('error_3',
               {
                  message: "No Domain with such name in MAJESTIC_INDEX3"

               }
               );
             }  
	   }
        }
      );
    }
  );


app.get('/tld/no_idx', function(req, res) {
  res.render('tld_0.html');
});

app.post('/search_tld_no_idx', function(req, res) {

 var tld = req.body.tld;
 var sql_statement =  "SELECT globalrank , Domain FROM MAJESTIC WHERE TLD = '" + tld + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_tld0',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_tld_0', 
	       		{	
                	 domain_no_idx:result.rows
                	 
               	}
              	 );
             }
	     else {
               res.render('error_tld0',
               {
                  message: "No TLD found in MAJESTIC"
                }
               );
             }  
	   }
        }
      );
    }
  );


app.get('/tld/idx1', function(req, res) {
  res.render('tld_1.html');
});

app.post('/search_tld_idx1', function(req, res) {

 var tld = req.body.tld;
 var sql_statement =  "SELECT globalrank , Domain FROM MAJESTIC_INDEX1 WHERE TLD = '"+tld+"'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_tld1',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_tld_1', 
	       		{	
                	 domain_no_idx:result.rows
                	 
               	}
              	 );
             }
	     else {
               res.render('error_tld1',
               {
                  message: "No TLD found for MAJESTIC_INDEX1 table"

               }
               );
             }  
	   }
        }
      );
    }
  );


app.get('/tld/idx2', function(req, res) {
  res.render('tld_2.html');
});

app.post('/search_tld_idx2', function(req, res) {

 var tld = req.body.tld;
 var sql_statement =  "SELECT globalrank , Domain FROM MAJESTIC_INDEX2 WHERE TLD = '" + tld + "'";
orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_tld2',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_tld_2', 
	       		{	
                	 domain_no_idx:result.rows
                	 
               	}
              	 );
             }
	     else {
               res.render('error_tld2',
               {
                  message: "No TLD for MAJESTIC_INDEX2 table"

               }
               );
             }  
	   }
        }
      );
    }
  );


app.get('/tld/idx3', function(req, res) {
  res.render('tld_3.html');
});

app.post('/search_tld_idx3', function(req, res) {

 var tld = req.body.tld;
 var sql_statement =  "SELECT globalrank , Domain FROM MAJESTIC_INDEX3 WHERE TLD = '" + tld + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_tld3',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_tld_3', 
	       		{	
                	 domain_no_idx:result.rows
                	 
               	}
              	 );
             }
	     else {
               res.render('error_tld3',
               {
                  message: "No TLD found for MAJESTIC_INDEX3 table"

               }
               );
             }  
	   }
        }
      );
    }
  );


//Create Server
var port = Number(process.env.PORT || 6363);
orawrap.createPool(dbConfig, function(err, pool) {
   // The pool that was created is provided in the callback function,  
   // but it's rarely needed as it's stored within orawrap for use later 
   if (err) throw err;
   //Start the web server now that the pool is ready to handle incoming requests 
   app.listen(port, function() {
       console.log('Web server listening on localhost: 6363');
   });
});

