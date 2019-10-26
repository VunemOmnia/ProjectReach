
/*
$$$$$$$$\ $$\                       $$$$$$$\                                $$\       
\__$$  __|$$ |                      $$  __$$\                               $$ |      
   $$ |   $$$$$$$\   $$$$$$\        $$ |  $$ | $$$$$$\   $$$$$$\   $$$$$$$\ $$$$$$$\  
   $$ |   $$  __$$\ $$  __$$\       $$$$$$$  |$$  __$$\  \____$$\ $$  _____|$$  __$$\ 
   $$ |   $$ |  $$ |$$$$$$$$ |      $$  __$$< $$$$$$$$ | $$$$$$$ |$$ /      $$ |  $$ |
   $$ |   $$ |  $$ |$$   ____|      $$ |  $$ |$$   ____|$$  __$$ |$$ |      $$ |  $$ |
   $$ |   $$ |  $$ |\$$$$$$$\       $$ |  $$ |\$$$$$$$\ \$$$$$$$ |\$$$$$$$\ $$ |  $$ |
   \__|   \__|  \__| \_______|      \__|  \__| \_______| \_______| \_______|\__|  \__|
*/
/*Devs: Marsimplodation, The Pale Rider (Ares)*/

//the function to add a new product
function add(image_url, url, name){
    var spacer = document.createElement("div")
    spacer.style="width: 5px; height: 5px; float: left;";

    //the name
    var text = document.createElement("h2")
    text.innerHTML=name;

    //the image
    var img = document.createElement("img");
    img.src=image_url;
    img.style="height: 60%; width: auto; border: 10px solid rgba(0,0,0,0);";
    img.onclick= function(event) {
        window.open(url, '_blank');
    };

    //creating the div and adiing stuff to it
    var div = document.createElement("div");
    div.style="text-align: center; color: black; height: 30%; width: fit-content; background-color: grey; border-radius: 3%; float: left;";
    div.appendChild(img);
    div.appendChild(text);

    //showing all on the site
    var shop_window = document.getElementById("shop");
    shop_window.appendChild(div);
    shop_window.appendChild(spacer);
}

//adding phone and pillow
add("https://vangogh.teespring.com/v3/image/OC1XZ_DFEDBbaWo3XG9Aitaf-Kg/480/560.jpg","https://teespring.com/the-reach-home-collection?pid=649","Phone Case"); //phone case
add("https://vangogh.teespring.com/v3/image/yP-nsgIangQM_FTHWOhmswCgdTA/480/560.jpg", "https://teespring.com/the-reach-home-collection?pid=650", "Pillow"); //pillow
add("https://vangogh.teespring.com/v3/image/PvM-66d8d90XH3NHoGno898Ts_Y/480/560.jpg","https://teespring.com/the-reach-home-collection?pid=659","Mug")