class Coin extends Sprite{
	constructor(type,x=0,y=0,rotation=0){
		const SIZE=[
			null,
			new DrawRect(_imgs.coin1,0,0,60,60),
			new DrawRect(_imgs.coin2,0,0,60,60)
		];

		super(SIZE[type],x,y,rotation);

		this.MAX_FRAME=10;
		this.speed=10;
	}


}