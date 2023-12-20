export const SAVE_FILE_NAME = "data.json";

export type Page = {
    url: string;
    jsPath: string;
    name: string;
};

export const URLS: Page[] = [
    {
        url: "https://www.amazon.pl/Sony-Playstation-Konsola-Gier-Bialy/dp/B0BKPWNJH3",
        jsPath: "#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole",
        name: "Amazon",
    },
    {
        url: "https://deluxury.pl/pl/p/PlayStation-5/1284",
        jsPath: "#box_productfull > div > div > div > div.f-grid-6.k_pcd_right > div.bottomborder.row > div.basket > div.price > em",
        name: "Deluxury",
    },
    {
        url: "https://perfectblue.pl/produkt/konsola-sony-playstation-ps5-825gb",
        jsPath: "#product-200900 > div > div.product-main > div > div.product-info.summary.col-fit.col.entry-summary.product-summary.text-left > div.price-wrapper > p > span.woocommerce-Price-amount.amount > bdi",
        name: "PerfectBlue",
    },
    {
        url: "https://www.euro.com.pl/konsole-playstation-5/sony-playstation-5-ps5-slim-z-napedem-1tb-.bhtml",
        jsPath: "body > ems-root > eui-root > eui-dropdown-host > div.content > ems-euro-mobile > ems-product > ems-euro-mobile-product-page > div > ems-euro-mobile-product-card > div > div.product-card__grid.ng-star-inserted > div > eui-tabs > div > button.eds-tabs__tab.eds-tabs__tab--active > span > div > ems-price > div > div > div > span.price-template__large--total",
        name: "RTVEuroAGD",
    },
    {
        url: "https://www.mediaexpert.pl/gaming/playstation-5/konsole-ps5/konsola-sony-playstation-5-slim",
        jsPath: "#section_offer-available > div.price-box > div.prices-section.new-omnibus > div > div > span.whole",
        name: "MediaExpert",
    },
    {
        url: "https://www.x-kom.pl/p/1195326-konsola-playstation-sony-playstation-5-d-chassis.html",
        jsPath: "#app > div.sc-14ybyi4-0.iToDFs > div > div.sc-1re71we-0.fOThDJ > div.sc-1s1zksu-0.sc-1s1zksu-1.hHQkLn.sc-gsxhsp-0.ctGJqm > div.sc-1s1zksu-0.hqUivH > div.sc-zzw990-0.fAofYK > div.sc-zzw990-1.cyaRbr > div > div.sc-n4n86h-0.ifIzrb > div > div",
        name: "x-kom",
    },
];
