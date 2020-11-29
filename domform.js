

function Creating(varname,elem,classname,idname){
   
    var varname=document.createElement(elem)
    varname.setAttribute('class',classname)
    varname.setAttribute('id',idname)
    return varname
    
    } 



var container=Creating(container,'div','container','cont');
document.body.append(container)
var form1=Creating(form1,"form",'form1','form1')

var tableone=document.createElement('div')
tableone.setAttribute('id','table1')

tableone.append(form1)
container.append(tableone)


var rowing=Creating(rowing,'tr','tr','tr')

var inputnameans=Creating(inputnameans,'td','td2','')
var Firstname=Creating(Firstname,'input','name','givenname')
Firstname.type="text";
Firstname.required='true';


var inputname=Creating(inputname,'td','td1','');
var namefirst=Creating(namefirst,'label','label','lable')
namefirst.setAttribute('for','name')

namefirst.innerHTML="Firstname";


inputnameans.append(Firstname)
inputname.append(namefirst)
rowing.append(inputname,inputnameans) 
form1.append(rowing)




var rowing1=Creating(rowing1,'tr','tr','trr')


var inputnameans1=Creating(inputnameans1,'td','td2','')
var lastname=Creating(lastname,'input','name1','givenname1')
lastname.type="text"


var inputname1=Creating(inputname1,'td','td1','');
var name1=Creating(name1,'label','label','lable')

name1.setAttribute('for','name1')
name1.innerHTML="Lastname";


inputnameans1.append(lastname)
inputname1.append(name1)
rowing1.append(inputname1,inputnameans1)

form1.append(rowing1)

var rowing2=Creating(rowing2,'tr','tr','trr')


var addressline=Creating(addressline,'td','td2','add')

var linerow1=Creating(linerow1,'tr','','')
var line1=Creating(line1,'input','addresslines','line1')
line1.type="text"

var linerow2=Creating(linerow2,'tr','','')
var line2=Creating(line2,'input','addresslines','line2')
line2.type="text"

var linerow3=Creating(linerow3,'tr','','')
var line3=Creating(line3,'input','addresslines','line3')
line3.type="text"

var linerow4=Creating(linerow4,'tr','','')
var line4=Creating(line4,'input','addresslines','line4')
line4.type="text"


linerow1.append(line1)
linerow2.append(line2);
linerow3.append(line3)
linerow4.append(line4)

addressline.append(linerow1,linerow2,linerow3,linerow4)


var address=Creating(address,'td','td1','');
var addresslabel=Creating(addresslabel,'label','label','lable')

addresslabel.setAttribute('for','addresslines')
addresslabel.innerHTML="Address";



address.append(addresslabel)
rowing2.append(address,addressline)
form1.append(rowing2)




var rowing3=Creating(rowing3,'tr','tr','trr')


var pincodeplace=Creating(pincode,'td','td2','')
var pincode=Creating(pincode,'input','pin','pincode')
pincode.type="number"


var pinlableplace=Creating(pinlableplace,'td','td1','');
var pinlabel=Creating(pinlabel,'label','label','lable')

pinlabel.setAttribute('for','pin')
pinlabel.innerHTML="Pincode";


pinlableplace.append(pinlabel)
pincodeplace.append(pincode)
rowing3.append(pinlableplace,pincodeplace)
form1.append(rowing3)

var rowing4=Creating(rowing4,'tr','tr','trr')
var statelabelplace=Creating(statelabelplace,'td')
var stateplace=Creating(stateplace,'td')

var statelable=Creating(statelable,'label')
statelable.setAttribute('for','statename')
statelable.innerHTML="State"

var state=Creating(state,"select",'statename','state','states')

var kashmir=Creating(kashmir,'option','statename','kash')
kashmir.innerHTML="Kashmir";

var Delhi=Creating(Delhi,'option','statename','Del')
Delhi.innerHTML="Delhi";

var Tamilnadu=Creating(Tamilnadu,'option','statename','TN')
Tamilnadu.innerHTML="Tamilnadu";

var Goa=Creating(Goa,'option','statename','Goa')
Goa.innerHTML="Goa";

state.append(kashmir,Delhi,Tamilnadu,Goa)

statelabelplace.append(statelable)
stateplace.append(state)
rowing4.append( statelabelplace,stateplace)
form1.append(rowing4);


var rowing5=Creating(rowing5,'tr','tr','trr')
var countrylabelplace=Creating(countrylabelplace,'td')
var countryplace=Creating(countryplace,'td')

var countrylable=Creating( countrylable,'label')
countrylable.setAttribute('for','Countryname')
countrylable.innerHTML="Country"

var country=Creating(country,"select",'Countryname','country','country')

var India=Creating(India,'option','Countryname','India')
India.innerHTML="India";

var Israel=Creating(Israel,'option','Countryname','Israel')
Israel.innerHTML="Israel";

var China=Creating(China,'option','Countryname','China')
China.innerHTML="China";

var Japan=Creating(Japan,'option','Countryname','Japan')
Japan.innerHTML="Japan";

country.append(India,Israel,China,Japan)

countrylabelplace.append(countrylable)
countryplace.append(country)
rowing5.append( countrylabelplace,countryplace)
form1.append(rowing5);


var rowing6=Creating(rowing6,'tr','tr','trr')
var genderlabelplace=Creating(genderlabelplace,'td')
var genderplace=Creating(genderplace,'td')

var genderlable=Creating( genderlable,'label')
genderlable.setAttribute('for','genderlist')
genderlable.innerHTML="Gender"

var male=Creating(male,"input",'genderlist', 'rdmale')
male.type="radio";
male.name='genderoption'
male.value="Male"

var malelable=Creating( malelable,'label')
malelable.setAttribute('for','rdmale')
malelable.innerHTML="Male"

var female=Creating(female,"input",'genderlist', 'rdfemale')
female.type="radio";
female.name='genderoption'
female.value="Female"


var femalelable=Creating( femalelable,'label')
femalelable.setAttribute('for','rdfemale')
femalelable.innerHTML="Female"


genderlabelplace.append(genderlable)
genderplace.append(male,malelable,female,femalelable)
rowing6.append( genderlabelplace,genderplace)
form1.append(rowing6);




var rowing7=Creating(rowing7,'tr','tr','trr')
var foodplace=Creating(foodplace,'td')
var choiceplace=Creating(choiceplace,'td')

var foodlable=Creating( foodlable,'label')
foodlable.setAttribute('for','foodtype')
foodlable.innerHTML="Food"

var Choice=Creating(Choice,'select','foodname','foodtype')
Choice.multiple='true';
Choice.name="foodtype"


var Chappati=Creating(Chappati,'option','foodname','food')
Chappati.innerHTML="Chappati";
Chappati.value="Chappati";

var Bryani=Creating(Bryani,'option','foodname','food')
Bryani.innerHTML="Bryani";

Bryani.value="bryani"

var Dosa=Creating(Dosa,'option','foodname','food')
Dosa.innerHTML="Dosa";

Dosa.value="dosa"

var paratha=Creating(paratha,'option','foodname','food')
paratha.innerHTML="paratha";
paratha.value="paratha"

Choice.append(Chappati,Bryani,Dosa,paratha)

foodplace.append(foodlable)
choiceplace.append( Choice)
rowing7.append( foodplace,choiceplace)
form1.append(rowing7);




var submit1=Creating(submit1,"button",'button','submit')
submit1.innerHTML="SUBMIT"
submit1.setAttribute('type','button')


submit1.addEventListener('click',createtables)

form1.append(submit1);


var table2=Creating(table2,'table','table','table2')



var trow1=document.createElement('tr')




var cell1=trow1.insertCell(0)
cell1.innerHTML='Firstname';
cell1.id="cell"



var trow2=document.createElement('tr')



var cell1=trow2.insertCell(0)
cell1.innerHTML='Lasttname';
cell1.id="cell"

var trow3=document.createElement('tr')



var cell1=trow3.insertCell(0)
cell1.innerHTML='Address';
cell1.id="cell"
var trow4=document.createElement('tr')



var cell1=trow4.insertCell(0)
cell1.innerHTML='pincode';
cell1.id="cell"
var trow5=document.createElement('tr')



var cell1=trow5.insertCell(0)
cell1.innerHTML='state';
cell1.id="cell"
var trow6=document.createElement('tr')



var cell1=trow6.insertCell(0)
cell1.innerHTML='Country';
cell1.id="cell"
var trow7=document.createElement('tr')



var cell1=trow7.insertCell(0)
cell1.innerHTML='Gender';
cell1.id="cell"
var trow8=document.createElement('tr')



var cell1=trow8.insertCell(0)
cell1.innerHTML='Food choice';
cell1.id="cell"
table2.append(trow1,trow2,trow3,trow4,trow5,trow6,trow7,trow8);
container.append(table2)

var col=1;

function createtables(){
    name1=document.getElementById('givenname').value
    name2=document.getElementById('givenname1').value
    address1=[document.getElementById('line1').value, document.getElementById('line2').value,document.getElementById('line3').value,document.getElementById('line4').value];
    pincode=document.getElementById('pincode').value
    state=document.getElementById('state').value
    country=document.getElementById('country').value
    address=address1.join(' ');
  
    gen=document.querySelector('input[name="genderoption"]:checked').value
    console.log(gen);

    let t=[];

    let x= document.getElementById('foodtype')
    console.log(x);
 
   for(i=0;i<x.options.length;i++){
  
       if(x.options[i].selected===true){
         
        t.push(x.options[i].value)
        console.log(x.options[i].value,'s')
        
       }
       
   }

   var tag=t.join(' ');


var cell11=trow1.insertCell(col);
cell11.innerHTML=name1;

var cell12=trow2.insertCell(col);
cell12.innerHTML=name2;

var cell13=trow3.insertCell(col);
cell13.innerHTML=address


var cell14=trow4.insertCell(col);
cell14.innerHTML=pincode;


var cell15=trow5.insertCell(col);
cell15.innerHTML=state;


var cell16=trow6.insertCell(col);
cell16.innerHTML=country;

var cell17=trow7.insertCell(col);
cell17.innerHTML=gen;

var cell18=trow8.insertCell(col);
cell18.innerHTML=tag;

col++


}