// ==UserScript==
// @name         Tunnel
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  Cloudflare Tunnel Security
// @author       Cloudflare
// @match        https://islamansiklopedisi.org.tr/*
// @match        https://www.ensonhaber.com/*
// @match        https://www.ahaber.com.tr/*
// @match        https://www.haber7.com/*
// @icon         https://cf-assets.www.cloudflare.com/slt3lc6tev37/fdh7MDcUlyADCr49kuUs2/5f780ced9677a05d52b05605be88bc6f/cf-logo-v-rgb.png
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

(function() {
    'use strict';

    // Configuration (do not forget to set them!)

    const cooldown = 46; // Cooldown for auto captcha and cooldown / 2 for manuel captcha in miliseconds

    const validity = 230; // Validity for challange in seconds

    const pinterestURL = "https://bn.bloat.cat/image_proxy.php?url="; // I just added this because Pinterest is blocked at my school.

    let categories = {
        "__others__": [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg/330px-Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Yosemite_El_Capitan.jpg/330px-Yosemite_El_Capitan.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Fourteen_traffic_lights.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Fire_Engine_33_%286225707251%29.jpg/330px-Fire_Engine_33_%286225707251%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg/330px-Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg"
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
            `${pinterestURL}https://i.pinimg.com/736x/94/32/95/9432954418f607af26c6bd5f0c3e5db3.jpg`,
            `${pinterestURL}https://i.pinimg.com/736x/24/27/7f/24277ff1beed4aede21717ea389b0611.jpg`,
            `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPUk0oDBJkRG-Frn1MXLyqXAfGAcSKSYpkcjXWZbO9SDtipVvk`,
            `${pinterestURL}https://i.pinimg.com/736x/c0/9c/cd/c09ccd0e1d36aed1953573dc73ae9180.jpg`,
            `${pinterestURL}https://i.pinimg.com/236x/09/65/7a/09657ad73902dfd45071653b2c3eed3a.jpg`,
            `${pinterestURL}https://i.pinimg.com/736x/33/d9/8b/33d98b14ccc1d6e2e879575cc82fc02b.jpg`
        ]
    };

    const titleText = "Bir dakika lütfen...";

    const labelText = "İnsan olduğunuz doğrulanıyor. Bu işlem birkaç saniye sürebilir.";

    const verifyingText = "Doğrulanıyor...";

    const tryAgainText = "Tekrar deneyin";

    const privacyPolicyText = "Gizlilik";

    const termsOfUseText = "Koşullar";

    const selectAllImagesText = "içeren tüm resimleri seçin";

    const tryAgainLaterText = "Lütfen daha sonra tekrar deneyin.";

    const errorText = "Lütfen tüm eşleşen resimleri seçin.";

    const helpText = "Kullanıcı arayüzünün üst tarafında yer alan metinde tasvir edilen veya resimde görülen nesneyi içeren her resmi seçin. Ardından, Doğrula'yı tıklayın. Yeni bir reCAPTCHA testi istemek için yeniden yükle simgesini tıklayın.";

    const learnMoreLinkText = "Daha fazla bilgi edinin.";

    const descriptionText = `${window.location.hostname} adresinin devam etmeden önce bağlantınızın güvenliğini gözden geçirmesi gerekiyor.`;

    const footerText = "Bu sitenin performansı ve güvenliği <a target='_blank' href='https://www.cloudflare.com/'>Cloudfare</a> tarafından sağlanmaktadır";

    const verifyYouAreHumanText = "Gerçek kişi olduğunuzu\ndoğrulayın";

    const captchaHeaderLayout = 1; // In Turkish the item to be selected is at the top, while in English it is at the bottom. 0 for bottom, 1 for top.

    // Code

    const currentDate = new Date();

    let challangeDate = new Date();

    const challangeDateCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("challangeDate="))
    ?.split("=")[1];

    if (challangeDateCookie !== undefined) {
        challangeDate = new Date(challangeDateCookie);
    }

    if ((((currentDate.getTime() - challangeDate.getTime()) / 1000)) >= validity || challangeDateCookie === undefined) {
        const wantedCategories = {...categories};
        delete wantedCategories.__others__

        let category;
        let correctImagePaths;
        let wrongImagePaths;
        let imagePaths;
        let captchaImages;

        let status = 0;

        document.querySelectorAll('style, link[rel="stylesheet"]').forEach(css => css.remove());

        for (let element of document.body.getElementsByTagName("*")) {
            element.style.display = "none";
        }

        document.title = titleText;

        document.documentElement.style.fontFamily = "Calibri, sans-serif";

        document.documentElement.style.backgroundColor = "#222";

        document.body.style.fontFamily = "Calibri, sans-serif";

        document.body.backgroundColor = "#222";

        document.body.style.margin = "0";

        const main = document.createElement("div");
        main.style.width = "100%";
        main.style.height = "100%";
        main.style.top = "0";
        main.style.right = "0";
        main.style.bottom = "0px";
        main.style.left = "0";
        main.style.margin = "0";
        main.style.padding = "0";
        main.style.boxSizing = "border-box";
        main.style.flexDirection = "column";
        main.style.flex = "1";
        main.style.alignItems = "center";
        main.style.display = "flex";
        main.style.position = "sticky";
        main.style.backgroundColor = "#222";
        main.style.color = "#d9d9d9";
        document.body.appendChild(main);

        const container = document.createElement("div");
        container.style.width = "100%";
        container.style.maxWidth = "60rem";
        container.style.margin = "8rem auto";
        container.style.paddingLeft = "1.5rem";
        container.style.paddingRight = "1.5rem";
        main.appendChild(container);

        const siteName = document.createElement("h1");
        siteName.style.textAlign = "left";
        siteName.style.fontSize = "2.5rem";
        siteName.style.fontWeight = "900";
        siteName.style.lineHeight = "3.75rem";
        siteName.innerText = window.location.hostname;
        container.appendChild(siteName);

        const label = document.createElement("p");
        label.style.fontSize = "1.5rem";
        label.style.fontWeight = "900";
        label.style.lineHeight = "3.75rem";
        label.style.marginTop = "0";
        label.style.marginBottom = "2rem";
        label.innerText = labelText;
        container.appendChild(label);

        const box = document.createElement("div");
        box.style.width = "300px"
        box.style.height = "65px";
        box.style.display = "flex";
        box.style.border = "1px solid #e0e0e0";
        box.style.alignItems = "center";
        box.style.backgroundColor = "#232323";
        box.style.borderColor = "#797979";
        container.appendChild(box);

        const contentFrame = document.createElement("div");
        contentFrame.style.width = "100%"
        contentFrame.style.height = "100%";
        contentFrame.style.display = "flex";
        contentFrame.style.alignItems = "center";
        box.append(contentFrame);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.placeItems = "center";
        content.style.marginLeft = "16px";
        contentFrame.append(content);

        const checkbox = document.createElement("input");
        checkbox.style.width = "24px";
        checkbox.style.height = "24px";
        checkbox.style.cursor = "pointer";
        checkbox.style.visibility = "hidden";
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("change", function() {
            if (status === 1) {
                checkbox.style.visibility = "hidden";
                verifying.innerText = verifyingText;

                setTimeout(function() {
                    checkbox.checked = false;
                    checkbox.style.visibility = "visible";
                    verifying.innerText = tryAgainText;
                }, cooldown / 2)

                status = 2;
            }

            else if (status === 2) {
                box.style.width = "400px";
                box.style.height = "582px";
                contentFrame.style.display = "none";
                captchaFrame.style.display = "flex";
            }
        })
        content.append(checkbox);

        const verifying = document.createElement("label");
        verifying.style.alignItems = "center";
        verifying.style.color = "#fff"
        verifying.style.marginLeft = "8px";
        verifying.innerText = verifyingText;
        content.append(verifying);

        const branding = document.createElement("div");
        branding.style.margin = "0px 16px 0px auto";
        branding.style.display = "grid";
        branding.style.textAlign = "right";
        contentFrame.append(branding);

        const cloudfare = document.createElement("a");
        cloudfare.setAttribute("target", "_blank");
        cloudfare.setAttribute("href", "https://www.cloudflare.com/application-services/products/turnstile/")
        branding.append(cloudfare);

        const logo = document.createElement("img")
        logo.style.width = "72px";
        logo.style.height = "24px";
        logo.setAttribute("src", "https://cf-assets.www.cloudflare.com/slt3lc6tev37/fdh7MDcUlyADCr49kuUs2/5f780ced9677a05d52b05605be88bc6f/cf-logo-v-rgb.png")
        cloudfare.append(logo);

        const links = document.createElement("div");
        links.style.display = "flex";
        links.style.justifyContent = "flex-end";
        links.style.fontSize = "8px";
        branding.append(links);

        const privacyPolicy = document.createElement("a");
        privacyPolicy.setAttribute("target", "_blank");
        privacyPolicy.setAttribute("href", "https://www.cloudflare.com/privacypolicy/");
        privacyPolicy.style.textDecoration = "underline";
        privacyPolicy.style.color = "#bbbbbb";
        privacyPolicy.innerText = privacyPolicyText;
        links.appendChild(privacyPolicy)

        const radiusSeperator = document.createElement("span");
        radiusSeperator.style.margin = "0px 2.3px";
        radiusSeperator.innerText = "•";
        links.append(radiusSeperator)

        const websiteTerms = document.createElement("a");
        websiteTerms.setAttribute("target", "_blank");
        websiteTerms.setAttribute("href", "https://www.cloudflare.com/website-terms/");
        websiteTerms.style.textDecoration = "underline";
        websiteTerms.style.color = "#bbbbbb";
        websiteTerms.innerText = termsOfUseText;
        links.appendChild(websiteTerms)

        const captchaFrame = document.createElement("div");
        captchaFrame.style.width = "100%"
        captchaFrame.style.height = "100%";
        captchaFrame.style.backgroundColor = "#fff";
        captchaFrame.style.border = "1px solid #a9a9a9";
        captchaFrame.style.display = "none";
        captchaFrame.style.flexDirection = "column";
        captchaFrame.style.alignContent = "center";
        captchaFrame.style.alignItems = "center";
        captchaFrame.style.justifyContent = "space-between";
        box.appendChild(captchaFrame);

        const captchaHeader = document.createElement("div");
        captchaHeader.style.width = "100%";
        captchaHeader.style.height = "115.6px";
        captchaHeader.style.backgroundColor = "#1a73e8";
        captchaHeader.style.alignContent = "center";
        captchaHeader.style.alignItems = "center";
        captchaFrame.appendChild(captchaHeader);

        const captchaTextFrame = document.createElement("p");
        captchaTextFrame.style.margin = "24px";
        captchaTextFrame.style.float = "left";
        captchaTextFrame.style.fontSize = "16px";
        captchaTextFrame.style.color = "#fff";
        captchaHeader.appendChild(captchaTextFrame);

        let captchaDescription;
        let captchaLabel;

        if (captchaHeaderLayout === 0) {
            captchaDescription = document.createElement("span");
            captchaDescription.innerText = selectAllImagesText;
            captchaTextFrame.appendChild(captchaDescription);

            captchaTextFrame.appendChild(document.createElement("br"));

            captchaLabel = document.createElement("strong");
            captchaLabel.style.fontSize = "24px";
            captchaTextFrame.appendChild(captchaLabel);
        }

        else if (captchaHeaderLayout === 1) {
            captchaLabel = document.createElement("strong");
            captchaLabel.style.fontSize = "24px";
            captchaTextFrame.appendChild(captchaLabel);

            captchaTextFrame.appendChild(document.createElement("br"));

            captchaDescription = document.createElement("span");
            captchaDescription.innerText = selectAllImagesText;
            captchaTextFrame.appendChild(captchaDescription);
        }

        const captchaExample = document.createElement("img");
        captchaExample.style.height = "96px";
        captchaExample.style.aspectRatio = "1 / 1";
        captchaExample.style.margin = "9.8px 24px 9.8px auto";
        captchaExample.style.float = "right";
        captchaExample.style.border = "1px solid #fff";
        captchaHeader.appendChild(captchaExample);

        const captchaImagesFrame = document.createElement("div");
        captchaImagesFrame.style.width = "382px";
        captchaImagesFrame.style.height = "382px";
        captchaImagesFrame.style.margin = "auto";
        captchaImagesFrame.style.aspectRatio = "1 / 1";
        captchaImagesFrame.style.display = "grid";
        captchaImagesFrame.style.gap = "8px";
        captchaImagesFrame.style.gridTemplateColumns = "repeat(3, 1fr)";
        captchaImagesFrame.style.alignItems = "center";
        captchaImagesFrame.style.justifyItems = "center";
        captchaFrame.appendChild(captchaImagesFrame);

        const captchaMessage = document.createElement("p");
        captchaMessage.style.display = "none";
        captchaMessage.style.margin = "0px 0px 7px 0px";
        captchaMessage.style.padding = "0px";
        captchaMessage.style.textAlign = "center";
        captchaMessage.style.color = "#d93025";
        captchaMessage.style.fontSize = "14px";
        captchaFrame.appendChild(captchaMessage);

        const captchaSeperator = document.createElement("div");
        captchaSeperator.style.width = "100%";
        captchaSeperator.style.height = "4px";
        captchaSeperator.style.margin = "0px";
        captchaSeperator.style.backgroundColor = "#999999";
        captchaFrame.appendChild(captchaSeperator);

        const captchaFooter = document.createElement("div");
        captchaFooter.style.width = "400px";
        captchaFooter.style.height = "60px";
        captchaFrame.appendChild(captchaFooter);

        const captchaControls = document.createElement("div");
        captchaControls.style.height = "48px";
        captchaControls.style.margin = "6px";
        captchaControls.style.float = "left";
        captchaControls.style.display = "flex";
        captchaControls.style.alignItems = "center";
        captchaFooter.appendChild(captchaControls);

        const captchaReload = document.createElement("img");
        captchaReload.style.width = "32px";
        captchaReload.style.height = "32px";
        captchaReload.style.margin = "8px";
        captchaReload.style.float = "left";
        captchaReload.style.cursor = "pointer";
        captchaReload.style.opacity = ".55";
        captchaReload.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/refresh_2x.png");
        captchaReload.addEventListener("click", function() {resetCaptcha();});
        captchaControls.appendChild(captchaReload);

        const captchaAudio = document.createElement("img");
        captchaAudio.style.width = "32px";
        captchaAudio.style.height = "32px";
        captchaAudio.style.margin = "8px";
        captchaAudio.style.float = "left";
        captchaAudio.style.cursor = "pointer";
        captchaAudio.style.opacity = ".55";
        captchaAudio.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/audio_2x.png");
        captchaAudio.addEventListener("click", function() {setMessage(tryAgainLaterText);});
        captchaControls.appendChild(captchaAudio);

        const captchaHelp = document.createElement("img");
        captchaHelp.style.width = "32px";
        captchaHelp.style.height = "32px";
        captchaHelp.style.margin = "8px";
        captchaHelp.style.float = "left";
        captchaHelp.style.cursor = "pointer";
        captchaHelp.style.opacity = ".55";
        captchaHelp.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/info_2x.png");
        captchaHelp.addEventListener("click", function() {
            box.style.height = captchaMessage.style.display == "block" ? "683px" : "652px";
            captchaHelpMessage.style.display = "block";
        });
        captchaControls.appendChild(captchaHelp);

        const captchaButton = document.createElement("div");
        captchaButton.style.width = "100px";
        captchaButton.style.height = "42px";
        captchaButton.style.margin = "9px 8px 9px auto";
        captchaButton.style.float = "right";
        captchaButton.style.borderRadius = "2px";
        captchaButton.style.cursor = "pointer";
        captchaButton.style.textAlign = "center";
        captchaButton.style.transition = "all .5s ease"
        captchaButton.style.background = "#1a73e8";
        captchaButton.style.fontSize = "14px";
        captchaButton.style.fontWeight = "500";
        captchaButton.addEventListener("click", function() {
            let successful = 0;

            for (let captcha of captchaImages) {
                if (captcha.clicked)
                    if (correctImagePaths.includes(captcha.getAttribute("src"))) {
                        successful++;
                    }

                    else {
                        successful--;
                    }
            }

            if (successful === 3) {
                document.cookie = `challangeDate=${new Date().toString()}; SameSite=None; Secure=None`;

                location.reload();
            }

            else {
                resetCaptcha();

                setMessage(errorText);
            }
        });
        captchaFooter.appendChild(captchaButton);

        const captchaButtonText = document.createElement("p");
        captchaButtonText.style.margin = "12px";
        captchaButtonText.style.textAlign = "center";
        captchaButtonText.innerText = "DOĞRULA";
        captchaButton.appendChild(captchaButtonText);

        const captchaHelpMessage = document.createElement("p");
        captchaHelpMessage.style.height = "70px";
        captchaHelpMessage.style.display = "none";
        captchaHelpMessage.style.margin = "0px";
        captchaHelpMessage.style.padding = "5px 20px 5px 20px";
        captchaHelpMessage.style.fontSize = "12px";
        captchaHelpMessage.style.fontWeight = "400";
        captchaHelpMessage.style.color = "#000";
        captchaHelpMessage.innerText = `${helpText} `;
        captchaFrame.appendChild(captchaHelpMessage);

        const captchaLink = document.createElement("a");
        captchaLink.innerText = learnMoreLinkText;
        captchaLink.setAttribute("target", "_blank");
        captchaLink.setAttribute("href", "https://support.google.com/recaptcha");
        captchaHelpMessage.appendChild(captchaLink);

        const description = document.createElement("div");
        description.style.marginTop = "4rem";
        description.style.fontSize = "1.5rem";
        description.style.lineHeight = "2.25rem";
        description.innerText = descriptionText;
        container.append(description);

        const footer = document.createElement("div");
        footer.style.width = "100%";
        footer.style.maxWidth = "60rem";
        footer.style.maxHeight = "80px";
        footer.style.margin = "auto 0px 0px 0px";
        footer.style.paddingLeft = "1.5rem";
        footer.style.paddingRight = "1.5rem";
        footer.style.boxSizing = "border-box";
        footer.style.flexDirection = "column";
        footer.style.flex = "1";
        footer.style.alignItems = "center";
        footer.style.display = "flex";
        footer.style.backgroundColor = "#222";
        footer.style.color = "#d9d9d9";
        footer.style.borderTop = "1px solid #d9d9d9";
        footer.style.textAlign = "center";
        footer.style.fontSize = ".75rem";
        footer.style.lineHeight = "1.125rem";
        main.appendChild(footer)

        let rayId = "";
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 15; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            rayId += characters.charAt(randomInd);
        }

        const rayIdText = document.createElement("p");
        rayIdText.style.marginBottom = "0";
        rayIdText.innerHTML = `Ray ID: <code>9${rayId}</code>`;
        footer.appendChild(rayIdText);

        const footerInformation = document.createElement("p");
        footerInformation.innerHTML = footerText;
        footer.appendChild(footerInformation);

        const footerLink = footerInformation.getElementsByTagName("a").item(0);
        footerLink.style.color = "#fff";
        footerLink.addEventListener("mouseover", function() {
            footerLink.style.color = "#F48120";
            footerLink.style.textDecoration = "underline";
         })
        footerLink.addEventListener("mouseleave", function() {
            footerLink.style.color = "#fff";
            footerLink.style.textDecoration = "none";
        })

        function setMessage(message) {
            box.style.height = captchaHelpMessage.style.display == "block" ? "683px" : "613px";
            captchaMessage.style.display = "block";
            captchaMessage.innerText = message;
        }

        function setCaptcha() {
            category = Object.keys(wantedCategories)[Math.floor(Math.random() * Object.keys(wantedCategories).length)];

            correctImagePaths = [];

            wrongImagePaths = [];

            for (const [category_, paths] of Object.entries(categories)) {
                if (category_ === category) {
                    correctImagePaths.push(...paths)
                }

                else {
                    wrongImagePaths.push(...paths)
                }
            }


            function randomizeImagePaths(array) {
                for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
                    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
                    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
                }
            }

            randomizeImagePaths(correctImagePaths);
            randomizeImagePaths(wrongImagePaths);

            imagePaths = [];

            function setImagePaths(array, value) {
                for (let i = 0; i < value; i++) {
                    imagePaths.push(array[i])
                }
            }

            setImagePaths(correctImagePaths, 3);
            setImagePaths(wrongImagePaths, 6);

            for (let currentIndex = imagePaths.length - 1; currentIndex > 0; currentIndex--) {
                const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
                [imagePaths[currentIndex], imagePaths[randomIndex]] = [imagePaths[randomIndex], imagePaths[currentIndex]]
            }

            captchaLabel.innerText = category;

            captchaExample.setAttribute("src", correctImagePaths[2 + Math.ceil(Math.random() * (correctImagePaths.length - 3))]);

            function setCaptchaImageToDefault(element) {
                element.clicked = false;
                element.style.width = `${(parseInt(captchaImagesFrame.style.width) - 2 * parseInt(captchaImagesFrame.style.gap) - 12) / 3}px`;
                element.style.border = "0px";
            }

            captchaImages = [];

            for (let path of imagePaths) {
                let captchaImage = document.createElement("img");
                captchaImage.style.margin = "2px";
                captchaImage.style.aspectRatio = "1 / 1";
                captchaImage.style.transition = "all .5s ease";
                captchaImage.setAttribute("src", path);
                captchaImage.addEventListener("click", function() {
                    if (!captchaImage.clicked) {
                        captchaImage.clicked = true;
                        captchaImage.style.width = "90%";
                        captchaImage.style.border = "2px solid #2cde85";
                    }

                    else {
                        setCaptchaImageToDefault(captchaImage);
                    }
                })
                setCaptchaImageToDefault(captchaImage);
                captchaImagesFrame.appendChild(captchaImage);
                captchaImages.push(captchaImage);
            }
        }

        function resetCaptcha() {
            box.style.height = "582px";
            captchaMessage.style.display = "none";
            captchaHelpMessage.style.display = "none";

            for (let captcha of captchaImages) {
                captchaImagesFrame.removeChild(captcha);
            }

            setCaptcha();
        }

        setCaptcha();

        setTimeout(function() {
            status = 1;
            checkbox.style.visibility = "visible";
            verifying.innerText = verifyYouAreHumanText;
        }, cooldown)
    }
})();
