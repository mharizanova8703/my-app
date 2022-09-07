import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
    if (props.iconif === "01d") {
        return ( <ReactAnimatedWeather icon = "CLEAR_DAY"color = "#FECD70"
            size = {
                64
            }
            animate = {
                true
            }
            />
        );
    }
    if (props.iconif === "02d") {
        return ( <ReactAnimatedWeather icon = "PARTLY_CLOUDY_DAY"
            color = "#grey"
            size = {
                64
            }
            animate = {
                true
            }
            />
        );
    }
    if (props.iconif === "03d") {
        return ( <ReactAnimatedWeather icon = "CLOUDY"
            color = "#grey"
            size = {
                64
            }
            animate = {
                true
            }
            />
        );
    }
    if (props.iconif === "04d") {
        return ( <ReactAnimatedWeather icon = "CLOUDY"
            color = "#grey"
            size = {
                64
            }
            animate = {
                true
            }
            />
        );
    }
    if (props.iconif === "09d") {
        return ( <ReactAnimatedWeather icon = "RAIN"
            color = "#grey"
            size = {
                64
            }
            animate = {
                true
            }
            />
        );
    }
    if (props.iconif === "10d") {
        return ( <ReactAnimatedWeather icon = "RAIN"
            color = "#grey"
            size = {64}
            animate = {
                true
            }
            />
        );
    }
    if (props.iconif === "13d") {
        return ( < ReactAnimatedWeather icon = "SNOW"
            color = "#grey"
            size = {64}
            animate = {
                true
            }
            />
        );
    }
    if (props.iconif === "50d") {
        return ( < ReactAnimatedWeather icon = "FOG"
            color = "#grey"
            size = {64}
            animate = {
                true
            }
            />
        );
    }
}
