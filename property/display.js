let propertiesDisplay = [
    'v-d-flex',
    'v-d-block',
    'v-d-flexbox',
    'v-d-inline',
    'v-d-table',
    'v-d-inline-flex',
    'v-d-inline-block',
    'v-d-inline-flexbox',
    'v-d-inline-table',
    'v-d-grid',
    'v-d-table-column-group',
    'v-d-table-footer-group',
    'v-d-table-header-group',
    'v-d-table-row',
    'v-d-table-cell',
    'v-d-table-column',
    'v-d-none',
    'v-d-flow-root'
]
let valuesDisplay = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay.length; i++) {
    if (document.querySelector(`.${propertiesDisplay[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {
        let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesDisplay[i]} { 
                    ${valuesDisplay[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesDisplayX = [
    'v-d-show-mobile',
    'v-d-show-tablet',
    'v-d-show-normal',
    'v-d-show-pc',
    'v-d-hidden-mobile',
    'v-d-hidden-tablet',
    'v-d-hidden-normal',
    'v-d-hidden-pc',
]
let valuesDisplayX = [
    `
   @media screen and (max-width: 600px) {
      .v-d-show-mobile {
          display: inline;
      }
    }
   @media screen and (min-width: 601px) {
        .v-d-show-mobile {
          display: none;
        } 
    }
    `,
    `
   @media screen and (min-width: 320px) and (max-width: 600px) {
      .v-d-show-tablet {
          display: none;
      }
    };
   @media screen and (min-width: 601px) and (max-width: 901px) {
      .v-d-show-tablet {
          display: inline;
      }
    }
   @media screen and (min-width: 902px) {
        .v-d-show-tablet {
          display: none;
        } 
    }
    `,
    `
   @media screen and (min-width: 320px) and (max-width: 600px) {
      .v-d-show-normal {
          display: none;
      }
    }
   @media screen and (min-width: 601px) and (max-width: 901px) {
      .v-d-show-normal {
          display: none;
      }
    }
   @media screen and (min-width: 902px) and (max-width: 1921px) {
        .v-d-show-normal {
          display: inline;
        } 
    }
   @media screen and (min-width: 1922px) {
        .v-d-show-normal {
          display: none;
        } 
    }`
    ,
    `
   @media screen and (min-width: 320px) and (max-width: 1918px) {
      .v-d-show-pc {
          display: none;
      }
    }
   @media screen and (min-width: 1920px) {
        .v-d-show-pc {
          display: inline;
        } 
    }
    `,
    `
   @media screen and (max-width: 600px) {
      .v-d-show-mobile {
          display: none;
      }
    }
   @media screen and (min-width: 601px) {
        .v-d-show-mobile {
          display: inline;
        } 
    }
    `,
    `
   @media screen and (min-width: 320px) and (max-width: 600px) {
      .v-d-show-tablet {
          display: inline;
      }
    }
   @media screen and (min-width: 601px) and (max-width: 901px) {
      .v-d-show-tablet {
          display: none;
      }
    }
   @media screen and (min-width: 902px) {
        .v-d-show-tablet {
          display: inline;
        } 
    }
    `,
    `
   @media screen and (min-width: 320px) and (max-width: 600px) {
      .v-d-show-normal {
          display: inline;
      }
    }
   @media screen and (min-width: 601px) and (max-width: 901px) {
      .v-d-show-normal {
          display: inline;
      }
    }
   @media screen and (min-width: 902px) and (max-width: 1921px) {
        .v-d-show-normal {
          display: none;
        } 
    }
   @media screen and (min-width: 1922px) {
        .v-d-show-normal {
          display: inline;
        } 
    }`
    ,
    `
   @media screen and (min-width: 320px) and (max-width: 1918px) {
      .v-d-show-pc {
          display: inline;
      }
    }
   @media screen and (min-width: 1920px) {
        .v-d-show-pc {
          display: none;
        } 
    }
    `,
]

for (var i = 0; i <= propertiesDisplayX.length; i++) {
    if (document.querySelector(`.${propertiesDisplayX[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplayX[i])) {
        let styles = ` 
                ${valuesDisplayX[i]}
                `
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesDisplay2 = [
    'mb_.v-d-flex',
    'mb_.v-d-block',
    'mb_.v-d-flexbox',
    'mb_.v-d-inline',
    'mb_.v-d-table',
    'mb_.v-d-inline-flex',
    'mb_.v-d-inline-block',
    'mb_.v-d-inline-flexbox',
    'mb_.v-d-inline-table',
    'mb_.v-d-grid',
    'mb_.v-d-table-column-group',
    'mb_.v-d-table-footer-group',
    'mb_.v-d-table-header-group',
    'mb_.v-d-table-row',
    'mb_.v-d-table-cell',
    'mb_.v-d-table-column',
    'mb_.v-d-none',
    'mb_.v-d-flow-root'
]
let valuesDisplay2 = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay2.length; i++) {
    if (document.querySelector(`.${propertiesDisplay2[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay2[i])) {
        let styles = ` 
            .${propertiesDisplay2[i]} { 
                ${valuesDisplay2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesDisplay2[i]} { 
                    ${valuesDisplay2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesDisplay3 = [
    'tb_.v-d-flex',
    'tb_.v-d-block',
    'tb_.v-d-flexbox',
    'tb_.v-d-inline',
    'tb_.v-d-table',
    'tb_.v-d-inline-flex',
    'tb_.v-d-inline-block',
    'tb_.v-d-inline-flexbox',
    'tb_.v-d-inline-table',
    'tb_.v-d-grid',
    'tb_.v-d-table-column-group',
    'tb_.v-d-table-footer-group',
    'tb_.v-d-table-header-group',
    'tb_.v-d-table-row',
    'tb_.v-d-table-cell',
    'tb_.v-d-table-column',
    'tb_.v-d-none',
    'tb_.v-d-flow-root'
]
let valuesDisplay3 = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay3.length; i++) {
    if (document.querySelector(`.${propertiesDisplay3[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay3[i])) {
        let styles = ` 
            .${propertiesDisplay3[i]} { 
                ${valuesDisplay3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesDisplay3[i]} { 
                    ${valuesDisplay3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesDisplay4 = [
    'pc_.v-d-flex',
    'pc_.v-d-block',
    'pc_.v-d-flexbox',
    'pc_.v-d-inline',
    'pc_.v-d-table',
    'pc_.v-d-inline-flex',
    'pc_.v-d-inline-block',
    'pc_.v-d-inline-flexbox',
    'pc_.v-d-inline-table',
    'pc_.v-d-grid',
    'pc_.v-d-table-column-group',
    'pc_.v-d-table-footer-group',
    'pc_.v-d-table-header-group',
    'pc_.v-d-table-row',
    'pc_.v-d-table-cell',
    'pc_.v-d-table-column',
    'pc_.v-d-none',
    'pc_.v-d-flow-root'
]
let valuesDisplay4 = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay4.length; i++) {
    if (document.querySelector(`.${propertiesDisplay4[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay4[i])) {
        let styles = ` 
            .${propertiesDisplay4[i]} { 
                ${valuesDisplay4[i]}
            }
            @media screen and (min-width: 1920px){
                .${propertiesDisplay4[i]} { 
                    ${valuesDisplay4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}