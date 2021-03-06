var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));



// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


