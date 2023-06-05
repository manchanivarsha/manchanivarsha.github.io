let dhonioldinfo={
    imgurl: "https://images.indiafantasy.com/wp-content/uploads/20220724002346/i.jpeg",
    name: "Dhoni",
    Description: "train"
}
let dhoniyounginfo={
    imgurl: "https://images.indiafantasy.com/wp-content/uploads/20220724002346/i.jpeg",
    name: "M.S.Dhoni",
    Description: "indian crickter"


}
let isdhoniold=true;
let displayobject;
let flipdata= function(){
    if(isdhoniold == true)
    {
        displayobject=dhoniyounginfo;
        isdhoniold=false;
    }
    else{
        displayobject=dhonioldinfo;
        isdhoniold=true;
    }
    document.getElementById("img-dhoni").src=displayobject.imgurl;
    document.getElementById("name-dhoni").innerHTML=displayobject.name;
    document.getElementById("des-dhoni").innerHTML=displayobject.Description;

}