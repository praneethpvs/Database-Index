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
var oracledb = require('oracledb');

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

//get and post for querying MAJESTIC
app.get('/domain/no_idx', function(req, res) 
{
  res.render('domain_0.html');
}
);

app.post('/search_no_idx', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC where Domain='" + domain + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
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
});

app.get('/domain/idx1', function(req, res) {
  res.render('domain_1.html');
});

app.post('/search_idx1', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX1 where Domain='" + domain + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
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
});
//get and post for querying MAJESTIC_INDEX2

app.get('/domain/idx2', function(req, res) {
  res.render('domain_2.html');
});

app.post('/search_idx2', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where Domain='" + domain + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
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
});

//get and post for querying MAJESTIC_INDEX3

app.get('/domain/idx3', function(req, res) {
  res.render('domain_3.html');
});

app.post('/search_idx3', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX3 where Domain='" + domain + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
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
});

app.get('/tld/no_idx', function(req, res) {
  res.render('tld_0.html');
});

app.post('/search_tld_no_idx', function(req, res) {

 var tld = req.body.tld;
 var i;
 var sql_statement =  "SELECT globalrank , Domain FROM majestic WHERE TLD = '" + tld + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                  message: "Invalid Entry for TLD"

               }
               );
             }  
	   }
        }
      );
    }
  );
});

app.get('/tld/idx1', function(req, res) {
  res.render('tld_1.html');
});

app.post('/search_tld_idx1', function(req, res) {

 var tld = req.body.tld;
 var i;
 var sql_statement =  "SELECT globalrank , Domain FROM MAJESTIC_INDEX1 WHERE TLD = '" + tld + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                  message: "Invalid Entry for TLD"

               }
               );
             }  
	   }
        }
      );
    }
  );
});

app.get('/tld/idx2', function(req, res) {
  res.render('tld_2.html');
});

app.post('/search_tld_idx2', function(req, res) {

 var tld = req.body.tld;
 var i;
 var sql_statement =  "SELECT globalrank , Domain FROM MAJESTIC_INDEX2 WHERE TLD = '" + tld + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                  message: "Invalid Entry for TLD"

               }
               );
             }  
	   }
        }
      );
    }
  );
});

app.get('/tld/idx3', function(req, res) {
  res.render('tld_3.html');
});

app.post('/search_tld_idx3', function(req, res) {

 var tld = req.body.tld;
 var i;
 var sql_statement =  "SELECT globalrank , Domain FROM MAJESTIC_INDEX3 WHERE TLD = '" + tld + "'";
 oracledb.getConnection(
    {  user          : user,
       password      : password,
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
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
                  message: "Invalid Entry for TLD"

               }
               );
             }  
	   }
        }
      );
    }
  );
});

//Create Server
var port = Number(process.env.PORT || 6363);
 app.listen(port, function() {
     console.log("Listening on " + port);
});

