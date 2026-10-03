class WetterWarnungen {
    constructor() {
        this.abonnements = [];
    }

    abonnieren(email, regionen) {
        this.abonnements.push({email, regionen});
    }

    getAbonnements() {
        return this.abonnements;
    }
}
// Letzte Änderung für den Pull Request
// Update
