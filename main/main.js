/* Charitra and pagination*/
function pages(pname,data){
$(pname).pagination({ // you call the plugin							
  dataSource: data, // pass all the data									  
  pageSize: 1, // put how many items per page you want
  showGoInput: true,
  showGoButton: true,
  showSizeChanger: true,
  className: 'paginationjs-theme-blue',
  callback: function(data, pagination) {
	  //console.log(data);
	  // data will be chunk of your data (json.Product) per page
	  // that you need to display
	  var wrapper = $(pname+' .wrapper').empty();
	  $.each(data, function (i, f) {
	  //console.log(i);
	  //console.log(f);
		$(pname+' .wrapper').append('<hr>');
		 $(pname+' .wrapper').append('<h3 style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">'+ f.Aadi + '</h3>');
		 $(pname+' .wrapper').append('<hr>');
		 $(pname+' .wrapper').append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">' + f.Lila + '</p>');
		 $(pname+' .wrapper').append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">' + f.Tip + '</p>');
		 $(pname+' .wrapper').append('<hr>');
		 $(pname+' .wrapper').append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> वचन  :' + f.vachan + '</p>');
		 $(pname+' .wrapper').append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> स्थान  : ' + f.sthan + '</p>');
		 $(pname+' .wrapper').append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> दृष्टांत  : ' + f.drushtant + '</p>');
		 $(pname+' .wrapper').append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> व्यक्ती : ' + f.person + '</p>');
		 $(pname+' .wrapper').append('<hr>');
		 $(pname+' .wrapper').append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> भाव समरण नोट्स : ' + f.avyav + '</p>');
		 $(pname+' .wrapper').append('<hr>');

		  });
		}
	   });
}




lila('#purvardh','purvardh.json')
lila('#utarardh','utarardh.json')
lila('#kc','kc.json')
lila('#ac','ac.json')



function lila(pname,url){
console.log(pname)
//console.log(url)
$(document).ready(function() {

if (pname == '#purvardh')
			{
			$.getJSON(url, function(jd)
			{
			let srcdata = jd.main;
			pages(pname,srcdata);
			})
			}
else if (pname == '#utarardh')
			{
			$.getJSON(url, function(jd)
			{
			let srcdata = jd.main;
			pages(pname,srcdata);
			})
			}
else if (pname == '#kc')
			{
			$.getJSON(url, function(jd)
			{
			let srcdata = jd.main;
			pages(pname,srcdata);
			})
			}
else if (pname == '#ac')
			{
			$.getJSON(url, function(jd)
			{
			let srcdata = jd.main;
			pages(pname,srcdata);
			})
			}
});
}
/*charitra and pagination finish*/
/*lil and text search function for rest all*/


function glila(ID){
var ID
//console.log(ID);
$.getJSON('person.json', function(jd)
	{var json = jd.main;
	//console.log(json[ID]);
		$("#output").html('<h3 style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">'+json[ID].Aadi+'</h3>');
		$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">'+json[ID].Lila+'</p>');
			if (json[ID].person){
			person = json[ID].person;
			$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">'+person+'</p>');
			}
			if (json[ID].vachan != ""){
			vachan = json[ID].vachan;
			$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> वचन  :'+vachan+'</p>');
			}
	});
}

function searchtext(t,st){
//console.log(t,st);
}
//searchtext("vachan","hemang");

function searchlila(type,searchtext){
//console.log(type,searchtext);

$.getJSON('person.json', function(jd)
	{var json = jd.main;
	$("#output").empty();
	for (let i = 1; i < json.length; i++){
	//	console.log(json[i]);
	//	console.log(type);
		if (type == "person"){
		
				{let person = json[i].person
					//console.log(person);
					for (let p = 0; p < person.length; p++){
						let result = person[p] === searchtext;
						if (result){
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">'+person+'</p>');
						}
					}
				}
			}
		else if (type == "vachan")
			{
					let vachan = json[i].vachan
					//console.log(vachan);
					for (let v = 0; v < vachan.length; v++){
					let result = vachan[v].includes(searchtext);
					{let result = vachan[v].includes(searchtext);{
						if (result){
							//console.log(result);
							console.log(json[i].lilaID);
							console.log(vachan[v]);
						$("#output").append('<h3 style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">'+json[i].Aadi+'</h3>');
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;">'+json[i].Lila+'</p>')
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> वचन  :'+vachan[v]+'</p>');
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> टिका  :'+ json[i].tika[v] + '</p>');
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> व्यक्ती : ' + json[i].person + '</p>');
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> दृष्टांत  : ' + json[i].drushtant + '</p>');
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> स्थान  : ' + json[i].sthan + '</p>');
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> भाव समरण नोट्स : ' + json[i].avyav + '</p>');

						}
					}
					}
					}
				}
			
		else if (type == "sthan")
			{
					{let result = json[i].Aadi.includes(searchtext);
						if (result){
							//console.log(result);
						$("#output").append('<p style="text-align: center;font-family: Arial;;margin: 25px;padding: 8px;border-style: solid;border-radius: 10px;border-color: black;"> वचन  :'+json[i].Aadi+'</p>');
						}
					}
			}
	}
});

}
