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
        <p><strong>Risque :</strong> Bien que votre pare-feu soit actif, des failles de configuration peuvent exister.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En identifiant des ports ouverts ou des règles permissives pour accéder à votre réseau interne.</p>
        <p><strong>Conséquences potentielles :</strong> Accès non autorisé à des données sensibles, interruption des services et atteinte à la réputation de l'entreprise.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Absence de pare-feu, votre réseau est exposé aux attaques directes.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En scannant votre réseau pour trouver des vulnérabilités exploitables sans aucune barrière de sécurité.</p>
        <p><strong>Conséquences potentielles :</strong> Intrusions non détectées, vol de données, et perturbation complète de vos opérations.</p>
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
        <p><strong>Risque :</strong> Présence d'un antivirus, mais certaines menaces avancées peuvent le contourner.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En utilisant des malwares inconnus ou polymorphes qui ne sont pas détectés par votre antivirus.</p>
        <p><strong>Conséquences potentielles :</strong> Infection du système, perte de données, et coûts élevés pour la récupération.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Absence d'antivirus, vos systèmes sont vulnérables aux malwares.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En diffusant des virus via des emails ou sites web compromis, infectant facilement vos machines.</p>
        <p><strong>Conséquences potentielles :</strong> Corruption des données, accès non autorisé, et interruption des opérations.</p>
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
        <p><strong>Risque :</strong> Sauvegardes régulières effectuées, mais peut-être pas suffisamment sécurisées.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En accédant aux sauvegardes pour voler ou détruire des données, ou en les chiffrant via un ransomware.</p>
        <p><strong>Conséquences potentielles :</strong> Impossible de restaurer les données, pertes financières et interruption prolongée des services.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Aucune sauvegarde, risque de perte totale des données.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En lançant une attaque destructrice, sachant que vous ne pouvez pas récupérer vos données.</p>
        <p><strong>Conséquences potentielles :</strong> Pertes de données irréversibles, arrêt des activités et perte de confiance des clients.</p>
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
        <p><strong>Risque :</strong> Bonne gestion des mots de passe, mais le phishing reste une menace.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En trompant les employés pour qu'ils révèlent leurs identifiants via des emails frauduleux.</p>
        <p><strong>Conséquences potentielles :</strong> Accès aux systèmes internes, vol de données et potentielle compromission du réseau entier.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Mots de passe faibles ou réutilisés, facilitant les attaques.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En effectuant des attaques par force brute ou en devinant facilement les mots de passe.</p>
        <p><strong>Conséquences potentielles :</strong> Compromission des comptes, accès aux informations sensibles et perturbation des services.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner bad"></div>
        </div>`;
    score -= 20;
}
analysis += `</div>`;

// 5. Objets connectés (IoT)
analysis += `
    <div class="analysis-section">
        <h3><i class="fas fa-network-wired"></i> Objets connectés (IoT)</h3>`;
if (responses.connected_devices === "oui") {
    analysis += `
        <p><strong>Risque :</strong> Présence d'appareils IoT pouvant être vulnérables.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En piratant des appareils mal sécurisés pour accéder au réseau interne.</p>
        <p><strong>Conséquences potentielles :</strong> Compromission du réseau, accès non autorisé aux données et perturbations opérationnelles.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner bad"></div>
        </div>`;
    score -= 10;
} else {
    analysis += `
        <p><strong>Risque :</strong> Aucun appareil IoT détecté, risque réduit dans ce domaine.</p>
        <p><strong>Note :</strong> Surveillez l'ajout futur d'appareils connectés pour maintenir la sécurité.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
}
analysis += `</div>`;

// 6. Système d'Alarme
analysis += `
    <div class="analysis-section">
        <h3><i class="fas fa-bell"></i> Système d'Alarme</h3>`;
if (responses.alarm_system === "oui") {
    analysis += `
        <p><strong>Risque :</strong> Système d'alarme en place, mais potentiellement contournable.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En désactivant le système ou en exploitant des failles pour accéder physiquement aux locaux.</p>
        <p><strong>Conséquences potentielles :</strong> Vol d'équipements, accès aux serveurs et compromission des données physiques.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Absence de système d'alarme, vos locaux sont vulnérables.</p>
        <p><strong>Comment un intrus pourrait l'exploiter :</strong> En pénétrant physiquement dans les locaux sans être détecté.</p>
        <p><strong>Conséquences potentielles :</strong> Vol ou sabotage d'équipements, perte de données et interruption des opérations.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner bad"></div>
        </div>`;
    score -= 10;
}
analysis += `</div>`;

// Section Résumé global
analysis += `
    <div class="final-summary">
        <h3>Résumé général</h3>
        <p>Votre score de sécurité global est de <strong>${score}/100</strong>.</p>
    </div>
`;

// Constat final
if (score > 80) {
    analysis += `
        <div class="final-summary">
            <h3>Constat Final</h3>
            <p><strong>Bien que votre sécurité soit solide, des vulnérabilités existent.</strong> Les cybermenaces évoluent constamment, il est donc crucial de rester vigilant.</p>
            <p><strong>Conséquences potentielles :</strong> Sans amélioration continue, vous pourriez être exposé à de nouvelles attaques, entraînant des pertes financières et une atteinte à votre réputation.</p>
        </div>
    `;
} else if (score > 50) {
    analysis += `
        <div class="final-summary">
            <h3>Constat Final</h3>
            <p><strong>Votre sécurité présente des lacunes importantes.</strong> Des actions correctives sont nécessaires pour protéger votre entreprise.</p>
            <p><strong>Conséquences potentielles :</strong> Risque accru de cyberattaques, pouvant causer des pertes de données et des interruptions de service.</p>
        </div>
    `;
} else {
    analysis += `
        <div class="final-summary">
            <h3>Constat Final</h3>
            <p><strong>La situation est alarmante.</strong> Votre entreprise est très exposée aux cybermenaces.</p>
            <p><strong>Conséquences potentielles :</strong> Sans action immédiate, vous pourriez subir des dommages irréparables, incluant des pertes financières majeures et une atteinte à votre image.</p>
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
