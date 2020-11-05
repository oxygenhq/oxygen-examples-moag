web.transaction("פתיחת הדפדפן");
web.init();

web.transaction("דף ראשי");
web.open('https://prices.moag.gov.il/');

web.selectWindow('title=תוצרת הארץ - מחירי תוצרת הארץ 05.11.2020');

web.transaction("מעבר לדף אודות");
//       xpath:link: //a[contains(text(),\'אודות\')]
//       xpath:href: (//a[contains(@href, \'/Home\')])[1]
//   xpath:position: //nav/ul/li[2]/a
//              css: css=body > header > div.header-top > nav > ul > li:nth-child(2) > a
web.click('//a[contains(text(),\'אודות\')]');

web.transaction("בדוק שדף אודות תקין");
web.selectWindow('title=מחירי תוצרת הארץ');
//   xpath:position: //h1
//              css: css=body > article > div > section.module-second > div.container-title > div.title-1 > h1
web.assertText('//h1', 'חברת תוצרת הארץ');

web.transaction("מעבר לדף צור קשר");
//       xpath:link: //a[contains(text(),\'צור קשר\')]
//       xpath:href: (//a[contains(@href, \'/Home#Contact\')])[1]
//   xpath:position: //nav/ul/li[3]/a
//             link: link=צור קשר
//              css: css=body > header > div.header-top > nav > ul > li:nth-child(3) > a
web.click('//a[contains(text(),\'צור קשר\')]');

web.transaction("בדוק שדף צור קשר תקין");
// xpath:idRelative: //div[@id=\'Contact\']/h3
//   xpath:position: //section[4]/div[1]/div[1]/h3
//              css: css=#Contact > h3
web.assertText('//div[@id=\'Contact\']/h3', 'פרטים ויצירת קשר');
