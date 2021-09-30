if (document.querySelector('.v-office-excel')) {
    for (var i = 0; i <= document.querySelectorAll('.v-office-excel').length; i++) {
        document.querySelectorAll('.v-office-excel')[i].innerText = 'Download excel';
        document.querySelectorAll('.v-office-excel')[i].addEventListener('click', () => {
            var downloadLink;
            var dataType = 'application/vnd.ms-excel';
            var tableSelect = document.querySelector('.v-template-excel');
            var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

            filename = 'excel_data.xls';

            downloadLink = document.createElement("a");

            document.body.appendChild(downloadLink);

            if (navigator.msSaveOrOpenBlob) {
                var blob = new Blob(['\ufeff', tableHTML], {
                    type: dataType
                });
                navigator.msSaveOrOpenBlob(blob, filename);
            } else {
                downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

                downloadLink.download = filename;

                downloadLink.click();
            }
        })
    }
}