// ==UserScript==
// @name         Verify You Are Human
// @namespace    http://tampermonkey.net/
// @version      1.3.2
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
// @match        https://*.aa.com.tr/*
// @match        https://*.abcgazetesi.com/*
// @match        https://*.aksam.com.tr/*
// @match        https://*.artigercek.com/*
// @match        https://*.aydinlik.com.tr/*
// @match        https://*.birgun.net/*
// @match        https://*.bloomberght.com/*
// @match        https://*.cnnturk.com/*
// @match        https://*.cumhuriyet.com.tr/*
// @match        https://*.dha.com.tr/*
// @match        https://*.diken.com.tr/*
// @match        https://*.dogruhaber.com.tr/*
// @match        https://*.dunya.com/*
// @match        https://*.evrensel.net/*
// @match        https://*.fanatik.com.tr/*
// @match        https://*.fotomac.com.tr/*
// @match        https://*.fotospor.com/*
// @match        https://*.gazeteduvar.com.tr/*
// @match        https://*.gazetepencere.com/*
// @match        https://*.gercekgundem.com/*
// @match        https://*.gozlemgazetesi.com/*
// @match        https://*.gunes.com/*
// @match        https://*.haber3.com/*
// @match        https://*.haber7.com/*
// @match        https://*.habercem.com/*
// @match        https://*.haberler.com/*
// @match        https://*.haberport.com/*
// @match        https://*.haberturk.com/*
// @match        https://*.hurriyet.com.tr/*
// @match        https://*.iha.com.tr/*
// @match        https://*.internethaber.com/*
// @match        https://*.karar.com/*
// @match        https://*.korkusuz.com.tr/*
// @match        https://*.medyafaresi.com/*
// @match        https://*.medyascope.tv/*
// @match        https://*.memurlar.net/*
// @match        https://*.milatgazetesi.com/*
// @match        https://*.milligazete.com.tr/*
// @match        https://*.milliyet.com.tr/*
// @match        https://*.mynet.com/*
// @match        https://*.nefesgazetesi.com/*
// @match        https://*.ntv.com.tr/*
// @match        https://*.odatv4.com/*
// @match        https://*.onedio.com/*
// @match        https://*.posta.com.tr/*
// @match        https://*.pressturk.com/*
// @match        https://*.rasthaber.com/*
// @match        https://*.sabah.com.tr/*
// @match        https://*.haber.sol.org.tr/*
// @match        https://*.sondakika.com/*
// @match        https://*.sonsoz.com.tr/*
// @match        https://*.sozcu.com.tr/*
// @match        https://*.star.com.tr/*
// @match        https://*.sokgazetesi.com.tr/*
// @match        https://*.t24.com.tr/*
// @match        https://*.takvim.com.tr/*
// @match        https://*.timeturk.com/*
// @match        https://*.turkgun.com/*
// @match        https://*.turkiyegazetesi.com.tr/*
// @match        https://*.gazetevatan.com/*
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
// @match        https://*.bianet.org/*
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
    static cooldown = 46; // Cooldown for Tunnel's first step and cooldown / 2 for Tunnel's second step in miliseconds.

    static validity = 230; // Validity for challange in seconds.

    static pinterestLink = "https://bn.bloat.cat/image_proxy.php?url="; // I just added this because Pinterest is blocked at my school.

    static categories = {
        // The first one is about activity, the second one is about how much of that category to show. 
        // Note: The second value should only be set for one category!
        // Note: The relevant category must have 1 more content than the second value!  
        "__others__": [true, null, [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg/330px-Walking_The_Streets_Of_Old_Lyon_%28166236703%29.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Fourteen_traffic_lights.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Fire_Engine_33_%286225707251%29.jpg/330px-Fire_Engine_33_%286225707251%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg/330px-Humberside_Fire_%26_Rescue_DH03P4_-_YT21_EHF.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Downtown_Charlottesville_fire_hydrant.jpg/250px-Downtown_Charlottesville_fire_hydrant.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pune_green_bus.jpg/250px-Pune_green_bus.jpg"
        ]], // Do not change __others__'s name or do not delete it! The images here will never be correct image for reCAPTCHA.
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

    static multiplier = 1.777777777777778; // Multiplier value of the values in 9 adapted to 16.

    static captchaHeader = 1; // In Turkish the item to be selected is at the top, while in English it is at the bottom. 0 for bottom, 1 for top.

    static title = "Bir dakika lütfen...";

    static label = "İnsan olduğunuz doğrulanıyor. Bu işlem birkaç saniye sürebilir.";

    static label2 = "Aşağıdaki işlemi tamamlayarak insan olduğunuzu doğrulayın.";

    static verifying = "Doğrulanıyor...";

    static tryAgain = "Tekrar deneyin";

    static privacy = "Gizlilik";

    static terms = "Koşullar";

    static select = "içeren tüm resimleri seçin";

    static tryAgainLater = "Lütfen daha sonra tekrar deneyin.";

    static error = "Lütfen tüm eşleşen resimleri seçin.";

    static help = "Kullanıcı arayüzünün üst tarafında yer alan metinde tasvir edilen veya resimde görülen nesneyi içeren her resmi seçin. Ardından, Doğrula'yı tıklayın. Yeni bir reCAPTCHA testi istemek için yeniden yükle simgesini tıklayın.";

    static learnMore = "Daha fazla bilgi edinin.";

    static skip = "Atla";

    static verify = "Doğrula";

    static description = `${window.location.hostname} adresinin devam etmeden önce bağlantınızın güvenliğini gözden geçirmesi gerekiyor.`;

    static footer = "Bu sitenin performansı ve güvenliği <a target='_blank' href='https://www.cloudflare.com/'>Cloudfare</a> tarafından sağlanmaktadır";

    static verifyYou = "Gerçek kişi olduğunuzu\ndoğrulayın";
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
        document.documentElement.style.display = "block";
        document.documentElement.style.fontFamily = "Calibri, sans-serif";
        document.documentElement.style.backgroundColor = "#222";
        document.documentElement.style.display = "flex";
        document.documentElement.style.minHeight = "100%";

        document.querySelectorAll('style, link[rel="stylesheet"]').forEach(css => css.remove());

        for (let element of document.body.getElementsByTagName("*")) {
            element.style.display = "none";
        }

        document.body.style.fontFamily = "Calibri, sans-serif";
        document.body.backgroundColor = "#222";
        document.body.style.margin = "0";

        this.body = document.createElement("div");
        this.body.style.width = "100vw";
        this.body.style.height = "100vh";
        this.body.style.top = "0";
        this.body.style.right = "0";
        this.body.style.bottom = "0";
        this.body.style.left = "0";
        this.body.style.margin = "0";
        this.body.style.padding = "0";
        this.body.style.flexDirection = "column";
        this.body.style.flex = "1";
        this.body.style.alignItems = "center";
        this.body.style.display = "flex";
        this.body.style.position = "sticky";
        this.body.style.backgroundColor = "#222";
        this.body.style.color = "#d9d9d9";
        document.body.appendChild(this.body);

        this.frame = document.createElement("div");
        this.frame.style.maxWidth = "60rem";
        this.frame.style.margin = "8rem auto";
        this.frame.style.flex = "1";
        this.frame.style.boxSizing = "border-box";
        this.frame.style.padding = "0px 1.5rem";
        this.frame.setAttribute("role", "main");
        this.body.appendChild(this.frame);

        this.name = document.createElement("h1");
        this.name.style.textAlign = "left";
        this.name.style.fontSize = "2.5rem";
        this.name.style.fontWeight = "700";
        this.name.style.lineHeight = "3.75rem";
        this.name.style.padding = "0px";
        this.name.style.margin = "0px";
        this.name.innerText = window.location.hostname;
        this.frame.appendChild(this.name);

        this.label = document.createElement("p");
        this.label.style.fontSize = "1.5rem";
        this.label.style.fontWeight = "900";
        this.label.style.marginTop = "0px";
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
        this.frame.appendChild(this.description);

        this.footer = document.createElement("div");
        this.footer.style.width = "100%";
        this.footer.style.maxWidth = "60rem";
        this.footer.style.maxHeight = "80px";
        this.footer.style.boxSizing = "border-box";
        this.footer.style.padding = "0px 1.5rem";
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
        this.link.addEventListener("mouseover", this.focusToLink.bind(this));
        this.link.addEventListener("mouseleave", this.unfocusToLink.bind(this));
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
    constructor(box, label, recaptcha) {
        this.box = box;
        this.label = label;
        this.recaptcha = recaptcha;

        this.status = 0;

        this.frame = document.createElement("div");
        this.frame.style.width = "100%"
        this.frame.style.height = "100%";
        this.frame.style.display = "flex";
        this.frame.style.alignItems = "center";
        this.box.appendChild(this.frame);

        this.content = document.createElement("div");
        this.content.style.display = "flex";
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
        this.spinner.animate(
            [{transform: "rotate(0deg)"}, {transform: 'rotate(360deg)'}], 
            {duration: 5000, iterations: Infinity}
        );
        this.content.appendChild(this.spinner);

        this.checkbox = document.createElement("input");
        this.checkbox.style.width = "24px";
        this.checkbox.style.height = "24px";
        this.checkbox.style.cursor = "pointer";
        this.checkbox.style.display = "none";
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.addEventListener("change", this.change.bind(this))
        this.content.appendChild(this.checkbox);

        this.verifying = document.createElement("label");
        this.verifying.style.alignItems = "center";
        this.verifying.style.color = "#fff"
        this.verifying.style.marginLeft = "8px";
        this.verifying.innerText = Config.verifying;
        this.content.appendChild(this.verifying);

        this.branding = document.createElement("div");
        this.branding.style.margin = "0px 16px 0px auto";
        this.branding.style.display = "grid";
        this.branding.style.textAlign = "right";
        this.frame.appendChild(this.branding);

        this.cloudflare = document.createElement("a");
        this.cloudflare.setAttribute("target", "_blank");
        this.cloudflare.setAttribute("href", "https://www.cloudflare.com/application-services/products/turnstile/")
        this.branding.appendChild(this.cloudflare);

        this.logo = document.createElement("img")
        this.logo.style.width = "72px";
        this.logo.style.height = "24px";
        this.logo.setAttribute("src", "https://cf-assets.www.cloudflare.com/slt3lc6tev37/fdh7MDcUlyADCr49kuUs2/5f780ced9677a05d52b05605be88bc6f/cf-logo-v-rgb.png")
        this.cloudflare.appendChild(this.logo);

        this.links = document.createElement("div");
        this.links.style.display = "flex";
        this.links.style.justifyContent = "flex-end";
        this.links.style.fontSize = "8px";
        this.branding.appendChild(this.links);

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
        this.links.appendChild(this.seperator)

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
            this.spinner.style.display = "block";
            this.checkbox.style.display = "none";
            this.verifying.innerText = Config.verifying;

            setTimeout(this.continue.bind(this), Config.cooldown / 2)

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
        this.spinner.style.display = "none";
        this.checkbox.style.display = "block";
        this.verifying.innerText = Config.tryAgain;
    }

    start() {
        this.status = 1;
        this.spinner.style.display = "none";
        this.checkbox.style.display = "block";
        this.verifying.innerText = Config.verifyYou;
        this.label.innerText = Config.label2;
    }
}


class reCAPTCHA {
    constructor(box) {
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
        this.header.style.width = "382px";
        this.header.style.height = "113px";
        this.header.style.marginTop = "7px";
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
        this.images.style.width = "386px";
        this.images.style.height = "386px";
        this.images.style.aspectRatio = "1 / 1";
        this.images.style.display = "grid";
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
        this.reload.addEventListener("click", this.reset.bind(this));
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
        this.audio.addEventListener("click", this.message.bind(this));
        this.controls.appendChild(this.audio);

        this.help = document.createElement("img");
        this.help.style.width = "32px";
        this.help.style.height = "32px";
        this.help.style.margin = "8px";
        this.help.style.float = "left";
        this.help.style.cursor = "pointer";
        this.help.style.opacity = ".55";
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
        this.button.style.background = "#1a73e8";
        this.button.style.fontSize = "14px";
        this.button.style.fontWeight = "500";
        this.button.style.textTransform = "uppercase";
        this.button.addEventListener("click", this.verify.bind(this));
        this.footer.appendChild(this.button);

        this.buttonText = document.createElement("p");
        this.buttonText.style.margin = "12px";
        this.buttonText.style.textAlign = "center";
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

    }

    focusToImage(event) {
        if (!event.currentTarget.clicked) {
            event.currentTarget.clicked = true;
            event.currentTarget.style.width = "80%";
            event.currentTarget.style.border = "2px solid #2cde85";
        }

        else {
            this.resetImage(event.currentTarget);
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

        return array;
    }

    reset() {
        this.box.style.height = "582px";
        this.text.style.display = "none";
        this.helpText.style.display = "none";

        for (let captcha of this.imageElements) {
            this.images.removeChild(captcha);
        }

        this.set();
    }

    resetImage(image) {
        image.clicked = false;
        image.style.width = `${(parseInt(this.images.style.width) - (Math.sqrt(this.grid) * 4)) / Math.sqrt(this.grid)}px`;
        image.style.border = "0px";
    }

    set() {
        this.correctImagePaths = [];
        this.wrongImagePaths = [];
        this.imagePaths = [];
        this.imageElements = [];

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

            if (this.numberStatus === undefined) {
                this.setImages(this.correctImagePaths, this.correctNumber);
                this.setImages(this.wrongImagePaths, this.grid - this.correctNumber);
            }

            else {
                for (let image of this.imagePaths) {
                    if (this.wrongImagePaths.includes(image)) {
                        this.wrongImagePaths.splice(this.wrongImagePaths.indexOf(image), 1);
                    }
                }

                this.setImages(this.correctImagePaths, this.correctNumber);
                this.setImages(this.wrongImagePaths, this.grid - this.correctNumber - this.numberStatus[1]);
            }
        }

        else {
            this.setImages(this.wrongImagePaths, this.grid - this.numberStatus[1]);
        }

        for (let currentIndex = this.imagePaths.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [this.imagePaths[currentIndex], this.imagePaths[randomIndex]] = [this.imagePaths[randomIndex], this.imagePaths[currentIndex]];
        }

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

        for (let image of this.imageElements) {
            if (image.clicked)
                if (this.correctImagePaths.includes(image.getAttribute("src"))) {
                    successful++;
                }

                else {
                    successful--;
                }
        }

        if (successful === (this.numberStatus === undefined || !this.numberStatus[0] ? this.correctNumber : this.numberStatus[1])) {
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
        document.title = Config.title;
        document.documentElement.style.display = "none";

        addEventListener("load", (event) => {
            const main = new Main();
            const recaptcha = new reCAPTCHA(main.box, main.label);
            const tunnel = new Tunnel(main.box, main.label, recaptcha.frame);

            recaptcha.set();
            setTimeout(tunnel.start.bind(tunnel), Config.cooldown);
        })
    }
})();
