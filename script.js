// Fonction pour passer à la page suivante
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';  // Masque toutes les pages
        page.classList.remove('active');  // Retire la classe active de toutes les pages
    });

    const pageToShow = document.getElementById('page' + pageNumber);
    if (pageToShow) {
        pageToShow.style.display = 'block';  // Affiche la page demandée
        pageToShow.classList.add('active');  // Ajoute la classe active à la page actuelle
    } else {
        console.error('Page ' + pageNumber + ' introuvable');
    }
}

// Fonction pour récupérer les réponses du questionnaire
function getUserResponses() {
    const getElementValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value : "non défini";
    };

    return {
        num_pc: getElementValue('num_pc'),
        num_phones: getElementValue('num_phones'),
        num_tablets: getElementValue('num_tablets'),
        shared_devices: getElementValue('shared_devices'),
        secure_devices: getElementValue('secure_devices'),
        alarm_system: getElementValue('alarm_system'),
        connected_devices: getElementValue('connected_devices'),
        antivirus: getElementValue('antivirus'),
        firewall: getElementValue('firewall'),
        data_encryption: getElementValue('data_encryption'),
        backup: getElementValue('backup'),
        antispam: getElementValue('antispam'),
        admin_rights: getElementValue('admin_rights'),
        wifi: getElementValue('wifi'),
        vpn: getElementValue('vpn'),
        network_monitoring: getElementValue('network_monitoring'),
        remote_access: getElementValue('remote_access'),
        cloud_storage: getElementValue('cloud_storage'),
        network_segmentation: getElementValue('network_segmentation'),
        security_training: getElementValue('security_training'),
        phishing_awareness: getElementValue('phishing_awareness'),
        password_policy: getElementValue('password_policy'),
        multi_factor_auth: getElementValue('multi_factor_auth')
    };
}

// Fonction pour générer l'analyse détaillée structurée
function generateDetailedAnalysis() {
    const responses = getUserResponses();
    let analysis = "";
    let score = 100;

    // Titre principal
    analysis += `<h2>Résumé de l'Audit de Sécurité Informatique</h2>`;
    analysis += `<p>Voici les résultats détaillés de votre audit de sécurité, avec une évaluation pour chaque domaine de votre infrastructure informatique.</p>`;

    // 1. Pare-feu
    analysis += `
        <div class="analysis-section">
            <h3><i class="fas fa-shield-alt"></i> Pare-feu</h3>`;
    if (responses.firewall === "oui") {
        analysis += `
            <p><strong>Risque :</strong> Votre pare-feu est actif, mais des failles dans sa configuration peuvent encore être exploitées.</p>
            <p><strong>Impact opérationnel :</strong> Une attaque pourrait interrompre vos services pendant plusieurs jours, paralysant vos opérations.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner good"></div>
            </div>`;
    } else {
        analysis += `
            <p><strong>Risque :</strong> L'absence de pare-feu rend votre réseau vulnérable à des attaques directes.</p>
            <p><strong>Impact opérationnel :</strong> Vos systèmes sont très exposés aux cyberattaques, ce qui pourrait perturber vos opérations.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner bad"></div>
            </div>`;
        score -= 20;
    }
    analysis += `</div>`;

    // 2. Antivirus
    analysis += `
        <div class="analysis-section">
            <h3><i class="fas fa-virus"></i> Antivirus</h3>`;
    if (responses.antivirus === "oui") {
        analysis += `
            <p><strong>Risque :</strong> Vous disposez d'un antivirus, mais certaines menaces comme les malwares polymorphes peuvent passer inaperçues.</p>
            <p><strong>Impact opérationnel :</strong> Si un malware pénètre votre système, vos fichiers peuvent être chiffrés, perturbant vos opérations.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner good"></div>
            </div>`;
    } else {
        analysis += `
            <p><strong>Risque :</strong> Sans antivirus, vos systèmes sont vulnérables aux malwares, virus et autres menaces.</p>
            <p><strong>Impact opérationnel :</strong> L'absence d'antivirus expose vos machines à des infections malveillantes, entraînant des interruptions de service.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner bad"></div>
            </div>`;
        score -= 20;
    }
    analysis += `</div>`;

    // 3. Sauvegarde des données
    analysis += `
        <div class="analysis-section">
            <h3><i class="fas fa-database"></i> Sauvegarde des données</h3>`;
    if (responses.backup === "oui") {
        analysis += `
            <p><strong>Risque :</strong> Vous réalisez des sauvegardes régulières, mais des copies non sécurisées pourraient être compromises.</p>
            <p><strong>Impact opérationnel :</strong> Si vos sauvegardes sont compromises, cela pourrait entraîner une perte de données critique.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner good"></div>
            </div>`;
    } else {
        analysis += `
            <p><strong>Risque :</strong> L'absence de sauvegardes expose votre entreprise à la perte de données en cas d'attaque.</p>
            <p><strong>Impact opérationnel :</strong> Une absence de sauvegardes peut conduire à une perte irrécupérable de données.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner bad"></div>
            </div>`;
        score -= 20;
    }
    analysis += `</div>`;

    // 4. Gestion des mots de passe
    analysis += `
        <div class="analysis-section">
            <h3><i class="fas fa-key"></i> Gestion des mots de passe</h3>`;
    if (responses.password_policy === "oui") {
        analysis += `
            <p><strong>Risque :</strong> Vos mots de passe sont bien gérés, mais des attaques de phishing peuvent encore compromettre vos identifiants.</p>
            <p><strong>Impact opérationnel :</strong> Un accès non autorisé à vos systèmes peut entraîner une exfiltration de données ou une interruption des services.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner good"></div>
            </div>`;
    } else {
        analysis += `
            <p><strong>Risque :</strong> Des mots de passe faibles exposent vos systèmes à des attaques par force brute.</p>
            <p><strong>Impact opérationnel :</strong> Une attaque réussie pourrait entraîner une compromission complète de votre réseau.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner bad"></div>
            </div>`;
        score -= 20;
    }
    analysis += `</div>`;

    // 5. Appareils connectés (IoT)
    analysis += `
        <div class="analysis-section">
            <h3><i class="fas fa-network-wired"></i> Objets connectés (IoT)</h3>`;
    if (responses.connected_devices === "oui") {
        analysis += `
            <p><strong>Risque :</strong> Vos objets connectés peuvent être exploités par des hackers s'ils ne sont pas correctement sécurisés.</p>
            <p><strong>Impact opérationnel :</strong> Une compromission d'un appareil IoT pourrait affecter l'ensemble de votre réseau.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner bad"></div>
            </div>`;
        score -= 10;
    } else {
        analysis += `
            <p><strong>Risque :</strong> Pas d'objets connectés identifiés, réduisant ainsi les risques de compromission via IoT.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner good"></div>
            </div>`;
    }
    analysis += `</div>`;

    // 6. Alarme système
    analysis += `
        <div class="analysis-section">
            <h3><i class="fas fa-bell"></i> Système d'Alarme</h3>`;
    if (responses.alarm_system === "oui") {
        analysis += `
            <p><strong>Risque :</strong> Votre système d'alarme physique est en place, mais une mauvaise configuration ou des vulnérabilités peuvent être exploitées.</p>
            <p><strong>Impact opérationnel :</strong> En cas de compromission du système d'alarme, vos locaux pourraient être physiquement exposés.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner good"></div>
            </div>`;
    } else {
        analysis += `
            <p><strong>Risque :</strong> L'absence de système d'alarme expose vos locaux à des risques d'intrusion physique non détectée.</p>
            <div class="risk-bar">
                <div class="risk-bar-inner bad"></div>
            </div>`;
        score -= 10;
    }
    analysis += `</div>`;

    // Section Résumé global (sans graphique)
    analysis += `
        <div class="final-summary">
            <h3>Résumé général</h3>
            <p>Votre score de sécurité global est de <strong>${score}/100</strong>.</p>
        </div>
    `;

    // Constat final "noircissant le tableau"
    if (score > 80) {
        analysis += `
            <div class="final-summary">
                <h3>Constat Final</h3>
                <p><strong>Malgré un bon score global, il est important de noter que des risques subsistent.</strong> La sécurité informatique est un domaine en constante évolution. Même les entreprises les mieux protégées ne sont jamais à l'abri des cybercriminels, qui s'adaptent constamment. Un audit régulier, des formations pour les employés et une surveillance renforcée sont des mesures indispensables pour éviter les pires scénarios.</p>
            </div>
        `;
    } else if (score > 50) {
        analysis += `
            <div class="final-summary">
                <h3>Constat Final</h3>
                <p><strong>Votre sécurité est insuffisante.</strong> Plusieurs failles importantes exposent votre entreprise à des attaques. Des mesures immédiates sont nécessaires pour protéger vos données et vos opérations. Si ces failles ne sont pas corrigées rapidement, une compromission grave est probable.</p>
            </div>
        `;
    } else {
        analysis += `
            <div class="final-summary">
                <h3>Constat Final</h3>
                <p><strong>La situation est critique.</strong> Votre entreprise est fortement exposée à des cyberattaques imminentes. Les mesures de sécurité actuelles sont quasiment inexistantes. Des actions urgentes doivent être mises en place pour éviter un désastre total.</p>
            </div>
        `;
    }

    // Afficher l'analyse dans la page de résultats
    document.getElementById('ai-analysis').innerHTML = analysis;
}

// Fonction pour afficher la page des résultats
function finishAudit() {
    generateDetailedAnalysis();  // Générer l'analyse
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
    });
    document.getElementById('result-page').classList.add('active');  // Afficher la page des résultats
    document.getElementById('result-page').style.display = 'block';
}

// Ajouter l'événement pour le bouton "Terminer"
document.getElementById('finish-btn').addEventListener('click', function () {
    finishAudit();
});
