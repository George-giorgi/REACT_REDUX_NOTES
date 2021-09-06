

export default function Svg({sky}) {
   
    const Filter_sky =(value)=>{

        if(value.includes("clear sky")){

            return(
                <svg width="139" height="130" viewBox="0 0 139 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M97.5 61.5C97.5 78.5992 82.9714 92.5 65 92.5C47.0286 92.5 32.5 78.5992 32.5 61.5C32.5 44.4008 47.0286 30.5 65 30.5C82.9714 30.5 97.5 44.4008 97.5 61.5Z" fill="#F1F608" stroke="#F1F608"/>
                <line x1="11.7071" y1="14.2929" x2="38.7071" y2="41.2929" stroke="#F1F608" stroke-width="4"/>
                <line x1="0.613273" y1="79.0778" x2="31.6133" y2="66.0778" stroke="#F1F608" stroke-width="4"/>
                <line x1="22.3722" y1="110.222" x2="53.3722" y2="85.2216" stroke="#F1F608" stroke-width="4"/>
                <line x1="66" y1="130" x2="66" y2="93" stroke="#F1F608" stroke-width="4"/>
                <line x1="89.7665" y1="79.3578" x2="120.767" y2="116.358" stroke="#F1F608" stroke-width="4"/>
                <line x1="97.6769" y1="66.0537" x2="138.677" y2="52.0536" stroke="#F1F608" stroke-width="4"/>
                <line x1="88.3722" y1="41.2216" x2="119.372" y2="16.2216" stroke="#F1F608" stroke-width="4"/>
                <line x1="66.0022" y1="30.0665" x2="64.0022" y2="0.0665188" stroke="#F1F608" stroke-width="4"/>
                </svg>
            )
        }else if(value.includes("light rain")){
            return(
                <svg width="162" height="138" viewBox="0 0 162 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="110.5" cy="72" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="66.5" cy="72" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="132.5" cy="46" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="95.5" cy="32" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="58.5" cy="26" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="29.5" cy="52" rx="29.5" ry="26" fill="#C4C4C4"/>
                <line x1="25" y1="118" x2="25" y2="128" stroke="#34A3E1" stroke-width="4"/>
                <path d="M99.5 123V138" stroke="#34A3E1" stroke-width="4"/>
                <line x1="135" y1="88" x2="135" y2="108" stroke="#34A3E1" stroke-width="4"/>
                <path d="M73.5 98V112" stroke="#34A3E1" stroke-width="4"/>
                <line x1="43" y1="98" x2="43" y2="118" stroke="#34A3E1" stroke-width="4"/>
                <line x1="16" y1="78" x2="16" y2="98" stroke="#34A3E1" stroke-width="4"/>
                </svg>
            )
        }else if(value.includes("scattered clouds")){

            return(
                <svg width="162" height="146" viewBox="0 0 162 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M113.5 61.5C113.5 78.5992 98.9714 92.5 81 92.5C63.0286 92.5 48.5 78.5992 48.5 61.5C48.5 44.4008 63.0286 30.5 81 30.5C98.9714 30.5 113.5 44.4008 113.5 61.5Z" fill="#F1F608" stroke="#F1F608"/>
                <line x1="27.7071" y1="14.2929" x2="54.7071" y2="41.2929" stroke="#F1F608" stroke-width="4"/>
                <line x1="16.6133" y1="79.0778" x2="47.6133" y2="66.0778" stroke="#F1F608" stroke-width="4"/>
                <line x1="38.3722" y1="110.222" x2="69.3722" y2="85.2216" stroke="#F1F608" stroke-width="4"/>
                <line x1="82" y1="130" x2="82" y2="93" stroke="#F1F608" stroke-width="4"/>
                <line x1="105.767" y1="79.3578" x2="136.767" y2="116.358" stroke="#F1F608" stroke-width="4"/>
                <line x1="113.677" y1="66.0537" x2="154.677" y2="52.0536" stroke="#F1F608" stroke-width="4"/>
                <line x1="104.372" y1="41.2216" x2="135.372" y2="16.2216" stroke="#F1F608" stroke-width="4"/>
                <line x1="82.0022" y1="30.0665" x2="80.0022" y2="0.0665188" stroke="#F1F608" stroke-width="4"/>
                <ellipse cx="110.5" cy="120" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="66.5" cy="120" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="132.5" cy="94" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="95.5" cy="80" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="58.5" cy="74" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="29.5" cy="100" rx="29.5" ry="26" fill="#C4C4C4"/>
                </svg>
            )
        }else{

            return(
                <svg width="162" height="186" viewBox="0 0 162 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M113.5 61.5C113.5 78.5992 98.9714 92.5 81 92.5C63.0286 92.5 48.5 78.5992 48.5 61.5C48.5 44.4008 63.0286 30.5 81 30.5C98.9714 30.5 113.5 44.4008 113.5 61.5Z" fill="#F1F608" stroke="#F1F608"/>
                <line x1="27.7071" y1="14.2929" x2="54.7071" y2="41.2929" stroke="#F1F608" stroke-width="2"/>
                <line x1="16.6133" y1="79.0778" x2="47.6133" y2="66.0778" stroke="#F1F608" stroke-width="2"/>
                <line x1="38.3722" y1="110.222" x2="69.3722" y2="85.2216" stroke="#F1F608" stroke-width="2"/>
                <line x1="82" y1="130" x2="82" y2="93" stroke="#F1F608" stroke-width="2"/>
                <line x1="105.767" y1="79.3578" x2="136.767" y2="116.358" stroke="#F1F608" stroke-width="2"/>
                <line x1="113.677" y1="66.0537" x2="154.677" y2="52.0536" stroke="#F1F608" stroke-width="2"/>
                <line x1="104.372" y1="41.2216" x2="135.372" y2="16.2216" stroke="#F1F608" stroke-width="2"/>
                <line x1="82.0022" y1="30.0665" x2="80.0022" y2="0.0665188" stroke="#F1F608" stroke-width="2"/>
                <ellipse cx="110.5" cy="120" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="66.5" cy="120" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="132.5" cy="94" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="95.5" cy="80" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="58.5" cy="74" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="29.5" cy="100" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="110.5" cy="120" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="66.5" cy="120" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="132.5" cy="94" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="95.5" cy="80" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="58.5" cy="74" rx="29.5" ry="26" fill="#C4C4C4"/>
                <ellipse cx="29.5" cy="100" rx="29.5" ry="26" fill="#C4C4C4"/>
                <line x1="25" y1="166" x2="25" y2="176" stroke="#34A3E1" stroke-width="4"/>
                <path d="M99.5 171V186" stroke="#34A3E1" stroke-width="4"/>
                <line x1="135" y1="136" x2="135" y2="156" stroke="#34A3E1" stroke-width="4"/>
                <path d="M73.5 146V160" stroke="#34A3E1" stroke-width="4"/>
                <line x1="43" y1="146" x2="43" y2="166" stroke="#34A3E1" stroke-width="4"/>
                <line x1="16" y1="126" x2="16" y2="146" stroke="#34A3E1" stroke-width="4"/>
                </svg>
            )
        }

    }
    return (
        <div className ="imgWrapper">
            {Filter_sky(sky)}
        </div>
    )
}
