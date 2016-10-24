var playState = function (game) {
    this.create = function () {
        var lz = ['star','diamond'];
        var emitter = game.add.emitter(300,100,50);//添加10个粒子
        emitter.makeParticles(lz);
        emitter.setXSpeed(-100, 100);
        emitter.setYSpeed(100, 100);
        emitter.setScale(0.2, 0.5, 0.2, 0.5, 3000);
        emitter.setRotation(500, 2*Math.PI);
        emitter.setAlpha(1, 0.5, 5000);
        emitter.flow(3000, 500, 10, -1,false);
    }
}