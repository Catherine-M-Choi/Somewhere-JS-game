import SolidObject from "../solid_object";

class TallTree extends SolidObject {
  constructor(params) {
    super(params)

    // 128 × 192 
    this.img = new Image();
    this.img.src = './src/assets/backgrounds/forest_tree_tall.png';
    this.spriteWidth = 128;
    this.spriteHeight = 192;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.spriteCols = 1;
    this.static = true;
  }
}

export default TallTree;