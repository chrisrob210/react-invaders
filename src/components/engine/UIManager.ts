import { KeyboardInput } from "../../controls/KeyboardInput";
import { GameManager } from "./GameManager";
import { PauseMenu } from "../ui/menus/PauseMenu";
import { Label } from "../ui/Label";

export class UIManager {
    labelLives: Label;
    labelScore: Label;
    labelWave: Label;
    labelGameOver: Label;
    pauseMenu: PauseMenu;

    constructor() {
        this.pauseMenu = new PauseMenu();
        this.labelLives = new Label("20px Arial", "Lives: ", 700, 20, "white");
        this.labelScore = new Label("20px Arial", "Score: ", 10, 20, "white");
        this.labelWave = new Label("20px Arial", "Wave: ", 350, 20, "white");
        this.labelGameOver = new Label("50px Arial", "GAME OVER", 300, 100, "red");
    }

    update(delta: number, input: KeyboardInput) {
        delta;  // ? placeholdered to make ts and js happy, might never be used?
        input; // ? placeholdered to make ts and js happy, might never be used?
        this.labelLives.setText("Lives: " + GameManager.lives);
        this.labelScore.setText("Score: " + GameManager.score);
        this.labelWave.setText("Wave: " + GameManager.currentWave);
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.labelLives.draw(ctx);
        this.labelScore.draw(ctx);
        this.labelWave.draw(ctx);
        if (GameManager.gameOver) {
            this.labelGameOver.draw(ctx);
        }

        if (GameManager.pause === true) {
            this.pauseMenu.draw(ctx);
        }
    }
}