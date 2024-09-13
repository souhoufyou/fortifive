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
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En identifiant des ports ouverts ou des règles trop permissives pour infiltrer votre réseau.</p>
        <p><strong>Conséquences potentielles :</strong> Un attaquant pourrait accéder à vos systèmes internes, voler des données sensibles, installer des malwares ou prendre le contrôle de vos serveurs. Cela peut entraîner des pertes financières majeures, des sanctions légales en cas de non-conformité aux réglementations, et une atteinte irréversible à la réputation de votre entreprise.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Absence de pare-feu, votre réseau est exposé aux attaques directes.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En scannant votre réseau pour trouver des vulnérabilités exploitables sans aucune barrière de sécurité, facilitant l'accès non autorisé.</p>
        <p><strong>Conséquences potentielles :</strong> Les attaquants peuvent infiltrer facilement votre réseau, accéder à toutes vos données, interrompre vos services, et même utiliser vos ressources pour mener des attaques contre d'autres cibles. Cela peut mener à des pertes financières catastrophiques, à des actions en justice de la part de clients ou partenaires affectés, et à une perte totale de confiance de la part du marché.</p>
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
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En utilisant des malwares sophistiqués ou des techniques de zero-day exploit pour infecter vos systèmes sans être détectés.</p>
        <p><strong>Conséquences potentielles :</strong> Une infection par un malware non détecté peut conduire à la capture de vos données sensibles, au chiffrement de vos fichiers par un ransomware exigeant une rançon exorbitante, ou à l'installation de portes dérobées pour des accès futurs. Cela peut entraîner des interruptions prolongées de vos activités, des pertes financières importantes, et une dégradation sévère de votre image de marque.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Absence d'antivirus, vos systèmes sont vulnérables aux malwares.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En diffusant des virus, vers ou chevaux de Troie qui peuvent s'installer sans aucune résistance sur vos machines.</p>
        <p><strong>Conséquences potentielles :</strong> Vos systèmes peuvent être complètement compromis, permettant aux attaquants de voler des informations sensibles, de détruire ou altérer des données critiques, ou d'utiliser vos systèmes pour attaquer d'autres cibles (ce qui pourrait vous rendre légalement responsable). Les coûts de récupération peuvent être exorbitants, et les dommages à la réputation peuvent être irréparables.</p>
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
        <p><strong>Risque :</strong> Sauvegardes régulières effectuées, mais potentiellement non sécurisées ou non testées.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En ciblant vos sauvegardes pour les chiffrer, les supprimer ou y insérer des données corrompues, rendant la restauration impossible ou dangereuse.</p>
        <p><strong>Conséquences potentielles :</strong> En cas d'attaque réussie, vous pourriez perdre l'accès à vos données critiques sans possibilité de restauration fiable. Cela peut paralyser vos opérations, entraîner des pertes financières énormes, et potentiellement vous mettre en infraction avec des obligations légales ou réglementaires concernant la conservation des données.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Aucune sauvegarde, risque de perte totale des données.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En lançant des attaques destructrices (comme des ransomwares ou des wipers) sachant que vous ne pouvez pas restaurer vos systèmes.</p>
        <p><strong>Conséquences potentielles :</strong> Perte irrécupérable de toutes vos données, entraînant l'arrêt complet de vos activités, une incapacité à remplir vos obligations contractuelles, et des dommages financiers et juridiques potentiellement insurmontables. Cela peut mener à la faillite de l'entreprise.</p>
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
        <p><strong>Risque :</strong> Bonne gestion des mots de passe, mais le phishing et les attaques ciblées restent des menaces.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En menant des campagnes de phishing sophistiquées ou en exploitant des fuites de données externes pour obtenir des identifiants d'accès.</p>
        <p><strong>Conséquences potentielles :</strong> Accès non autorisé à vos systèmes sensibles, vol de propriété intellectuelle, modifications non autorisées de données, et compromission de la confidentialité de vos clients. Les répercussions peuvent inclure des pertes financières, des sanctions réglementaires, et une érosion de la confiance de vos clients et partenaires.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Mots de passe faibles ou réutilisés, facilitant les attaques.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En utilisant des attaques par force brute, des attaques par dictionnaire, ou en exploitant des fuites de mots de passe provenant d'autres services.</p>
        <p><strong>Conséquences potentielles :</strong> Compromission rapide de multiples comptes utilisateurs, escalade de privilèges pour accéder à des systèmes critiques, et capacité à opérer sans être détecté pendant de longues périodes. Cela peut conduire à des pertes de données massives, des fraudes internes, et des dommages à long terme pour l'entreprise.</p>
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
        <p><strong>Risque :</strong> Présence d'appareils IoT pouvant être vulnérables et point d'entrée pour des attaques.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En prenant le contrôle d'un appareil IoT mal sécurisé pour accéder à votre réseau interne ou lancer des attaques DDoS.</p>
        <p><strong>Conséquences potentielles :</strong> Compromission de l'ensemble du réseau, interruption des services, vol de données, et utilisation de vos ressources pour des activités illégales. Les impacts financiers et juridiques peuvent être significatifs, et la confiance de vos clients peut être sérieusement ébranlée.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner bad"></div>
        </div>`;
    score -= 10;
} else {
    analysis += `
        <p><strong>Risque :</strong> Aucun appareil IoT détecté, le risque est donc réduit dans ce domaine.</p>
        <p><strong>Note :</strong> Continuez à surveiller l'ajout futur d'appareils connectés pour maintenir la sécurité de votre réseau.</p>
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
        <p><strong>Risque :</strong> Votre système d'alarme est en place, mais peut présenter des vulnérabilités liées à la cybersécurité.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En piratant le système d'alarme connecté pour accéder à votre réseau interne ou désactiver les alertes, facilitant des attaques cybernétiques.</p>
        <p><strong>Conséquences potentielles :</strong> Un attaquant pourrait utiliser le système d'alarme compromis comme point d'entrée pour accéder à vos systèmes, déployer des malwares, ou perturber vos opérations. Cela peut entraîner des pertes de données, des interruptions de service, et des impacts financiers et réputationnels importants.</p>
        <div class="risk-bar">
            <div class="risk-bar-inner good"></div>
        </div>`;
} else {
    analysis += `
        <p><strong>Risque :</strong> Absence de système d'alarme connecté, ce qui peut limiter la surveillance des intrusions cybernétiques.</p>
        <p><strong>Comment un hacker pourrait l'exploiter :</strong> En profitant de l'absence de systèmes de détection pour mener des attaques prolongées sans être détecté.</p>
        <p><strong>Conséquences potentielles :</strong> Les attaques pourraient passer inaperçues pendant de longues périodes, permettant aux attaquants de causer des dommages significatifs, voler des données sensibles, ou installer des backdoors pour un accès futur. Les répercussions peuvent inclure des pertes financières sévères, des obligations légales coûteuses, et une atteinte durable à la réputation de votre entreprise.</p>
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
            <p><strong>Bien que votre sécurité soit relativement solide, des vulnérabilités critiques subsistent.</strong> Sans actions proactives, votre entreprise reste exposée à des cybermenaces évolutives.</p>
            <p><strong>Conséquences potentielles :</strong> Une attaque réussie peut entraîner des pertes financières considérables, des sanctions réglementaires, et une détérioration de la confiance de vos clients et partenaires. Il est impératif d'investir continuellement dans la sécurisation de vos systèmes pour prévenir ces risques.</p>
        </div>
    `;
} else if (score > 50) {
    analysis += `
        <div class="final-summary">
            <h3>Constat Final</h3>
            <p><strong>Votre sécurité présente des faiblesses majeures qui doivent être corrigées immédiatement.</strong> Sans amélioration, votre entreprise est susceptible d'être la cible d'attaques cybernétiques réussies.</p>
            <p><strong>Conséquences potentielles :</strong> Les attaques peuvent causer des pertes de données sensibles, des interruptions prolongées de vos opérations, des coûts de récupération élevés, et des dommages irréparables à votre réputation. Des mesures correctives rapides sont essentielles pour protéger votre entreprise.</p>
        </div>
    `;
} else {
    analysis += `
        <div class="final-summary">
            <h3>Constat Final</h3>
            <p><strong>La situation est critique : votre entreprise est extrêmement vulnérable aux cyberattaques.</strong> Des actions urgentes sont nécessaires pour sécuriser vos systèmes.</p>
            <p><strong>Conséquences potentielles :</strong> Sans intervention immédiate, vous risquez des pertes catastrophiques, incluant la faillite de l'entreprise, des poursuites judiciaires, et une destruction totale de la confiance de vos clients et partenaires. Il est vital de mettre en place un plan de sécurité robuste pour prévenir ces scénarios désastreux.</p>
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
