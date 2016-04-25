
var EDM_DISTRICT_SERVER_IP = "192.168.1.66";
var EDM_DISTRICT_PORT = 3000;

(function() {

   var settings = {EDM_DISTRICT_SERVER_IP : EDM_DISTRICT_SERVER_IP, EDM_DISTRICT_PORT : EDM_DISTRICT_PORT}

   if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
      module.exports = settings;
   else {
      window.settings = settings;
   }
})();
