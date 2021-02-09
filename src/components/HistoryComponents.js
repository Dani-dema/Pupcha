import React, { Component } from 'react';

class History extends Component {
    constructor(props){
        super(props);
        this.state={
            shfaq:'none'
        };
        this.more= this.more.bind(this);
    }
    
    more(){
        
        this.setState({shfaq:'block'})
        console.log(this.state.shfaq,"D")
       
    }


    render() {
        return (
            <div>
             <p>CAPTCHA u krijua në Universitetin Carnegie Mellon në 2000. Website kanë nevojë për CAPTCHA për t'u mbrojtur nga "bots" e spammers dhe llojeve të tjerë të botës së botës së krimit.
             Google thotë se njerëzit janë duke zgjidhur 200 milion CAPTCHA në ditë.
             
             Me kalimin e kohës, megjithatë, kompjuterët e njerëzve të këqij ose ndryshe "bots" po bëhen më të mençur. CAPTCHA-të duhet të bëhen më të vështira për përdoruesit, sepse ato janë më të lehta për kompjuterët.
             
             Von Ahn tha se tani kishte "ndoshta qindra" të llojeve të ndryshme të CAPTCHA-ve. Ai punoi në një nga madhështitë, reCAPTCHA. Google e bleu atë dhe tani e ofron falas. Përdoruesit duhet të deshifrojnë dy fjalë për reCAPTCHA. Njëri prej tyre, zakonisht ai më i lehtë, hiqet nga një libër i vjetër. Një skaner i kompjuterizuar nuk ka arritur ta lexojë siç duhet dhe përdoruesit e reCAPTCHA-s kanë një shans për të bërë punën si duhet, duke ndihmuar kështu Google të dixhitalizojë librat.
             
             Von Ahn tha se ai mendon se disa lloje të CAPTCHA-s kanë qenë më të vështira. ReCAPTCHA është më e vështirë se sa ishte në 2000, por ka qenë në të njëjtin nivel vështirësie për dy vitet e fundit. Mesatarisht, tha ai, njerëzit kalojnë nëntë sekonda duke zgjidhur një reCAPTCHA dhe 92 përqind e tyre e marrin atë si duhet. Në vitin 2000, niveli i suksesit ishte 97 përqind. Shkronjat do të bëhen më të deformuara kur shumë spammers fillojnë të futen. { this.state.shfaq==="none" && <a onClick={this.more}> <span style={{color:'blue'}}>me shume...</span> </a> }</p> 
             <div  style={{display: this.state.shfaq}} > 
            <p> Von Ahn tha se nuk e dinte sa njerëz heqin dorë kur shohin një CAPTCHA të vështirë ose kërkojnë fjalë të reja. Ai gjithashtu nuk e dinte nëse njerëzit e moshuar kishin më shumë probleme sesa të rinjtë, por ka arsye për t'u çuditur.

            Robert Sergott, një neuro-okulist në Spitalin Wills Eye në Filadelfia, tha se të moshuarit kishin më shumë të ngjarë të kishin katarakt, glaukomë dhe degjenerim makular - sëmundje të syve që mund ta bëjnë vizionin të paqartë, veçanërisht kur ka kontrast të ulët midis shkronjave dhe sfondit të tyre. Njerëzit e moshuar lexojnë më mirë kur ka kontrast të lartë dhe më shumë hapësirë ​​midis shkronjave, pothuajse e kundërta e asaj që ofrojnë disa CAPTCHA.

            "Shumë të rinj gjithashtu kanë probleme vizuale," tha Sergott. "Unë kam pasur gabime duke e bërë atë. Unë mendoj se të gjithë kanë. Si do të ekuilibroni sigurinë pa e bërë këtë një detyrë të pamundur për individë të caktuar?"

            Rachel Greenstadt, një profesoreshë e shkencave kompjuterike në Universitetin Drexel e cila është e specializuar në kryqëzimin midis inteligjencës artificiale dhe sigurisë, tha se kishte alternativa audio ndaj CAPTCHA-ve të shkruara. ReCAPTCHA përdor fjalë të folura dhe shumë zhurmë në sfond. Ato janë "edhe më të vështira për t'u zgjidhur dhe janë më të lehta për t'u thyer", tha ajo.

            Në vitin 2009, Harry Hochheiser, një asistent profesor i informacionit biomjekësor në Universitetin e Pittsburgh, bëri një studim të vogël të reCAPTCHA-ve audio. Ai përfshiu pesë persona të verbër, përfshirë një me disa vizione të mbetura. Ata morën CAPTCHA audio si të drejtë 45 përqind të kohës, dhe iu deshën atyre 65 sekonda për të përfunduar detyrën.

            Ai thotë se nuk është i sigurt se cila është zgjidhja, por pyet veten nëse disa uebfaqe kanë nevojë për kaq shumë siguri. "Quiteshtë mjaft e mundshme që ka njerëz atje që dekurajohen nga vështirësia," tha ai.

            Ai vuri në dukje se disa politikanë u kërkojnë njerëzve të zgjidhin CAPTCHA para se t'u dërgojnë atyre me email. Po në lidhje me The Philadelphia Inquirer? ai pyeti. Gazeta lejon lexuesit t'i dërgojnë redaktorit një email pa zgjidhur një CAPTCHA, por ato përdoren për disa detyra në faqen e internetit të The Inquirer, philly.com.

            L. Jean Camp, i cili jep mësim informacioni në Universitetin Indiana në Bloomington, përqendrohet në atë se sa e vështirë është të kuptohet siguria e kompjuterit.

            "Teknologjitë e sigurisë priren të projektohen nga njerëz që janë të rinj, meshkuj dhe jashtëzakonisht me përvojë me kompjuterët," tha ajo.

            Kompanitë nuk po i marrin seriozisht përdoruesit e vjetër të kompjuterit, tha ajo. "Unë nuk njoh asnjë kompani teknologjie, asnjërën, që të ketë punësuar një gerontolog. Asnjë. E cila për mua është e mahnitshme," tha ajo.

            Zgjidhja e problemit CAPTCHA është që kompanitë të investojnë më shumë në zbulimin e postës së bezdisshme, tha ajo. "Justshtë thjesht më e lirë dhe më e lehtë t'i thuash njeriut:" Jo, ti e zgjidh këtë ". "Ajo tha se disa spammers tani punësojnë njerëz në vendet e huaja për të zgjidhur CAPTCHA-të.

            Greenstadt i Drexel sheh një rresht argjendi në vështirësinë në rritje të CAPTCHA-ve. It'sshtë një "triumf për inteligjencën artificiale dhe njohjen optike të karakterit", tha ajo.

            Krijimi i një CAPTCHA më të mirë është i vështirë. "Kompjuteri duhet të jetë në gjendje të gjenerojë problemin dhe të kontrollojë nëse është i duhur, por jo ta zgjidhë atë, dhe njeriu duhet të jetë në gjendje ta zgjidhë atë," tha ajo.

            Von Ahn thotë se gjërat janë larg pikës së krizës. Shumica e njerëzve mund t'i zgjidhin CAPTCHA-të, edhe nëse janë rritur me një alfabet tjetër.

            Ai na lejon të fshehim një sekret të vogël: Përdoruesit nuk duhet të jenë perfekt. Kompjuterët e dinë që disa shkronja duken njësoj dhe ato u japin përdoruesve përfitimin e një dyshimi. Edhe disleksikët bëjnë mirë.

            "Ne ju lejojmë të gaboni pak dhe spammers gjithashtu e dinë këtë," tha von Ahn.

            Ai thotë se disa prej nesh po mendojnë shumë, pastaj shtypin ndërsa janë nervoz. Kjo vetëm rrit shanset e gabimeve. "Do t'ju tregoj hilen", tha ai. "Shkruaj atë që shikon. Çfarëdo që të jetë. Mos e mendo shumë".

            Projekti aktual i Von Ahn është duoLingo, një mënyrë për të buruar nga përkthimi i dokumenteve dhe për të mësuar një gjuhë të re në të njëjtën kohë. Ai është jashtë biznesit CAPTCHA tani, por ai thotë se njerëzit ndoshta mund t'i rrahin makineritë për 10 vjet të tjera. "Unë jam i sigurt se do të ndodhë në një moment që kompjuterët të jenë aq të mirë në këtë si njerëzit," tha ai. "Në atë pikë, ne do të duhet të kuptojmë diçka tjetër." </p>
    
             </div>
             </div>

        )
    }
}
export default History;