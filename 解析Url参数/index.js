function UrlSearchParams(url) {
	if (url.indexOf('?') !== -1) {
		let urlSearch = url.split('?')[1]
		let tmpObj = {}
		let strs = urlSearch.split('&');
		for (let i = 0; i < strs.length; i++) {
			tmpObj[strs[i].split('=')[0]] = strs[i].split('=')[1]
		}
		return tmpObj
	}
}



let url = "https://www.javascript.com/?foo=ab&bar=cd&cat=ddf"
console.log(UrlSearchParams(url))