const scraperObject = {
    urls: [
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.8592381,2.1994745,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.8573181,2.399975,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.9624867,2.294958,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.6839985,2.2209517,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@44.8495959,-0.6275445,14z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@47.2381441,-1.6427353,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@45.7577855,4.6792394,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.2796852,5.0688189,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.6880164,6.0954994,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.4082781,-4.6554748,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.6098511,3.7182778,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.6005382,1.2769509,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@50.6309185,2.8910092,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@45.184192,5.6376001,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.4843541,-1.5022884,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.3933274,-1.7117079,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.7030301,7.0969204,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.4535702,6.7240719,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@42.6860921,9.3460756,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@41.9110189,8.7113893,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.5839754,4.8589577,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.7078762,-1.1645817,11.69z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@49.1846002,-0.4501822,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.2112956,-2.0886206,9.38z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@46.1618861,-1.3323642,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@47.331705,4.876329,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@45.7868838,2.9568169,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@41.5842113,8.9611383,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@42.6989413,2.8221103,12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.535345,5.0761079,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@50.5352614,1.2001725,9.94z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@47.9900949,0.1655579,11z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.124815,-1.7410585,11z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@47.8949266,1.8159814,11z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@49.2698323,3.919139,10z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@49.1726741,6.0233078,11.12z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@48.7027173,6.1150532,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@48.5966544,7.5989408,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@47.9072411,6.8396252,10z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@45.7427518,5.9844085,9z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@45.1335633,5.6610778,10.74z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@44.3622683,5.7359876,9z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.2715051,6.1165589,10.3z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.8145352,4.364241,11.04z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.4229637,3.1371527,10z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@42.7146917,2.6139288,10z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.159697,-0.3338483,10.28z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.8294897,-0.4530465,10.1z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@45.8302301,-1.3182436,10.3z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@44.6243266,-1.4727574,10.04z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@46.7174706,-1.9698689,10.26z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@49.4328022,0.3243374,9.62z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@47.1694985,4.6030653,9z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@46.8529956,0.1207641,8.9z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@45.3188479,0.7888495,8.88z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@44.1382555,2.1533964,10.36z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@16.1832656,-61.7738822,10z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@-21.1343843,55.195577,10z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@4.424509,-54.0318425,8z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@-22.2643365,166.3622931,12z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@48.9500622,2.2476264,13z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@48.7678713,2.0248971,12.24z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.1619108,5.635813,11.82z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.744001,7.4160848,11z?entry=ttuhttps://www.google.com/maps/search/agence+immobilière/@43.744001,7.4160848,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@45.2368725,-1.2964417,10z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobilière/@43.7225917,0.3480641,10z?entry=ttu'







    ],
    async scraper(browser) {
        let combinedData = [];
        let firstIteration = true; // Indicateur pour suivre la première itération

        for (const url of this.urls) {
            let page = await browser.newPage();
            try {
                console.log(`Navigating to ${this.url}...`);
                await page.goto(url, { waitUntil: 'networkidle2' });

                if (firstIteration) {

                    // Wait for the button to be rendered and then click it
                    const buttonSelector = 'button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.XWZjwc';
                    await page.waitForSelector(buttonSelector, { visible: true });
                    await page.click(buttonSelector);
                    console.log('Button clicked');
                    // Mettre à jour l'indicateur pour les itérations suivantes
                    firstIteration = false;
                }

                // Wait for the elements containing the data to be visible
                const dataSelector = '.qBF1Pd';
                await page.waitForSelector(dataSelector, { visible: true });
                console.log('Target elements are visible');

                // Wait for 2 seconds before scrolling
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log('Waiting for 2 seconds before scrolling');

                // Scroll the specific element with role="feed"
                const scrollSelector = 'div[role="feed"]';
                console.log('Const définis');
                await autoScroll(page, scrollSelector);

                // Extraire les données des divs spécifiés en utilisant Array.from et map pour créer un tableau d'objets
                const data = await page.evaluate(() => {
                    // Sélectionner tous les éléments avec la classe .UaQhfb
                    const containerElements = document.querySelectorAll('.lI9IFe');

                    // Convertir la NodeList en tableau et mapper chaque élément
                    return Array.from(containerElements).map(container => {
                        // Sélectionner le titre dans .UsdlK à l'intérieur de chaque conteneur
                        const titleElement = container.querySelector('.qBF1Pd');
                        const title = titleElement ? titleElement.innerText : 'N/A';

                        // Sélectionner le numéro dans .qBF1Pd à l'intérieur de chaque conteneur
                        const numberElement = container.querySelector('.UsdlK');
                        const number = numberElement ? numberElement.innerText : 'N/A';

                        // Sélectionner le lien dans l'élément <a> avec la classe .lcr4fd
                        const linkElement = container.querySelector('a.lcr4fd');
                        const link = linkElement ? linkElement.href : 'N/A';

                        // Vérifier si l'élément existe et récupérer le href


                        // Retourner un objet avec le titre, le numéro et le lien (si trouvé)
                        return {
                            title: title,
                            number: number,
                            link: link
                        };
                    });
                });

                // Accéder aux pages des agences dans de nouveaux onglets et recueillir les e-mails
                for (const item of data) {
                    if (item.link !== 'N/A') {
                        console.log(`Opening new tab for ${item.link}`);
                        try {
                            const newPage = await browser.newPage();
                            await newPage.goto(item.link, { waitUntil: 'networkidle2' });

                            const email = await newPage.evaluate(() => {
                                // Utiliser une expression régulière pour trouver les adresses e-mail
                                const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
                                const bodyText = document.body.innerText;
                                const allEmails = bodyText.match(emailPattern) || [];
                                // Retourner les adresses e-mail trouvées
                                return allEmails.join(', ');
                            });

                            // Ajouter les e-mails à l'objet item
                            item.email = email;
                            await newPage.close();
                        } catch (error) {
                            console.error(`Failed to open ${item.link}: ${error.message}`);
                            item.email = 'NA';
                        }
                    } else {
                        item.email = 'NA';
                    }

                    // Vérifier si l'email est null et définir à 'NA'
                    if (!item.email) {
                        item.email = 'NA';
                    }
                }



                // console.log(data);
                console.log(data.length);
                // Combine the data from this URL with the combinedData array
                combinedData = combinedData.concat(data);

                // Accéder aux pages des agences




                // Log to confirm the program has finished
                console.log('Scraping process completed successfully.');





            } catch (error) {
                console.error("Error during scraping:", error);
            }
        }
        console.log('finish');
        const uniqueData = RemoveDuplicatesAndNoMail(combinedData);
        return uniqueData;
    }
}

async function autoScroll(page, selector) {
    console.log('1');
    await page.evaluate(async (selector) => {
        
        const distance = 900000; // Adjust this value if needed
        const delay = 4000; // Delay between scrolls
        
        const element = document.querySelector(selector);
        
        if (!element) {
            console.error(`Element not found for selector: ${selector}`);
            return;
        }
        console.log(`Found element for selector: ${selector}`);
        let previousHeight = element.scrollHeight;
        let currentHeight = element.scrollHeight;

        console.log(`Starting autoScroll with selector: ${selector}`);

        while (true) {
            element.scrollBy(0, distance);
            await new Promise(resolve => setTimeout(resolve, delay));
            previousHeight = currentHeight;
            currentHeight = element.scrollHeight;
            


            // Log the heights to debug
            console.log(`Previous height: ${previousHeight}, Current height: ${currentHeight}`);

            // Break the loop if no new elements are loaded after several attempts
            if (previousHeight === currentHeight) {
                console.log('No more elements to load');
                break;
            }
        }
    }, selector);
}
const fs = require('fs').promises;

async function RemoveDuplicatesAndNoMail(data) {
    const seen = new Set();
    const uniqueData = [];

    try {
        const jsonString = await fs.readFile('data.json', 'utf8');
        const existingLinks = new Set(JSON.parse(jsonString).map(item => item.link));

        for (const item of data) {
            // Vérifier si l'email est 'NA' et ne pas l'ajouter à uniqueData
            if (item.email !== 'NA') {
                // Utiliser une combinaison de propriétés comme identifiant unique
                const identifier = `${item.title}-${item.number}-${item.link}-${item.email}`;
                
                if (!existingLinks.has(item.link)) {
                    // Vérifier si l'identifiant n'a pas déjà été vu
                    if (!seen.has(identifier)) {
                        seen.add(identifier);
                        uniqueData.push(item);
                    }
                }
            }
        }

        console.log("Contenu du fichier JSON:", uniqueData);
        return { uniqueData };

    } catch (err) {
        console.log('Erreur de lecture ou de parsing JSON:', err);
    }
}



module.exports = scraperObject;
