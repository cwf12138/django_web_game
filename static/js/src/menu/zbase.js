class WfGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="wf-game-menu">
    <div class="wf-game-menu-field">
        <div class="wf-game-menu-field-item wf-game-menu-field-item-single-mode">
              单人模式
        </div>
        <br>
        <div class="wf-game-menu-field-item wf-game-menu-field-item-multi-mode">
              多人模式
        </div>
        <br>
        <div class="wf-game-menu-field-item wf-game-menu-field-item-settings">
             退出
        </div>
    </div>
</div>
`);
        this.$menu.hide();
        this.root.$wf_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.wf-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.wf-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.wf-game-menu-field-item-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show("single mode");
        });
        this.$multi_mode.click(function(){
            outer.hide();
            outer.root.playground.show("multi mode");

        });
        this.$settings.click(function(){
           // console.log("click settings");
            outer.root.settings.logout_on_remote();
        });
    }

    show() {  // 显示menu界面
        this.$menu.show();
    }

    hide() {  // 关闭menu界面
        this.$menu.hide();
    }
}

