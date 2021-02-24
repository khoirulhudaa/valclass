if (document.querySelector('.v-office-word')) {
    for (var i = 0; i <= document.querySelectorAll('.v-office-word').length; i++) {
        document.querySelectorAll('.v-office-word')[i].innerText = 'Download word'
        document.querySelectorAll('.v-office-word')[i].addEventListener('click', () => {
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                "xmlns='http://www.w3.org/TR/REC-html40'>" +
                "<head><meta charset='utf-8'><title>Export data table to Word Document with Valclass Framework</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header + document.querySelector('.v-template-word').innerHTML + footer;

            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            const fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = 'document.doc';
            fileDownload.click();
            document.body.removeChild(fileDownload);
        })
    }
}