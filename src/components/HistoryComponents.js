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
    }


    render() {
        return (
            <div>
             <p>CAPTCHA u krijua në Universitetin Carnegie Mellon në 2000. Website kanë nevojë për CAPTCHA për t'u mbrojtur nga "bots" e spammers.
             
             Me kalimin e kohës, megjithatë, kompjuterët e njerëzve të këqij ose ndryshe "bots" po bëhen më të mençur. CAPTCHA-të duhet të bëhen më të vështira për përdoruesit, sepse ato janë më të lehta për kompjuterët.
             
             Von Ahn tha se tani kishte "ndoshta qindra" të llojeve të ndryshme të CAPTCHA-ve. Ai punoi në një nga madhështitë, reCAPTCHA. Google e bleu atë dhe tani e ofron falas. Përdoruesit duhet të deshifrojnë dy fjalë për reCAPTCHA. Njëri prej tyre, zakonisht ai më i lehtë, hiqet nga një libër i vjetër. Një skaner i kompjuterizuar nuk ka arritur ta lexojë siç duhet dhe përdoruesit e reCAPTCHA-s kanë një shans për të bërë punën si duhet, duke ndihmuar kështu Google të dixhitalizojë librat.
             
              ReCAPTCHA është më e vështirë se sa ishte në 2000, por ka qenë në të njëjtin nivel vështirësie për dy vitet e fundit. Mesatarisht, tha ai, njerëzit kalojnë nëntë sekonda duke zgjidhur një reCAPTCHA dhe 92 përqind e tyre e marrin atë si duhet. Në vitin 2000, niveli i suksesit ishte 97 përqind. Shkronjat do të bëhen më të deformuara kur shumë spammers fillojnë të futen. { this.state.shfaq==="none" && <a onClick={this.more}> <span style={{color:'blue'}}>me shume...</span> </a> }</p> 
             <div  style={{display: this.state.shfaq}} > 
            <p> 
            Por, siç thamë, kjo është Epoka e Internetit. Shumica e programeve dhe sjelljeve në internet që ne i marrim si të mirëqena sot do të zhduken për disa vjet dhe dinastia CAPTCHA nuk është përjashtim. Në vitin 2014, një analizë e Google zbuloi se inteligjenca artificiale mund të godasë edhe imazhet më komplekse CAPTCHA dhe reCAPTCHA me saktësi 99.8 përqind, duke i bërë programet të padobishme si pajisje sigurie. Në vend të tyre, Google zbuloi sistemin e njohur tashmë "No CAPTCHA reCAPTCHA", i cili nuk mbështetet në aftësinë e një përdoruesi për të deshifruar tekstin, por në sjelljen e tyre në internet para pikës së kontrollit të sigurisë. Ndërsa një përdorues është në një faqe, një algoritëm i padukshëm po monitoron se si ata bashkëveprojnë me përmbajtjen për të përcaktuar nëse janë njerëzorë ose robotë. Pastaj, në vetë pikën e kontrollit, përdoruesve u kërkohet të konfirmojnë një deklaratë të vetme: "Unë nuk jam robot". Nëse programi beson se jeni njeri, gjithçka që duhet të bëni është të kontrolloni kutinë dhe të vazhdoni përpara. Nëse dyshoni për tendenca spambot, zgjedhja e kutisë do të hapë një sfidë të re, si identifikimi i të gjithë koteleve në një koleksion fotografish. Gara e armëve midis ekspertëve të sigurisë në internet dhe spambots-eve mund të mos mbarojë kurrë. </p>
    
             </div>
             </div>

        )
    }
}
export default History;