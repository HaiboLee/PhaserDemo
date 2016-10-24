var loadState = function (game) {
    this.init = function(){
        game.scale.pageAlignHorizontally=true;//水平居中
    }
    this.preload = function () {
        game.load.image('star','asset/img/star.png');
        game.load.image('diamond','asset/img/diamond.png');
    }
    this.create = function () {
        game.state.start('play');
    }
}