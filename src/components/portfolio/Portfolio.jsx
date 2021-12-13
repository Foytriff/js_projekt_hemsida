import React, { useState } from 'react'
import Bandmember from './bandmeber/Bandmember';
import "./portfolio.scss"

export default function Portfolio() {

    const bandArray = [
        {
            id: 1,
            name: "Julia Frithiof",
            img: "assets/jolia.png",
            bio: "Julias bästa köp, efter 8-åriga dvärgväduren Ajax, är så klart go-to-guran Maton Mastersound ms-500. När den efter flera månaders väntan äntligen anlände långa vägar från Australien föll alla pusselbitar på plats. Vid sidan om bandet studerar Julia även praktisk filosofi vid Lunds Universitet. Andra tokigheter som hon har för sig är att hon har en komplex hat-kärlek till John Mayer och ett okomplicerat, men ohälsosamt förhållande till kakao då detta minst sagt överkonsumeras av vår gitarrist. Bästa tv-serierna är Badhotellet och Renskötarna."
        },

        {
            id: 2,
            name: "Lovisa",
            img: "assets/luvisa.png",
            bio: "Det finns bara en sak Aimée gillar mer än godis och det är musik. Ända sen hon kunde prata har hon sjungit, men enligt hennes far lät det skit fram till hon var typ 7 år. Nu låter det åtminstone bra nog för att få fronta Hedda Hatar. Aimée beskriver sin stil som fulsnygg och gillar allt som är udda och köper de flesta av sina kläder second hand. När hon inte står på scen och skriker och flänger omkring, så spenderar hon sin tid med att lyssna på P3 dokumentär eller creepypastas, färglägga i sånna mindfulness böcker och pendla."
        },

        {
            id: 3,
            name: "Ingrid",
            img: "assets/ingrid.png",
            bio: "Om Ingrids hus brann upp och hon bara fick rädda en sak undan lågorna skulle hon förmodligen brinna inne. Det skulle vara totalt omöjligt att välja mellan hennes två käraste ägodelar: ”Baby Bass” och ”Basjäveln”. När hon inte spelar instrument i olika sammanhang tränar hon, går många långa promenader (alldeles för långa, enligt Eslöv), och ger pianolektioner åt kidz."
        },

        {
            id: 4,
            name: "Julia Jarl",
            img: "assets/juliaJ.png",
            bio: "Om ni någon gång har hört att någon i bandet ropat ”ESLÖV” så var det inte staden de menade utan trummisen (som förmodligen stod och garvade åt något som hon själv har berättat). Hon skämtar om allt och svär alldeles för mycket, men det verkar uppskattas då det skrattas mycket inom bandet. Det första Julia rockade loss till som barn var förmodligen Bon Jovi och efter det blev hon mer och mer introducerad till våra kära klassiker till rockband, med hjälp av Rockklassiker-kanalen konstant påslagen på radion. Idag kan hon lyssna på allt från Queen och Aerosmith till Arctic Monkeys och Gorillaz."
        }

    ];

    const [memberBio, setMemberBio] = useState(null);

    return (
        <div className='portfolio gradient' id="portfolio">
            <h1>BANDMEDLEMMAR</h1>
            <div className="member-bar">
                    {(bandArray && bandArray.map((item)=> {
                        return <Bandmember key={item.id} id={item.id} img={item.img} click={val => setMemberBio(val)} clicked ={item.id === memberBio} />
                    }))}
            </div>
            <div className={"port-container " + (!memberBio && "hide")}>
                <div className="biography-section">
                    <h1>{memberBio && bandArray[memberBio - 1].name}</h1>
                    <p>{memberBio && bandArray[memberBio - 1].bio}</p>
                </div>
            </div>
        </div>
    )
}
