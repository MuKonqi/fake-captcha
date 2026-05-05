// ==UserScript==
// @name         Verify You Are Human
// @namespace    https://tampermonkey.net/
// @version      1.10.2
// @author       MuKonqi
// @description  A user-script for fake combination of Cloudflare's Tunnel and Google's reCAPTCHA.
// @copyright    Copyright (C) 2025-2026 MuKonqi
// @homepageURL  https://github.com/mukonqi/fake-captcha
// @supportURL   https://github.com/mukonqi/fake-captcha/issues
// @updateURL    https://raw.githubusercontent.com/mukonqi/fake-captcha/main/script.meta.js
// @downloadURL  https://raw.githubusercontent.com/mukonqi/fake-captcha/main/script.user.js
// @match        https://*.islamansiklopedisi.org.tr/*
// @match        https://*.medyajans.com/*
// @match        https://*.superhaber.tv/*
// @match        https://*.ntv.com.tr/*
// @match        https://*.haber7.com/*
// @match        https://*.cnnturk.com/*
// @match        https://*.ensonhaber.com/*
// @match        https://*.ahaber.com.tr/*
// @match        https://*.trthaber.com/*
// @match        https://*.haberturk.com/*
// @match        https://*.aa.com.tr/*
// @match        https://*.t24.com.tr/*
// @match        https://*.iha.com.tr/*
// @match        https://*.odatv.com/*
// @match        https://*.odatv4.com/*
// @match        https://*.dha.com.tr/*
// @match        https://*.veryansintv.com/*
// @match        https://*.bbc.com/turkce/*
// @match        https://*.gercekgundem.com/*
// @match        https://*.tr.sputniknews.com/*
// @match        https://*.diken.com.tr/*
// @match        https://*.amerikaninsesi.com/*
// @match        https://*.haberler.com/*
// @match        https://*.tr.euronews.com/*
// @match        https://*.f5haber.com/*
// @match        https://*.tv100.com/*
// @match        https://*.beyazgazete.com/*
// @match        https://*.indyturk.com/*
// @match        https://*.diyanethaber.com.tr/*
// @match        https://*.trhaber.com/*
// @match        https://*.memurlar.net/*
// @match        https://*.gazetevatan.com/*
// @match        https://*.haber3.com/*
// @match        https://*.stargazete.com/*
// @match        https://*.internethaber.com/*
// @match        https://*.referansmedya.com/*
// @match        https://*.timeturk.com/*
// @match        https://*.sondakika.com/*
// @match        https://*.medyafaresi.com/*
// @match        https://*.medyascope.tv/*
// @match        https://*.mynet.com/*
// @match        https://*.turktime.com/*
// @match        https://*.hurhaber.com/*
// @match        https://*.objektifhaber.com/*
// @match        https://*.habervakti.com/*
// @match        https://*.eurovizyon.co.uk/*
// @match        https://*.habervitrini.com/*
// @match        https://*.bigpara.com/*
// @match        https://*.arkeolojikhaber.com/*
// @match        https://*.acunn.com/*
// @match        https://*.bianet.org/*
// @match        https://*.tgrthaber.com.tr/*
// @match        https://*.haber.sol.org.tr/*
// @match        https://*.haberet.com/*
// @match        https://*.agos.com.tr/*
// @match        https://*.aksam.com.tr/*
// @match        https://*.posta.com.tr/*
// @match        https://*.karar.com/*
// @match        https://*.aydinlik.com.tr/*
// @match        https://*.sabah.com.tr/*
// @match        https://*.cumhuriyet.com.tr/*
// @match        https://*.yenisafak.com.tr/*
// @match        https://*.yenimesaj.com.tr/*
// @match        https://*.gazetebirlik.com/*
// @match        https://*.balkangunlugu.com.tr/*
// @match        https://*.medyaradar.com/*
// @match        https://*.televizyongazetesi.com/*
// @match        https://*.medyatava.com/*
// @match        https://*.marketingturkiye.com/*
// @match        https://*.gazeteciler.com/*
// @match        https://*.mediacatonline.com/*
// @match        https://*.dorduncukuvvetmedya.com/*
// @match        https://*.ranini.tv/*
// @match        https://*.medyaloji.net/*
// @match        https://*.journo.com.tr/*
// @match        https://*.medyakafe.com/*
// @match        https://*.onedio.com/*
// @match        https://*.gzt.com/*
// @match        https://*.neoldu.com/*
// @match        https://*.incisozluk.com.tr/*
// @match        https://*.eksisozluk.com/*
// @match        https://*.listelist.com/*
// @match        https://*.fikircografyasi.com/*
// @match        https://*.fikriyat.com/*
// @match        https://*.kizlarsoruyor.com/*
// @match        https://*.abcgazetesi.com/*
// @match        https://*.aksam.com.tr/*
// @match        https://*.artigercek.com/*
// @match        https://*.aydinlik.com.tr/*
// @match        https://*.birgun.net/*
// @match        https://*.bloomberght.com/*
// @match        https://*.cumhuriyet.com.tr/*
// @match        https://*.dogruhaber.com.tr/*
// @match        https://*.dunya.com/*
// @match        https://*.evrensel.net/*
// @match        https://*.fanatik.com.tr/*
// @match        https://*.fotomac.com.tr/*
// @match        https://*.fotospor.com/*
// @match        https://*.gazeteduvar.com.tr/*
// @match        https://*.gazetepencere.com/*
// @match        https://*.gozlemgazetesi.com/*
// @match        https://*.gunes.com/*
// @match        https://*.habercem.com/*
// @match        https://*.haberport.com/*
// @match        https://*.hurriyet.com.tr/*
// @match        https://*.karar.com/*
// @match        https://*.korkusuz.com.tr/*
// @match        https://*.milatgazetesi.com/*
// @match        https://*.milligazete.com.tr/*
// @match        https://*.milliyet.com.tr/*
// @match        https://*.nefesgazetesi.com/*
// @match        https://*.onedio.com/*
// @match        https://*.posta.com.tr/*
// @match        https://*.pressturk.com/*
// @match        https://*.rasthaber.com/*
// @match        https://*.sabah.com.tr/*
// @match        https://*.sonsoz.com.tr/*
// @match        https://*.sozcu.com.tr/*
// @match        https://*.star.com.tr/*
// @match        https://*.sokgazetesi.com.tr/*
// @match        https://*.takvim.com.tr/*
// @match        https://*.turkgun.com/*
// @match        https://*.turkiyegazetesi.com.tr/*
// @match        https://*.yazarhaber.com.tr/*
// @match        https://*.yeniakit.com.tr/*
// @match        https://*.yeniasir.com.tr/*
// @match        https://*.yeniasya.com.tr/*
// @match        https://*.yenicaggazetesi.com.tr/*
// @match        https://*.yenimesaj.com.tr/*
// @match        https://*.yenisoz.com.tr/*
// @match        https://*.yenisafak.com/*
// @match        https://*.yurtgazetesi.com.tr/*
// @match        https://*.yurttansesler.org/*
// @match        https://*.analizgazetesi.com.tr/*
// @match        https://*.breakingnews.com.tr/*
// @match        https://*.britannica.com/*
// @match        https://*.cumhuriyetdaily.com/*
// @match        https://*.dailysabah.com/*
// @match        https://*.denizhaber.net/*
// @match        https://*.ekonomihatti.net/*
// @match        https://*.gazetebanka.com/*
// @match        https://*.haberchannel.com/*
// @match        https://*.hurriyetdailynews.com/*
// @match        https://*.isghaber.com.tr/*
// @match        https://*.isigmeclisi.org/*
// @match        https://*.medimagazin.com.tr/*
// @match        https://*.sendika.org/*
// @match        https://*.sputnikglobe.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/150px-RecaptchaLogo.svg.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

// MIT License

// Copyright (C) 2025-2026 MuKonqi

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


class Config {
    /* 
        Do not forget to set this!
    */

    // ###

    // Special Variables
    
    static cheats = "cookies"; // Skip all timeouts, aka dev mode. Options: "true": enabled, "cookies": set by cookies, "false": disabled

    static useCF2025 = false; // Use Cloudflare's old main page design (2025) instead of new version (2026).
    
    // ###

    // Timing

    static cooldown = 5000; // Cooldown of value / 4 for load animation, value / 1 Tunnel's first step, value / 2 for Tunnel's second step, value / 25 for Tunnel's checkbox effects, value / 2.5 for showing progress bar text, value / 5 animating progress bar, and value / 3 for redirecting to website after passing reCAPTCHA in miliseconds.

    static validity = 600; // Validity time of challange in seconds.

    static expiryTimes = ["09:00", "09:40", "09:50", "10:30", "10:40", "11:20", "11:30", "12:10", "12:20", "13:00", "13:45", "14:25", "14:35", "15:15", "15:20", "16:00"]; // Expiry times in hour:minute format. Note: The order should be from first to last.

    static maximumAge = 2400; // Maximum validition time to be used with expiryTimes.

    static useFixedValidity = false; // If you won't to use expiryTimes, you should enable this.
    
    // ###

    // Image URLs

    static categories = {
        /* Format:
            "key": 
                activation boolean, 
                {"en": English name, "tr": Turkish name}, 
                number for specifing minumum selection number for this category (int or null (null for random)),
                ["imagelink1", ..., "imagelinkn"]
        */
        // "name": [true or false (activation), {"en": English, "tr": Turkish} (translation), int or null (how much of that category to show (null means random)), ["link1", ..., "linkn" (for image links)],
        // Note: The third value ("number") should only be set for one category!
        // Note: The relevant category must have 1 more content than the second value!
        "__others__": [true, null, null, [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg/330px-Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Fourteen_traffic_lights.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Fire_Engine_33_%286225707251%29.jpg/330px-Fire_Engine_33_%286225707251%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg/330px-Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Downtown_Charlottesville_fire_hydrant.jpg/250px-Downtown_Charlottesville_fire_hydrant.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pune_green_bus.jpg/250px-Pune_green_bus.jpg"
        ]], // Do not change __others__'s name or do not delete it! Note: The images here will never be correct image for reCAPTCHA.
        "mosque": [true, {"en": "Mosque", "tr": "Cami"}, null, [
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
        ]],
        "human": [true, {"en": "Human", "tr": "İnsan"}, 5, [
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/9432954418f607af26c6bd5f0c3e5db3.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/24277ff1beed4aede21717ea389b0611.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/c09ccd0e1d36aed1953573dc73ae9180.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main//09657ad73902dfd45071653b2c3eed3a.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/33d98b14ccc1d6e2e879575cc82fc02b.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/6af3095d1b57821d5f81c7f5fd7fc94e.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/80e94dda8ecf8cdc51cae029877fcc1a.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/5161d1e9e5c4dfe32a2fae8d374ac388.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/f2e62c62df7937c5665feaffb9151b16.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/7b67a025a104f2f11a991af0f46f4643.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/7f585c1fdc14fa25b6960b759e5ba686.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/fb3c2fca26e69371df0ac7dca4946bb1.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/ec9759530cdfcf6de96b500a8d206445.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/8311e1b1e8efe53eb257c906587f2875.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/dbc1218d8f79d6ca4e0d2f430c763213.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/37f008932fa7b7a3006f2b05dd8d5586.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/7fd317b367625ca0a2b5e58d4aeb8096.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/f399749fe6049b388175d93f52f242be.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/675f440c9a058ee828bddded814f8157.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/33c2911138c375dd7774ee210a526993.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/3065634ed2151184076be79cdb719c46.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/391d01c9ddc3be77fe08ab8fe3a97bd5.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/8f5c7fe9601a92d710d85f1b2d1ab6e9.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/9f9bd84362e87bc0388ab5d7583a8d8c.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/24a0450592fdf051307842148c640ecb.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/0ac44094ba821fa1f9b5ad79ba9abc80.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/dc7b944a451e786a2c1636982cef463f.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/7745bf533891bfb4bfa69a9ea1fd8d79.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main//b3e3cf4411aeb13d7d3c44a5759b6f95.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/17eeca5c09009567747378b05a548eae.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/149167758f571c1fbbf5bfef79aa70a1.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/9708e0c0e035e0ff4fb02b8e0a66fd9f.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/c691aaf9a9a2a12e4076866a97e334a5.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/7053894de9172eae1e508085cf86175a.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/109e59803d6216d1c45d6c9d69972864.jpg`,
            `https://raw.githubusercontent.com/MuKonqi/fake-captcha-assets/refs/heads/main/a9e3a8af17dcc28ab43dbf6ce9cbed6d.jpg`,
            //`${Config.pinterestLink}`, //placeholder
        ]]
    };
    
    // ###

    // Image Selection Area
    
    static ratios = {
        // The ratios of how many images are the correct image for 3x3 layout.
        // Note: Do not add or delete any key!
        // Note: The total should add up to 100!
        "0": 0,
        "1": 0,
        "2": 12.5,
        "3": 25,
        "4": 25,
        "5": 12.5,
        "6": 12.5,
        "7": 12.5,
        "8": 0,
        "9": 0
    };

    static grids = {
        // Possibilities for reCAPTCHA's grid layouts.
        // Note: Do not add or delete any key!
        // Note: The total should add up to 100!
        "9": 50,
        "16": 50
    };

    static steps = {
        // Possibilities for reCAPTCHA's steps.
        // Note: You can change keys.
        // Note: The total should add up to 100!
        "3": 49.5,
        "5": 49.5,
        "15": 1
    };
}


class i18n {
    // ###

    // Placeholders

    // Cloudflare 2025
    static title_25 = ""
    static label1_25 = "";
    static label2_25 = "";
    static description_25 = `${window.location.hostname}`; // ${window.location.hostname} is the domain part of the URL.
    static successful_25 = "";
    static waiting_25 = `${window.location.hostname}`; // ${window.location.hostname} is the domain part of the URL.
    static footer_25 = "";
    // Cloudflare 2026
    static label_26 = "";
    static description_26 = "";
    static completed_26 = `${window.location.hostname}`; // ${window.location.hostname} is the domain part of the URL.
    static footerMain_26 = "";
    static footerPrivacy_26 = ""
    // Cloudflare Tunnel
    static verifying = "";
    static verifyYou = "";
    static tryAgain = "";
    static privacy = "";
    static help = "";
    // Google reCAPTCHA
    static select = "";
    static tryAgainLater = "";
    static error = "";
    static about = "";
    static skip = "";
    static verify = "";
    static progress = "{n} {x}"; // {n} is number of total steps, {x} is number of current step.
    static captchaHeader = 0; // For example, in Turkish the item to be selected is at the top, while in English it is at the bottom. 0 for bottom, 1 for top.
  
    // ###

    // English language translation.
    static en = {
        // Cloudflare 2025
        "title_25": "Just a moment...",
        "label1_25": "Verifying you are human. This may take a few seconds.",
        "label2_25": "Verify you are human by completing the action below.",
        "description_25": `${window.location.hostname} needs to review the security of your connection before proceeding.`, // ${window.location.hostname} is the domain part of the URL.
        "successful_25": "Verification successful",
        "waiting_25": `Waiting for ${window.location.hostname} to respond`, // ${window.location.hostname} is the domain part of the URL.
        "footer_25": "Performance & security by Cloudflare",
        // Cloudflare 2026
        "label_26": "Performing security verification",
        "description_26": "This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.",
        "completed_26": `Verification successful. Waiting for ${window.location.hostname} to respond`, // ${window.location.hostname} is the domain part of the URL.
        "footerMain_26": "Performance and Security by Cloudflare",
        "footerPrivacy_26": "Privacy",
        // Cloudflare Tunnel
        "verifying": "Verifying...",
        "verifyYou": "Verify you are human",
        "tryAgain": "Please try again",
        "privacy": "Privacy",
        "help": "Help",
        // Google reCAPTCHA
        "select": "Select all images with",
        "tryAgainLater": "Try again later",
        "error": "Please select all matching images.",
        "about": `Select any image that contains the object described in the text at the top of the user interface or shown in the image. Then, click "Verify". To request a new reCAPTCHA test, click the reload icon.`,
        "skip": "Skip",
        "verify": "Verify",
        "progress": "{x} of {n} steps have been completed", // {n} is number of total steps, {x} is number of current step.
        "captchaHeader": 0 // For example, in Turkish the item to be selected is at the top, while in English it is at the bottom. 0 for bottom, 1 for top.
    }

    // ###

    // Turkish language translation.
    static tr = {
        // Cloudflare 2025
        "title_25": "Bir dakika lütfen...",
        "label1_25": "İnsan olduğunuz doğrulanıyor. Bu işlem birkaç saniye sürebilir.",
        "label2_25": "Aşağıdaki işlemi tamamlayarak insan olduğunuzu doğrulayın.",
        "description_25": `${window.location.hostname} adresinin devam etmeden önce bağlantınızın güvenliğini gözden geçirmesi gerekiyor.`, // ${window.location.hostname} is the domain part of the URL.
        "successful_25": "Doğrulama başarılı",
        "waiting_25": `${window.location.hostname} adresinin yanıt vermesi bekleniyor`, // ${window.location.hostname} is the domain part of the URL.
        "footer_25": "Bu sitenin performansı ve güvenliği Cloudflare tarafından sağlanmaktadır",
        // Cloudflare 2026
        "label_26": "Güvenlik doğrulaması yapılıyor",
        "description_26": "Bu web sitesi, kötü niyetli botlara karşı korunmak için bir güvenlik hizmeti kullanıyor. Web sitesi bir bot olmadığınızı doğrularken bu sayfa görüntülenir.",
        "completed_26": `Doğrulama başarılı. ${window.location.hostname} adresinin yanıt vermesi bekleniyor`, // ${window.location.hostname} is the domain part of the URL.
        "footerMain_26": "Cloudflare ile Performans ve Güvenlik",
        "footerPrivacy_26": "Gizlilik",
        // Cloudflare Tunnel
        "verifying": "Doğrulanıyor...",
        "verifyYou": "Gerçek kişi olduğunuzu\ndoğrulayın",
        "tryAgain": "Lütfen tekrar deneyin",
        "privacy": "Gizlilik",
        "help": "Yardım",
        // Google reCAPTCHA
        "select": "içeren tüm resimleri seçin",
        "tryAgainLater": "Daha sonra tekrar deneyin",
        "error": "Lütfen tüm eşleşen resimleri seçin.",
        "about": `Metinde nesnenin açıklamasını gördüğünüz herhangi bir parçayı tıklayın. Aynı nesneyle birlikte yeni resimler görüntülenirse onları da tıklayın. Seçilmemiş resim kalmadığında "Doğrula"yı tıklayın.`,
        "skip": "Atla",
        "verify": "Doğrula",
        "progress": "{n} aşamadan {x} tanesi tamamlandı", // {n} is number of total steps, {x} is number of current step.
        "captchaHeader": 1 // For example, in Turkish the item to be selected is at the top, while in English it is at the bottom. 0 for bottom, 1 for top.
    }
}


class Main {
    constructor(cheats, lang) {
        // Rechange the title because some scripts change it while loading.
        document.title = i18n.title_25;

        // Try to get original shortcut icon.
        const iconLink = document.querySelector("link[rel*='icon'");
        const favicon = iconLink ? iconLink.getAttribute("href") : "/favicon.ico"

        // Remove all scripts because some scripts add some elements to DOM.
        document.querySelectorAll("script").forEach(child => child.remove());

        // Try to get rid of the icon of the website.
        document.querySelectorAll("link[rel*='icon'").forEach(favicon => favicon.setAttribute("href", "data:image/x-icon;base64,"));

        // Clear HEAD except title and icons.
        Array.from(document.head.children).forEach(child => {
            if (child.tagName !== 'TITLE' && !child.matches("link[rel*='icon'")) {
                child.remove();
            }
        }); 

        // Remove body. We will use our custom body.
        document.body.remove();

        // Restore HTML element.
        document.documentElement.style.display = "flex";
        document.documentElement.style.width = "100vw";
        document.documentElement.style.height = "100vh";
        document.documentElement.style.boxSizing = "border-box";
        document.documentElement.style.margin = "0";
        document.documentElement.style.padding = "0";
        document.documentElement.setAttribute("lang", lang);

        // Define our custom body.
        const body = document.createElement("div");
        body.style.width = "100%";
        body.style.height = "100%";
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.margin = "0px";
        document.documentElement.appendChild(body);

        // Load main page.
        if (Config.useCF2025) {
            this.page = new CF25(cheats, body, favicon);
        }   
        else {
            this.page = new CF26(cheats, body, favicon);
        }
    }
}


class CF25 {
    constructor(cheats, body, favicon) {
        this.cheats = cheats;

        document.documentElement.style.fontFamily = "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

        this.frame = document.createElement("div");
        this.frame.style.width = "100%";
        this.frame.style.maxWidth = "60rem";
        this.frame.style.boxSizing = "border-box";
        this.frame.style.margin = "8rem auto";
        this.frame.style.padding = "0px 1.5rem";
        this.frame.style.flex = "1";
        this.frame.setAttribute("role", "main");
        body.appendChild(this.frame);

        this.topBox = document.createElement("div");
        this.topBox.style.display = "flex";
        this.topBox.style.gap = "16px";
        this.topBox.style.alignItems = "center";
        this.frame.appendChild(this.topBox);

        this.name = document.createElement("h1");
        this.name.style.textAlign = "left";
        this.name.style.fontSize = "2.5rem";
        this.name.style.fontWeight = "600";
        this.name.style.lineHeight = "125%";
        this.name.style.margin = "0px";
        this.name.innerText = window.location.hostname;
        this.topBox.appendChild(this.name);

        this.favicon = document.createElement("img");
        this.favicon.style.marginRight = "0.5rem";
        this.favicon.style.width = "2rem";
        this.favicon.style.aspectRatio = "1/1";
        this.favicon.setAttribute("src", favicon);
        fetch(favicon).then((response) => {if (response.ok) {this.topBox.insertBefore(this.favicon, this.name);}});

        this.label = document.createElement("p");
        this.label.style.fontSize = "1.5rem";
        this.label.style.fontWeight = "500";
        this.label.style.lineHeight = "2.25rem";
        this.label.style.marginTop = "0px";
        this.label.style.marginBottom = "2rem";
        this.label.innerText = i18n.label1_25;
        this.frame.appendChild(this.label);

        this.loading = document.createElement("div");
        this.loading.style.height = "76.391px";
        this.loading.style.margin = "2rem 0px";
        this.frame.appendChild(this.loading);

        this.spinner = document.createElement("div");
        this.spinner.style.width = "1.875rem";
        this.spinner.style.aspectRatio = "1 / 1";
        this.loading.appendChild(this.spinner);

        this.quarters = [];

        for (let i = 0; i < 4; i++) {
            const quarter = document.createElement("div");
            quarter.style.width = "1.875rem";
            quarter.style.aspectRatio = "1 / 1";
            quarter.style.position = "absolute";
            quarter.style.border = "0.3rem solid #00000000";
            quarter.style.borderRadius = "50%";
            quarter.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], {duration: 1200, easing: "cubic-bezier(0.5, 0, 0.5, 1)", iterations: Infinity});
            this.spinner.appendChild(quarter);
            this.quarters.push(quarter);
        }

        this.quarters[0].style.animationDelay = "-0.45s";
        this.quarters[1].style.animationDelay = "-0.3s";
        this.quarters[2].style.animationDelay = "-0.15s";

        this.description = document.createElement("div");
        this.description.style.marginTop = "calc(4rem + 3.7px)";
        this.description.style.fontSize = "1.5rem";
        this.description.style.lineHeight = "2.25rem";
        this.description.innerText = i18n.description_25;
        this.frame.appendChild(this.description);

        this.completed = document.createElement("div");
        this.completed.style.display = "none";
        this.frame.appendChild(this.completed);

        this.successful = document.createElement("div");
        this.successful.style.paddingLeft = "42px";
        this.successful.style.backgroundRepeat = "no-repeat";
        this.successful.style.backgroundSize = "contain";
        this.successful.style.paddingLeft = "42px";
        this.successful.style.fontSize = "1.5rem";
        this.successful.style.fontWeight = "500";
        this.successful.style.lineHeight = "2.25rem";
        this.successful.innerText = i18n.successful_25;
        this.completed.appendChild(this.successful);

        this.waiting = document.createElement("div");
        this.waiting.style.margin = "2rem 0px";
        this.waiting.style.overflowWrap = "break-word";
        this.waiting.style.fontSize = "1.5rem";
        this.waiting.style.fontWeight = "400";
        this.waiting.style.lineHeight = "2.25rem";
        this.waiting.innerText = i18n.waiting_25;
        this.completed.appendChild(this.waiting);

        this.footer_box = document.createElement("div");
        this.footer_box.style.width = "100%";
        this.footer_box.style.maxWidth = "60rem";
        this.footer_box.style.maxHeight = "80px";
        this.footer_box.style.boxSizing = "border-box";
        this.footer_box.style.margin = "0px auto";
        this.footer_box.style.padding = "0px 1.5rem";
        this.footer_box.style.textAlign = "center";
        this.footer_box.style.fontSize = "0.75rem";
        this.footer_box.style.lineHeight = "1.125rem";
        body.appendChild(this.footer_box);

        this.footer = document.createElement("div");
        this.footer.style.display = "grid";
        this.footer.style.justifyContent = "center";
        this.footer.style.borderTop = "1px solid";
        this.footer_box.appendChild(this.footer);

        let rayId = "";
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 15; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            rayId += characters.charAt(randomInd);
        }
        this.rayIdText = document.createElement("p");
        this.rayIdText.style.margin = "1rem 0px 0px 0px";
        this.rayIdText.innerHTML = `Ray ID: <code>9${rayId}</code>`;
        this.footer.appendChild(this.rayIdText);

        this.information = document.createElement("p");
        this.information.style.margin = "0px 0px 1rem 0px";
        this.information.innerHTML = i18n.footer_25.replace("Cloudflare", "<a target='_blank' href='https://www.cloudflare.com/'>Cloudflare</a>");
        this.footer.appendChild(this.information);

        this.link = this.information.getElementsByTagName("a").item(0);
        this.link.style.textDecoration = "none";
        this.link.style.transition = "color .15s";
        this.link.addEventListener("mouseenter", this.focusLink.bind(this));
        this.link.addEventListener("mouseleave", this.defocusLink.bind(this));

        window.matchMedia("screen and (prefers-color-scheme: light)").addEventListener("change", this.setColors.bind(this));
        this.setColors(window.matchMedia("screen and (prefers-color-scheme: light)"));
        window.matchMedia("screen and (width <= 720px)").addEventListener("change", this.setSizes.bind(this));
        this.setSizes(window.matchMedia("screen and (width <= 720px)"));
    }

    defocusLink() {
        this.link.style.color = window.matchMedia("screen and (prefers-color-scheme: light)").matches ? "#0051c3" : "#ffffff";
        this.link.style.textDecoration = "none";
    }

    focusLink() {
        this.link.style.color = "#f48120";
        this.link.style.textDecoration = "underline";
    }

    setColors(event) {
        document.documentElement.style.backgroundColor = event.matches ? "#ffffff" : "#222222";
        document.documentElement.style.color = event.matches ? "#313131" : "#d9d9d9";
        this.successful.style.backgroundImage = event.matches ? "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=)" : "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)"; // Source: Cloudflare
        this.link.style.color = event.matches ? "#00b1c3" : "#ffffff";
        for (let quarter of this.quarters) {
            quarter.style.borderTopColor = event.matches ? "#313131" : "#999999";
        }
        this.footer.style.borderColor = event.matches ? "#d9d9d9" : "#f2f2f2";
    }

    setSizes(event) {
        this.frame.style.padding = !event.matches ? "0px 1.5rem" : "0px 1rem"
        this.footer_box.style.padding = !event.matches ? "0px 1.5rem" : "0px 1rem"
    }

    start(tunnel) {
        this.loading.style.display = "none";
        this.frame.insertBefore(tunnel.frame, this.description);
        setTimeout(tunnel.start.bind(tunnel), this.cheats ? 0 : Config.cooldown);
    }
}


class CF26 {
    constructor(cheats, body, favicon) {
        this.cheats = cheats;

        document.documentElement.style.fontFamily = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';

        this.frame = document.createElement("div");
        this.frame.style.width = "100%";
        this.frame.style.maxWidth = "60rem";
        this.frame.style.boxSizing = "border-box";
        this.frame.style.margin = "8rem auto";
        this.frame.style.padding = "0px 2rem";
        this.frame.style.flex = "1";
        this.frame.setAttribute("role", "main");
        body.appendChild(this.frame);

        this.topBox = document.createElement("div");
        this.topBox.style.display = "flex";
        this.topBox.style.gap = "16px";
        this.topBox.style.alignItems = "center";
        this.frame.appendChild(this.topBox);

        this.name = document.createElement("h1");
        this.name.style.textAlign = "left";
        this.name.style.fontSize = "2.5rem";
        this.name.style.fontWeight = "600";
        this.name.style.lineHeight = "125%";
        this.name.style.margin = "0px";
        this.name.innerText = window.location.hostname;
        this.topBox.appendChild(this.name);

        this.favicon = document.createElement("img");
        this.favicon.style.marginRight = "0.5rem";
        this.favicon.style.width = "2rem";
        this.favicon.style.aspectRatio = "1/1";
        this.favicon.setAttribute("src", favicon);
        fetch(favicon).then((response) => {if (response.ok) {this.topBox.insertBefore(this.favicon, this.name);}});

        this.label = document.createElement("h2");
        this.label.style.margin = "8px 0px";
        this.label.style.fontSize = "1.5rem";
        this.label.style.fontWeight = "600";
        this.label.style.lineHeight = "125%";
        this.label.innerText = i18n.label_26;
        this.frame.appendChild(this.label);

        this.description = document.createElement("h2");
        this.description.style.margin = "0px 0px 2rem 0px";
        this.description.style.fontSize = "1rem";
        this.description.style.fontWeight = "400";
        this.description.style.lineHeight = "150%";
        this.description.style.marginBottom = "2rem";
        this.description.innerText = i18n.description_26;
        this.frame.appendChild(this.description);

        this.completed = document.createElement("h2");
        this.completed.style.display = "none";
        this.completed.style.margin = "2rem 0px 0.5rem 0px";
        this.completed.style.fontSize = "1.5rem";
        this.completed.style.fontWeight = "600";
        this.completed.style.lineHeight = "125%";
        this.completed.innerText = i18n.completed_26;
        this.frame.appendChild(this.completed);

        this.loading = document.createElement("div");
        this.loading.style.height = "76.391px";
        this.loading.style.margin = "2rem 0px";
        this.frame.appendChild(this.loading);

        this.spinner = document.createElement("div");
        this.spinner.style.width = "1.875rem";
        this.spinner.style.aspectRatio = "1 / 1";
        this.loading.appendChild(this.spinner);

        this.quarters = [];

        for (let i = 0; i < 4; i++) {
            const quarter = document.createElement("div");
            quarter.style.width = "1.875rem";
            quarter.style.aspectRatio = "1 / 1";
            quarter.style.position = "absolute";
            quarter.style.border = "0.3rem solid #00000000";
            quarter.style.borderRadius = "50%";
            quarter.style.borderColor = "#313131 #00000000 #00000000 #00000000"
            quarter.animate([{transform: "rotate(0)"}, {transform: "rotate(360deg)"}], {duration: 1200, easing: "cubic-bezier(0.5, 0, 0.5, 1)", iterations: Infinity});
            this.spinner.appendChild(quarter);
            this.quarters.push(quarter);
        }

        this.quarters[0].style.animationDelay = "-0.45s";
        this.quarters[1].style.animationDelay = "-0.3s";
        this.quarters[2].style.animationDelay = "-0.15s";

        this.footer_box = document.createElement("div");
        this.footer_box.style.width = "100%";
        this.footer_box.style.maxWidth = "60rem";
        this.footer_box.style.maxHeight = "80px";
        this.footer_box.style.boxSizing = "border-box";
        this.footer_box.style.margin = "0px auto";
        this.footer_box.style.padding = "0px 2rem";
        this.footer_box.style.textAlign = "center";
        this.footer_box.style.fontSize = "0.75rem";
        this.footer_box.style.lineHeight = "1.125rem";
        body.appendChild(this.footer_box);

        this.footer = document.createElement("div");
        this.footer.style.display = "grid";
        this.footer.style.justifyContent = "center";
        this.footer.style.borderTop = "1px solid";
        this.footer_box.appendChild(this.footer);

        let rayId = "";
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 15; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            rayId += characters.charAt(randomInd);
        }
        this.rayIdText = document.createElement("span");
        this.rayIdText.style.paddingTop = "1rem";
        this.rayIdText.innerHTML = `Ray ID: <code>9${rayId}</code>`;
        this.footer.appendChild(this.rayIdText);

        this.information = document.createElement("div");
        this.information.style.paddingBottom = "1rem";
        this.information.style.display = "flex";
        this.information.style.gap = "8px";
        this.information.style.alignItems = "center";
        this.footer.appendChild(this.information);

        this.informationMain = document.createElement("span");
        this.informationMain.innerHTML = i18n.footerMain_26.replace("Cloudflare", "<a target='_blank' href='https://www.cloudflare.com/'>Cloudflare</a>");
        this.information.appendChild(this.informationMain);

        this.informationSeperator = document.createElement("span");
        this.informationSeperator.style.boxSizing = "border-box";
        this.informationSeperator.style.border = "1px solid";
        this.informationSeperator.style.height = "12px";
        this.information.appendChild(this.informationSeperator);

        this.informationPrivacy = document.createElement("span");
        this.informationPrivacy.innerHTML = `<a target='_blank' href='https://www.cloudflare.com/privacypolicy/'>${i18n.footerPrivacy_26}</a>`;
        this.information.append(this.informationPrivacy);

        window.matchMedia("screen and (prefers-color-scheme: light)").addEventListener("change", this.setColors.bind(this));
        this.setColors(window.matchMedia("screen and (prefers-color-scheme: light)"));
        window.matchMedia("screen and (width <= 720px)").addEventListener("change", this.setSizes720.bind(this));
        this.setSizes720(window.matchMedia("screen and (width <= 720px)"));
        window.matchMedia("screen and (width > 720px) and (width <= 1024px)").addEventListener("change", this.setSizes1024.bind(this));
        this.setSizes1024(window.matchMedia("screen and (width > 720px) and (width <= 1024px)"));
    }

    finish(count) {
        if (count === 9) {location.reload();};
        this.completed.innerText = i18n.completed_26 + (".".repeat(count % 4));
        setTimeout(this.finish.bind(this), this.cheats ? 0 : (Config.cooldown / 27), count + 1);
    }

    setColors(event) {
        document.documentElement.style.backgroundColor = event.matches ? "#ffffff" : "#000000";
        document.documentElement.style.color = event.matches ? "#313131" : "#f2f2f2";
        this.description.style.color = event.matches ? "#313131" : "#b6b6b6";
        for (let link of this.footer.getElementsByTagName("a")) {
            link.style.color = event.matches ? "#0000EE" : "#82b6ff";
        }
        for (let quarter of this.quarters) {
            quarter.style.borderTopColor = event.matches ? "#313131" : "#999999";
        }
        this.footer.style.borderColor = event.matches ? "#d9d9d9" : "#f2f2f2";
        this.informationSeperator.style.borderColor = event.matches ? "#d9d9d9" : "#f2f2f2";
    }

    setSizes720(event) {
        if (event.matches || window.matchMedia("screen and (width > 1024px)").matches) {
            this.frame.style.padding = event.matches ? "0px 1rem" : "0px 2rem"
            this.footer_box.style.padding = event.matches ? "0px 1rem" : "0px 2rem"
        }
    }

    setSizes1024(event) {
        if (event.matches || window.matchMedia("screen and (width > 1024px)").matches) {
            this.frame.style.padding = event.matches ? "0px 1.5rem" : "0px 2rem"
            this.footer_box.style.padding = event.matches ? "0px 1.5rem" : "0px 2rem"
        }
    }

    start(tunnel) {
        this.loading.style.display = "none";
        this.frame.insertBefore(tunnel.frame, this.completed);
        setTimeout(tunnel.start.bind(tunnel), this.cheats ? 0 : Config.cooldown);
    }
}


class Tunnel {
    constructor(cheats, main, recaptcha, animate) {
        this.cheats = cheats;
        this.main = main;
        this.recaptcha = recaptcha;
        this.animate = animate;

        this.label_ = this.main.label;
        this.frame_ = this.main.frame;

        this.status = 0;

        this.frame = document.createElement("div");
        this.frame.style.width = "300px"
        this.frame.style.height = "65px";
        this.frame.style.display = "flex";
        this.frame.style.alignItems = "center";
        this.frame.style.justifyContent = "space-between";
        this.frame.style.boxSizing = "border-box";
        this.frame.style.border = "1px solid";
        this.frame.style.borderRadius = "2px";

        this.content = document.createElement("div");
        this.content.style.display = "grid";
        this.content.style.alignItems = "center";
        this.content.style.marginLeft = "8px";
        this.frame.appendChild(this.content);

        this.spinner = document.createElement("div");
        this.spinner.style.display = "block";
        this.spinner.style.position = "relative";
        this.spinner.style.width = "30px";
        this.spinner.style.height = "30px";
        this.spinner.style.border = "5px dotted #038127";
        this.spinner.style.borderRadius = "50%";
        this.spinner.animate([{transform: "rotate(0deg)"}, {transform: "rotate(360deg)"}], {duration: Config.cooldown, iterations: Infinity});
        this.content.appendChild(this.spinner);

        this.checkbox = document.createElement("input");
        this.checkbox.style.width = "24px";
        this.checkbox.style.aspectRatio = "1 / 1";
        this.checkbox.style.gridArea = "1 / 1";
        this.checkbox.style.zIndex = "69";
        this.checkbox.style.margin = "0";
        this.checkbox.style.cursor = "pointer";
        this.checkbox.style.opacity = "0";
        this.checkbox.style.display = "none";
        this.checkbox.clicked = false;
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.addEventListener("change", this.focused.bind(this));
        this.content.appendChild(this.checkbox);

        this.button = document.createElement("span");
        this.button.style.width = "24px";
        this.button.style.aspectRatio = "1 / 1";
        this.button.style.gridArea = "1 / 1";
        this.button.style.zIndex = "23";
        this.button.style.margin = "0";
        this.button.style.boxSizing = "border-box";
        this.button.style.border = "2px solid";
        this.button.style.borderRadius = "3px";
        this.button.style.transition = "all .1s ease-in";
        this.button.style.display = "none";
        this.content.appendChild(this.button);

        this.tick = document.createElement("span");
        this.tick.style.width = "9px";
        this.tick.style.height = "16px";
        this.tick.style.gridArea = "1 / 1";
        this.tick.style.zIndex = "46";
        this.tick.style.margin = "3px auto 6px auto";
        this.tick.style.boxSizing = "border-box";
        this.tick.style.borderRight = "4px solid";
        this.tick.style.borderBottom = "4px solid";
        this.tick.style.transform = "rotate(45deg)";
        this.tick.style.display = "none";
        this.content.appendChild(this.tick);

        this.verifying = document.createElement("label");
        this.verifying.style.gridColumn = "2";
        this.verifying.style.marginLeft = "8px";
        this.verifying.style.fontSize = "14px";
        this.verifying.innerText = i18n.verifying;
        this.content.appendChild(this.verifying);

        this.branding = document.createElement("div");
        this.branding.style.margin = "0px 8px 0px auto";
        this.branding.style.display = "grid";
        this.branding.style.textAlign = "right";
        this.frame.appendChild(this.branding);

        this.cloudflare = document.createElement("a");
        this.cloudflare.style.width = "73px";
        this.cloudflare.style.height = "25px";
        this.cloudflare.style.marginBottom = "1px";
        this.cloudflare.setAttribute("target", "_blank");
        this.cloudflare.setAttribute("href", "https://www.cloudflare.com/application-services/products/turnstile/");
        this.branding.appendChild(this.cloudflare);

        this.links = document.createElement("div");
        this.links.style.display = "flex";
        this.links.style.justifyContent = "flex-end";
        this.links.style.fontSize = "8px";
        this.branding.appendChild(this.links);

        this.privacy = document.createElement("a");
        this.privacy.setAttribute("target", "_blank");
        this.privacy.setAttribute("href", "https://www.cloudflare.com/privacypolicy/");
        this.privacy.addEventListener("mouseenter", this.focusLink.bind(this.privacy));
        this.privacy.addEventListener("mouseleave", this.defocusLink.bind(this.privacy));
        this.privacy.style.textDecoration = "underline";
        this.privacy.innerText = i18n.privacy;
        this.links.appendChild(this.privacy)

        this.seperator = document.createElement("span");
        this.seperator.style.margin = "0px 2.3px";
        this.seperator.innerText = "•";
        this.links.appendChild(this.seperator)

        this.help = document.createElement("a");
        this.help.setAttribute("target", "_blank");
        this.help.setAttribute("href", "https://challenges.cloudflare.com/cdn-cgi/challenge-platform/help");
        this.help.addEventListener("mouseenter", this.focusLink.bind(this.help));
        this.help.addEventListener("mouseleave", this.defocusLink.bind(this.help));
        this.help.style.textDecoration = "underline";
        this.help.innerText = i18n.help;
        this.links.appendChild(this.help);

        window.matchMedia("screen and (prefers-color-scheme: light)").addEventListener("change", this.setColors.bind(this));
        this.setColors(window.matchMedia("screen and (prefers-color-scheme: light)"));
    }

    defocusLink() {
        this.style.color = window.matchMedia("screen and (prefers-color-scheme: light)").matches ? "#0a0a0a" : "#f2f2f2";
    }

    focusLink() {
        this.style.color = window.matchMedia("screen and (prefers-color-scheme: light)").matches ? "#0000EE" : "#82b6ff";
    }

    changed() {
        // Start switching to new step. This shows the spinner and hides the checkbox.

        if (this.status === 1) {
            this.spinner.style.display = "block";
            this.checkbox.style.display = "none";
            this.button.style.display = "none";
            this.tick.style.display = "none";
            this.verifying.innerText = i18n.verifying;

            if (!window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
                this.button.style.backgroundColor = "#222222";
            }

            // First wait, after that hide the spinner and show the checkbox.
            setTimeout(this.continue.bind(this), this.cheats ? 0 : (Config.cooldown / 2))
        }

        else if (this.status === 2) {
            this.recaptcha.date_img = new Date();
            this.frame_.replaceChild(this.recaptcha.frame, this.frame);
            this.animate();
        }
    }

    clicked() {
        // Simulate "outfocus" event and "click" event for checkbox. This restores border to original state, and for dark theme it changes background color.

        if (window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
            this.button.style.border = "2px solid #6d6d6d";
        }

        else {
            this.button.style.backgroundColor = "#6d6d6d";
            this.button.style.border = "2px solid #dadada";
        }

        this.tick.style.display = "block";

        // Wait, after start switching to new step. This shows the spinner and hides the checkbox.
        setTimeout(this.changed.bind(this), Config.cooldown / 25)
    }

    continue() {
        // Hide the spinner and show the checkbox.

        this.spinner.style.display = "none";
        this.checkbox.style.display = "block";
        this.button.style.display = "block";
        this.button.animate([{transform: "scale(0.1)"}, {transform: "scale(1)"}], {duration: 400, iterations: 1});
        this.verifying.innerText = i18n.tryAgain;
        this.status = 2;
        this.checkbox.checked = false;
        this.checkbox.clicked = false;
    }

    focused() {
        // Simulate the orange-like colored border for the checkbox. The original one does this with "focus"-like event probably.

        if (!this.checkbox.clicked) {
            this.checkbox.clicked = true;
    
            if (window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
                this.button.style.border = "2px solid #c44d0e";
            }

            else {
                this.button.style.border = "2px solid #fbad41";
            }

            // Wait, after simulate "outfocus" event and "click" event for checkbox. This restores border to original state, and for dark theme it changes background color.
            setTimeout(this.clicked.bind(this), Config.cooldown / 25)
        }
    }

    start() {
        // Switch to first step after first spinning.

        this.status = 1;
        this.spinner.style.display = "none";
        this.checkbox.style.display = "block";
        this.button.style.display = "block";
        this.button.animate([{transform: "scale(0.1)"}, {transform: "scale(1)"}], {duration: 400, iterations: 1});
        this.verifying.innerText = i18n.verifyYou;
        if (Config.useCF2025) {this.label_.innerText = i18n.label2_25;};
    }

    setColors(event) {
        this.frame.style.backgroundColor = event.matches ? "#f8f8f8" : "#313131";
        this.frame.style.borderColor = event.matches ? "#d9d9d9" : "#d9d9d9";
        this.button.style.backgroundColor = event.matches ? "#ffffff" : "#0a0a0a";
        this.button.style.borderColor = event.matches ? "#4a4a4a" : "#999999";
        this.tick.style.borderRightColor = event.matches ? "#c44d0e" : "#fbad41";
        this.tick.style.borderBottomColor = event.matches ? "#c44d0e" : "#fbad41";
        this.verifying.style.color = event.matches ? "#0a0a0a" : "#f2f2f2";
        this.cloudflare.innerHTML = event.matches ? '<svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 425.6 143.63"><defs><style>.cls-1{fill:#f78100;}.cls-2{fill:#fcad32;}</style></defs><path class="cls-1" d="M360.8,90.69l1-3.6c1.24-4.28.78-8.24-1.3-11.15a11.32,11.32,0,0,0-9-4.43l-73.35-.94a1.49,1.49,0,0,1-1.16-.61,1.51,1.51,0,0,1-.15-1.33,2,2,0,0,1,1.7-1.3l74-.94c8.78-.4,18.29-7.53,21.62-16.22l4.22-11a2.51,2.51,0,0,0,.16-.94,2.35,2.35,0,0,0-.05-.52,48.21,48.21,0,0,0-92.7-5,21.69,21.69,0,0,0-34.58,15.15,22,22,0,0,0,.56,7.59,30.83,30.83,0,0,0-29.93,30.82,31.22,31.22,0,0,0,.32,4.46A1.44,1.44,0,0,0,223.68,92H359.13A1.79,1.79,0,0,0,360.8,90.69Z"/><path class="cls-2" d="M385.24,40c-.68,0-1.36,0-2,0a1.55,1.55,0,0,0-.31.07,1.14,1.14,0,0,0-.74.78l-2.89,10c-1.24,4.28-.77,8.24,1.31,11.14a11.3,11.3,0,0,0,9,4.44l15.63.94a1.44,1.44,0,0,1,1.12.6,1.5,1.5,0,0,1,.16,1.34,2,2,0,0,1-1.7,1.3l-16.24.94c-8.82.4-18.33,7.52-21.66,16.21l-1.17,3.07a.87.87,0,0,0,.77,1.18h55.94a1.49,1.49,0,0,0,1.45-1.07A40.15,40.15,0,0,0,385.24,40Z"/><polygon points="47.34 108.53 56.88 108.53 56.88 134.59 73.54 134.59 73.54 142.94 47.34 142.94 47.34 108.53"/><path d="M83.42,125.84v-.1c0-9.88,8-17.9,18.58-17.9s18.48,7.92,18.48,17.8v.1c0,9.88-8,17.89-18.58,17.89s-18.48-7.91-18.48-17.79m27.33,0v-.1c0-5-3.59-9.29-8.85-9.29s-8.7,4.23-8.7,9.19v.1c0,5,3.59,9.29,8.8,9.29s8.75-4.23,8.75-9.19"/><path d="M132.15,127.85V108.53h9.69v19.13c0,5,2.51,7.32,6.34,7.32s6.34-2.26,6.34-7.08V108.53h9.69v19.08c0,11.11-6.34,16-16.13,16s-15.93-5-15.93-15.73"/><path d="M178.8,108.53h13.27c12.29,0,19.42,7.08,19.42,17v.1c0,9.93-7.22,17.3-19.61,17.3H178.8Zm13.42,26c5.71,0,9.49-3.15,9.49-8.7v-.1c0-5.51-3.78-8.7-9.49-8.7h-3.88v17.5Z"/><polygon points="225.35 108.53 252.88 108.53 252.88 116.89 234.89 116.89 234.89 122.74 251.16 122.74 251.16 130.65 234.89 130.65 234.89 142.94 225.35 142.94 225.35 108.53"/><polygon points="266.15 108.53 275.69 108.53 275.69 134.59 292.35 134.59 292.35 142.94 266.15 142.94 266.15 108.53"/><path d="M317.27,108.29h9.19l14.65,34.65H330.89l-2.51-6.14H315.11l-2.46,6.14h-10Zm8.36,21.09-3.84-9.79-3.88,9.79Z"/><path d="M353.4,108.53h16.27c5.26,0,8.89,1.38,11.21,3.74a10.69,10.69,0,0,1,3,8v.1A10.89,10.89,0,0,1,376.85,131l8.21,12H374l-6.93-10.42h-4.18v10.42H353.4Zm15.83,16.52c3.24,0,5.11-1.57,5.11-4.08v-.1c0-2.7-2-4.08-5.16-4.08h-6.25v8.26Z"/><polygon points="397.68 108.53 425.36 108.53 425.36 116.64 407.12 116.64 407.12 121.85 423.64 121.85 423.64 129.38 407.12 129.38 407.12 134.83 425.61 134.83 425.61 142.94 397.68 142.94 397.68 108.53"/><path d="M26.46,129.87A8.44,8.44,0,0,1,18.58,135c-5.21,0-8.8-4.33-8.8-9.29v-.1c0-5,3.49-9.19,8.7-9.19a8.63,8.63,0,0,1,8.18,5.7H36.72c-1.61-8.19-8.81-14.31-18.14-14.31C8,107.84,0,115.86,0,125.74v.09c0,9.89,7.86,17.8,18.48,17.8,9.08,0,16.18-5.88,18.05-13.76Z"/></svg>' : '<svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 425.6 143.63"><defs><style>.cls-1{fill:#f78100;}.cls-2{fill:#fcad32;}.cls-3{fill:#fff;}</style></defs><path class="cls-1" d="M360.8,90.69l1-3.6c1.24-4.28.78-8.24-1.3-11.15a11.32,11.32,0,0,0-9-4.43l-73.35-.94a1.49,1.49,0,0,1-1.16-.61,1.51,1.51,0,0,1-.15-1.33,2,2,0,0,1,1.7-1.3l74-.94c8.78-.4,18.29-7.53,21.62-16.22l4.22-11a2.51,2.51,0,0,0,.16-.94,2.35,2.35,0,0,0-.05-.52,48.21,48.21,0,0,0-92.7-5,21.69,21.69,0,0,0-34.58,15.15,22,22,0,0,0,.56,7.59,30.83,30.83,0,0,0-29.93,30.82,31.22,31.22,0,0,0,.32,4.46A1.44,1.44,0,0,0,223.68,92H359.13A1.79,1.79,0,0,0,360.8,90.69Z"/><path class="cls-2" d="M385.24,40c-.68,0-1.36,0-2,0a1.55,1.55,0,0,0-.31.07,1.14,1.14,0,0,0-.74.78l-2.89,10c-1.24,4.28-.77,8.24,1.31,11.14a11.3,11.3,0,0,0,9,4.44l15.63.94a1.44,1.44,0,0,1,1.12.6,1.5,1.5,0,0,1,.16,1.34,2,2,0,0,1-1.7,1.3l-16.24.94c-8.82.4-18.33,7.52-21.66,16.21l-1.17,3.07a.87.87,0,0,0,.77,1.18h55.94a1.49,1.49,0,0,0,1.45-1.07A40.15,40.15,0,0,0,385.24,40Z"/><polygon class="cls-3" points="47.34 108.53 56.88 108.53 56.88 134.59 73.54 134.59 73.54 142.94 47.34 142.94 47.34 108.53"/><path class="cls-3" d="M83.42,125.84v-.1c0-9.88,8-17.9,18.58-17.9s18.48,7.92,18.48,17.8v.1c0,9.88-8,17.89-18.58,17.89s-18.48-7.91-18.48-17.79m27.33,0v-.1c0-5-3.59-9.29-8.85-9.29s-8.7,4.23-8.7,9.19v.1c0,5,3.59,9.29,8.8,9.29s8.75-4.23,8.75-9.19"/><path class="cls-3" d="M132.15,127.85V108.53h9.69v19.13c0,5,2.51,7.32,6.34,7.32s6.34-2.26,6.34-7.08V108.53h9.69v19.08c0,11.11-6.34,16-16.13,16s-15.93-5-15.93-15.73"/><path class="cls-3" d="M178.8,108.53h13.27c12.29,0,19.42,7.08,19.42,17v.1c0,9.93-7.22,17.3-19.61,17.3H178.8Zm13.42,26c5.71,0,9.49-3.15,9.49-8.7v-.1c0-5.51-3.78-8.7-9.49-8.7h-3.88v17.5Z"/><polygon class="cls-3" points="225.35 108.53 252.88 108.53 252.88 116.89 234.89 116.89 234.89 122.74 251.16 122.74 251.16 130.65 234.89 130.65 234.89 142.94 225.35 142.94 225.35 108.53"/><polygon class="cls-3" points="266.15 108.53 275.69 108.53 275.69 134.59 292.35 134.59 292.35 142.94 266.15 142.94 266.15 108.53"/><path class="cls-3" d="M317.27,108.29h9.19l14.65,34.65H330.89l-2.51-6.14H315.11l-2.46,6.14h-10Zm8.36,21.09-3.84-9.79-3.88,9.79Z"/><path class="cls-3" d="M353.4,108.53h16.27c5.26,0,8.89,1.38,11.21,3.74a10.69,10.69,0,0,1,3,8v.1A10.89,10.89,0,0,1,376.85,131l8.21,12H374l-6.93-10.42h-4.18v10.42H353.4Zm15.83,16.52c3.24,0,5.11-1.57,5.11-4.08v-.1c0-2.7-2-4.08-5.16-4.08h-6.25v8.26Z"/><polygon class="cls-3" points="397.68 108.53 425.36 108.53 425.36 116.64 407.12 116.64 407.12 121.85 423.64 121.85 423.64 129.38 407.12 129.38 407.12 134.83 425.61 134.83 425.61 142.94 397.68 142.94 397.68 108.53"/><path class="cls-3" d="M26.46,129.87A8.44,8.44,0,0,1,18.58,135c-5.21,0-8.8-4.33-8.8-9.29v-.1c0-5,3.49-9.19,8.7-9.19a8.63,8.63,0,0,1,8.18,5.7H36.72c-1.61-8.19-8.81-14.31-18.14-14.31C8,107.84,0,115.86,0,125.74v.09c0,9.89,7.86,17.8,18.48,17.8,9.08,0,16.18-5.88,18.05-13.76Z"/></svg>';
        this.cloudflare.getElementsByTagName("svg").item(0).style.width = "73px";
        this.cloudflare.getElementsByTagName("svg").item(0).style.height = "25px";
        this.privacy.style.color = event.matches ? "#0a0a0a" : "#f2f2f2";
        this.help.style.color = event.matches ? "#0a0a0a" : "#f2f2f2";
    }
}


class reCAPTCHA {
    constructor(cheats, lang, main, date_all) {
        this.cheats = cheats;
        this.lang = lang;
        this.main = main;
        this.date_all = date_all;

        this.label_ = main.label;
        this.description_ = main.description;
        this.completed_ = main.completed;

        this.deaths = 0;
        this.sizes = {
            "frame_width": 400,
            "frame_height": 580,
            "images_size": 390,
        };

        this.expiryDates = [];
        // Convert expiry times to Date object.
        for (let time of Config.expiryTimes) {
            const date = new Date();
            date.setHours(parseInt(time.split(":")[0]), parseInt(time.split(":")[1]), 0, 0);
            this.expiryDates.push(date);
        }

        this.frame = document.createElement("div");
        this.frame.style.width = `${this.sizes["frame_width"]}px`;
        this.frame.style.height = `${this.sizes["frame_height"]}px`;
        this.frame.style.display = "flex";
        this.frame.style.flexDirection = "column";
        this.frame.style.alignItems = "center";
        this.frame.style.justifyContent = "space-between";
        this.frame.style.backgroundColor = "#ffffff";
        this.frame.style.border = "2px solid #a9a9a9";

        this.header = document.createElement("div");
        this.header.style.width = "calc(100% - 14px)";
        this.header.style.height = "113px";
        this.header.style.margin = "7px 0px 5px";
        this.header.style.display = "grid";
        this.header.style.justifyContent = "space-between";
        this.header.style.placeItems = "center";
        this.header.style.backgroundColor = "#1a73e8";
        this.frame.appendChild(this.header);

        this.currentProgressBar = document.createElement("div");
        this.currentProgressBar.style.width = "calc(100% - 30px)";
        this.currentProgressBar.style.height = "15px";
        this.currentProgressBar.style.gridRow = "1";
        this.currentProgressBar.style.gridColumn = "1 / 3";
        this.currentProgressBar.style.margin = "7px 0px 0px 0px";
        this.currentProgressBar.style.borderRadius = "15px";
        this.currentProgressBar.style.border = "1px solid #ffffff";
        this.currentProgressBar.style.display = "flex";
        this.currentProgressBar.style.flexDirection = "row";
        this.currentProgressBar.style.backgroundColor = "#003f48";
        this.header.appendChild(this.currentProgressBar);

        this.currentProgressText = document.createElement("p");
        this.currentProgressText.style.height = "22px";
        this.currentProgressText.style.gridRow = "2";
        this.currentProgressText.style.gridColumn = "1 / 3";
        this.currentProgressText.style.margin = "2px 0px 0px 0px";
        this.currentProgressText.style.boxSizing = "border-box";
        this.currentProgressText.style.borderBottom = "2px solid #ffffff";
        this.currentProgressText.style.color = "#ffffff";
        this.currentProgressText.style.display = "none";
        this.header.appendChild(this.currentProgressText);

        this.texts = document.createElement("p");
        this.texts.style.gridArea = "3 / 1";
        this.texts.style.margin = "auto 15px";
        this.texts.style.fontSize = "16px";
        this.texts.style.color = "#ffffff";
        this.header.appendChild(this.texts);

        this.description = document.createElement("span");
        this.description.innerText = i18n.select;

        this.label = document.createElement("strong");
        this.label.style.fontSize = "24px";

        if (i18n.captchaHeader === 0) {
            this.label.style.textTransform = "lowercase";
            this.texts.appendChild(this.description);
            this.texts.appendChild(document.createElement("br"));
            this.texts.appendChild(this.label);
        }

        else if (i18n.captchaHeader === 1) {
            this.texts.appendChild(this.label);
            this.texts.appendChild(document.createElement("br"));
            this.texts.appendChild(this.description);
        }

        this.example = document.createElement("img");
        this.example.style.gridArea = "3 / 2";
        this.example.style.height = "60px";
        this.example.style.aspectRatio = "1 / 1";
        this.example.style.margin = "15px";
        this.example.style.float = "right";
        this.example.style.boxSizing = "border-box";
        this.example.style.border = "1px solid #ffffff";
        this.header.appendChild(this.example);

        this.images = document.createElement("div");
        this.images.style.width = `${this.sizes["images_size"]}px`;
        this.images.style.aspectRatio = "1 / 1";
        this.images.style.display = "grid";
        this.images.style.placeItems = "center";
        this.frame.appendChild(this.images);

        this.text = document.createElement("p");
        this.text.style.display = "none";
        this.text.style.margin = "4.5px 0px";
        this.text.style.padding = "0px";
        this.text.style.fontSize = "14px";
        this.text.style.color = "#d93025";
        this.frame.appendChild(this.text);

        this.seperator = document.createElement("div");
        this.seperator.style.width = "100%";
        this.seperator.style.height = "1px";
        this.seperator.style.margin = "5px 0px 0px 0px";
        this.seperator.style.backgroundColor = "#999999";
        this.frame.appendChild(this.seperator);

        this.footer = document.createElement("div");
        this.footer.style.width = "100%";
        this.footer.style.height = "59px";
        this.frame.appendChild(this.footer);

        this.controls = document.createElement("div");
        this.controls.style.height = "48px";
        this.controls.style.margin = "5px 6px 6px 6px";
        this.controls.style.float = "left";
        this.controls.style.display = "flex";
        this.footer.appendChild(this.controls);

        this.reload = document.createElement("img");
        this.reload.style.width = "32px";
        this.reload.style.height = "32px";
        this.reload.style.margin = "8px";
        this.reload.style.float = "left";
        this.reload.style.cursor = "pointer";
        this.reload.style.opacity = "0.55";
        this.reload.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/refresh_2x.png");
        this.reload.addEventListener("click", this.reset.bind(this));
        this.controls.appendChild(this.reload);

        this.audio = document.createElement("img");
        this.audio.style.width = "32px";
        this.audio.style.height = "32px";
        this.audio.style.margin = "8px";
        this.audio.style.float = "left";
        this.audio.style.cursor = "pointer";
        this.audio.style.opacity = "0.55";
        this.audio.message = i18n.tryAgainLater;
        this.audio.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/audio_2x.png");
        this.audio.addEventListener("click", this.showMessage.bind(this));
        this.controls.appendChild(this.audio);

        this.help = document.createElement("img");
        this.help.style.width = "32px";
        this.help.style.height = "32px";
        this.help.style.margin = "8px";
        this.help.style.float = "left";
        this.help.style.cursor = "pointer";
        this.help.style.opacity = "0.55";
        this.help.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/info_2x.png");
        this.help.addEventListener("click", this.showAboutText.bind(this));
        this.controls.appendChild(this.help);

        this.button = document.createElement("div");
        this.button.style.width = "100px";
        this.button.style.height = "42px";
        this.button.style.margin = "8px 8px 9px auto";
        this.button.style.float = "right";
        this.button.style.borderRadius = "2px";
        this.button.style.cursor = "pointer";
        this.button.style.alignContent = "center";
        this.button.style.transition = "all .5s ease";
        this.button.style.fontSize = "14px";
        this.button.style.fontWeight = "500";
        this.button.style.backgroundColor = "#1a73e8";
        this.button.style.color = "#d9d9d9";
        this.button.addEventListener("click", this.verify.bind(this));
        this.footer.appendChild(this.button);

        this.buttonText = document.createElement("p");
        this.buttonText.style.margin = "12px";
        this.buttonText.style.textAlign = "center";
        this.buttonText.style.textTransform = "uppercase";
        this.button.appendChild(this.buttonText);

        this.aboutText = document.createElement("p");
        this.aboutText.style.height = "60px";
        this.aboutText.style.display = "none";
        this.aboutText.style.margin = "0px";
        this.aboutText.style.padding = "5px 20px";
        this.aboutText.style.fontFamily = "Roboto,helvetica,arial,sans-serif";
        this.aboutText.style.fontSize = "12px";
        this.aboutText.style.fontWeight = "400";
        this.aboutText.style.color = "#000000";
        this.aboutText.innerText = `${i18n.about} `;
        this.frame.appendChild(this.aboutText);

        this.start();

        window.matchMedia("screen and (width <= 720px)").addEventListener("change", this.setSizes.bind(this));
        this.setSizes(window.matchMedia("screen and (width <= 720px)"));
    }

    animate() {
        this.currentProgressBar.style.display = "none";
        this.currentProgressText.style.display = "block";
        this.currentProgressText.innerText = i18n.progress.replace("{x}", this.progress).replace("{n}", this.step);
        setTimeout(this.switch.bind(this), Config.cooldown / 2.5);
    }

    focusToImage(event) {
        if (!event.currentTarget.clicked) {
            event.currentTarget.clicked = true;
            event.currentTarget.style.width = "80%";
            event.currentTarget.style.border = "2px solid #29dd84";
        }

        else {
            this.resetImage(event.currentTarget);
        }
    }

    randomizeImages(array) {
        for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array;
    }

    reset() {
        this.deaths++;

        this.currentProgressBar.querySelectorAll("*").forEach(element => element.remove());

        this.restore();
        this.start();
    }

    resetImage(image) {
        image.clicked = false;
        image.style.width = `${(parseInt(this.images.style.width) - (Math.sqrt(this.grid) * 4)) / Math.sqrt(this.grid)}px`;
        image.style.border = "0px";
    }

    restore() {
        this.frame.style.height = `${this.sizes["frame_height"] - (window.matchMedia("screen and (width <= 720px)").matches ? 80 : 0)}px`;

        this.text.style.display = "none";
        this.aboutText.style.display = "none";

        for (let captcha of this.imageElements) {
            this.images.removeChild(captcha);
        }
    }

    set() {
        /*
        Create a Object which does not contain the "__others__". This is required for random(selecting a category).

        random(grid)

        First, start the looping Config.categories. The "number" key specifies how much image from this category should be displayed.
        The "__others__" category will never be correct category.

        Looping:
            If the current category is correct category:
                If a "number" set for this category:
                    random(correct number)
                    If "number" > selected correct number:
                        Set correct number to "number".
                            Because this category is correct and a number for minumum already specified. We should use that.

                    Add correct number of random(this images) to final list and correct images list.

                If not:
                    Add this images only to correct images list.

            If not:
                If a "number" set for this category:
                    Add "number" of random(this images) to final list and wrong images list (because "number" is for minumum).
                        But this introduces a problem: Since these images already added in both lists, in the final wrong images addition this images will duplicated.
                        We will remove that duplications.
            
                If not:
                    Add this images only to wrong images list.

        random(wrong images list)
        
        Final additions & settings:
            We can handle two statuses in one:
                a. No "number" specified for any category.
                b. A "number" specified but it is not correct category.

                random(correct images list)

                random(correct number)
                Special status for "b" and if the correct number + "number" > grid number:
                    Set correct number to 'grid - "number"'.
                        We shouldn't change "number", but we can change correct number.
                
                Add 'correct number' of correct images to final list.

                For "a":
                    Add 'grid - correct number' of all wrong images to final list.
                
                For "b":
                    Remove already added (duplicated) images (not these category's all images) from wrong images list. 

                    Add 'grid - correct number - "number"' of all wrong images to final list.
                        Because we already added "number" specified wrong images to final list, this is minumum.
                
            The "number" specified for correct images:
                Add 'grid - "number"' of all wrong images to final list.
        
        random(final list)

        Make image elements via final list.

        Set grid and texts.

        Selecting a random(example image):
            This image should be from correct images list.

            We will select the example image from:
                correct number (we shouldn't select example image from grid)
                - 1 (because indexes starts from 0)
                + random(correct images list's length - if a "number" specified for correct category: "number", if not: correct number)
        
        Start progress bar animation.
        */

        this.correctImagePaths = [];
        this.correctNumber;
        this.imageElements = [];
        this.imagePaths = [];

        const wrongImagePaths = [];
        let correctCategoryPretty;

        const selectableCategories = {...Config.categories};
        delete selectableCategories.__others__;

        const correctCategory = Object.keys(selectableCategories)[Math.floor(Math.random() * Object.keys(selectableCategories).length)];

        this.grid = this.setRandom(Config.grids);

        for (const [categoryLoop, [active, categoryPretty, number, paths]] of Object.entries(Config.categories)) {     
            if (active || categoryLoop === "__others__") {
                if (categoryLoop === correctCategory) {
                    correctCategoryPretty = categoryPretty[this.lang];

                    if (number !== null) {
                        this.correctNumber = this.setRandom(Config.ratios, true);
                        if (Math.round(number * (this.grid === 16 ? (16 / 9) : 1)) > this.correctNumber) {
                            this.correctNumber = Math.round(number * (this.grid === 16 ? (16 / 9) : 1)); 
                        }
                        
                        const random_paths = this.randomizeImages([...paths])
                        this.correctImagePaths.push(...random_paths);
                        this.setImages(random_paths, this.correctNumber);
                    }

                    else {
                        this.correctImagePaths.push(...paths);
                    }
                }

                else {
                    if (number !== null) {
                        const random_paths = this.randomizeImages([...paths])
                        wrongImagePaths.push(...random_paths);
                        this.setImages(random_paths, Math.round(number * (this.grid === 16 ? (16 / 9) : 1)));
                    }

                    else {
                        wrongImagePaths.push(...paths)
                    }
                }

                if (number !== null) {
                    this.numberStatus = [categoryLoop === correctCategory, Math.round(number * (this.grid === 16 ? (16 / 9) : 1))];
                }
            }
        }

        this.randomizeImages(wrongImagePaths);

        if (this.numberStatus === undefined || !this.numberStatus[0]) {
            this.randomizeImages(this.correctImagePaths);

            this.correctNumber = this.setRandom(Config.ratios, true);

            if (this.numberStatus !== undefined && this.correctNumber + this.numberStatus[1] > this.grid) {
                this.correctNumber = this.grid - this.numberStatus[1];
            }

            this.setImages(this.correctImagePaths, this.correctNumber);
            
            if (this.numberStatus === undefined) {
                this.setImages(wrongImagePaths, this.grid - this.correctNumber);
            }

            else {
                for (let image of this.imagePaths) {
                    if (wrongImagePaths.includes(image)) {
                        wrongImagePaths.splice(wrongImagePaths.indexOf(image), 1);
                    }
                }

                this.setImages(wrongImagePaths, this.grid - this.correctNumber - this.numberStatus[1]);
            }
        }

        else {
            this.setImages(wrongImagePaths, this.grid - this.correctNumber);
        }
    
        this.randomizeImages(this.imagePaths);

        for (let path of this.imagePaths) {
            const image = document.createElement("img");
            image.style.margin = "2px";
            image.style.aspectRatio = "1 / 1";
            image.style.transition = "all .5s ease";
            image.setAttribute("src", path);
            image.addEventListener("click", this.focusToImage.bind(this));
            this.resetImage(image);
            this.images.appendChild(image);
            this.imageElements.push(image);
        }

        this.buttonText.innerText = this.correctNumber === 0 ? i18n.skip : i18n.verify;

        this.images.style.gridTemplateColumns = `repeat(${Math.sqrt(this.grid)}, 1fr)`;

        this.label.innerText = correctCategoryPretty;

        this.example.setAttribute("src", this.correctImagePaths[this.correctNumber - 1 + Math.ceil(Math.random() * (this.correctImagePaths.length - this.correctNumber))]);

        if (this.frame.parentElement !== null) {
            this.animate();
        }
    }

    setImages(array, value) {
        for (let i = 0; i < value; i++) {
            this.imagePaths.push(array[i]);
        }
    }

    setRandom(object, expand = false) {
        const randomNumber = Math.random() * 100;

        let value_ = 0;

        for (const [key, value] of Object.entries(object)) {
            value_ += value;

            if (randomNumber < value_) {
                return parseInt(expand ? Math.round(key * (this.grid === 16 ? (16 / 9) : 1)) : key);
            }
        }
    }

    setSizes(event) {
        this.frame.style.width = `${this.sizes["frame_width"] - (event.matches ? 80 : 0)}px`;
        this.images.style.width = `${this.sizes["images_size"] - (event.matches ? 80 : 0)}px`;

        let height = 0;
        if (this.aboutText.style.display === "block") {height += 70};
        if (this.text.style.display === "block") (height += 25);
        this.frame.style.height = `${this.sizes["frame_height"] - (event.matches ? 80 : 0) + height}px`;

        for (let image of this.imageElements) {
            image.style.width = `${(parseInt(this.images.style.width) - (Math.sqrt(this.grid) * 4)) / Math.sqrt(this.grid) * (image.clicked ? (4 / 5) : 1)}px`;
        }
    } 

    showAboutText() {
        this.frame.style.height = `${(this.text.style.display === "block" ? 675 : 650) - (window.matchMedia("screen and (width <= 720px)").matches ? 80 : 0)}px`;
        this.aboutText.style.display = "block";
    }

    showMessage(message) {
        this.frame.style.height = `${(this.aboutText.style.display === "block" ? 675 : 605) - (window.matchMedia("screen and (width <= 720px)").matches ? 80 : 0)}px`;
        this.text.style.display = "block";

        if (typeof message == "string") {
            this.text.innerText = message;
        }

        else {
            this.text.innerText = message.currentTarget.message;
        }
    }

    start() {
        this.progress = 0;
        this.progresses = [];
        this.total = 0;

        this.step = this.setRandom(Config.steps);

        for (let i = 0; i < this.step; i++) {
            if (i !== 0) {
                const seperator = document.createElement("span");
                seperator.style.width = "5px";
                seperator.style.height = "100%";
                seperator.style.backgroundColor = "#a9a9a9";
                this.currentProgressBar.appendChild(seperator);
            }

            const parent = document.createElement("span");
            parent.style.width = `calc((100% - 5 * ${this.step - 1}px) / ${this.step})`;
            parent.style.display = "flex";
            this.currentProgressBar.appendChild(parent);

            const child = document.createElement("span");
            child.style.width = "0px";
            child.style.backgroundColor = "#29dd84";
            parent.appendChild(child);
            this.progresses.push(child);
        }

        this.progresses[0].style.borderTopLeftRadius = "15px";
        this.progresses[0].style.borderBottomLeftRadius = "15px";
        this.progresses[this.progresses.length - 1].style.borderTopRightRadius = "15px";
        this.progresses[this.progresses.length - 1].style.borderBottomRightRadius = "15px";

        this.set();
    }

    switch() {
        this.currentProgressText.style.display = "none";
        this.currentProgressBar.style.display = "flex";

        if (this.progresses[this.progress].style.width === "0px") {
            this.currentAnimation = this.progresses[this.progress].animate([{width: "0px"}, {width: "100%"}], {duration: Config.cooldown / 5, iterations: 1});
        }

        this.progresses[this.progress].style.width = "100%";
    }

    verify() {
        let successful = 0;

        this.total += this.grid;

        for (let image of this.imageElements) {
            if (image.clicked)
                if (this.correctImagePaths.includes(image.getAttribute("src"))) {
                    successful++;
                }

                else {
                    successful--;
                }
        }

        if (successful === this.correctNumber) {
            this.progress += 1;

            if (this.progress === this.step) {
                const date = new Date();
                let results = {}

                if (Config.useFixedValidity) {
                    document.cookie = `fc_passed=true; max-age=${Config.validity}; samesite=None; path=/; secure=None`;
                }

                else {
                    const currentDate = new Date();

                    for (let date of this.expiryDates) {
                        if (currentDate <= date) {
                            if (((date.getTime() - currentDate.getTime()) / 1000) > Config.maximumAge) {
                                document.cookie = `fc_passed=true; max-age=${Config.validity}; samesite=None; path=/; secure=None`;
                            }

                            else {
                                document.cookie = `fc_passed=true; expires=${date.toUTCString()}; samesite=None; path=/; secure=None`;
                            }

                            break
                        }
                    }

                    if (document.cookie.split("; ").find((row) => row.startsWith("fc_passed="))?.split("=")[1] === undefined) {
                        document.cookie = `fc_passed=true; max-age=${Config.validity}; samesite=None; path=/; secure=None`;
                    }
                }

                if (document.cookie.split("; ").find((row) => row.startsWith("fc_results"))?.split("=")[1] !== undefined) {
                    results = JSON.parse(decodeURIComponent(document.cookie.split("; ").find((row) => row.startsWith("fc_results"))?.split("=")[1]))
                }
                results[date.toISOString()] = {
                    "good": Math.round(Math.sqrt(this.total) * 1000) + Config.cooldown * 1.5, 
                    "bad": this.total * 1000, 
                    "score_all": Math.abs(date - this.date_all),
                    "score_img": Math.abs(date - this.date_img), 
                    "deaths": this.deaths, 
                    "cheats": this.cheats
                }
                document.cookie = `fc_results=${encodeURIComponent(JSON.stringify(results))}; max-age=${31536000}; samesite=None; path=/; secure=None`;

                this.label_.style.display = "none";
                this.frame.style.display = "none";

                if (Config.useCF2025) {this.description_.style.display = "none";}
                this.completed_.style.display = "block";

                if (Config.useCF2025) {
                    setTimeout(location.reload.bind(location), this.cheats ? 0 : (Config.cooldown / 3))
                }
                else {
                    setTimeout(this.main.finish.bind(this.main), this.cheats ? 0 : (Config.cooldown / 27), 1);
                }
            }

            else {
                this.text.style.display = "none";
                this.restore();
                this.set();
            }
        }

        else {
            this.reset();
            this.showMessage(i18n.error);
        }
    }
}


function start() {
    const browserLanguage = navigator.language || navigator.browserLanguage || navigator.languages;
    const lang = browserLanguage.indexOf('tr') > -1 ? "tr" : "en"
    for (const [key, value] of Object.entries({...i18n}[lang])) {
        i18n[key] = value;
    }

    let cheats = false;
    if (Config.cheats === "true") {
        cheats = true
    }
    else if (Config.cheats === "cookies") {
        if (document.cookie.split("; ").find((row) => row.startsWith("fc_cheats="))?.split("=")[1] === "true") {
            cheats = true
        }
    }

    const date_all = new Date();
    
    const main = new Main(cheats, lang);
    const recaptcha = new reCAPTCHA(cheats, lang, main.page, date_all);
    const tunnel = new Tunnel(cheats, main.page, recaptcha, recaptcha.animate.bind(recaptcha));

    setTimeout(main.page.start.bind(main.page), cheats ? 0 : (Config.cooldown / 4), tunnel);
}


(function() {
    'use strict';

    if (document.cookie.split("; ").find((row) => row.startsWith("fc_passed="))?.split("=")[1] === undefined) {
        document.title = i18n.title_25;
        document.documentElement.style.display = "none";

        addEventListener("load", (event) => {start()})}})();
