function UI()
{
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");
}
UI.prototype.changeUI = function()
{
    //arayüz değiştirme
    this.outputImage.src=`images/${this.languageList.value}.png`;
    const dil = this.languageList[this.languageList.selectedIndex].textContent;
    this.outputLanguage.innerHTML = dil;
    console.log(dil);
}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}