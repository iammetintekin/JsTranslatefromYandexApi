function Translate(word,language)
{
    this.apikey = "trnsl.1.1.20200511T074001Z.e1270aebe79744fb.b36853bce49bb1207f6ad29a3354ee24e2ff7882";
    this.word = word;
    this.language = language;

    //xhr object
    
    this.xhr = new XMLHttpRequest();


}

Translate.prototype.translateWord = function(callback)
{
    //Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",endpoint); //asenkron true
    this.xhr.onload = () => {
        if(this.xhr.status === 200)
        {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            // console.log(text);
            callback(null,text);
            console.log(JSON.parse(this.xhr.responseText).text[0]);
        }
        else{
            callback("Bir hata oluştu",null);
        }
    }
    this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord,newLanguage)
{
    this.word = newWord;
    this.language = newLanguage;
}