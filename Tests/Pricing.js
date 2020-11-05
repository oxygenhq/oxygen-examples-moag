web.transaction("פתיחת הדפדפן");
web.init();

web.transaction("דף ראשי");
web.open('https://prices.moag.gov.il/');

web.selectWindow('title=תוצרת הארץ - מחירי תוצרת הארץ 05.11.2020');

web.transaction("בחירת סוג מוצר");
//               id: id=ProductType
// xpath:attributes: //select[@id=\'ProductType\']
//   xpath:position: //div[2]/div[1]/div[2]/div/div/label/select
//              css: css=#ProductType
web.click('id=ProductType');

//               id: id=ProductType
// xpath:attributes: //select[@id=\'ProductType\']
//   xpath:position: //div[2]/div[1]/div[2]/div/div/label/select
//              css: css=#ProductType
web.select('id=ProductType', 'label=פירות');

web.transaction("בחירת סוג מחיר");
// xpath:attributes: (//select[@id=\'PriceType\'])[2]
//   xpath:position: //div[2]/div[2]/div[4]/div/div/label/select
web.click('(//select[@id=\'PriceType\'])[2]');

// xpath:attributes: (//select[@id=\'PriceType\'])[2]
//   xpath:position: //div[2]/div[2]/div[4]/div/div/label/select
web.click('(//select[@id=\'PriceType\'])[2]');

web.transaction("בחירת תאריך");
//   xpath:position: //div[2]/div[2]/div[3]/div/div/label/span/i
//              css: css=body > article > div.body-container > div.module-second > div.about > div.center-container.pn-cal-container > form > div > div.calculate-item-1 > div.calculate-item-bottom > div:nth-child(3) > div > div > label > span > i
web.click('//div[2]/div[2]/div[3]/div/div/label/span/i');

//       xpath:link: (//a[contains(text(),\'4\')])[3]
// xpath:idRelative: //div[@id=\'ui-datepicker-div\']/table/tbody/tr[1]/td[4]/a
//       xpath:href: (//a[contains(@href, \'#\')])[17]
//   xpath:position: //td[4]/a
//              css: css=#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a
web.click('(//a[contains(text(),\'4\')])[3]');

web.transaction("השוואה לאורך זמן");
//               id: id=ComparisonDateType
// xpath:attributes: //select[@id=\'ComparisonDateType\']
//   xpath:position: //div[2]/div[2]/div[2]/div/div/label/select
//              css: css=#ComparisonDateType
web.click('id=ComparisonDateType');

//               id: id=ComparisonDateType
// xpath:attributes: //select[@id=\'ComparisonDateType\']
//   xpath:position: //div[2]/div[2]/div[2]/div/div/label/select
//              css: css=#ComparisonDateType
web.select('id=ComparisonDateType', 'label=רבעוני');

web.transaction("סנן תוצאות");
// xpath:idRelative: //button[@id=\'btnComparison\']/p
//   xpath:position: //div[2]/form/div/div[1]/button/p
//              css: css=#btnComparison > p
web.click('//button[@id=\'btnComparison\']/p');

web.selectWindow('title=תוצרת הארץ - מחירי תוצרת הארץ 04.11.2020');



//               id: id=btnViewGrapth
//        xpath:img: //img[@title=\'גרף\']
// xpath:attributes: //img[@id=\'btnViewGrapth\']
//   xpath:position: //div[2]/div[3]/div/div/div[1]/img[1]
//              css: css=#btnViewGrapth
//web.click('id=btnViewGrapth');

web.transaction("בחירת מוצר ראשון ברשימה");
//   xpath:position: //div[4]/div/div[1]/div/p
//              css: css=body > article > div.body-container > div.popup > div > div.header-popup > div > p
web.clickHidden('(//input[@class="check-table"])[1]');


// xpath:idRelative: //table[@id=\'ProductTable\']/tbody/tr[1]/td[16]/div/label
//   xpath:position: //tr[1]/td[16]/div/label
//              css: css=#ProductTable > tbody > tr:nth-child(1) > td:nth-child(16) > div > label
//web.click('//table[@id=\'ProductTable\']/tbody/tr[1]/td[16]/div/label');

web.transaction("מעבר לתצוגה גראפית");
//               id: id=btnViewGrapth
//        xpath:img: //img[@title=\'גרף\']
// xpath:attributes: //img[@id=\'btnViewGrapth\']
//   xpath:position: //div[2]/div[3]/div/div/div[1]/img[1]
//              css: css=#btnViewGrapth
web.click('id=btnViewGrapth');