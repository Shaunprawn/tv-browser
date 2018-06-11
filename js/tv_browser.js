// API Docs at:
// http://www.tvmaze.com/api

function xhrActivate (){
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', responseHandler());
	xhr.addEventListener('error', error());
            xhr.open('GET', url);
            xhr.send();
        };

function error () {
	  console.log("error text", this.responseText);
	  console.log("status text", this.statusText);
	  console.log("status code", this.status);
	};

var responseHandler = function() {
	  console.log("response text", this.responseText);
	  console.log("status text", this.statusText);
	  console.log("status code", this.status);
	};



var returnData = JSON.parse(this.responseText)