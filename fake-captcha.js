// ==UserScript==
// @name         Verify You Are Human
// @namespace    http://tampermonkey.net/
// @version      1.2.0
// @description  Cloudflare Tunnel Security + Google reCAPTCHA Challange
// @author       Cloudflare, Google
// @match        https://islamansiklopedisi.org.tr/*
// @match        https://www.ensonhaber.com/*
// @match        https://www.ahaber.com.tr/*
// @match        https://www.haber7.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/150px-RecaptchaLogo.svg.png
// @grant        none
// ==/UserScript==

// MIT License

// Copyright (C) 2025 MuKonqi

// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


class Config { // Do not forget to set this!
    static cooldown = 46; // Cooldown for auto captcha and cooldown / 2 for manuel captcha in miliseconds

    static validity = 230; // Validity for challange in seconds

    static pinterestLink = "https://bn.bloat.cat/image_proxy.php?url="; // I just added this because Pinterest is blocked at my school.

    static activecategories = [ // There must be at least one
        "Cami",
        "İnsan"
    ]

    static categories = {
        "__others__": [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg/330px-Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Yosemite_El_Capitan.jpg/330px-Yosemite_El_Capitan.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Fourteen_traffic_lights.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Fire_Engine_33_%286225707251%29.jpg/330px-Fire_Engine_33_%286225707251%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg/330px-Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Downtown_Charlottesville_fire_hydrant.jpg/250px-Downtown_Charlottesville_fire_hydrant.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pune_green_bus.jpg/250px-Pune_green_bus.jpg"
        ], // Do not change __others__'s name or do not delete it! The images here will never be correct image for reCAPTCHA.
        "Cami": [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg/330px-Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg/330px-Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/330px-Hagia_Sophia_Mars_2013.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Gaspare_Fossati_-_Louis_Haghe_-_Vue_g%C3%A9n%C3%A9rale_de_la_grande_nef%2C_en_regardant_l%27occident_%28Hagia_Sophia_-_Ayasofya_Mosque_nave%29.jpg/250px-Gaspare_Fossati_-_Louis_Haghe_-_Vue_g%C3%A9n%C3%A9rale_de_la_grande_nef%2C_en_regardant_l%27occident_%28Hagia_Sophia_-_Ayasofya_Mosque_nave%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Istanbul_asv2020-02_img62_Ortak%C3%B6y_Mosque.jpg/330px-Istanbul_asv2020-02_img62_Ortak%C3%B6y_Mosque.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg/330px-Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Istanbul_asv2021-10_img12_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg/250px-Istanbul_asv2021-10_img12_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mezquita_Azul%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-30%2C_DD_48-50_HDR.jpg/250px-Mezquita_Azul%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-30%2C_DD_48-50_HDR.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mezquita_de_Solim%C3%A1n%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_147-149_HDR.jpg/330px-Mezquita_de_Solim%C3%A1n%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_147-149_HDR.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Panoramic_view_of_Istanbul-_Yeni_Cami_%28The_New_Mosque%29%2C_Galata_Bridge._Turkey%2C_Southeastern_Europe.jpg/330px-Panoramic_view_of_Istanbul-_Yeni_Cami_%28The_New_Mosque%29%2C_Galata_Bridge._Turkey%2C_Southeastern_Europe.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sultan_Ahmet_Mosque_February_2013.jpg/250px-Sultan_Ahmet_Mosque_February_2013.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/TR_Izmir_asv2020-02_img57_Salep%C3%A7io%C4%9Flu_Mosque.jpg/250px-TR_Izmir_asv2020-02_img57_Salep%C3%A7io%C4%9Flu_Mosque.jpg"
        ],
        "İnsan": [
            `${Config.pinterestLink}https://i.pinimg.com/736x/94/32/95/9432954418f607af26c6bd5f0c3e5db3.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/24/27/7f/24277ff1beed4aede21717ea389b0611.jpg`,
            `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPUk0oDBJkRG-Frn1MXLyqXAfGAcSKSYpkcjXWZbO9SDtipVvk`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/c0/9c/cd/c09ccd0e1d36aed1953573dc73ae9180.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/236x/09/65/7a/09657ad73902dfd45071653b2c3eed3a.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/33/d9/8b/33d98b14ccc1d6e2e879575cc82fc02b.jpg`
        ]
    };

    static title = "Bir dakika lütfen...";

    static label = "İnsan olduğunuz doğrulanıyor. Bu işlem birkaç saniye sürebilir.";

    static verifying = "Doğrulanıyor...";

    static tryAgain = "Tekrar deneyin";

    static privacy = "Gizlilik";

    static terms = "Koşullar";

    static select = "içeren tüm resimleri seçin";

    static tryAgainLater = "Lütfen daha sonra tekrar deneyin.";

    static error = "Lütfen tüm eşleşen resimleri seçin.";

    static help = "Kullanıcı arayüzünün üst tarafında yer alan metinde tasvir edilen veya resimde görülen nesneyi içeren her resmi seçin. Ardından, Doğrula'yı tıklayın. Yeni bir reCAPTCHA testi istemek için yeniden yükle simgesini tıklayın.";

    static learnMore = "Daha fazla bilgi edinin.";

    static description = `${window.location.hostname} adresinin devam etmeden önce bağlantınızın güvenliğini gözden geçirmesi gerekiyor.`;

    static footer = "Bu sitenin performansı ve güvenliği <a target='_blank' href='https://www.cloudflare.com/'>Cloudfare</a> tarafından sağlanmaktadır";

    static verifyYou = "Gerçek kişi olduğunuzu\ndoğrulayın";

    static captchaHeader = 1; // In Turkish the item to be selected is at the top, while in English it is at the bottom. 0 for bottom, 1 for top.
}


class Cookies {
    constructor() {
        this.currentDate = new Date();

        this.challangeDate = new Date();

        this.challangeDateCookie = document.cookie.split("; ").find((row) => row.startsWith("challangeDate="))?.split("=")[1];

        if (this.challangeDateCookie !== undefined) {
            this.challangeDate = new Date(this.challangeDateCookie);
        }
    }

    get continue() {
        return (((this.currentDate.getTime() - this.challangeDate.getTime()) / 1000)) >= Config.validity || this.challangeDateCookie === undefined
    }
}


class Main {
    constructor() {
        this.focusToLink = this.focusToLink.bind(this);
        this.unfocusToLink = this.unfocusToLink.bind(this);

        document.querySelectorAll('style, link[rel="stylesheet"]').forEach(css => css.remove());

        for (let element of document.body.getElementsByTagName("*")) {
            element.style.display = "none";
        }

        document.title = Config.title;

        document.documentElement.style.fontFamily = "Calibri, sans-serif";

        document.documentElement.style.backgroundColor = "#222";

        document.body.style.fontFamily = "Calibri, sans-serif";

        document.body.backgroundColor = "#222";

        document.body.style.margin = "0";

        this.body = document.createElement("div");
        this.body.style.width = "100%";
        this.body.style.height = "100%";
        this.body.style.top = "0";
        this.body.style.right = "0";
        this.body.style.bottom = "0px";
        this.body.style.left = "0";
        this.body.style.margin = "0";
        this.body.style.padding = "0";
        this.body.style.boxSizing = "border-box";
        this.body.style.flexDirection = "column";
        this.body.style.flex = "1";
        this.body.style.alignItems = "center";
        this.body.style.display = "flex";
        this.body.style.position = "sticky";
        this.body.style.backgroundColor = "#222";
        this.body.style.color = "#d9d9d9";
        document.body.appendChild(this.body);

        this.frame = document.createElement("div");
        this.frame.style.width = "100%";
        this.frame.style.maxWidth = "60rem";
        this.frame.style.margin = "8rem auto";
        this.frame.style.paddingLeft = "1.5rem";
        this.frame.style.paddingRight = "1.5rem";
        this.body.appendChild(this.frame);

        this.name = document.createElement("h1");
        this.name.style.textAlign = "left";
        this.name.style.fontSize = "2.5rem";
        this.name.style.fontWeight = "900";
        this.name.style.lineHeight = "3.75rem";
        this.name.innerText = window.location.hostname;
        this.frame.appendChild(this.name);

        this.label = document.createElement("p");
        this.label.style.fontSize = "1.5rem";
        this.label.style.fontWeight = "900";
        this.label.style.lineHeight = "3.75rem";
        this.label.style.marginTop = "0";
        this.label.style.marginBottom = "2rem";
        this.label.innerText = Config.label;
        this.frame.appendChild(this.label);

        this.box = document.createElement("div");
        this.box.style.width = "300px"
        this.box.style.height = "65px";
        this.box.style.display = "flex";
        this.box.style.border = "1px solid #e0e0e0";
        this.box.style.alignItems = "center";
        this.box.style.backgroundColor = "#232323";
        this.box.style.borderColor = "#797979";
        this.frame.appendChild(this.box);

        this.description = document.createElement("div");
        this.description.style.marginTop = "4rem";
        this.description.style.fontSize = "1.5rem";
        this.description.style.lineHeight = "2.25rem";
        this.description.innerText = Config.description;
        this.frame.append(this.description);

        this.footer = document.createElement("div");
        this.footer.style.width = "100%";
        this.footer.style.maxWidth = "60rem";
        this.footer.style.maxHeight = "80px";
        this.footer.style.margin = "auto 0px 0px 0px";
        this.footer.style.paddingLeft = "1.5rem";
        this.footer.style.paddingRight = "1.5rem";
        this.footer.style.boxSizing = "border-box";
        this.footer.style.flexDirection = "column";
        this.footer.style.flex = "1";
        this.footer.style.alignItems = "center";
        this.footer.style.display = "flex";
        this.footer.style.backgroundColor = "#222";
        this.footer.style.color = "#d9d9d9";
        this.footer.style.borderTop = "1px solid #d9d9d9";
        this.footer.style.textAlign = "center";
        this.footer.style.fontSize = ".75rem";
        this.footer.style.lineHeight = "1.125rem";
        this.body.appendChild(this.footer)

        let rayId = "";
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 15; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            rayId += characters.charAt(randomInd);
        }

        this.rayIdText = document.createElement("p");
        this.rayIdText.style.marginBottom = "0";
        this.rayIdText.innerHTML = `Ray ID: <code>9${rayId}</code>`;
        this.footer.appendChild(this.rayIdText);

        this.information = document.createElement("p");
        this.information.innerHTML = Config.footer;
        this.footer.appendChild(this.information);

        this.link = this.information.getElementsByTagName("a").item(0);
        this.link.style.color = "#fff";
        this.link.addEventListener("mouseover", this.focusToLink);
        this.link.addEventListener("mouseleave", this.unfocusToLink);
    }

    focusToLink() {
        this.link.style.color = "#F48120";
        this.link.style.textDecoration = "underline";
    }

    unfocusToLink() {
        this.link.style.color = "#fff";
        this.link.style.textDecoration = "none";
    }
}


class Tunnel {
    constructor(box, recaptcha) {
        this.change = this.change.bind(this);
        this.continue = this.continue.bind(this);

        this.box = box;
        this.recaptcha = recaptcha;

        this.status = 0;

        this.frame = document.createElement("div");
        this.frame.style.width = "100%"
        this.frame.style.height = "100%";
        this.frame.style.display = "flex";
        this.frame.style.alignItems = "center";
        this.box.append(this.frame);

        this.content = document.createElement("div");
        this.content.style.display = "flex";
        this.content.style.placeItems = "center";
        this.content.style.marginLeft = "16px";
        this.frame.append(this.content);

        this.checkbox = document.createElement("input");
        this.checkbox.style.width = "24px";
        this.checkbox.style.height = "24px";
        this.checkbox.style.cursor = "pointer";
        this.checkbox.style.visibility = "hidden";
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.addEventListener("change", this.change)
        this.content.append(this.checkbox);

        this.verifying = document.createElement("label");
        this.verifying.style.alignItems = "center";
        this.verifying.style.color = "#fff"
        this.verifying.style.marginLeft = "8px";
        this.verifying.innerText = Config.verifying;
        this.content.append(this.verifying);

        this.branding = document.createElement("div");
        this.branding.style.margin = "0px 16px 0px auto";
        this.branding.style.display = "grid";
        this.branding.style.textAlign = "right";
        this.frame.append(this.branding);

        this.cloudflare = document.createElement("a");
        this.cloudflare.setAttribute("target", "_blank");
        this.cloudflare.setAttribute("href", "https://www.cloudflare.com/application-services/products/turnstile/")
        this.branding.append(this.cloudflare);

        this.logo = document.createElement("img")
        this.logo.style.width = "72px";
        this.logo.style.height = "24px";
        this.logo.setAttribute("src", "https://cf-assets.www.cloudflare.com/slt3lc6tev37/fdh7MDcUlyADCr49kuUs2/5f780ced9677a05d52b05605be88bc6f/cf-logo-v-rgb.png")
        this.cloudflare.append(this.logo);

        this.links = document.createElement("div");
        this.links.style.display = "flex";
        this.links.style.justifyContent = "flex-end";
        this.links.style.fontSize = "8px";
        this.branding.append(this.links);

        this.privacy = document.createElement("a");
        this.privacy.setAttribute("target", "_blank");
        this.privacy.setAttribute("href", "https://www.cloudflare.com/privacypolicy/");
        this.privacy.style.textDecoration = "underline";
        this.privacy.style.color = "#bbbbbb";
        this.privacy.innerText = Config.privacy;
        this.links.appendChild(this.privacy)

        this.seperator = document.createElement("span");
        this.seperator.style.margin = "0px 2.3px";
        this.seperator.innerText = "•";
        this.links.append(this.seperator)

        this.terms = document.createElement("a");
        this.terms.setAttribute("target", "_blank");
        this.terms.setAttribute("href", "https://www.cloudflare.com/website-terms/");
        this.terms.style.textDecoration = "underline";
        this.terms.style.color = "#bbbbbb";
        this.terms.innerText = Config.terms;
        this.links.appendChild(this.terms);
    }

    change() {
        if (this.status === 1) {
            this.checkbox.style.visibility = "hidden";
            this.verifying.innerText = Config.verifying;

            setTimeout(this.continue, Config.cooldown / 2)

            this.status = 2;
        }

        else if (this.status === 2) {
            this.box.style.width = "400px";
            this.box.style.height = "582px";
            this.frame.style.display = "none";
            this.recaptcha.style.display = "flex";
        }
    }

    continue() {
        this.checkbox.checked = false;
        this.checkbox.style.visibility = "visible";
        this.verifying.innerText = Config.tryAgain;
    }

    start() {
        this.status = 1;
        this.checkbox.style.visibility = "visible";
        this.verifying.innerText = Config.verifyYou;
    }
}


class reCAPTCHA {
    constructor(box) {
        this.reset = this.reset.bind(this);
        this.message = this.message.bind(this);
        this.showHelp = this.showHelp.bind(this);
        this.verify = this.verify.bind(this);

        this.box = box;

        this.frame = document.createElement("div");
        this.frame.style.width = "100%"
        this.frame.style.height = "100%";
        this.frame.style.backgroundColor = "#fff";
        this.frame.style.border = "1px solid #a9a9a9";
        this.frame.style.display = "none";
        this.frame.style.flexDirection = "column";
        this.frame.style.alignContent = "center";
        this.frame.style.alignItems = "center";
        this.frame.style.justifyContent = "space-between";
        this.box.appendChild(this.frame);

        this.header = document.createElement("div");
        this.header.style.width = "100%";
        this.header.style.height = "115.6px";
        this.header.style.backgroundColor = "#1a73e8";
        this.header.style.alignContent = "center";
        this.header.style.alignItems = "center";
        this.frame.appendChild(this.header);

        this.texts = document.createElement("p");
        this.texts.style.margin = "24px";
        this.texts.style.float = "left";
        this.texts.style.fontSize = "16px";
        this.texts.style.color = "#fff";
        this.header.appendChild(this.texts);

        if (Config.captchaHeader === 0) {
            this.description = document.createElement("span");
            this.description.innerText = Config.select;
            this.texts.appendChild(this.description);

            this.texts.appendChild(document.createElement("br"));

            this.label = document.createElement("strong");
            this.label.style.fontSize = "24px";
            this.texts.appendChild(this.label);
        }

        else if (Config.captchaHeader === 1) {
            this.label = document.createElement("strong");
            this.label.style.fontSize = "24px";
            this.texts.appendChild(this.label);

            this.texts.appendChild(document.createElement("br"));

            this.description = document.createElement("span");
            this.description.innerText = Config.select;
            this.texts.appendChild(this.description);
        }

        this.example = document.createElement("img");
        this.example.style.height = "96px";
        this.example.style.aspectRatio = "1 / 1";
        this.example.style.margin = "9.8px 24px 9.8px auto";
        this.example.style.float = "right";
        this.example.style.border = "1px solid #fff";
        this.header.appendChild(this.example);

        this.images = document.createElement("div");
        this.images.style.width = "382px";
        this.images.style.height = "382px";
        this.images.style.margin = "auto";
        this.images.style.aspectRatio = "1 / 1";
        this.images.style.display = "grid";
        this.images.style.gap = "8px";
        this.images.style.gridTemplateColumns = "repeat(3, 1fr)";
        this.images.style.alignItems = "center";
        this.images.style.justifyItems = "center";
        this.frame.appendChild(this.images);

        this.text = document.createElement("p");
        this.text.style.display = "none";
        this.text.style.margin = "0px 0px 7px 0px";
        this.text.style.padding = "0px";
        this.text.style.textAlign = "center";
        this.text.style.color = "#d93025";
        this.text.style.fontSize = "14px";
        this.frame.appendChild(this.text);

        this.seperator = document.createElement("div");
        this.seperator.style.width = "100%";
        this.seperator.style.height = "4px";
        this.seperator.style.margin = "0px";
        this.seperator.style.backgroundColor = "#999999";
        this.frame.appendChild(this.seperator);

        this.footer = document.createElement("div");
        this.footer.style.width = "400px";
        this.footer.style.height = "60px";
        this.frame.appendChild(this.footer);

        this.controls = document.createElement("div");
        this.controls.style.height = "48px";
        this.controls.style.margin = "6px";
        this.controls.style.float = "left";
        this.controls.style.display = "flex";
        this.controls.style.alignItems = "center";
        this.footer.appendChild(this.controls);

        this.reload = document.createElement("img");
        this.reload.style.width = "32px";
        this.reload.style.height = "32px";
        this.reload.style.margin = "8px";
        this.reload.style.float = "left";
        this.reload.style.cursor = "pointer";
        this.reload.style.opacity = ".55";
        this.reload.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/refresh_2x.png");
        this.reload.addEventListener("click", this.reset);
        this.controls.appendChild(this.reload);

        this.audio = document.createElement("img");
        this.audio.style.width = "32px";
        this.audio.style.height = "32px";
        this.audio.style.margin = "8px";
        this.audio.style.float = "left";
        this.audio.style.cursor = "pointer";
        this.audio.style.opacity = ".55";
        this.audio.message = Config.tryAgainLater;
        this.audio.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/audio_2x.png");
        this.audio.addEventListener("click", this.message);
        this.controls.appendChild(this.audio);

        this.help = document.createElement("img");
        this.help.style.width = "32px";
        this.help.style.height = "32px";
        this.help.style.margin = "8px";
        this.help.style.float = "left";
        this.help.style.cursor = "pointer";
        this.help.style.opacity = ".55";
        this.help.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/info_2x.png");
        this.help.addEventListener("click", this.showHelp);
        this.controls.appendChild(this.help);

        this.button = document.createElement("div");
        this.button.style.width = "100px";
        this.button.style.height = "42px";
        this.button.style.margin = "9px 8px 9px auto";
        this.button.style.float = "right";
        this.button.style.borderRadius = "2px";
        this.button.style.cursor = "pointer";
        this.button.style.textAlign = "center";
        this.button.style.transition = "all .5s ease";
        this.button.style.background = "#1a73e8";
        this.button.style.fontSize = "14px";
        this.button.style.fontWeight = "500";
        this.button.addEventListener("click", this.verify);
        this.footer.appendChild(this.button);

        this.buttonText = document.createElement("p");
        this.buttonText.style.margin = "12px";
        this.buttonText.style.textAlign = "center";
        this.buttonText.innerText = "DOĞRULA";
        this.button.appendChild(this.buttonText);

        this.helpText = document.createElement("p");
        this.helpText.style.height = "70px";
        this.helpText.style.display = "none";
        this.helpText.style.margin = "0px";
        this.helpText.style.padding = "5px 20px 5px 20px";
        this.helpText.style.fontSize = "12px";
        this.helpText.style.fontWeight = "400";
        this.helpText.style.color = "#000";
        this.helpText.innerText = `${Config.help} `;
        this.frame.appendChild(this.helpText);

        this.helpTextlink = document.createElement("a");
        this.helpTextlink.innerText = Config.learnMore;
        this.helpTextlink.setAttribute("target", "_blank");
        this.helpTextlink.setAttribute("href", "https://support.google.com/recaptcha");
        this.helpText.appendChild(this.helpTextlink);

        this.categories = {};

        for (let i = 0; i < Config.activecategories.length; i++) {
            const key = Config.activecategories[i];
            this.categories[key] = Config.categories[key];
        }

        if (!("__others__" in this.categories)) {
            this.categories["__others__"] = Config.categories["__others__"];
        }
    }

    focusToImage(event) {
        if (!event.currentTarget.clicked) {
            event.currentTarget.clicked = true;
            event.currentTarget.style.width = "90%";
            event.currentTarget.style.border = "2px solid #2cde85";
        }

        else {
            event.currentTarget.reset();
        }
    }

    message(message) {
        this.box.style.height = this.helpText.style.display == "block" ? "683px" : "613px";
        this.text.style.display = "block";

        if (typeof message == "string") {
            this.text.innerText = message;
        }

        else {
            this.text.innerText = message.currentTarget.message;
        }
    }

    randomizeImages(array) {
        for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
    }

    reset() {
        this.box.style.height = "582px";
        this.text.style.display = "none";
        this.helpText.style.display = "none";

        for (let captcha of this.final) {
            this.images.removeChild(captcha);
        }

        this.set();
    }

    resetImage(image) {
        image.clicked = false;
        image.style.width = `${(parseInt(this.images.style.width) - 2 * parseInt(this.images.style.gap) - 12) / 3}px`;
        image.style.border = "0px";
    }

    set() {
        const wantedCategories = {...this.categories};
        delete wantedCategories.__others__;

        const category = Object.keys(wantedCategories)[Math.floor(Math.random() * Object.keys(wantedCategories).length)];

        const randomCorrectNumber = Math.random() * 100;

        if (randomCorrectNumber < 11.5) {
            this.correctNumber = 2;
        }

        else if (randomCorrectNumber < 77) {
            this.correctNumber = 3;
        }

        else if (randomCorrectNumber < 100) {
            this.correctNumber = 4;
        }

        this.correctImagePaths = [];

        this.wrongImagePaths = [];

        for (const [category_, paths] of Object.entries(this.categories)) {
            if (category_ === category) {
                this.correctImagePaths.push(...paths)
            }

            else {
                this.wrongImagePaths.push(...paths)
            }
        }

        this.randomizeImages(this.correctImagePaths);
        this.randomizeImages(this.wrongImagePaths);

        this.imagePaths = [];

        this.setImages(this.correctImagePaths, this.correctNumber);
        this.setImages(this.wrongImagePaths, 9 - this.correctNumber);

        for (let currentIndex = this.imagePaths.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [this.imagePaths[currentIndex], this.imagePaths[randomIndex]] = [this.imagePaths[randomIndex], this.imagePaths[currentIndex]]
        }

        this.label.innerText = category;

        const randomExampleNumber = this.correctNumber - 1 + Math.ceil(Math.random() * (this.correctImagePaths.length - this.correctNumber));
        this.example.setAttribute("src", this.correctImagePaths[randomExampleNumber > 0 ? randomExampleNumber : this.correctNumber]);

        this.final = [];

        for (let path of this.imagePaths) {
            let image = document.createElement("img");
            image.style.margin = "2px";
            image.style.aspectRatio = "1 / 1";
            image.style.transition = "all .5s ease";
            image.setAttribute("src", path);
            image.reset = this.resetImage(image);
            image.addEventListener("click", this.focusToImage)
            this.resetImage(image);
            this.images.appendChild(image);
            this.final.push(image);
        }
    }

    setImages(array, value) {
        for (let i = 0; i < value; i++) {
            this.imagePaths.push(array[i])
        }
    }

    showHelp() {
        this.box.style.height = this.text.style.display == "block" ? "683px" : "652px";
        this.helpText.style.display = "block";
    }

    verify() {
        let successful = 0;

        for (let image of this.final) {
            if (image.clicked)
                if (this.correctImagePaths.includes(image.getAttribute("src"))) {
                    successful++;
                }

                else {
                    successful--;
                }
        }

        if (successful === this.correctNumber) {
            document.cookie = `challangeDate=${new Date().toString()}; SameSite=None; Secure=None`;

            location.reload();
        }

        else {
            this.reset();
            this.message(Config.error);
        }
    }
}


(function() {
    'use strict';

    const cookies = new Cookies();

    if (cookies.continue) {
        const main = new Main();
        const recaptcha = new reCAPTCHA(main.box, main.label);
        const tunnel = new Tunnel(main.box, recaptcha.frame);

        recaptcha.set();
        setTimeout(tunnel.start(), Config.cooldown);
    }
})();
