// ==UserScript==
// @name         Verify You Are Human
// @namespace    http://tampermonkey.net/
// @version      1.8.1
// @description  Cloudflare Tunnel Security + Google reCAPTCHA Challange
// @author       Cloudflare, Google
// @match        https://islamansiklopedisi.org.tr/*
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
// @match        http://*.turktime.com/*
// @match        http://*.hurhaber.com/*
// @match        http://*.objektifhaber.com/*
// @match        https://*.habervakti.com/*
// @match        https://*.eurovizyon.co.uk/*
// @match        https://*.habervitrini.com/*
// @match        https://*.bigpara.com/*
// @match        http://*.arkeolojikhaber.com/*
// @match        https://*.acunn.com/*
// @match        https://*.bianet.org/*
// @match        https://*.tgrthaber.com.tr/*
// @match        https://*.haber.sol.org.tr/*
// @match        https://*.haberet.com/*
// @match        http://*.agos.com.tr/*
// @match        http://*.aksam.com.tr/*
// @match        http://*.posta.com.tr/*
// @match        http://*.karar.com/*
// @match        http://*.aydinlik.com.tr/*
// @match        http://*.sabah.com.tr/*
// @match        http://*.cumhuriyet.com.tr/*
// @match        http://*.yenisafak.com.tr/*
// @match        http://*.yenimesaj.com.tr/*
// @match        https://*.gazetebirlik.com/*
// @match        https://*.balkangunlugu.com.tr/*
// @match        http://*.medyaradar.com/*
// @match        http://*.televizyongazetesi.com/*
// @match        http://*.medyatava.com/*
// @match        http://*.marketingturkiye.com/*
// @match        http://*.gazeteciler.com/*
// @match        http://*.mediacatonline.com/*
// @match        http://*.dorduncukuvvetmedya.com/*
// @match        http://*.ranini.tv/*
// @match        http://*.medyaloji.net/*
// @match        https://*.journo.com.tr/*
// @match        http://*.medyakafe.com/*
// @match        http://*.onedio.com/*
// @match        https://*.gzt.com/*
// @match        https://*.neoldu.com/*
// @match        http://*.incisozluk.com.tr/*
// @match        https://*.eksisozluk.com/*
// @match        https://*.listelist.com/*
// @match        https://*.tr.pinterest.com/*
// @match        https://*.fikircografyasi.com/*
// @match        https://*.fikriyat.com/*
// @match        http://*.Kızlarsoruyor.com/*
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
// @match        http://*.isigmeclisi.org/*
// @match        https://*.medimagazin.com.tr/*
// @match        https://*.sendika.org/*
// @match        https://*.sputnikglobe.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/150px-RecaptchaLogo.svg.png
// @grant        none
// @run-at       document-start
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
    static cooldown = 4600; // Cooldown of value / 4 for load animation, value / 1 Tunnel's first step, value / 2 for Tunnel's second step, value / 23 for Tunnel's checkbox effects, value / 2.5 for showing progress bar text, value / 5 animating progress bar, and value / 3 for redirecting to website after passing reCAPTCHA in miliseconds.

    static validity = 529; // Validity time of challange in seconds.

    static isLinuxTargeted = false; // I added this because I'm using openSUSE Tumbleweed and I'm lazy to change the cooldown value. If you target Linux distributions, of course you should enable it (by the way I think Linux users don't deserve this :))

    static pinterestLink = "https://bn.bloat.cat/image_proxy.php?url="; // I just added this because Pinterest is blocked at my school.

    static expiryTimes = ["09:00", "09:40", "09:50", "10:30", "10:40", "11:20", "11:30", "12:10", "12:20", "13:00", "13:45", "14:25", "14:35", "15:15", "15:20", "16:00"]; // Expiry times in hour:minute format. Note: The order should be from first to last.

    static maximumAge = 2392; // Maximum validition time to be used with expiryTimes.

    static fixedValidity = false; // If you don't going to use expiryTimes, you should enable this.

    static categories = {
        // Format: "name": [true or false (activation), int or null (how much of that category to show (null means random)), ["link1", ..., "linkn" (for image links)],
        // Note: The second value should only be set for one category!
        // Note: The relevant category must have 1 more content than the second value!
        "__others__": [true, null, [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg/330px-Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Fourteen_traffic_lights.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Fire_Engine_33_%286225707251%29.jpg/330px-Fire_Engine_33_%286225707251%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg/330px-Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Downtown_Charlottesville_fire_hydrant.jpg/250px-Downtown_Charlottesville_fire_hydrant.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pune_green_bus.jpg/250px-Pune_green_bus.jpg"
        ]], // Do not change __others__'s name or do not delete it! Note: The images here will never be correct image for reCAPTCHA.
        "Cami": [true, null, [
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
        "İnsan": [true, 5, [
            `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPUk0oDBJkRG-Frn1MXLyqXAfGAcSKSYpkcjXWZbO9SDtipVvk`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/94/32/95/9432954418f607af26c6bd5f0c3e5db3.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/24/27/7f/24277ff1beed4aede21717ea389b0611.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/c0/9c/cd/c09ccd0e1d36aed1953573dc73ae9180.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/236x/09/65/7a/09657ad73902dfd45071653b2c3eed3a.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/33/d9/8b/33d98b14ccc1d6e2e879575cc82fc02b.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/6a/f3/09/6af3095d1b57821d5f81c7f5fd7fc94e.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/80/e9/4d/80e94dda8ecf8cdc51cae029877fcc1a.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/51/61/d1/5161d1e9e5c4dfe32a2fae8d374ac388.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/f2/e6/2c/f2e62c62df7937c5665feaffb9151b16.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/7b/67/a0/7b67a025a104f2f11a991af0f46f4643.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/7f/58/5c/7f585c1fdc14fa25b6960b759e5ba686.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/fb/3c/2f/fb3c2fca26e69371df0ac7dca4946bb1.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/ec/97/59/ec9759530cdfcf6de96b500a8d206445.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/83/11/e1/8311e1b1e8efe53eb257c906587f2875.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/db/c1/21/dbc1218d8f79d6ca4e0d2f430c763213.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/37/f0/08/37f008932fa7b7a3006f2b05dd8d5586.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/7f/d3/17/7fd317b367625ca0a2b5e58d4aeb8096.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/f3/99/74/f399749fe6049b388175d93f52f242be.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/67/5f/44/675f440c9a058ee828bddded814f8157.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/33/c2/91/33c2911138c375dd7774ee210a526993.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/30/65/63/3065634ed2151184076be79cdb719c46.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/39/1d/01/391d01c9ddc3be77fe08ab8fe3a97bd5.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/8f/5c/7f/8f5c7fe9601a92d710d85f1b2d1ab6e9.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/9f/9b/d8/9f9bd84362e87bc0388ab5d7583a8d8c.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/24/a0/45/24a0450592fdf051307842148c640ecb.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/0a/c4/40/0ac44094ba821fa1f9b5ad79ba9abc80.jpg`,
            `${Config.pinterestLink}https://i.pinimg.com/736x/dc/7b/94/dc7b944a451e786a2c1636982cef463f.jpg`
        ]]
    };

    static ratios = {
        // The ratios of how many images are the correct image for 3x3 layout.
        // Note: Do not add or delete any key!
        // Note: The total should add up to 100!
        "0": 0,
        "1": 0,
        "2": 10.625,
        "3": 34.5,
        "4": 23,
        "5": 10.625,
        "6": 10.625,
        "7": 10.625,
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
        // Note: The total should add up to 100!
        "3": 100
    };

    static multiplier = 1.777777777777778; // Multiplier value of the values in 9 adapted to 16.

    static captchaHeader = 1; // In Turkish the item to be selected is at the top, while in English it is at the bottom. 0 for bottom, 1 for top.

    // Main UI

    static title = "Bir dakika lütfen...";

    static label = "İnsan olduğunuz doğrulanıyor. Bu işlem birkaç saniye sürebilir.";

    static label2 = "Aşağıdaki işlemi tamamlayarak insan olduğunuzu doğrulayın.";

    static description = `${window.location.hostname} adresinin devam etmeden önce bağlantınızın güvenliğini gözden geçirmesi gerekiyor.`; // ${window.location.hostname} means domain of the URL.

    static successful = "Doğrulama başarılı";

    static waiting = `${window.location.hostname} adresinin yanıt vermesi bekleniyor...`; // ${window.location.hostname} means domain of the URL.

    static footer = "Bu sitenin performansı ve güvenliği Cloudflare tarafından sağlanmaktadır";

    // Tunnel

    static verifying = "Doğrulanıyor...";

    static verifyYou = "Gerçek kişi olduğunuzu\ndoğrulayın";

    static tryAgain = "Tekrar deneyin";

    static privacy = "Gizlilik";

    static terms = "Koşullar";

    // reCAPTCHA

    static select = "içeren tüm resimleri seçin";

    static tryAgainLater = "Lütfen daha sonra tekrar deneyin.";

    static error = "Lütfen tüm eşleşen resimleri seçin.";

    static help = "Kullanıcı arayüzünün üst tarafında yer alan metinde tasvir edilen veya resimde görülen nesneyi içeren her resmi seçin. Ardından, Doğrula'yı tıklayın. Yeni bir reCAPTCHA testi istemek için yeniden yükle simgesini tıklayın.";

    static learnMore = "Daha fazla bilgi edinin.";

    static skip = "Atla";

    static verify = "Doğrula";

    static progress = "{n} taneden {x} tanesi tamamlandı"; // {n} is number of total steps, {x} is number of current step.
}


class Main {
    constructor() {
        // Rechange the title because some scripts change it while loading.
        document.title = Config.title;

        // Remove all scripts because some scripts add some elements to DOM.
        document.querySelectorAll("script").forEach(child => child.remove());

        // Try to get rid of the icon of the website.
        document.querySelectorAll("link[rel*='icon'").forEach(favicon => favicon.setAttribute("href", "data:image/x-icon;base64,"));

        // Clear head except title and icons.
        Array.from(document.head.children).forEach(child => {
            if (child.tagName !== 'TITLE' && !child.matches("link[rel*='icon'")) {
                child.remove();
            }
        }); 

        // Remove all elements in body.
        Array.from(document.body.children).forEach(child => child.remove());

        document.documentElement.style.display = "flex";
        document.documentElement.style.width = "100vw";
        document.documentElement.style.height = "100vh";
        document.documentElement.style.boxSizing = "border-box";
        document.documentElement.style.margin = "0";
        document.documentElement.style.padding = "0";
        document.documentElement.style.fontFamily = "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.body.style.display = "flex";
        document.body.style.flexDirection = "column";
        document.body.style.margin = "0px";

        this.frame = document.createElement("div");
        this.frame.style.width = "100%";
        this.frame.style.maxWidth = "60rem";
        this.frame.style.boxSizing = "border-box";
        this.frame.style.margin = "8rem auto";
        this.frame.style.padding = "0px 1.5rem";
        this.frame.style.flex = "1";
        this.frame.setAttribute("role", "main");
        document.body.appendChild(this.frame);

        this.name = document.createElement("h1");
        this.name.style.textAlign = "left";
        this.name.style.fontSize = "2.5rem";
        this.name.style.fontWeight = "500";
        this.name.style.lineHeight = "3.75rem";
        this.name.style.margin = "0px";
        this.name.innerText = window.location.hostname;
        this.frame.appendChild(this.name);

        this.label = document.createElement("p");
        this.label.style.fontSize = "1.5rem";
        this.label.style.fontWeight = "500";
        this.label.style.lineHeight = "2.25rem";
        this.label.style.marginTop = "0px";
        this.label.style.marginBottom = "2rem";
        this.label.innerText = Config.label;
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
            let quarter = document.createElement("div");
            quarter.style.width = "1.875rem";
            quarter.style.aspectRatio = "1 / 1";
            quarter.style.position = "absolute";
            quarter.style.border = "0.3rem solid #0000";
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
        this.description.innerText = Config.description;
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
        this.successful.innerText = Config.successful;
        this.completed.appendChild(this.successful);

        this.waiting = document.createElement("div");
        this.waiting.style.margin = "2rem 0px";
        this.waiting.style.overflowWrap = "break-word";
        this.waiting.style.fontSize = "1.5rem";
        this.waiting.style.fontWeight = "400";
        this.waiting.style.lineHeight = "2.25rem";
        this.waiting.innerText = Config.waiting;
        this.completed.appendChild(this.waiting);

        this.footer = document.createElement("div");
        this.footer.style.width = "100%";
        this.footer.style.maxWidth = "60rem";
        this.footer.style.maxHeight = "80px";
        this.footer.style.boxSizing = "border-box";
        this.footer.style.margin = "0 auto";
        this.footer.style.padding = "0px 1.5rem";
        this.footer.style.textAlign = "center";
        this.footer.style.fontSize = "0.75rem";
        this.footer.style.lineHeight = "1.125rem";
        document.body.appendChild(this.footer);

        this.seperator = document.createElement("div");
        this.seperator.style.width = "100%";
        this.seperator.style.height = "1px";
        this.seperator.style.backgroundColor = "#d9d9d9";
        this.footer.appendChild(this.seperator);

        // Set a random text which starts with 9.
        let rayId = "";
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 15; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            rayId += characters.charAt(randomInd);
        }

        this.rayIdText = document.createElement("p");
        this.rayIdText.style.margin = "1rem 0px 0.5rem 0px";
        this.rayIdText.innerHTML = `Ray ID: <code>9${rayId}</code>`;
        this.footer.appendChild(this.rayIdText);

        this.rayIdText.getElementsByTagName("code").item(0).style.fontFamily = "monaco,courier,monospace";

        this.information = document.createElement("p");
        this.information.style.margin = "0px 0px 1rem 0px";
        this.information.innerHTML = Config.footer.replace("Cloudflare", "<a target='_blank' href='https://www.cloudflare.com/'>Cloudflare</a>");
        this.footer.appendChild(this.information);

        this.link = this.information.getElementsByTagName("a").item(0);
        this.link.style.textDecoration = "none";
        this.link.style.transition = "color .15s";
        this.link.addEventListener("mouseover", this.focusToLink.bind(this));
        this.link.addEventListener("mouseleave", this.unfocusToLink.bind(this));

        window.matchMedia("screen and (prefers-color-scheme: light)").addEventListener("change", this.setColors.bind(this));
        this.setColors(window.matchMedia("screen and (prefers-color-scheme: light)"));
    }

    focusToLink() {
        this.link.style.color = "#f48120";

        this.link.style.textDecoration = "underline";
    }

    unfocusToLink() {
        if (window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
            this.link.style.color = "#0051c3";
        }

        else {
            this.link.style.color = "#ffffff";
        }

        this.link.style.textDecoration = "none";
    }

    setColors(event) {
        if (event.matches) {
            document.documentElement.style.backgroundColor = "#ffffff";
            document.documentElement.style.color = "#313131";
            this.successful.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=)"; // Source: Cloudflare
            this.link.style.color = "#0051c3";

            for (let quarter of this.quarters) {
                quarter.style.borderTopColor = "#313131";
            }
        }

        else {
            document.documentElement.style.backgroundColor = "#222222";
            document.documentElement.style.color = "#d9d9d9";
            this.successful.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4)"; // Source: Cloudflare
            this.link.style.color = "#ffffff";

            for (let quarter of this.quarters) {
                quarter.style.borderTopColor = "#999999";
            }
        }
    }

    start(tunnel) {
        this.loading.style.display = "none";
        this.frame.insertBefore(tunnel.frame, this.description);
        setTimeout(tunnel.start.bind(tunnel), !Config.isLinuxTargeted && (window.navigator.userAgent.indexOf("X11") != -1 || window.navigator.userAgent.indexOf("Linux") != -1) ? 0 : Config.cooldown);
    }
}


class Tunnel {
    constructor(label, frame, recaptcha, animate) {
        this.label_ = label;
        this.frame_ = frame;
        this.recaptcha_ = recaptcha;
        this.animate_ = animate;

        this.status = 0;

        this.frame = document.createElement("div");
        this.frame.style.width = "300px"
        this.frame.style.height = "65px";
        this.frame.style.display = "flex";
        this.frame.style.alignItems = "center";
        this.frame.style.justifyContent = "space-between";
        this.frame.style.boxSizing = "border-box";

        this.content = document.createElement("div");
        this.content.style.display = "grid";
        this.content.style.placeItems = "center";
        this.content.style.marginLeft = "16px";
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
        this.tick.style.transform = "rotate(45deg)";
        this.tick.style.display = "none";
        this.content.appendChild(this.tick);

        this.verifying = document.createElement("label");
        this.verifying.style.gridColumn = "2";
        this.verifying.style.marginLeft = "8px";
        this.verifying.style.fontSize = "14px";
        this.verifying.innerText = Config.verifying;
        this.content.appendChild(this.verifying);

        this.branding = document.createElement("div");
        this.branding.style.margin = "0px 16px 0px auto";
        this.branding.style.display = "grid";
        this.branding.style.textAlign = "right";
        this.frame.appendChild(this.branding);

        this.cloudflare = document.createElement("a");
        this.cloudflare.style.width = "73px";
        this.cloudflare.style.height = "30.5px";
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
        this.privacy.style.textDecoration = "underline";
        this.privacy.innerText = Config.privacy;
        this.links.appendChild(this.privacy)

        this.seperator = document.createElement("span");
        this.seperator.style.margin = "0px 2.3px";
        this.seperator.innerText = "•";
        this.links.appendChild(this.seperator)

        this.terms = document.createElement("a");
        this.terms.setAttribute("target", "_blank");
        this.terms.setAttribute("href", "https://www.cloudflare.com/website-terms/");
        this.terms.style.textDecoration = "underline";
        this.terms.innerText = Config.terms;
        this.links.appendChild(this.terms);

        window.matchMedia("screen and (prefers-color-scheme: light)").addEventListener("change", this.setColors.bind(this));
        this.setColors(window.matchMedia("screen and (prefers-color-scheme: light)"));
    }

    changed() {
        // Start switching to new step. This shows the spinner and hides the checkbox.

        if (this.status === 1) {
            this.spinner.style.display = "block";
            this.checkbox.style.display = "none";
            this.button.style.display = "none";
            this.tick.style.display = "none";
            this.verifying.innerText = Config.verifying;

            if (!window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
                this.button.style.backgroundColor = "#222222";
            }

            // Wait, after hide the spinnex and show the checkbox.
            setTimeout(this.continue.bind(this), !Config.isLinuxTargeted && (window.navigator.userAgent.indexOf("X11") != -1 || window.navigator.userAgent.indexOf("Linux") != -1) ? 0 : (Config.cooldown / 2))
            
            this.status = 2;
        }

        else if (this.status === 2) {
            this.frame_.replaceChild(this.recaptcha_, this.frame);
            this.animate_();
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
        setTimeout(this.changed.bind(this), !Config.isLinuxTargeted && (window.navigator.userAgent.indexOf("X11") != -1 || window.navigator.userAgent.indexOf("Linux") != -1) ? 0 : (Config.cooldown / 23))
    }

    continue() {
        this.checkbox.checked = false;
        this.spinner.style.display = "none";
        this.checkbox.style.display = "block";
        this.button.style.display = "block";
        this.button.animate([{transform: "scale(0.1)"}, {transform: "scale(1)"}], {duration: 400, iterations: 1});
        this.verifying.innerText = Config.tryAgain;
    }

    focused() {
        // Simulate the orange-like colored border for the checkbox. The original one does this with "focus"-like event probably.

        if (window.matchMedia("screen and (prefers-color-scheme: light)").matches) {
            this.button.style.border = "2px solid #c44d0e";
        }

        else {
            this.button.style.border = "2px solid #fbad41";
        }

        // Wait, after simulate "outfocus" event and "click" event for checkbox. This restores border to original state, and for dark theme it changes background color.
        setTimeout(this.clicked.bind(this), !Config.isLinuxTargeted && (window.navigator.userAgent.indexOf("X11") != -1 || window.navigator.userAgent.indexOf("Linux") != -1) ? 0 : (Config.cooldown / 23))
    }

    start() {
        // Switch to first step after first spinning.

        this.status = 1;
        this.spinner.style.display = "none";
        this.checkbox.style.display = "block";
        this.button.style.display = "block";
        this.button.animate([{transform: "scale(0.1)"}, {transform: "scale(1)"}], {duration: 400, iterations: 1});
        this.verifying.innerText = Config.verifyYou;
        this.label_.innerText = Config.label2;
    }

    setColors(event) {
        if (event.matches) {
            this.frame.style.backgroundColor = "#fafafa";
            this.frame.style.border = "1px solid #e0e0e0";
            this.button.style.backgroundColor = "#ffffff";
            this.button.style.border = "2px solid #6d6d6d";
            this.tick.style.borderRight = "4px solid #c44d0e";
            this.tick.style.borderBottom = "4px solid #c44d0e";
            this.verifying.style.color = "#232323";
            this.cloudflare.innerHTML = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.6 143.63"><defs><style>.cls-1{fill:#f78100;}.cls-2{fill:#fcad32;}</style></defs><path class="cls-1" d="M360.8,90.69l1-3.6c1.24-4.28.78-8.24-1.3-11.15a11.32,11.32,0,0,0-9-4.43l-73.35-.94a1.49,1.49,0,0,1-1.16-.61,1.51,1.51,0,0,1-.15-1.33,2,2,0,0,1,1.7-1.3l74-.94c8.78-.4,18.29-7.53,21.62-16.22l4.22-11a2.51,2.51,0,0,0,.16-.94,2.35,2.35,0,0,0-.05-.52,48.21,48.21,0,0,0-92.7-5,21.69,21.69,0,0,0-34.58,15.15,22,22,0,0,0,.56,7.59,30.83,30.83,0,0,0-29.93,30.82,31.22,31.22,0,0,0,.32,4.46A1.44,1.44,0,0,0,223.68,92H359.13A1.79,1.79,0,0,0,360.8,90.69Z"/><path class="cls-2" d="M385.24,40c-.68,0-1.36,0-2,0a1.55,1.55,0,0,0-.31.07,1.14,1.14,0,0,0-.74.78l-2.89,10c-1.24,4.28-.77,8.24,1.31,11.14a11.3,11.3,0,0,0,9,4.44l15.63.94a1.44,1.44,0,0,1,1.12.6,1.5,1.5,0,0,1,.16,1.34,2,2,0,0,1-1.7,1.3l-16.24.94c-8.82.4-18.33,7.52-21.66,16.21l-1.17,3.07a.87.87,0,0,0,.77,1.18h55.94a1.49,1.49,0,0,0,1.45-1.07A40.15,40.15,0,0,0,385.24,40Z"/><polygon points="47.34 108.53 56.88 108.53 56.88 134.59 73.54 134.59 73.54 142.94 47.34 142.94 47.34 108.53"/><path d="M83.42,125.84v-.1c0-9.88,8-17.9,18.58-17.9s18.48,7.92,18.48,17.8v.1c0,9.88-8,17.89-18.58,17.89s-18.48-7.91-18.48-17.79m27.33,0v-.1c0-5-3.59-9.29-8.85-9.29s-8.7,4.23-8.7,9.19v.1c0,5,3.59,9.29,8.8,9.29s8.75-4.23,8.75-9.19"/><path d="M132.15,127.85V108.53h9.69v19.13c0,5,2.51,7.32,6.34,7.32s6.34-2.26,6.34-7.08V108.53h9.69v19.08c0,11.11-6.34,16-16.13,16s-15.93-5-15.93-15.73"/><path d="M178.8,108.53h13.27c12.29,0,19.42,7.08,19.42,17v.1c0,9.93-7.22,17.3-19.61,17.3H178.8Zm13.42,26c5.71,0,9.49-3.15,9.49-8.7v-.1c0-5.51-3.78-8.7-9.49-8.7h-3.88v17.5Z"/><polygon points="225.35 108.53 252.88 108.53 252.88 116.89 234.89 116.89 234.89 122.74 251.16 122.74 251.16 130.65 234.89 130.65 234.89 142.94 225.35 142.94 225.35 108.53"/><polygon points="266.15 108.53 275.69 108.53 275.69 134.59 292.35 134.59 292.35 142.94 266.15 142.94 266.15 108.53"/><path d="M317.27,108.29h9.19l14.65,34.65H330.89l-2.51-6.14H315.11l-2.46,6.14h-10Zm8.36,21.09-3.84-9.79-3.88,9.79Z"/><path d="M353.4,108.53h16.27c5.26,0,8.89,1.38,11.21,3.74a10.69,10.69,0,0,1,3,8v.1A10.89,10.89,0,0,1,376.85,131l8.21,12H374l-6.93-10.42h-4.18v10.42H353.4Zm15.83,16.52c3.24,0,5.11-1.57,5.11-4.08v-.1c0-2.7-2-4.08-5.16-4.08h-6.25v8.26Z"/><polygon points="397.68 108.53 425.36 108.53 425.36 116.64 407.12 116.64 407.12 121.85 423.64 121.85 423.64 129.38 407.12 129.38 407.12 134.83 425.61 134.83 425.61 142.94 397.68 142.94 397.68 108.53"/><path d="M26.46,129.87A8.44,8.44,0,0,1,18.58,135c-5.21,0-8.8-4.33-8.8-9.29v-.1c0-5,3.49-9.19,8.7-9.19a8.63,8.63,0,0,1,8.18,5.7H36.72c-1.61-8.19-8.81-14.31-18.14-14.31C8,107.84,0,115.86,0,125.74v.09c0,9.89,7.86,17.8,18.48,17.8,9.08,0,16.18-5.88,18.05-13.76Z"/></svg>'; // Source: Cloudflare
            this.privacy.style.color = "#232323";
            this.terms.style.color = "#232323";
        }   

        else {
            this.frame.style.backgroundColor = "#232323";
            this.frame.style.border = "1px solid #797979";
            this.button.style.backgroundColor = "#222222";
            this.button.style.border = "2px solid #dadada";
            this.tick.style.borderRight = "4px solid #fbad41";
            this.tick.style.borderBottom = "4px solid #fbad41";
            this.verifying.style.color = "#ffffff";
            this.cloudflare.innerHTML = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.6 143.63"><defs><style>.cls-1{fill:#f78100;}.cls-2{fill:#fcad32;}.cls-3{fill:#fff;}</style></defs><path class="cls-1" d="M360.8,90.69l1-3.6c1.24-4.28.78-8.24-1.3-11.15a11.32,11.32,0,0,0-9-4.43l-73.35-.94a1.49,1.49,0,0,1-1.16-.61,1.51,1.51,0,0,1-.15-1.33,2,2,0,0,1,1.7-1.3l74-.94c8.78-.4,18.29-7.53,21.62-16.22l4.22-11a2.51,2.51,0,0,0,.16-.94,2.35,2.35,0,0,0-.05-.52,48.21,48.21,0,0,0-92.7-5,21.69,21.69,0,0,0-34.58,15.15,22,22,0,0,0,.56,7.59,30.83,30.83,0,0,0-29.93,30.82,31.22,31.22,0,0,0,.32,4.46A1.44,1.44,0,0,0,223.68,92H359.13A1.79,1.79,0,0,0,360.8,90.69Z"/><path class="cls-2" d="M385.24,40c-.68,0-1.36,0-2,0a1.55,1.55,0,0,0-.31.07,1.14,1.14,0,0,0-.74.78l-2.89,10c-1.24,4.28-.77,8.24,1.31,11.14a11.3,11.3,0,0,0,9,4.44l15.63.94a1.44,1.44,0,0,1,1.12.6,1.5,1.5,0,0,1,.16,1.34,2,2,0,0,1-1.7,1.3l-16.24.94c-8.82.4-18.33,7.52-21.66,16.21l-1.17,3.07a.87.87,0,0,0,.77,1.18h55.94a1.49,1.49,0,0,0,1.45-1.07A40.15,40.15,0,0,0,385.24,40Z"/><polygon class="cls-3" points="47.34 108.53 56.88 108.53 56.88 134.59 73.54 134.59 73.54 142.94 47.34 142.94 47.34 108.53"/><path class="cls-3" d="M83.42,125.84v-.1c0-9.88,8-17.9,18.58-17.9s18.48,7.92,18.48,17.8v.1c0,9.88-8,17.89-18.58,17.89s-18.48-7.91-18.48-17.79m27.33,0v-.1c0-5-3.59-9.29-8.85-9.29s-8.7,4.23-8.7,9.19v.1c0,5,3.59,9.29,8.8,9.29s8.75-4.23,8.75-9.19"/><path class="cls-3" d="M132.15,127.85V108.53h9.69v19.13c0,5,2.51,7.32,6.34,7.32s6.34-2.26,6.34-7.08V108.53h9.69v19.08c0,11.11-6.34,16-16.13,16s-15.93-5-15.93-15.73"/><path class="cls-3" d="M178.8,108.53h13.27c12.29,0,19.42,7.08,19.42,17v.1c0,9.93-7.22,17.3-19.61,17.3H178.8Zm13.42,26c5.71,0,9.49-3.15,9.49-8.7v-.1c0-5.51-3.78-8.7-9.49-8.7h-3.88v17.5Z"/><polygon class="cls-3" points="225.35 108.53 252.88 108.53 252.88 116.89 234.89 116.89 234.89 122.74 251.16 122.74 251.16 130.65 234.89 130.65 234.89 142.94 225.35 142.94 225.35 108.53"/><polygon class="cls-3" points="266.15 108.53 275.69 108.53 275.69 134.59 292.35 134.59 292.35 142.94 266.15 142.94 266.15 108.53"/><path class="cls-3" d="M317.27,108.29h9.19l14.65,34.65H330.89l-2.51-6.14H315.11l-2.46,6.14h-10Zm8.36,21.09-3.84-9.79-3.88,9.79Z"/><path class="cls-3" d="M353.4,108.53h16.27c5.26,0,8.89,1.38,11.21,3.74a10.69,10.69,0,0,1,3,8v.1A10.89,10.89,0,0,1,376.85,131l8.21,12H374l-6.93-10.42h-4.18v10.42H353.4Zm15.83,16.52c3.24,0,5.11-1.57,5.11-4.08v-.1c0-2.7-2-4.08-5.16-4.08h-6.25v8.26Z"/><polygon class="cls-3" points="397.68 108.53 425.36 108.53 425.36 116.64 407.12 116.64 407.12 121.85 423.64 121.85 423.64 129.38 407.12 129.38 407.12 134.83 425.61 134.83 425.61 142.94 397.68 142.94 397.68 108.53"/><path class="cls-3" d="M26.46,129.87A8.44,8.44,0,0,1,18.58,135c-5.21,0-8.8-4.33-8.8-9.29v-.1c0-5,3.49-9.19,8.7-9.19a8.63,8.63,0,0,1,8.18,5.7H36.72c-1.61-8.19-8.81-14.31-18.14-14.31C8,107.84,0,115.86,0,125.74v.09c0,9.89,7.86,17.8,18.48,17.8,9.08,0,16.18-5.88,18.05-13.76Z"/></svg>'; // Source: Cloudflare
            this.privacy.style.color = "#bbbbbb";
            this.terms.style.color = "#bbbbbb";
        }

        this.cloudflare.getElementsByTagName("svg").item(0).style.width = "73px";
        this.cloudflare.getElementsByTagName("svg").item(0).style.height = "25px";
    }
}


class reCAPTCHA {
    constructor(label, description, completed) {
        this.label_ = label;
        this.description_ = description;
        this.completed_ = completed;

        this.expiryDates = [];

        // Convert expiry times to Date object.
        for (let time of Config.expiryTimes) {
            const date = new Date();

            date.setHours(parseInt(time.split(":")[0]), parseInt(time.split(":")[1]), 0, 0);

            this.expiryDates.push(date);
        }

        this.frame = document.createElement("div");
        this.frame.style.width = "400px"
        this.frame.style.height = "582px";
        this.frame.style.display = "flex";
        this.frame.style.flexDirection = "column";
        this.frame.style.alignContent = "center";
        this.frame.style.alignItems = "center";
        this.frame.style.justifyContent = "space-between";
        this.frame.style.backgroundColor = "#ffffff";
        this.frame.style.border = "2px solid #a9a9a9";

        this.header = document.createElement("div");
        this.header.style.width = "386px";
        this.header.style.height = "113px";
        this.header.style.margin = "7px 0px 5px 0px";
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
        this.currentProgressBar.style.margin = "7.5px 0px 0px 0px";       
this.currentProgressBar.style.borderRadius = "15px";
        this.currentProgressBar.style.border = "0.5px solid #a9a9a9";
        this.currentProgressBar.style.display = "flex";
        this.currentProgressBar.style.flexDirection = "row";
        this.currentProgressBar.style.backgroundColor = "#003f48";
        this.header.appendChild(this.currentProgressBar);

        this.currentProgressText = document.createElement("p");
        this.currentProgressText.style.height = "23px";
        this.currentProgressText.style.gridRow = "2";
        this.currentProgressText.style.gridColumn = "1 / 3";
        this.currentProgressText.style.margin = "0px";
        this.currentProgressText.style.alignContent = "center";
        this.currentProgressText.style.boxSizing = "border-box";
        this.currentProgressText.style.borderBottom = "2px solid #ffffff";
        this.currentProgressText.style.display = "none";
        this.header.appendChild(this.currentProgressText);

        this.texts = document.createElement("p");
        this.texts.style.gridArea = "3 / 1";
        this.texts.style.margin = "auto 15px";
        this.texts.style.fontSize = "16px";
        this.texts.style.color = "#ffffff";
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
        this.example.style.gridArea = "3 / 2";
        this.example.style.height = "60px";
        this.example.style.aspectRatio = "1 / 1";
        this.example.style.margin = "15px";
        this.example.style.float = "right";
        this.example.style.boxSizing = "border-box";
        this.example.style.border = "1px solid #ffffff";
        this.header.appendChild(this.example);

        this.images = document.createElement("div");
        this.images.style.width = "390px";
        this.images.style.aspectRatio = "1 / 1";
        this.images.style.display = "grid";
        this.images.style.alignItems = "center";
        this.images.style.justifyItems = "center";
        this.frame.appendChild(this.images);

        this.text = document.createElement("p");
        this.text.style.display = "none";
        this.text.style.margin = "3.5px 0px";
        this.text.style.padding = "0px";
        this.text.style.textAlign = "center";
        this.text.style.fontSize = "14px";
        this.text.style.color = "#d93025";
        this.frame.appendChild(this.text);

        this.seperator = document.createElement("div");
        this.seperator.style.width = "100%";
        this.seperator.style.height = "100%";
        this.seperator.style.margin = "5px 0px 0px 0px";
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
        this.audio.message = Config.tryAgainLater;
        this.audio.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/audio_2x.png");
        this.audio.addEventListener("click", this.message.bind(this));
        this.controls.appendChild(this.audio);

        this.help = document.createElement("img");
        this.help.style.width = "32px";
        this.help.style.height = "32px";
        this.help.style.margin = "8px";
        this.help.style.float = "left";
        this.help.style.cursor = "pointer";
        this.help.style.opacity = "0.55";
        this.help.setAttribute("src", "https://www.gstatic.com/recaptcha/api2/info_2x.png");
        this.help.addEventListener("click", this.showHelp.bind(this));
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
        this.button.style.fontSize = "14px";
        this.button.style.fontWeight = "500";
        this.button.style.textTransform = "uppercase";
        this.button.style.backgroundColor = "#1a73e8";
        this.button.style.color = "#d9d9d9";
        this.button.addEventListener("click", this.verify.bind(this));
        this.footer.appendChild(this.button);

        this.buttonText = document.createElement("p");
        this.buttonText.style.margin = "12px";
        this.buttonText.style.textAlign = "center";
        this.button.appendChild(this.buttonText);

        this.helpText = document.createElement("p");
        this.helpText.style.height = "60px";
        this.helpText.style.display = "none";
        this.helpText.style.margin = "0px";
        this.helpText.style.padding = "5px 20px";
        this.helpText.style.fontFamily = "Roboto,helvetica,arial,sans-serif";
        this.helpText.style.fontSize = "12px";
        this.helpText.style.fontWeight = "400";
        this.helpText.style.color = "#000000";
        this.helpText.innerText = `${Config.help} `;
        this.frame.appendChild(this.helpText);

        this.helpTextlink = document.createElement("a");
        this.helpTextlink.innerText = Config.learnMore;
        this.helpTextlink.setAttribute("target", "_blank");
        this.helpTextlink.setAttribute("href", "https://support.google.com/recaptcha");
        this.helpText.appendChild(this.helpTextlink);

        this.start();
    }

    animate() {
        this.currentProgressBar.style.display = "none";
        this.currentProgressText.style.display = "block";
        this.currentProgressText.innerText = Config.progress.replace("{x}", this.progress).replace("{n}", this.step);
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

    message(message) {
        // Display some message like "Please try again." in bottom of images.

        this.frame.style.height = this.helpText.style.display == "block" ? "677px" : "607px";
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

        return array;
    }

    reset() {
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
        this.frame.style.height = "582px";
        this.text.style.display = "none";
        this.helpText.style.display = "none";

        for (let captcha of this.imageElements) {
            this.images.removeChild(captcha);
        }
    }

    set() {
        this.correctImagePaths = [];
        this.wrongImagePaths = [];
        this.imagePaths = [];
        this.imageElements = [];

        // Create a Object which does not contain the "__others__". This is required for selecting a category.
        const wantedCategories = {...Config.categories};
        delete wantedCategories.__others__;

        const category = Object.keys(wantedCategories)[Math.floor(Math.random() * Object.keys(wantedCategories).length)];

        const randomGridNumber = Math.random() * 100;

        let value_ = 0;

        for (const [grid, value] of Object.entries(Config.grids)) {
            value_ += value;

            if (randomGridNumber < value_) {
                this.grid = parseInt(grid);
                break;
            }
        }

        /* 
        First, start the for loop of Config.categories. This contains whether the category is category; if it is set, the number of photos to be displayed from that category; and the links to the images.
        
        After, check the category active or if it is “__others__”.

        After checking, Check whether the number has been adjusted or not.

        If the category is wanted category:
            If a number set:
                Randomize and add them into correct image paths.
                Add them to final list in the specified number from correct image paths.
                Create a list containing whether the category with the specified number is the correct category, and the specified number.

            If not:
                Add them into correct image paths.
        
        If not:
            If a number set:
                Randomize and add them into final list. (#note-1)
                Create a list containing whether the category with the specified number is the correct category, and the specified number.

            Add them into wrong image paths. (#note-2)
        */
        for (const [category_, [active, number, paths]] of Object.entries(Config.categories)) {            
            if (active || category_ === "__others__") {
                if (category_ === category) {
                    if (number !== null) {
                        this.correctImagePaths.push(...this.randomizeImages([...paths]));

                        this.setImages(this.correctImagePaths, Math.round(number * (this.grid === 16 ? Config.multiplier : 1)));
                    }

                    else {
                        this.correctImagePaths.push(...paths);
                    }
                }

                else {
                    if (number !== null) {
                        this.setImages(this.randomizeImages([...paths]), Math.round(number * (this.grid === 16 ? Config.multiplier : 1)));
                    }

                    this.wrongImagePaths.push(...paths);
                }

                if (number !== null) {
                    this.numberStatus = [category_ === category, Math.round(number * (this.grid === 16 ? Config.multiplier : 1))];
                }
            }
        }

        this.randomizeImages(this.wrongImagePaths);

        /* 
        If no category has a set number, or if the category with the set number is not the correct category:
            Randomize the correct image paths.

            Set how many images to select.

            If a category has a set number and the sum of the number of images to be selected and the set number is greater than the total number of images:
                Set the correct number to difference between total number of images and set number. Note: This ensures that the number of images selected is not random.
            
            Add some (correct number) correct images to final list.
            
            If no category has a set number:
                Add some (difference between total number of images and correct number) wrong images to final list.

            If not:
                Remove duplicates of images which are in the category where the number is set from wrong image paths. Now, wrong image paths only contains those in the category where the number is not set. For the reason, see #note-1 and #note-2.
                Add some (difference between total number of images, correct number and the specified number) wrong images to final list.
            
        If not:
            Add some (difference between total number of images and the specified number) wrong images to final list.
        */
        if (this.numberStatus === undefined || !this.numberStatus[0]) {
            this.randomizeImages(this.correctImagePaths);

            const randomCorrectNumber = Math.random() * 100;

            let ratio_ = 0;

            for (const [number, ratio]  of Object.entries(Config.ratios)) {
                ratio_ += ratio;

                if (randomCorrectNumber < ratio_) {
                    this.correctNumber = parseInt(Math.round(number * (this.grid === 16 ? Config.multiplier : 1)));
                    break;
                }
            }

            if (this.numberStatus !== undefined && this.correctNumber + this.numberStatus[1] > this.grid) {
                this.correctNumber = this.grid - this.numberStatus[1];
            }

            this.setImages(this.correctImagePaths, this.correctNumber);
            
            if (this.numberStatus === undefined) {
                this.setImages(this.wrongImagePaths, this.grid - this.correctNumber);
            }

            else {
                for (let image of this.imagePaths) {
                    if (this.wrongImagePaths.includes(image)) {
                        this.wrongImagePaths.splice(this.wrongImagePaths.indexOf(image), 1);
                    }
                }

                this.setImages(this.wrongImagePaths, this.grid - this.correctNumber - this.numberStatus[1]);
            }
        }

        else {
            this.setImages(this.wrongImagePaths, this.grid - this.numberStatus[1]);
        }

        this.randomizeImages(this.imagePaths);

        for (let path of this.imagePaths) {
            let image = document.createElement("img");
            image.style.margin = "2px";
            image.style.aspectRatio = "1 / 1";
            image.style.transition = "all .5s ease";
            image.setAttribute("src", path);
            image.addEventListener("click", this.focusToImage.bind(this));
            this.resetImage(image);
            this.images.appendChild(image);
            this.imageElements.push(image);
        }

        this.buttonText.innerText = self.correctNumber === 0 ? Config.skip : Config.verify;

        this.images.style.gridTemplateColumns = `repeat(${Math.sqrt(this.grid)}, 1fr)`;

        this.label.innerText = category;

        const randomExampleNumber = (this.numberStatus === undefined || !this.numberStatus[0] ? this.correctNumber : this.numberStatus[1]) - 1 + Math.ceil(Math.random() * (this.correctImagePaths.length - (this.numberStatus === undefined || !this.numberStatus[0] ? this.correctNumber : this.numberStatus[1])));
        this.example.setAttribute("src", this.correctImagePaths[randomExampleNumber > 0 ? randomExampleNumber : (this.numberStatus === undefined || !this.numberStatus[0] ? this.correctNumber : this.numberStatus[1])]);

        if (this.frame.parentElement !== null) {
            this.animate();
        }
    }

    setImages(array, value) {
        for (let i = 0; i < value; i++) {
            this.imagePaths.push(array[i]);
        }
    }

    showHelp() {
        this.frame.style.height = this.text.style.display == "block" ? "677px" : "652px";
        this.helpText.style.display = "block";
    }

    start() {
        this.progress = 0;
        this.progresses = [];

        const randomStepNumber = Math.random() * 100;

        let value_ = 0;

        for (const [step, value] of Object.entries(Config.steps)) {
            value_ += value;

            if (randomStepNumber < value_) {
                this.step = parseInt(step);
                break;
            }
        }

        for (let i = 0; i < this.step; i++) {
            if (i !== 0) {
                let seperator = document.createElement("span");
                seperator.style.width = "5px";
                seperator.style.height = "100%";
                seperator.style.backgroundColor = "#a9a9a9";
                this.currentProgressBar.appendChild(seperator);
            }

            let parent = document.createElement("span");
            parent.style.width = `calc((100% - 5 * ${this.step - 1}px) / ${this.step})`;
            parent.style.height = "100%";
            parent.style.display = "flex";
            this.currentProgressBar.appendChild(parent);

            let child = document.createElement("span");
            child.style.width = "0px";
            child.style.height = "100%";
            child.style.backgroundColor = "#29dd84";
            parent.appendChild(child);
            this.progresses.push(child);
        }

        this.progresses[0].style.borderTopLeftRadius = "15px";
        this.progresses[0].style.borderBottomLeftRadius = "15px";
        this.progresses[this.progresses.length - 1].style.borderTopRightRadius = "15px";
        this.progresses[this.progresses.length - 1].style.borderBottomRightRadius = "15px";
        this.progresses[0].parentElement.style.borderTopLeftRadius = "15px";
        this.progresses[0].parentElement.style.borderBottomLeftRadius = "15px";
        this.progresses[this.progresses.length - 1].parentElement.style.borderTopRightRadius = "15px";
        this.progresses[this.progresses.length - 1].parentElement.style.borderBottomRightRadius = "15px";

        this.set();
    }

    switch() {
        this.currentProgressText.style.display = "none";
        this.currentProgressBar.style.display = "flex";
        this.progresses[this.progress].animate([{width: "0px"}, {width: "100%"}], {duration: Config.cooldown / 5, iterations: 1});
        this.progresses[this.progress].style.width = "100%";
    }

    verify() {
        let successful = 0;

        for (let image of this.imageElements) {
            if (image.clicked)
                if (this.correctImagePaths.includes(image.getAttribute("src"))) {
                    successful++;
                }

                else {
                    successful--;
                }
        }

        if (successful === ((this.numberStatus === undefined || !this.numberStatus[0]) ? this.correctNumber : this.numberStatus[1])) {
            this.progress += 1;

            if (this.progress === this.step) {
                if (Config.fixedValidity) {
                    document.cookie = `captchaPassed=true; max-age=${Config.validity}; samesite=None; path=/; secure=None`;
                }

                else {
                    const currentDate = new Date();

                    for (let date of this.expiryDates) {
                        if (currentDate <= date) {
                            if (((date.getTime() - currentDate.getTime()) / 1000) > Config.maximumAge) {
                                document.cookie = `captchaPassed=true; max-age=${Config.validity}; samesite=None; path=/; secure=None`;
                            }

                            else {
                                document.cookie = `captchaPassed=true; expires=${date.toUTCString()}; samesite=None; path=/; secure=None`;
                            }

                            break
                        }
                    }

                    if (document.cookie.split("; ").find((row) => row.startsWith("captchaPassed="))?.split("=")[1] === undefined) {
                        document.cookie = `captchaPassed=true; max-age=${Config.validity}; samesite=None; path=/; secure=None`;
                    }
                }

                this.label_.style.display = "none";
                this.frame.style.display = "none";
                this.description_.style.display = "none";
                this.completed_.style.display = "block";

                setTimeout(location.reload(), !Config.isLinuxTargeted && (window.navigator.userAgent.indexOf("X11") != -1 || window.navigator.userAgent.indexOf("Linux") != -1) ? 0 : (Config.cooldown / 3));
            }

            else {
                this.text.style.display = "none";
                this.restore();
                this.set();
            }
        }

        else {
            this.reset();
            this.message(Config.error);
        }
    }
}


(function() {
    'use strict';

    if (document.cookie.split("; ").find((row) => row.startsWith("captchaPassed="))?.split("=")[1] === undefined) {
        document.title = Config.title;
        document.documentElement.style.display = "none";

        addEventListener("load", (event) => {
            const main = new Main();
            const recaptcha = new reCAPTCHA(main.label, main.description, main.completed);
            const tunnel = new Tunnel(main.label, main.frame, recaptcha.frame, recaptcha.animate.bind(recaptcha), );

            setTimeout(main.start.bind(main), !Config.isLinuxTargeted && (window.navigator.userAgent.indexOf("X11") != -1 || window.navigator.userAgent.indexOf("Linux") != -1) ? 0 : (Config.cooldown / 4), tunnel);
        })}})();
