export class WfGame {
    constructor(id,AcWingOS) {
        this.id = id;
        this.$wf_game = $('#' + id);
        this.AcWingOS = AcWingOS;
        this.settings = new Settings(this);
        this.menu = new WfGameMenu(this);
        this.playground = new WfGamePlayground(this);

        this.start();
    }

    start() {
    }
}

