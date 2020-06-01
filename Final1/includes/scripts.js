$(document).ready(function(){
  $("#devicesOne").hide();
  $("#boxOne").click(function(){
    $("#devicesOne").toggle();
    $("#oven").toggle();
  });
})

function loadList(){
    var Enusrens = ["Aig", "Phenix", "Ayalon" , "Menora" , "Migdal"];
    var Ensured_by = document.getElementById("Ensured_by");
    var NewOptions = "";
    for(i= 0 ; i<Enusrens.length ; i++){
        NewOptions += "<option value ="+ Enusrens[i] + ">" +Enusrens[i] + "</option>";
    }

    Ensured_by.innerHTML = NewOptions;
} 
