let style = `
.v-currency {
    border-radius: 3px;
    outline: none;
    width: 100%;
    margin: 10px 10px 10px 0;
    font-weight: normal;
    border-radius: 40px;
    border: none;
    outline: transparent;
    font-size: 19px;
    padding: 8px;
}
`
if (!document.querySelector('style').innerText.includes(style)) {
document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style))
}

var attr = document.querySelectorAll('.v-currency');
	var i;
	for(i = 0; i <= attr.length; i++) {
		var bilangan = document.querySelectorAll('.v-currency')[i].value;
		var preceded = document.querySelectorAll('.v-currency')[i].attributes.preceded.value;
		var number_string = bilangan.replace(/[^,\d]/g, '').toString(),
		split   		= number_string.split(','),
		sisa     		= split[0].length % 3,
		rupiah     		= split[0].substr(0, sisa),
		ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
	 
        if (ribuan) {
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
            document.querySelectorAll('.v-currency')[i].value = `${preceded}${rupiah}`
        }
	}