class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        //body position
        this.bodyX = 360;
        this.bodyY = 380;

        //face position
        this.faceX = this.bodyX;
        this.faceY = this.bodyY - 200;

        //right leg positions
        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 105;
        //left leg position
        this.leftLegX = this.bodyX - 60;
        this.leftLegY = this.bodyY + 105;

        //right arm positions
        this.rightArmX = this.bodyX + 100;
        this.rightArmY = this.bodyY;
        //left arm positions
        this.leftArmX = this.bodyX - 100;
        this.leftArmY = this.bodyY;

        //eye position
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 250;

        //smile position
        this.smileX = this.bodyX;
        this.smileY = this.bodyY - 150;

        //left horn position
        this.leftHornX = this.bodyX - 50;
        this.leftHornY = this.bodyY - 300;
        //right horn position
        this.rightHornX = this.bodyX + 50;
        this.rightHornY = this.bodyY - 300;



        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'

        this.Akey = null;
        this.Dkey = null;
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.face = this.add.sprite(this.faceX, this.faceY, "monsterParts", "body_darkE.png");
       //make legs
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_darkC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_darkC.png");
        //make arms
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_darkB.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_darkB.png");
        //make eye
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_red.png");
        //make regular smile
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        //make fang smile but invisible
        my.sprite.fangs = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthB.png");
        my.sprite.fangs.visible = false;
        //make horns
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_large.png");

        //make body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueA.png");
        
        
        //Event input: regular smile
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });


        //Event input: show fangs
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });

        
        //Polling definition of key "A", means move left
        this.Akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        //Polling definition of key "D", means move right
        this.Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        console.log(typeof(my.sprite));
        

        if(this.Akey.isDown) {
            for(let property in my.sprite) {
                my.sprite[property].x -= 1;
            }

            //this.x -= 1;
        }
        else if(this.Dkey.isDown) {
            for(let property in my.sprite) {
                my.sprite[property].x += 1;
            }
        }

       
    }

}