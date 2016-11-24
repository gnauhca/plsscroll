function Player(wrap, item) {
	this.$wrap = $(wrap);
	this.picBoxs = [];//容纳每一个图片的容器， jq元素
	this.$effectWrap = null;
	this.$items = this.$wrap.children(item);

    this.count = this.$items.length;
	this.currentIndex = 0;
	this.nextIndex = 0;
	this.effects = {};//生成过的effect，保存起来
	this.currentEffect = null;
	this.effectDurTime = 2500;//效果持续时间
	//this.effectDurTime = 20000000;//效果持续时间
	this.effectT = 0;//效果计时器
	this.playing = false;

    this.updateListeners = [];
	this.init();
}

Player.prototype.setupEffects = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        this.setupEffect(arr[i]);
    }
}

Player.prototype.setupEffect = function(effect) {
    this.effects[effect.name] = effect.effect;
    this.currentEffect || (this.currentEffect = effect.effect);
}

Player.prototype.init = function() {
	var that = this;
    this.$wrap.addClass('slider-container');
    this.$items.addClass('slider-item');
    this.$items.eq(0).addClass('active');
	$(window).on('resize', function() {
		that.resize();
	});
}

Player.prototype.addUpdateListener = function(fn) {
    this.updateListeners.push(fn);
}

Player.prototype.onUpdate = function() {
    var player = this;
    this.updateListeners.forEach(function(fn) {
        fn(player);
    });
}

Player.prototype.resize = function() {
    // var winWidth = window.innerWidth;
    // var winHeight = window.innerHeight;

    // this.$wrap.css({width: winWidth, height: winHeight});
    // this.$items.css({width: winWidth, height: winHeight});
}

Player.prototype.play = function(index) {
	//Effect.prototype.playEffect = function(picNow, picNext, durTime, wrapId)
	//使用当前效果对象播放效果


	if (this.playing) {return false;}
	if (this.currentIndex == index) {return true;}

	var that = this;
    var curClassName = this.$items[this.currentIndex].className;
    var nextClassName = this.$items[this.nextIndex].className;

	this.nextIndex = index;
	this.playing = true;
    this.setEffect(this.$items.eq(this.currentIndex).data('effect'));
	this.currentEffect(
        this.$items.eq(this.currentIndex), 
        this.$items.eq(this.nextIndex), 
        index - this.currentIndex, 
        // this.effectDurTime, 
        function() {
            that.$items[that.currentIndex].className = curClassName.replace(/active/g, '').replace(/moving/g, '').replace(/\s+/g, ' ');
            that.$items[that.nextIndex].className = (nextClassName.replace(/active/g, '') + ' active').replace(/moving/g, '').replace(/\s+/g, ' ');
            that.playing = false;
            that.currentIndex = index;
            that.onUpdate();
        });

    this.$items.eq(this.currentIndex).addClass('moving');
    this.$items.eq(this.nextIndex).addClass('moving');
	return true;
}

Player.prototype.setIndex = function(index) {
	return this.play(index);
}

Player.prototype.setEffect = function(effectName) {
	this.currentEffect = this.effects[effectName] ? this.effects[effectName]: this.currentEffect;
}