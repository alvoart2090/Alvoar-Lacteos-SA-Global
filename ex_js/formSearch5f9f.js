function formSearch(search_value){
	if (search_value.length >= 1)
	{
		str = 	encodeURIComponent(search_value);
		str = str.replace(/\//g, "");
		//str = str.replace(/&/g, "(and)");
		var language=document.documentElement.lang;
		if (language=='zh-Hans') {
			language='cn';
		}
		if (language=='en') {
			language='en';
		}
		if (language=='ms') {
			language='bm';
		}
		if (language=='ja') {
			language='jp';
		}
		if (language=='th') {
			language='th';
		}
		if (language=='id') {
			language='id';
		}
		var str = language+"/search/search_name/"+str+"/pn/1/";	
		location.pathname = str;
	}
return false;
}	
		
function searchResult(total_result){
	document.getElementById("div").innerHTML = total_result;
}