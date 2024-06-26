const scraperObject = {
    urls: [
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@46.5322019,0.4154351,10z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@47.4007122,0.6665157,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.6465514,-2.0890354,12z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@45.4243764,4.2840664,12z/data=!3m1!4b1?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@43.7606691,4.3801057,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.7868118,2.4800896,13.24z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@50.8164798,1.6171962,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@49.818551,0.7329049,11.25z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.4300132,1.339056,10.59z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@45.6997414,0.0435907,11.21z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@45.7198208,-0.635765,11z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@47.7285265,-3.1260264,10.18z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@47.9111052,-4.5762217,10z?entry=ttu'









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
