var index=0;
var win;
var votestoparty=['Congress','BJP','TDP','YSR Congress','Loksatha','CPM','TRS','PRP']
var selectedButt;
var votes=[0,0,0,0,0,0,0,0]
var allButts=Array.from(document.getElementsByClassName('pbuttons'))
allButts.forEach(litem =>{
    litem.lastChild.addEventListener("click",partySelected)
})
Array.from(document.getElementsByClassName('butt')).forEach(buts=>{
    buts.addEventListener('click',optionProcess)
})
function partySelected(){
    if(selectedButt){
        selectedButt.style.visibility="visible"
    }
    selectedButt=this.parentElement
    selectedButt.style.visibility="hidden"
    document.getElementById("display-image").src='img/'+this.id+'.png'
    document.getElementById('display-image').style.display="block";
    document.getElementById('vote').style.display="none"
}
function optionProcess(){
    switch(this.id){
        case "butt2":
            {
                if(document.getElementById("butt1").style.backgroundColor=="green"){
                    document.getElementById("butt1").style.backgroundColor="red"
                    document.getElementById("portal").style.display="none"
                }
                else{
                    document.getElementById("butt1").style.backgroundColor="green"
                    document.getElementById("portal").style.display="block"
                }
                break;
            }
        case "butt5":
        {
            if(selectedButt)
            {switch(selectedButt.lastChild.id){
                case '1':
                {
                    console.log('haa')
                    votes[0]++;
                    break;
                }
                case '2':
                {
                    votes[1]++;
                    break;
                }
                case '3':
                {
                    votes[2]++;
                    break;
                }
                case '4':
                {
                    votes[3]++;
                    break;
                }
                case '5':
                {
                    votes[4]++;
                    break;
                }
                case '6':
                {
                    votes[5]++;
                    break;
                }
                case '7':
                {
                    votes[6]++;
                    break;
                }
                case '8':
                {
                    votes[7]++;
                    break;
                }
            }
            }
            else{alert("Please select a party to elect your representative")}
            break;
        }
        case "butt6":
        {
            if(selectedButt)
            {document.getElementById('display-image').style.display="none";
            selectedButt.style.visibility="visible"}
            else{alert("you haven't selected a option yet?")}
            break;
        }
        case "butt7":
        {
            var conte='<table style="background-color:aqua;height:500px;width:500px;text-align:center;font-size:1.3rem"><tr><th>Party</th><th>Votes Secured</th></tr><tr><td>Congress</td><td>'+votes[0]+'</td></tr><tr><td>BJP</td><td>'+votes[1]+'</td></tr><tr><td>TDP</td><td>'+votes[2]+'</td></tr><tr><td>YSR Congress</td><td>'+votes[3]+'</td></tr><tr><td>LokSatha</td><td>'+votes[4]+'</td></tr><tr><td>CPM</td><td>'+votes[5]+'</td></tr><tr><td>TRS</td><td>'+votes[6]+'</td></tr><tr><td>PRP</td><td>'+votes[7]+'</td></tr></table>';
            win=window.open('results.html')
            win.document.write(conte)
            break;
        }
        case "butt8":
        {
            win.close()
            break;
        }
        case "butt9":
        {
            if(index!=0){
                index--;
            }
            document.getElementById('display-image').style.display="none";
            document.getElementById('vote').style.display="block"
            document.getElementById('vote').innerHTML=votestoparty[index]+': '+votes[index]
            break;
        }
        case "butt10":
        {
            if(index!=7){
                index++;
            }
            document.getElementById('display-image').style.display="none";
            document.getElementById('vote').style.display="block"
            document.getElementById('vote').innerHTML=votestoparty[index]+': '+votes[index]
            break;
        }
        case 'butt3':
        {
            votes=[0,0,0,0,0,0,0,0]
            document.getElementById('vote').innerHTML=votestoparty[index]+': '+votes[index]
        }
        case "butt4":
        {
            document.getElementById('display-image').style.display="none";
            document.getElementById('vote').style.display="block"
            document.getElementById('vote').innerHTML='Total Votes: '+votes.reduce((a,b)=> a+b,0)
        }
    }
}