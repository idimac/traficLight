

var trafficLight = {
    turnOn: false,
    redLightLamp: false,
    yellowLightLamp: false,
    greenLightLamp: false,
    redLight: function () {
        if ( this.redLightLamp == false ) {
            document.getElementById('redLight').style.backgroundColor = "red";
            this.redLightLamp = true;
        }
        else if ( this.redLightLamp == true ) {
            document.getElementById('redLight').style.backgroundColor = "rgb(136, 31, 31)";
            this.redLightLamp = false;
        }
    },
    yellowLight: function () {
        if ( this.yellowLightLamp == false ) {
            document.getElementById('yellowLight').style.backgroundColor = "yellow";
            this.yellowLightLamp = true;
        }
        else if ( this.yellowLightLamp == true) {
            document.getElementById('yellowLight').style.backgroundColor = "rgb(199, 199, 25)";
            this.yellowLightLamp = false;
        }
        
    },
    greenLight: function () {
        if ( this.greenLightLamp == false) {
            document.getElementById('greenLight').style.backgroundColor = "green";
            this.greenLightLamp = true;
        }
        else if ( this.greenLightLamp = true) {
            document.getElementById('greenLight').style.backgroundColor = "rgb(20, 66, 20)";
            this.greenLightLamp = false;
        }
       
    }
};

setTimeout(function a() {
    trafficLight.redLight();
    trafficLight.turnOn = true;
    if(trafficLight.turnOn == true) {
        setTimeout(function(){
            trafficLight.redLight();
            trafficLight.yellowLight();
            if(trafficLight.yellowLightLamp == true) {
                setTimeout(function(){
                    trafficLight.yellowLight();
                    trafficLight.greenLight();
                        if(trafficLight.greenLightLamp == true) {
                            setTimeout(function(){
                                trafficLight.greenLight();
                                a();
                            }, 3000);
                        }
                }, 3000);
            }
        } , 5000); 
    };
}, 2000);







 



