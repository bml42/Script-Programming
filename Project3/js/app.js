var list1Elements;
var list2Elements;
var compElements;
var currScore;
var newNode;
var nodeText;

var addscore1Button = document.getElementById("add-item-1");
var addscore2Button = document.getElementById("add-item-2");
var compareButton = document.getElementById("compare");
var resetButton = document.getElementById("reset");

list1Elements = document.getElementsByClassName('list-one-item');
list2Elements = document.getElementsByClassName('list-two-item');
compElements = document.getElementById("comparisons").getElementsByTagName("li");

var compheadNode = compElements[0].parentNode;
var list1headNode = list1Elements[0].parentNode;
var list2headNode = list2Elements[0].parentNode;

addscore1Button.addEventListener("click", function storeInList1(){
    currScore = document.getElementById("item-field-1").value;
    if(currScore[0] == " " || currScore == "" ||currScore > 100 || currScore < 0){
        alert("Please enter numerical value from 0 -> 100");
    }
    else{
        newNode = document.createElement("LI");
        nodeText = document.createTextNode(currScore);
        newNode.appendChild(nodeText);
        list1headNode.appendChild(newNode);
        newNode.classList.add("list-one-item");
    }
}
);

addscore2Button.addEventListener("click", function storeInList2(){
    currScore = document.getElementById("item-field-2").value;
    if(currScore[0] == " " || currScore == "" ||currScore > 100 || currScore < 0){
        alert("Please enter numerical value from 0 -> 100");
    }
    else{
        newNode = document.createElement("LI");
        nodeText = document.createTextNode(currScore);
        newNode.appendChild(nodeText);
        list2headNode.appendChild(newNode);
        newNode.classList.add("list-two-item");
    }
}
);

compareButton.addEventListener("click", function compareList(){
    list1Elements = document.getElementsByClassName('list-one-item');
    list2Elements = document.getElementsByClassName('list-two-item');
    
    compElements = document.getElementById("comparisons").getElementsByTagName("li");
    var maxLen;
    if(list1Elements.length < list2Elements.length){
        maxLen = list1Elements.length;
    }else{
        maxLen = list2Elements.length;
    }
        for(var i = compElements.length; i<maxLen; i++)
        {
            if(isNaN(list1Elements[i].textContent) ==1 || isNaN(list2Elements[i].textContent) ==1 )//case of value not being a number
            {
                newNode = document.createElement("LI");
                nodeText = document.createTextNode("Invalid Score!");
                newNode.appendChild(nodeText);
                compheadNode.appendChild(newNode);
            }
            else if(parseInt(list2Elements[i].textContent) >= parseInt(list1Elements[i].textContent))//case 2>=1, greater class green background
            {
                newNode = document.createElement("LI");
                newNode.classList.add("greater");
                nodeText = document.createTextNode(parseInt(list2Elements[i].textContent) - parseInt(list1Elements[i].textContent));
                newNode.appendChild(nodeText);
                compheadNode.appendChild(newNode);
               
            }
            else if(parseInt(list2Elements[i].textContent) < parseInt(list1Elements[i].textContent))//case of 2<1, lower class red background
            {
                newNode = document.createElement("LI");
                newNode.classList.add("lower");
                nodeText = document.createTextNode(parseInt(list2Elements[i].textContent) - parseInt(list1Elements[i].textContent));
                newNode.appendChild(nodeText);
                compheadNode.appendChild(newNode);
                
            }
        }
    
    
}
);

resetButton.addEventListener("click", function resetAll(){
    
    while(compheadNode.firstChild){
        compheadNode.removeChild(compheadNode.firstChild);
    }
    while(list1headNode.firstChild){
        list1headNode.removeChild(list1headNode.firstChild);
    }
    while(list2headNode.firstChild){
        list2headNode.removeChild(list2headNode.firstChild);
    }
}
);
