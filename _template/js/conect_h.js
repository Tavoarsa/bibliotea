$(document).ready(function(){

  

 $('#hacienda').click(function(){

  login_api();
  
  //save_form();

  

function login_api() {
    
   var parametros_login = {
                  "w" : "users",
                  "r" : "users_log_me_in",
                  "userName": "Tavoarsa",
                  "pwd" : "123"
                  
          };

    if(parametros_login != '')
    {

    //alert(typeSituation);
     $.ajax({
      url:"http://mh.bovinapp.net/www/api.php",
      method:"POST",
      data:parametros_login,
      dataType:"JSON",
      beforeSend: function () {
                          $("#resultado").html("Procesando, espere por favor...");
                  },
                  success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                         // console.log(response);
                        Object.entries(response).forEach(([key, value]) => {
                        // console.log(key + ' ' + value); // "a 5", "b 7", "c 9"     
                          sessionKey = value.sessionKey;
                          userName = value.userName;
                         
                          console.log(sessionKey);
                          console.log(userName);
                           });
                  }
     })
    }
    else
    {
     alert(" Debe llenar los campos");
    }

  var xhr = new XMLHttpRequest(); 
  xhr.open("POST", "/file.p12"); 

  xhr.addEventListener("load", function (e) {
        // file upload is complete
        console.log(xhr.responseText);
    });
  
  xhr.responseType = "blob";

  var formData = new FormData();

  formData.append("", xhr);


   
}




function save_form(){

   var customer=$('#id_customer').val();
    var customer1 = document.createElement('input');
    customer1.type="text";
    customer1.name="typeahead";
    customer1.id="skills";
    customer1.hidden="true";
 //--------------------------------------------------------------//
    var p_value=parseFloat($('#other_value').val()); 

    var inpt = document.createElement('input');
    inpt.type="text";
    inpt.name="txtother_value1";
    inpt.id="other_value1";
    inpt.hidden="true";
 //--------------------------------------------------------------//
    var p_value1=parseFloat($('#total_gtot').val());
    var inpt1 = document.createElement('input');
    inpt1.type="text";
    inpt1.name="txtgrand_total1";
    inpt1.id="grand_total1";
    inpt1.hidden="true";
    
 //--------------------------------------------------------------//

    document.frm.appendChild(inpt);
    document.frm.appendChild(inpt1);
    document.frm.appendChild(customer1);
    document.frm.innerHTML+="<br/>";

 //--------------------------------------------------------------//
    document.frm.other_value1.value = p_value;
    document.frm.grand_total1.value = p_value1;
    document.frm.skills.value = customer;
    //--------------------------------------------------------------//
   document.forms['frm'].submit();
}

  



});

}); 