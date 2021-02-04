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
             <p>CAPTCHA u krijua në Universitetin Carnegie Mellon në 2000. Emri është shkurtimi i testit Plotësisht të Automatizuar Publik Turing për të treguar Kompjuterët dhe Njerëzit Veçmas. Uebsajtet kanë nevojë për CAPTCHA për t'u mbrojtur nga "bots" e spammers dhe llojeve të tjerë të botës së botës së krimit.

             "Çdokush mund të shkruajë një program për t'u regjistruar në miliona llogari dhe ideja ishte ta parandalonte atë," tha Luis von Ahn, një profesor i Carnegie Mellon i cili ishte pjesë e ekipit CAPTCHA. Lojërat e vogla funksionojnë sepse kompjuterët nuk janë aq të mirë sa njerëzit në leximin e teksteve të shtrembëruara. Google thotë se njerëzit janë duke zgjidhur 200 milion CAPTCHA në ditë.
             
             Me kalimin e kohës, megjithatë, kompjuterët e njerëzve të këqij po bëhen më të mençur dhe, mirëpo, njerëzit jo. CAPTCHA-të duhet të bëhen më të vështira për përdoruesit, sepse ato janë më të lehta për kompjuterët.
             
             "It'sshtë një garë armatimesh midis pronarëve të faqeve dhe spammers; përdoruesit humbin", tha Jeremy Elson, një studiues në Microsoft Research i cili ka zhvilluar një CAPTCHA të quajtur Asirra. Përdor fotografi të qenve dhe maceve.
             
             Von Ahn tha se tani kishte "ndoshta qindra" të llojeve të ndryshme të CAPTCHA-ve. Ai punoi në një nga madhështitë, reCAPTCHA. Google e bleu atë dhe tani e ofron falas. Përdoruesit duhet të deshifrojnë dy fjalë për reCAPTCHA. Njëri prej tyre, zakonisht ai më i lehtë, hiqet nga një libër i vjetër. Një skaner i kompjuterizuar nuk ka arritur ta lexojë siç duhet dhe përdoruesit e reCAPTCHA-s kanë një shans për të bërë punën si duhet, duke ndihmuar kështu Google të dixhitalizojë librat.
             
             Von Ahn tha se ai mendon se disa lloje të CAPTCHA-s kanë qenë më të vështira. ReCAPTCHA është më e vështirë se sa ishte në 2000, por ka qenë në të njëjtin nivel vështirësie për dy vitet e fundit. Mesatarisht, tha ai, njerëzit kalojnë nëntë sekonda duke zgjidhur një reCAPTCHA dhe 92 përqind e tyre e marrin atë si duhet. Në vitin 2000, niveli i suksesit ishte 97 përqind. Shkronjat do të bëhen më të deformuara kur shumë spammers fillojnë të futen. { this.state.shfaq==="none" && <a onClick={this.more}> <span style={{color:'blue'}}>me shume...</span> </a> }</p> 
             <div  style={{display: this.state.shfaq}} > 
            <p>  Von Ahn tha se ai mendon se disa lloje të CAPTCHA-s kanë qenë më të vështira. ReCAPTCHA është më e vështirë se sa ishte në 2000, por ka qenë në të njëjtin nivel vështirësie për dy vitet e fundit. Mesatarisht, tha ai, njerëzit kalojnë nëntë sekonda duke zgjidhur një reCAPTCHA dhe 92 përqind e tyre e marrin atë si duhet. Në vitin 2000, niveli i suksesit ishte 97 përqind. Shkronjat do të bëhen më të deformuara kur shumë spammers fillojnë të futen. </p>
          
            <p>  Von Ahn tha se ai mendon se disa lloje të CAPTCHA-s kanë qenë më të vështira. ReCAPTCHA është më e vështirë se sa ishte në 2000, por ka qenë në të njëjtin nivel vështirësie për dy vitet e fundit. Mesatarisht, tha ai, njerëzit kalojnë nëntë sekonda duke zgjidhur një reCAPTCHA dhe 92 përqind e tyre e marrin atë si duhet. Në vitin 2000, niveli i suksesit ishte 97 përqind. Shkronjat do të bëhen më të deformuara kur shumë spammers fillojnë të futen. </p>
          
             </div>
             </div>

        )
    }
}
export default History;