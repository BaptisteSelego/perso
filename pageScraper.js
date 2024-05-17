const scraperObject = {
    urls: [
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.8592381,2.1994745,13z?entry=ttu',
        'https://www.google.com/maps/search/agence+immobili%C3%A8re/@48.8573181,2.399975,13z?entry=ttu'
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
        return combinedData;
    }
}

async function autoScroll(page, selector) {
    console.log('1');
    await page.evaluate(async (selector) => {
        console.log('2');
        const distance = 900000; // Adjust this value if needed
        const delay = 5000; // Delay between scrolls
        console.log('3');
        const element = document.querySelector(selector);
        console.log('4');
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


module.exports = scraperObject;
