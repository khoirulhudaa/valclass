let propertiesImage= [
    `v-card-of-btn`,
    `v-card-of-zoom`
]

let valuesImage = [
    `
    .v-card-of-btn {
        position: relative;
        border-radius: 5px;
        margin: 20px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
    }

    .v-card-of-btn::after {
        transition: 0.3s;
        position: absolute;
        content: '';
        z-index: 3;
        width: 100%;
        height: 100%;
        background-color: rgba(39, 39, 39, 0);
        transition: 0.3s;
    }

    .v-card-of-btn:hover::after {
        position: absolute;
        content: '';
        z-index: 3;
        width: 100%;
        height: 100%;
        background-color: rgba(39, 39, 39, 0.493);
        transition: 0.3s;
    }

    .v-card-full-images {
        position: relative;
        width: 100%;
        height: 100%;
        transition: 0.4s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        overflow: hidden;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .v-card-full-images img {
        width: 100%;
        height: 100%;
        transition: 0.4s;
    }

    .v-btn-hover-on {
        position: absolute;
        opacity: 0;
        margin: auto;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        border: none;
        font-size: 25px;
        outline: none;
        padding: 3px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
            0 2px 2px rgba(0,0,0,0.15), 
            0 4px 4px rgba(0,0,0,0.15), 
            0 8px 8px rgba(0,0,0,0.15);

        z-index: 1;
        transition: 0.5s;
        transform: scale(0.6)

    }

    .v-card-of-btn:hover .v-btn-hover-on {
        position: absolute;
        transition: 0.5s;
        opacity: 1;
        transform: scale(1);
        z-index: 6;
    }

    .v-btn-hover-on:hover {
        transition: 0.3s;
        filter: brightness(95%);
    }
    `,
    `
    .v-card-of-zoom {
        position: relative;
        border-radius: 5px;
        margin: 20px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
    }

    .v-card-full-images {
        position: relative;
        width: 100%;
        height: 100%;
        transition: 0.4s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        overflow: hidden;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .v-card-full-images img {
        width: 100%;
        height: 100%;
        transition: 0.4s;
    }

    .v-card-of-zoom:hover img {
        transform: scale(1.2);
        transition: 0.8s;
    }
    `
];
for (var i = 0; i <= propertiesImage.length; i++) {
    if (document.querySelector(`.${propertiesImage[i]}`) && !document.querySelector('style').innerText.includes(propertiesImage[i])) {
        let styles = ` 
            .${propertiesImage[i]} { 
                ${valuesImage[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}