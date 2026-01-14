import { GameObject } from "./GameObject";
import { KeyboardInput } from "../../controls/KeyboardInput";
import { GameManager } from "../engine/GameManager";

export class Player extends GameObject {
    x = 375;
    y = 520;
    width = 32;
    height = 32;
    color: string = "white";
    speed: number = 0.15;
    image: HTMLImageElement;
    imageSrc: string = "/src/assets/space_squid.png";

    constructor() {
        super()
        this.image = new Image();
        this.image.src = this.imageSrc;
    }

    setImage(image: HTMLImageElement) {
        this.image = image;
    }

    setImageSrc(imageSrc: string) {
        this.image.src = imageSrc;
    }

    update(delta: number, input: KeyboardInput) {
        const speedDelta = this.speed * delta;
        if (input.left) this.x -= speedDelta;
        if (input.right) this.x += speedDelta;
        this.x = Math.max(0, Math.min(GameManager.screenWidth - this.width, this.x));

        // TODO: Put Bullet object here
        // ? This might be the best place for it (maybe?)
    }

    draw(ctx: CanvasRenderingContext2D) {
        // ctx.fillStyle = "white";
        // ctx.fillRect(
        //     this.x,
        //     this.y,
        //     this.width,
        //     this.height
        // );
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}