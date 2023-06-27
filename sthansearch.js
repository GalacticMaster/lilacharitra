

function pages(pname,data){
$(pname).pagination({ // you call the plugin							
  dataSource: data, // pass all the data									  
  pageSize: 1, // put how many items per page you want
  showGoInput: true,
  showGoButton: true,
  showSizeChanger: true,
  className: 'paginationjs-theme-red',
  callback: function(data, pagination) {
	  // data will be chunk of your data (json.Product) per page
	  // that you need to display
	  var wrapper = $(pname+' .wrapper').empty();
	  $.each(data, function (i, f) {
	  //console.log(i);
	  //console.log(f);
		 $(pname+' .wrapper').append('<h2>' + f.Aadi + '</h2>');
		 $(pname+' .wrapper').append('<p>' + f.Lila + '</p>');
		 $(pname+' .wrapper').append('<p>' + f.Tip + '</p>');
		  });
		}
	   });
}




lila('#purvardh','https://galacticmaster.github.io/lilacharitra/purvardh.json')
lila('#utarardh','https://galacticmaster.github.io/lilacharitra/utarardh.json')
lila('#fullch','https://galacticmaster.github.io/lilacharitra/fullch.json')



function lila(pname,url){
console.log(pname)
//console.log(url)
$(document).ready(function() {

if (pname == '#purvardh')
			{
			$.getJSON('https://galacticmaster.github.io/lilacharitra/purvardh.json', function(jd)
			{
			let srcdata = jd.purvardh;
			pages(pname,srcdata);
			})
			}
else if (pname == '#utarardh')
			{
			$.getJSON('https://galacticmaster.github.io/lilacharitra/utarardh.json', function(jd)
			{
			let srcdata = jd.utarardh;
			pages(pname,srcdata);
			})
			}
else if (pname == '#fullch')
			{
			$.getJSON('https://galacticmaster.github.io/lilacharitra/fullch.json', function(jd)
			{
			let srcdata = jd.main;
			pages(pname,srcdata);
			})
			}
});
}
/** Sthan function**/


document.getElementById("भरूच, गुजरात").onclick = function() {Sthan_search("भरूच, गुजरात")};
document.getElementById("रिद्धपूर").onclick = function() {Sthan_search("रिद्धपूर")};
document.getElementById("सालबर्डी, अमरावती").onclick = function() {Sthan_search("सालबर्डी, अमरावती")};
document.getElementById("काटोल, नागपूर").onclick = function() {Sthan_search("काटोल, नागपूर")};
document.getElementById("आंध्रप्रदेश").onclick = function() {Sthan_search("आंध्रप्रदेश")};
document.getElementById("पोहिचा देव, बीड").onclick = function() {Sthan_search("पोहिचा देव, बीड")};
document.getElementById("ओरंगल, आंध्रप्रदेश").onclick = function() {Sthan_search("ओरंगल, आंध्रप्रदेश")};
document.getElementById("डाकराम सुकळी, गोंदिया").onclick = function() {Sthan_search("डाकराम सुकळी, गोंदिया")};
document.getElementById("रिध्दपूर, अमरावती").onclick = function() {Sthan_search("रिध्दपूर, अमरावती")};
document.getElementById("काटसुर, अमरावती").onclick = function() {Sthan_search("काटसुर, अमरावती")};
document.getElementById("विंद्य पर्वत").onclick = function() {Sthan_search("विंद्य पर्वत")};
document.getElementById("सालबर्डी").onclick = function() {Sthan_search("सालबर्डी")};
document.getElementById("शेंदूरजन, बुलढाणा").onclick = function() {Sthan_search("शेंदूरजन, बुलढाणा")};
document.getElementById("रामटेक, नागपूर").onclick = function() {Sthan_search("रामटेक, नागपूर")};
document.getElementById("मनसर, नाग्पूर").onclick = function() {Sthan_search("मनसर, नाग्पूर")};
document.getElementById("भंडारा").onclick = function() {Sthan_search("भंडारा")};
document.getElementById("मौदा, नागपूर").onclick = function() {Sthan_search("मौदा, नागपूर")};
document.getElementById("अचलपूर, अमरावती").onclick = function() {Sthan_search("अचलपूर, अमरावती")};
document.getElementById("नांदेड").onclick = function() {Sthan_search("नांदेड")};
document.getElementById("नाळेश्वर, गोपळचावडी, लिंबगाव, नांदेड").onclick = function() {Sthan_search("नाळेश्वर, गोपळचावडी, लिंबगाव, नांदेड")};
document.getElementById("गोपचोंडी, उखऊउज चखऊउ, नांदेड").onclick = function() {Sthan_search("गोपचोंडी, उखऊउज चखऊउ, नांदेड")};
document.getElementById("लोणार, बुलढाणा").onclick = function() {Sthan_search("लोणार, बुलढाणा")};
document.getElementById("हरनाळा, राहेर नांदेड").onclick = function() {Sthan_search("हरनाळा, राहेर नांदेड")};
document.getElementById("झाडी, विदर्भ प्रदेश").onclick = function() {Sthan_search("झाडी, विदर्भ प्रदेश")};
document.getElementById("काकडा, अचलपूर, अमरावती").onclick = function() {Sthan_search("काकडा, अचलपूर, अमरावती")};
document.getElementById("वडनेरभुजंग, अचलपूर, अमरावती").onclick = function() {Sthan_search("वडनेरभुजंग, अचलपूर, अमरावती")};
document.getElementById("वडनेर भुजंग, अचलपूर, अमरावती").onclick = function() {Sthan_search("वडनेर भुजंग, अचलपूर, अमरावती")};
document.getElementById("असदपूर, अचलपूर, अमरावती").onclick = function() {Sthan_search("असदपूर, अचलपूर, अमरावती")};
document.getElementById("पातुर, अकोला").onclick = function() {Sthan_search("पातुर, अकोला")};
document.getElementById("आलेगाव, आकोला").onclick = function() {Sthan_search("आलेगाव, आकोला")};
document.getElementById("घटाळी, पातुर, अकोला").onclick = function() {Sthan_search("घटाळी, पातुर, अकोला")};
document.getElementById("इसवी, मेहकर, बुलढाणा").onclick = function() {Sthan_search("इसवी, मेहकर, बुलढाणा")};
document.getElementById("अंजनी बु, मेहकर, बुलढाणा").onclick = function() {Sthan_search("अंजनी बु, मेहकर, बुलढाणा")};
document.getElementById("मेहकर, बुलढाणा").onclick = function() {Sthan_search("मेहकर, बुलढाणा")};
document.getElementById("लोणार").onclick = function() {Sthan_search("लोणार")};
document.getElementById("रामसगाव, जालना").onclick = function() {Sthan_search("रामसगाव, जालना")};
document.getElementById("पैठण, औरंगाबाद").onclick = function() {Sthan_search("पैठण, औरंगाबाद")};
document.getElementById("रहाटगाव, पैठण").onclick = function() {Sthan_search("रहाटगाव, पैठण")};
document.getElementById("कडेठाण, पैठण").onclick = function() {Sthan_search("कडेठाण, पैठण")};
document.getElementById("राजूर, भोकरदन, जालना").onclick = function() {Sthan_search("राजूर, भोकरदन, जालना")};
document.getElementById("सेंदुर्जनि, बुलढाणा").onclick = function() {Sthan_search("सेंदुर्जनि, बुलढाणा")};
document.getElementById("आलेगाव, अकोला").onclick = function() {Sthan_search("आलेगाव, अकोला")};
document.getElementById("बार्शी टाकळी, अकोला").onclick = function() {Sthan_search("बार्शी टाकळी, अकोला")};
document.getElementById("येळवण, अकोला").onclick = function() {Sthan_search("येळवण, अकोला")};
document.getElementById("लाखपुरी, अकोला").onclick = function() {Sthan_search("लाखपुरी, अकोला")};
document.getElementById("शिंगणापूर, अमरावती").onclick = function() {Sthan_search("शिंगणापूर, अमरावती")};
document.getElementById("खोलापूर, अमरावति").onclick = function() {Sthan_search("खोलापूर, अमरावति")};
document.getElementById("वाकी, अमरावती").onclick = function() {Sthan_search("वाकी, अमरावती")};
document.getElementById("थूगांव, अमरावती").onclick = function() {Sthan_search("थूगांव, अमरावती")};
document.getElementById("रामा, अमरावती").onclick = function() {Sthan_search("रामा, अमरावती")};
document.getElementById("साऊर, अमरावती").onclick = function() {Sthan_search("साऊर, अमरावती")};
document.getElementById("तळवेल, अमरावती").onclick = function() {Sthan_search("तळवेल, अमरावती")};
document.getElementById("खराटा, अमरावती").onclick = function() {Sthan_search("खराटा, अमरावती")};
document.getElementById("रिध्दपूर").onclick = function() {Sthan_search("रिध्दपूर")};
document.getElementById("बेलोरा, अमरावती").onclick = function() {Sthan_search("बेलोरा, अमरावती")};
document.getElementById("टाकरखेडा, अमरावती").onclick = function() {Sthan_search("टाकरखेडा, अमरावती")};
document.getElementById("आष्टी, अमरावती").onclick = function() {Sthan_search("आष्टी, अमरावती")};
document.getElementById("मंगरूळपीर, वाशिम").onclick = function() {Sthan_search("मंगरूळपीर, वाशिम")};
document.getElementById("शेंदुरजन, बुलढाणा").onclick = function() {Sthan_search("शेंदुरजन, बुलढाणा")};
document.getElementById("डोड्रा, बुलढाणा").onclick = function() {Sthan_search("डोड्रा, बुलढाणा")};
document.getElementById("फुलंब्री, औरंगाबाद").onclick = function() {Sthan_search("फुलंब्री, औरंगाबाद")};
document.getElementById("गदाना, औरंगाबाद").onclick = function() {Sthan_search("गदाना, औरंगाबाद")};
document.getElementById("वेरुळ, औरंगाबाद").onclick = function() {Sthan_search("वेरुळ, औरंगाबाद")};
document.getElementById("माटेगांव, औरंगाबाद").onclick = function() {Sthan_search("माटेगांव, औरंगाबाद")};
document.getElementById("विटखेडा, औरंगाबाद").onclick = function() {Sthan_search("विटखेडा, औरंगाबाद")};
document.getElementById("लासुर, औरंगाबाद").onclick = function() {Sthan_search("लासुर, औरंगाबाद")};
document.getElementById("घोगरगाव, अहमदनगर").onclick = function() {Sthan_search("घोगरगाव, अहमदनगर")};
document.getElementById("डोमेग्राम").onclick = function() {Sthan_search("डोमेग्राम")};
document.getElementById("खोपडी, सिन्नर").onclick = function() {Sthan_search("खोपडी, सिन्नर")};
document.getElementById("खोपडी, सिन्नर, नाशिक").onclick = function() {Sthan_search("खोपडी, सिन्नर, नाशिक")};
document.getElementById("सिन्नर, नाशिक").onclick = function() {Sthan_search("सिन्नर, नाशिक")};
document.getElementById("नाशिक").onclick = function() {Sthan_search("नाशिक")};
document.getElementById("गंगापूर नाशिक").onclick = function() {Sthan_search("गंगापूर नाशिक")};
document.getElementById("त्र्यंबकेश्वर, नाशिक").onclick = function() {Sthan_search("त्र्यंबकेश्वर, नाशिक")};
document.getElementById("ब्रह्मगिरी, नाशिक").onclick = function() {Sthan_search("ब्रह्मगिरी, नाशिक")};
document.getElementById("अंजनेरी, नाशिक").onclick = function() {Sthan_search("अंजनेरी, नाशिक")};
document.getElementById("पंचवटी, नाशिक").onclick = function() {Sthan_search("पंचवटी, नाशिक")};
document.getElementById("चौरंगी, नाशिक").onclick = function() {Sthan_search("चौरंगी, नाशिक")};
document.getElementById("आडगाव, नाशिक").onclick = function() {Sthan_search("आडगाव, नाशिक")};
document.getElementById("मौजे सुकिणे, नाशिक").onclick = function() {Sthan_search("मौजे सुकिणे, नाशिक")};
document.getElementById("निफाड, नाशिक").onclick = function() {Sthan_search("निफाड, नाशिक")};
document.getElementById("शिवरे, नाशिक").onclick = function() {Sthan_search("शिवरे, नाशिक")};
document.getElementById("नांदुर, नाशिक").onclick = function() {Sthan_search("नांदुर, नाशिक")};
document.getElementById("मद्यमेश्वर, नाशिक").onclick = function() {Sthan_search("मद्यमेश्वर, नाशिक")};
document.getElementById("नांदुर,\xa0नाशिक").onclick = function() {Sthan_search("नांदुर,\xa0नाशिक")};
document.getElementById("कानळस, नाशिक").onclick = function() {Sthan_search("कानळस, नाशिक")};
document.getElementById("चास नळी, अहमदनगर").onclick = function() {Sthan_search("चास नळी, अहमदनगर")};
document.getElementById("सुरेगाव सांगवी, अहमदनगर").onclick = function() {Sthan_search("सुरेगाव सांगवी, अहमदनगर")};
document.getElementById("संवत्सर,\xa0अहमदनगर").onclick = function() {Sthan_search("संवत्सर,\xa0अहमदनगर")};
document.getElementById("कोकमठाण, अहमदनगर").onclick = function() {Sthan_search("कोकमठाण, अहमदनगर")};
document.getElementById("पुणतांबा, अहमदनगर").onclick = function() {Sthan_search("पुणतांबा, अहमदनगर")};
document.getElementById("नाउर, अहमदनगर").onclick = function() {Sthan_search("नाउर, अहमदनगर")};
document.getElementById("नायगाव, अहमदनगर").onclick = function() {Sthan_search("नायगाव, अहमदनगर")};
document.getElementById("हिंगोणी, औरंगाबाद").onclick = function() {Sthan_search("हिंगोणी, औरंगाबाद")};
document.getElementById("पुरणगाव, औरंगाबाद").onclick = function() {Sthan_search("पुरणगाव, औरंगाबाद")};
document.getElementById("सावखेड गंगा, औरंगाबाद").onclick = function() {Sthan_search("सावखेड गंगा, औरंगाबाद")};
document.getElementById("वांजरगाव, औरंगाबाद").onclick = function() {Sthan_search("वांजरगाव, औरंगाबाद")};
document.getElementById("चांदेगाव,\xa0औरंगाबाद").onclick = function() {Sthan_search("चांदेगाव,\xa0औरंगाबाद")};
document.getElementById("नागमठाण, औरंगाबाद").onclick = function() {Sthan_search("नागमठाण, औरंगाबाद")};
document.getElementById("हमरापूर, औरंगाबाद").onclick = function() {Sthan_search("हमरापूर, औरंगाबाद")};
document.getElementById("बाजाठाणा, औरंगाबाद").onclick = function() {Sthan_search("बाजाठाणा, औरंगाबाद")};
document.getElementById("बीड").onclick = function() {Sthan_search("बीड")};
document.getElementById("पाली, बीड").onclick = function() {Sthan_search("पाली, बीड")};
document.getElementById("पोहिचादेव, बीड").onclick = function() {Sthan_search("पोहिचादेव, बीड")};
document.getElementById("लिंबागणेश, बीड").onclick = function() {Sthan_search("लिंबागणेश, बीड")};
document.getElementById("पाटोदा, बीड").onclick = function() {Sthan_search("पाटोदा, बीड")};
document.getElementById("साकत, अहमदनगर").onclick = function() {Sthan_search("साकत, अहमदनगर")};
document.getElementById("सौताडा, अहमदनगर").onclick = function() {Sthan_search("सौताडा, अहमदनगर")};
document.getElementById("मातकुळी वनदेव, बीड").onclick = function() {Sthan_search("मातकुळी वनदेव, बीड")};
document.getElementById("मातकुळी, बीड").onclick = function() {Sthan_search("मातकुळी, बीड")};
document.getElementById("आष्टी, बीड").onclick = function() {Sthan_search("आष्टी, बीड")};
document.getElementById("शिराळ, बीड").onclick = function() {Sthan_search("शिराळ, बीड")};
document.getElementById("वाकी, बीड").onclick = function() {Sthan_search("वाकी, बीड")};
document.getElementById("मिरजगाव, अहमदनगर").onclick = function() {Sthan_search("मिरजगाव, अहमदनगर")};
document.getElementById("मांडवगण, अहमदनगर").onclick = function() {Sthan_search("मांडवगण, अहमदनगर")};
document.getElementById("अरणगाव, अहमदनगर").onclick = function() {Sthan_search("अरणगाव, अहमदनगर")};
document.getElementById("भिंगार, अहमदनगर").onclick = function() {Sthan_search("भिंगार, अहमदनगर")};
document.getElementById("शेंडी, अहमदनगर").onclick = function() {Sthan_search("शेंडी, अहमदनगर")};
document.getElementById("पिंपळगाव माळवी, अहमदनगर").onclick = function() {Sthan_search("पिंपळगाव माळवी, अहमदनगर")};
document.getElementById("डोंगरगण, अहमदनगर").onclick = function() {Sthan_search("डोंगरगण, अहमदनगर")};
document.getElementById("वांबोरी, अहमदनगर").onclick = function() {Sthan_search("वांबोरी, अहमदनगर")};
document.getElementById("सोनई, अहमदनगर").onclick = function() {Sthan_search("सोनई, अहमदनगर")};
document.getElementById("कानडगाव, औरंगाबाद").onclick = function() {Sthan_search("कानडगाव, औरंगाबाद")};
document.getElementById("गंगापूर, औरंगाबाद").onclick = function() {Sthan_search("गंगापूर, औरंगाबाद")};
document.getElementById("फुलशिवरा, औरंगाबाद").onclick = function() {Sthan_search("फुलशिवरा, औरंगाबाद")};
document.getElementById("हातनुर, औरंगाबाद").onclick = function() {Sthan_search("हातनुर, औरंगाबाद")};
document.getElementById("कन्नड, औरंगाबाद").onclick = function() {Sthan_search("कन्नड, औरंगाबाद")};
document.getElementById("सायगव्हाण,\xa0औरंगाबाद").onclick = function() {Sthan_search("सायगव्हाण,\xa0औरंगाबाद")};
document.getElementById("वाघळी, जळगाव").onclick = function() {Sthan_search("वाघळी, जळगाव")};
document.getElementById("कनाशी, जळगाव").onclick = function() {Sthan_search("कनाशी, जळगाव")};
document.getElementById("भडगाव, जळगाव").onclick = function() {Sthan_search("भडगाव, जळगाव")};
document.getElementById("पाचोरा, जळगाव").onclick = function() {Sthan_search("पाचोरा, जळगाव")};
document.getElementById("शेंदुर्णी, जळगाव").onclick = function() {Sthan_search("शेंदुर्णी, जळगाव")};
document.getElementById("चांगदेव, जळगाव").onclick = function() {Sthan_search("चांगदेव, जळगाव")};
document.getElementById("सावळदबारा, औरंगाबाद").onclick = function() {Sthan_search("सावळदबारा, औरंगाबाद")};
document.getElementById("वालसांगवी, जालना").onclick = function() {Sthan_search("वालसांगवी, जालना")};
document.getElementById("पद्मावती, जालना").onclick = function() {Sthan_search("पद्मावती, जालना")};
document.getElementById("पिंपळगाव रेणुकाइ, जालना").onclick = function() {Sthan_search("पिंपळगाव रेणुकाइ, जालना")};
document.getElementById("बोकरदन, जालना").onclick = function() {Sthan_search("बोकरदन, जालना")};
document.getElementById("सिल्लोड, औरंगाबाद").onclick = function() {Sthan_search("सिल्लोड, औरंगाबाद")};
document.getElementById("आन्वा, जालना").onclick = function() {Sthan_search("आन्वा, जालना")};
document.getElementById("चारनेर, औरंगाबाद").onclick = function() {Sthan_search("चारनेर, औरंगाबाद")};
document.getElementById("करंजखेड, औरंगाबाद").onclick = function() {Sthan_search("करंजखेड, औरंगाबाद")};
document.getElementById("दाभाडी, जालना").onclick = function() {Sthan_search("दाभाडी, जालना")};
document.getElementById("जालना").onclick = function() {Sthan_search("जालना")};
document.getElementById("काजळा, जालना").onclick = function() {Sthan_search("काजळा, जालना")};
document.getElementById("नागाविहिर, जालना").onclick = function() {Sthan_search("नागाविहिर, जालना")};
document.getElementById("खनेपुरी, जालना").onclick = function() {Sthan_search("खनेपुरी, जालना")};
document.getElementById("भाटेपुरी, जालना").onclick = function() {Sthan_search("भाटेपुरी, जालना")};
document.getElementById("अहेरमल ढाकेफळ, जालना").onclick = function() {Sthan_search("अहेरमल ढाकेफळ, जालना")};
document.getElementById("ढाकेफळ, जालना").onclick = function() {Sthan_search("ढाकेफळ, जालना")};
document.getElementById("जोगळदेवी, जालना").onclick = function() {Sthan_search("जोगळदेवी, जालना")};
document.getElementById("बोरी नदी, साडेगाव मार्गी, जालना").onclick = function() {Sthan_search("बोरी नदी, साडेगाव मार्गी, जालना")};
document.getElementById("साडेगाव, जालना").onclick = function() {Sthan_search("साडेगाव, जालना")};
document.getElementById("पापविनाशनी, पांढरी, बीड").onclick = function() {Sthan_search("पापविनाशनी, पांढरी, बीड")};
document.getElementById("मिरगाव, बीड").onclick = function() {Sthan_search("मिरगाव, बीड")};
document.getElementById("संगमजळगाव, बीड").onclick = function() {Sthan_search("संगमजळगाव, बीड")};
document.getElementById("आगरनांदुर, बीड").onclick = function() {Sthan_search("आगरनांदुर, बीड")};
document.getElementById("गेवराई, बीड").onclick = function() {Sthan_search("गेवराई, बीड")};
document.getElementById("बागपिंपळगाव, बीड").onclick = function() {Sthan_search("बागपिंपळगाव, बीड")};
document.getElementById("खामगाव, बीड").onclick = function() {Sthan_search("खामगाव, बीड")};
document.getElementById("शहगड, जालना").onclick = function() {Sthan_search("शहगड, जालना")};
document.getElementById("गांधारी, जालना").onclick = function() {Sthan_search("गांधारी, जालना")};
document.getElementById("डोमलगाव, जालना").onclick = function() {Sthan_search("डोमलगाव, जालना")};
document.getElementById("साष्टीपिंपळगाव, जालना").onclick = function() {Sthan_search("साष्टीपिंपळगाव, जालना")};
document.getElementById("आपेगाव, जालना").onclick = function() {Sthan_search("आपेगाव, जालना")};
document.getElementById("विज्ञानेश्वर, आपेगाव, जालना").onclick = function() {Sthan_search("विज्ञानेश्वर, आपेगाव, जालना")};
document.getElementById("बळेगाव, जालना").onclick = function() {Sthan_search("बळेगाव, जालना")};
document.getElementById("पांचाळेश्वर, जालना").onclick = function() {Sthan_search("पांचाळेश्वर, जालना")};
document.getElementById("हिरडपुरी, औरंगाबाद").onclick = function() {Sthan_search("हिरडपुरी, औरंगाबाद")};
document.getElementById("आंगलेगव्हाण, हिरडपुरी, औरंगाबाद").onclick = function() {Sthan_search("आंगलेगव्हाण, हिरडपुरी, औरंगाबाद")};
document.getElementById("नवगाव, औरंगाबाद").onclick = function() {Sthan_search("नवगाव, औरंगाबाद")};
document.getElementById("मायगाव, औरंगाबाद").onclick = function() {Sthan_search("मायगाव, औरंगाबाद")};
document.getElementById("वडवाडी, औरंगाबाद").onclick = function() {Sthan_search("वडवाडी, औरंगाबाद")};
document.getElementById("पैठण मार्गी").onclick = function() {Sthan_search("पैठण मार्गी")};
document.getElementById("पिंपळवाडी, पैठण").onclick = function() {Sthan_search("पिंपळवाडी, पैठण")};
document.getElementById("सेवता, पैठण").onclick = function() {Sthan_search("सेवता, पैठण")};
document.getElementById("जोगेश्वरी, पैठण").onclick = function() {Sthan_search("जोगेश्वरी, पैठण")};
document.getElementById("संगमेश्वर, नेवासा, अहमदनगर").onclick = function() {Sthan_search("संगमेश्वर, नेवासा, अहमदनगर")};



document.getElementById("खडकुली").onclick = function() {Sthan_search("खडकुली")};
document.getElementById("शेवता / तारुपिंपळ्वाडी, पैठण").onclick = function() {Sthan_search("शेवता / तारुपिंपळ्वाडी, पैठण")};
document.getElementById("पैठण").onclick = function() {Sthan_search("पैठण")};
document.getElementById("छिन्नापापी").onclick = function() {Sthan_search("छिन्नापापी")};
document.getElementById("डोमेग्राम").onclick = function() {Sthan_search("डोमेग्राम")};
document.getElementById("देइगाव, गंगापूर, औरंगाबाद").onclick = function() {Sthan_search("देइगाव, गंगापूर, औरंगाबाद")};
document.getElementById("वैजापूर, औरंगाबाद").onclick = function() {Sthan_search("वैजापूर, औरंगाबाद")};
document.getElementById("टाकळीभान, नेवासा, अहमदनगर").onclick = function() {Sthan_search("टाकळीभान, नेवासा, अहमदनगर")};
document.getElementById("घोगरगाव, नेवसा, अहमदनगर").onclick = function() {Sthan_search("घोगरगाव, नेवसा, अहमदनगर")};
document.getElementById("बेलपिंपळगाव, नेवसा, अहमदनगर").onclick = function() {Sthan_search("बेलपिंपळगाव, नेवसा, अहमदनगर")};
document.getElementById("बेलपिंपळगाव ते नेवसा मार्गी").onclick = function() {Sthan_search("बेलपिंपळगाव ते नेवसा मार्गी")};
document.getElementById("नेवसा, अहमदनगर").onclick = function() {Sthan_search("नेवसा, अहमदनगर")};
document.getElementById("मिरी,पाथर्डी, अहमदनगर").onclick = function() {Sthan_search("मिरी,पाथर्डी, अहमदनगर")};
document.getElementById("खांडगाव, लोहसर, पाथर्डी").onclick = function() {Sthan_search("खांडगाव, लोहसर, पाथर्डी")};
document.getElementById("केळीपिंपळगाव, आष्टी, बीड").onclick = function() {Sthan_search("केळीपिंपळगाव, आष्टी, बीड")};
document.getElementById("चिचोंडी(पाटील), अहमदनगर").onclick = function() {Sthan_search("चिचोंडी(पाटील), अहमदनगर")};
document.getElementById("मढपिंपरी, अहमदनगर").onclick = function() {Sthan_search("मढपिंपरी, अहमदनगर")};
document.getElementById("वाकी, आष्टी, बीड").onclick = function() {Sthan_search("वाकी, आष्टी, बीड")};
document.getElementById("पारेगाव, आष्टी, बीड").onclick = function() {Sthan_search("पारेगाव, आष्टी, बीड")};
document.getElementById("मिरजगाव, कर्जत, अहमदनगर").onclick = function() {Sthan_search("मिरजगाव, कर्जत, अहमदनगर")};
document.getElementById("मंडनगाव, श्रीगोंदा, अहमदनगर").onclick = function() {Sthan_search("मंडनगाव, श्रीगोंदा, अहमदनगर")};
document.getElementById("अरणगाव, अहमदनगर").onclick = function() {Sthan_search("अरणगाव, अहमदनगर")};
document.getElementById("भिंगार, अहमदनगर").onclick = function() {Sthan_search("भिंगार, अहमदनगर")};
document.getElementById("नेप्ती, अहमदनगर").onclick = function() {Sthan_search("नेप्ती, अहमदनगर")};
document.getElementById("पारनेर, अहमदनगर").onclick = function() {Sthan_search("पारनेर, अहमदनगर")};
document.getElementById("लोणी, अहमदनगर").onclick = function() {Sthan_search("लोणी, अहमदनगर")};
document.getElementById("जामगाव, पारनेर, अहमदनगर").onclick = function() {Sthan_search("जामगाव, पारनेर, अहमदनगर")};
document.getElementById("नागापूर, अहमदनगर").onclick = function() {Sthan_search("नागापूर, अहमदनगर")};
document.getElementById("वांबोरी, राहुरी, अहमदनगर").onclick = function() {Sthan_search("वांबोरी, राहुरी, अहमदनगर")};
document.getElementById("आव्हाणे बु॥, शेवगाव, अहमदनगर").onclick = function() {Sthan_search("आव्हाणे बु॥, शेवगाव, अहमदनगर")};
document.getElementById("ममदापूर/बगडी, गंगापूर, औरंगाबाद").onclick = function() {Sthan_search("ममदापूर/बगडी, गंगापूर, औरंगाबाद")};
document.getElementById("नेवरगाव, गंगापूर, औरंगाबाद").onclick = function() {Sthan_search("नेवरगाव, गंगापूर, औरंगाबाद")};
document.getElementById("सुरेगाव, नेवासा, अहमदनगर").onclick = function() {Sthan_search("सुरेगाव, नेवासा, अहमदनगर")};
document.getElementById("गळनिंब").onclick = function() {Sthan_search("गळनिंब")};
document.getElementById("दुसरे गळनिंब, नेवासा, अहमदनगर").onclick = function() {Sthan_search("दुसरे गळनिंब, नेवासा, अहमदनगर")};
document.getElementById("वरखेड, नेवासा, अहमदनगर").onclick = function() {Sthan_search("वरखेड, नेवासा, अहमदनगर")};
document.getElementById("चाफडगाव, नेवासा, अहमदनगर").onclick = function() {Sthan_search("चाफडगाव, नेवासा, अहमदनगर")};
document.getElementById("जळगाव, पाथर्डी, अहमदनगर").onclick = function() {Sthan_search("जळगाव, पाथर्डी, अहमदनगर")};
document.getElementById("नागलवाडी, शेवगाव, अहमदनगर").onclick = function() {Sthan_search("नागलवाडी, शेवगाव, अहमदनगर")};
document.getElementById("चकलांबा, गेवराई, बीड").onclick = function() {Sthan_search("चकलांबा, गेवराई, बीड")};
document.getElementById("शेकटा, गेवराई, बीड").onclick = function() {Sthan_search("शेकटा, गेवराई, बीड")};
document.getElementById("पारगाव(घोगस), गेवराई, बीड").onclick = function() {Sthan_search("पारगाव(घोगस), गेवराई, बीड")};
document.getElementById("खरवंडी(कासार), पाथर्डी, अहमदनगर").onclick = function() {Sthan_search("खरवंडी(कासार), पाथर्डी, अहमदनगर")};
document.getElementById("भेटीचा वड, पाथर्डी, अहमदनगर").onclick = function() {Sthan_search("भेटीचा वड, पाथर्डी, अहमदनगर")};
document.getElementById("येळी, पाथर्डी, अहमदनगर").onclick = function() {Sthan_search("येळी, पाथर्डी, अहमदनगर")};
document.getElementById("येळीमार्गी, पाथर्डी, अहमदनगर").onclick = function() {Sthan_search("येळीमार्गी, पाथर्डी, अहमदनगर")};
document.getElementById("भोकर, श्रीरामपुर, अहमदनगर").onclick = function() {Sthan_search("भोकर, श्रीरामपुर, अहमदनगर")};
document.getElementById("बेलापूर, श्रीरामपुर, अहमदनगर").onclick = function() {Sthan_search("बेलापूर, श्रीरामपुर, अहमदनगर")};
function Sthan_search(search_text){
$.getJSON('https://galacticmaster.github.io/lilacharitra/fullch.json', function(jd)
	{var json = jd.main
				//console.log(json);
				let search_field = search_text;
				//console.log(search_field);
				var myHTML = "";
				//console.log(search_field);
				//console.log(json.length);
				for (let i = 0; i < json.length; i++)
				{
					//console.log(json[i].Aadi);
					let Aadi = json[i].Aadi;
					let Lila = json[i].Lila;
					//console.log(Aadi);
					let result = Aadi.includes(search_field);
					console.log(Aadi);
					console.log(result);
					if (result){
					myHTML += '<h3 style="color:DodgerBlue;">' + (json[i].Aadi) + '</h3>'
					myHTML += '<p style="color:MediumSeaGreen;">' + (json[i].Lila) + '</p>'
					//console.log(result);
					}
				document.getElementById("pagesix").innerHTML = myHTML;
				}
				//console.log(myHTML);
				
				})
			}
/*
function findElementID() {
        var sname = document.getElementById('sthan').children;
        // Loop through all the child elements inside the parent DIV.
        for (let i = 0; i <= sname.length - 1; i++) {
            console.log(sname[i].id);
			Sthan_search(sname[i].id);
        }
}
findElementID()
*/
/** Bhavsmran function **/

document.getElementById("Shrimurti").onclick = function() {bhavsmran("Shrimurti")};
document.getElementById("Shricharan").onclick = function() {bhavsmran("Shricharan")};
document.getElementById("Charnodak").onclick = function() {bhavsmran("Charnodak")};
document.getElementById("Tulsi Vahane").onclick = function() {bhavsmran("Tulsi Vahane")};
document.getElementById("Gati").onclick = function() {bhavsmran("Gati")};
document.getElementById("Lavlavuni").onclick = function() {bhavsmran("Lavlavuni")};
document.getElementById("Shri Charnicha Angutha").onclick = function() {bhavsmran("Shri Charnicha Angutha")};
document.getElementById("Janu Vibhag").onclick = function() {bhavsmran("Janu Vibhag")};
document.getElementById("Gudage").onclick = function() {bhavsmran("Gudage")};
document.getElementById("Mandia").onclick = function() {bhavsmran("Mandia")};
document.getElementById("Jagan Pradeshu").onclick = function() {bhavsmran("Jagan Pradeshu")};
document.getElementById("Udar").onclick = function() {bhavsmran("Udar")};
document.getElementById("Vaksh Sthal").onclick = function() {bhavsmran("Vaksh Sthal")};
document.getElementById("Kshemalingan").onclick = function() {bhavsmran("Kshemalingan")};
document.getElementById("Bhatobas Kshemalingan").onclick = function() {bhavsmran("Bhatobas Kshemalingan")};
document.getElementById("Mahadaisa Kshemalingan").onclick = function() {bhavsmran("Mahadaisa Kshemalingan")};
document.getElementById("Avusa Khemalingan").onclick = function() {bhavsmran("Avusa Khemalingan")};
document.getElementById("Upadhya Khsem…").onclick = function() {bhavsmran("Upadhya Khsem…")};
document.getElementById("Dadosa Kshem…").onclick = function() {bhavsmran("Dadosa Kshem…")};
document.getElementById("Bahupradesh").onclick = function() {bhavsmran("Bahupradesh")};
document.getElementById("Shrikar kamal").onclick = function() {bhavsmran("Shrikar kamal")};
document.getElementById("Shrikare Dakhavane").onclick = function() {bhavsmran("Shrikare Dakhavane")};
document.getElementById("shrikare spashane").onclick = function() {bhavsmran("shrikare spashane")};
document.getElementById("kaandyavari shrikar ghaalane").onclick = function() {bhavsmran("kaandyavari shrikar ghaalane")};
document.getElementById("pati sparshane").onclick = function() {bhavsmran("pati sparshane")};
document.getElementById("pativari shrikaru dene").onclick = function() {bhavsmran("pativari shrikaru dene")};
document.getElementById("shrikare anukaar").onclick = function() {bhavsmran("shrikare anukaar")};
document.getElementById("Angulia").onclick = function() {bhavsmran("Angulia")};
document.getElementById("Shrikar… Anguliecha anukar").onclick = function() {bhavsmran("Shrikar… Anguliecha anukar")};
document.getElementById("Angutha").onclick = function() {bhavsmran("Angutha")};
document.getElementById("Karanguli").onclick = function() {bhavsmran("Karanguli")};
document.getElementById("Shrikanth").onclick = function() {bhavsmran("Shrikanth")};
document.getElementById("Hanuvathi").onclick = function() {bhavsmran("Hanuvathi")};
document.getElementById("ShriMukh").onclick = function() {bhavsmran("ShriMukh")};
document.getElementById("Ikhit Hasya").onclick = function() {bhavsmran("Ikhit Hasya")};
document.getElementById("Hasya Swikar").onclick = function() {bhavsmran("Hasya Swikar")};
document.getElementById("Harsh Swikar").onclick = function() {bhavsmran("Harsh Swikar")};
document.getElementById("Tali Vajavane").onclick = function() {bhavsmran("Tali Vajavane")};
document.getElementById("Kautuk").onclick = function() {bhavsmran("Kautuk")};
document.getElementById("Vinod").onclick = function() {bhavsmran("Vinod")};
document.getElementById("Parihaas").onclick = function() {bhavsmran("Parihaas")};
document.getElementById("Vipalane").onclick = function() {bhavsmran("Vipalane")};
document.getElementById("Tokhane").onclick = function() {bhavsmran("Tokhane")};
document.getElementById("Abhaydan").onclick = function() {bhavsmran("Abhaydan")};
document.getElementById("Varpradan").onclick = function() {bhavsmran("Varpradan")};
document.getElementById("Tambul Prasad dan").onclick = function() {bhavsmran("Tambul Prasad dan")};
document.getElementById("Shrimukhichi Pick").onclick = function() {bhavsmran("Shrimukhichi Pick")};
document.getElementById("Prashansa").onclick = function() {bhavsmran("Prashansa")};
document.getElementById("Sambokhan").onclick = function() {bhavsmran("Sambokhan")};
document.getElementById("Shikshapan").onclick = function() {bhavsmran("Shikshapan")};
document.getElementById("Kopane").onclick = function() {bhavsmran("Kopane")};
document.getElementById("Nirakaran").onclick = function() {bhavsmran("Nirakaran")};
document.getElementById("DantaPankti").onclick = function() {bhavsmran("DantaPankti")};
document.getElementById("Nasaput").onclick = function() {bhavsmran("Nasaput")};
document.getElementById("ShriNetra").onclick = function() {bhavsmran("ShriNetra")};
document.getElementById("ShriNetranukar").onclick = function() {bhavsmran("ShriNetranukar")};
document.getElementById("Bhrubhang").onclick = function() {bhavsmran("Bhrubhang")};
document.getElementById("shrimukhe shrikare shrimugute anukar").onclick = function() {bhavsmran("shrimukhe shrikare shrimugute anukar")};
document.getElementById("shrimukhe shrikare shrinetre tithi kakusahit varile").onclick = function() {bhavsmran("shrimukhe shrikare shrinetre tithi kakusahit varile")};
document.getElementById("Pristhviuvhagu").onclick = function() {bhavsmran("Pristhviuvhagu")};
document.getElementById("Karnaygal").onclick = function() {bhavsmran("Karnaygal")};
document.getElementById("Lalhat").onclick = function() {bhavsmran("Lalhat")};
document.getElementById("Shrimugut").onclick = function() {bhavsmran("Shrimugut")};
document.getElementById("Shrimugute Anunnya").onclick = function() {bhavsmran("Shrimugute Anunnya")};
document.getElementById("Shrimugut Manile").onclick = function() {bhavsmran("Shrimugut Manile")};
document.getElementById("Shrimugute Nirakaran").onclick = function() {bhavsmran("Shrimugute Nirakaran")};
document.getElementById("Sthiti Pradan").onclick = function() {bhavsmran("Sthiti Pradan")};
document.getElementById("Bhatobas Stithi").onclick = function() {bhavsmran("Bhatobas Stithi")};
document.getElementById("Nathoba Stithi").onclick = function() {bhavsmran("Nathoba Stithi")};
document.getElementById("Ausa Stithi").onclick = function() {bhavsmran("Ausa Stithi")};
document.getElementById("Dayamba stithi").onclick = function() {bhavsmran("Dayamba stithi")};
document.getElementById("Dadosa Stithi").onclick = function() {bhavsmran("Dadosa Stithi")};
document.getElementById("SarangPandita Stithi").onclick = function() {bhavsmran("SarangPandita Stithi")};
document.getElementById("Cheshta").onclick = function() {bhavsmran("Cheshta")};
document.getElementById("Cheshta Pradhan Lila").onclick = function() {bhavsmran("Cheshta Pradhan Lila")};
document.getElementById("Prasanatechya Lila").onclick = function() {bhavsmran("Prasanatechya Lila")};
document.getElementById("Dukh Nivruti").onclick = function() {bhavsmran("Dukh Nivruti")};
document.getElementById("GrahoNivruti").onclick = function() {bhavsmran("GrahoNivruti")};
document.getElementById("Deepan Shakti").onclick = function() {bhavsmran("Deepan Shakti")};
document.getElementById("Paditaline").onclick = function() {bhavsmran("Paditaline")};
document.getElementById("Vaat Pahane").onclick = function() {bhavsmran("Vaat Pahane")};
document.getElementById("Bolavu Dhadane").onclick = function() {bhavsmran("Bolavu Dhadane")};
document.getElementById("Kshudha Swikaru").onclick = function() {bhavsmran("Kshudha Swikaru")};
document.getElementById("Trisha Swikar").onclick = function() {bhavsmran("Trisha Swikar")};
document.getElementById("Utakantha Swikar").onclick = function() {bhavsmran("Utakantha Swikar")};
document.getElementById("Shram Swikar").onclick = function() {bhavsmran("Shram Swikar")};
document.getElementById("Chinta Swikar").onclick = function() {bhavsmran("Chinta Swikar")};
document.getElementById("Rahavane").onclick = function() {bhavsmran("Rahavane")};
document.getElementById("Pathavane").onclick = function() {bhavsmran("Pathavane")};
document.getElementById("Khel").onclick = function() {bhavsmran("Khel")};
document.getElementById("Vrukshastahli Asan").onclick = function() {bhavsmran("Vrukshastahli Asan")};
document.getElementById("Vadatali Asan").onclick = function() {bhavsmran("Vadatali Asan")};
document.getElementById("Sondivari Asan").onclick = function() {bhavsmran("Sondivari Asan")};
document.getElementById("Vidnyan").onclick = function() {bhavsmran("Vidnyan")};
document.getElementById("Jholi Pradan").onclick = function() {bhavsmran("Jholi Pradan")};
document.getElementById("Jholi Drishtput").onclick = function() {bhavsmran("Jholi Drishtput")};
document.getElementById("Pravaruti Vishayo Jhale").onclick = function() {bhavsmran("Pravaruti Vishayo Jhale")};
document.getElementById("Vela Tinhi").onclick = function() {bhavsmran("Vela Tinhi")};
document.getElementById("Por kaise latike").onclick = function() {bhavsmran("Por kaise latike")};
document.getElementById("Tryinchya Vedh").onclick = function() {bhavsmran("Tryinchya Vedh")};
document.getElementById("Pushti Arohan").onclick = function() {bhavsmran("Pushti Arohan")};
document.getElementById("Doni Arohan").onclick = function() {bhavsmran("Doni Arohan")};
document.getElementById("Prakash Darshan").onclick = function() {bhavsmran("Prakash Darshan")};
document.getElementById("Ashyaryachi Pahud").onclick = function() {bhavsmran("Ashyaryachi Pahud")};
document.getElementById("Putratva swikar").onclick = function() {bhavsmran("Putratva swikar")};
document.getElementById("Mahapuja").onclick = function() {bhavsmran("Mahapuja")};
document.getElementById("Vyatikrame Puja").onclick = function() {bhavsmran("Vyatikrame Puja")};
document.getElementById("Adrishya hone").onclick = function() {bhavsmran("Adrishya hone")};
document.getElementById("Mrut Jivavane").onclick = function() {bhavsmran("Mrut Jivavane")};
document.getElementById("Plavane").onclick = function() {bhavsmran("Plavane")};
document.getElementById("Amabe Praveshan").onclick = function() {bhavsmran("Amabe Praveshan")};
document.getElementById("Kele Praveshan").onclick = function() {bhavsmran("Kele Praveshan")};
document.getElementById("Bor Praveshan").onclick = function() {bhavsmran("Bor Praveshan")};
document.getElementById("Audashya").onclick = function() {bhavsmran("Audashya")};
document.getElementById("Anbhasha bolane").onclick = function() {bhavsmran("Anbhasha bolane")};
document.getElementById("Gayan Nishedh").onclick = function() {bhavsmran("Gayan Nishedh")};


function bhavsmran(search_text){
console.log(search_text);
$.getJSON('http://127.0.0.1:8000/person.json', function(jd)
	{var json = jd.main
				let search_field = search_text;
				var myHTML = "";
				for (let i = 1; i < json.length; i++)
				{
					let avyav = json[i].avyav
					console.log(avyav);
					for (let a = 0; a < avyav.length; a++){
					console.log(typeof(search_field));
					console.log(typeof(avyav[a]));
					console.log(avyav[a] === search_field);
					//let result = avyav[a].includes(search_field);
						let result = avyav[a] === search_field;
						if (result){
						myHTML += '<h3 style="color:DodgerBlue;">' + (json[i].Aadi) + '</h3>'
						myHTML += '<h3 style="color:DodgerBlue;">' + (avyav) + '</h3>'
						myHTML += '<p style="color:MediumSeaGreen;">' + (json[i].Lila) + '</p>'
					
						}
					}
				document.getElementById("pagesix").innerHTML = myHTML;
				}
				//console.log(myHTML);
				
				})
			}
