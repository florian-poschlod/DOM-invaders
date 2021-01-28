// Creates a random invader

class Invader {
  constructor() {
    this.invaderNames = INVADER_NAMES;
    this.bitmaps = INVADER_BMP;
    this.attributes = ['id', 'class']
  }

  assemble() {
    const randomAttr = this.attributes[Math.floor(Math.random() * Math.floor(this.attributes.length))];
    const randomName = this.invaderNames[Math.floor(Math.random() * Math.floor(this.invaderNames.length))];
    const randomImage = this.bitmaps[Math.floor(Math.random() * Math.floor(this.bitmaps.length))];
    const newInvader = document.createElement(`div`);
    newInvader.style.backgroundImage = `url('${randomImage}')`;
    newInvader.setAttribute(`${randomAttr}`, `${randomName}`);
    newInvader.innerHTML = `${randomAttr}:<br>${randomName}`;
    return newInvader;
  }
}