//Prototype,Ajax,Callback
EventListeners();

function EventListeners()
{
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    // change
    document.getElementById("language").onchange = function()
    {
        //Arayüz işlemleri
        
        ui.changeUI();
    }

}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function translateWord(e)
{

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function(err,response){
        if(err)
        {
            //response
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
            //console.log(response);
        }
    });
    
    e.preventDefault();
    
}