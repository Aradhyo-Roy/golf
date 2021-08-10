const { fabric } = require("./fabric");

var canvas=new fabric.canvas("myCanvas")

ball_y=0;
ball_x=0;
holey=400;
holex=600;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj=Img;
		hole_obj=scaleToWidth(50);
		hole_obj=scaleToHeight(50);
		hole_obj.set({
			top:holey,
			left:holex
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj=Img;
		ball_obj=scaleToWidth(50);
		ball_obj=scaleToHeight(50);
		ball_obj.set({
			top:bally,
			left:ballx
		});
		canvas.add(ball_obj);
	});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==holex)&&(ball_y==holey)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have hit the goal";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=5){
			ball_y=ball_y-block_image_height;
			canvas.remove(ball_obj);
			new_image;
		}
	}

	function down()
	{
		 if(ball_y<=450){
			 ball_y=ball_y+block_image_height;
			 canvas.remove(ball_obj);
			 new_image;
		 }
	}

	function left()
	{
		if(ball_x >=5)
		{
			ball_x=ball_x-block_image_width;
			canvas.remove(ball_obj);
			new_image;
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
			canvas.remove(ball_obj);
			new_image;
		}
	}
	
}

