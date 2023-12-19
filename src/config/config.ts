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
];
