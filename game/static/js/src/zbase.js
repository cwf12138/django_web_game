export class WfGame {
    constructor(id) {
        this.id = id;
        this.$wf_game = $('#' + id);
        this.menu = new WfGameMenu(this);
        this.playground = new WfGamePlayground(this);

        this.start();
    }

    start() {
    }
}

