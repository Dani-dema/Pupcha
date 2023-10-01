import React, { Component } from "react";

class AttackComponent extends Component {
  render() {
    return (
      <div>
        <p>
          Sulmet e Inteligjencës Artificiale
          <br />
          Botët janë algoritme të krijuara për të imituar njerëzit për të
          dërguar mesazhe të padëshiruara, për të krijuar llogari të rreme ose
          për të provuar sulme ndaj mohimit të shërbimit (Dos attack). Standardi
          i industrisë në sulmet e automatizuara të programit, sulmet ndaj
          mohimit të shërbimit, Botnets dhe parandalimin e spam botëve ka
          mundësuar përdorimin e teknologjisë CAPTCHA si një shtresë shtesë të
          sigurisë. Problemi është se sa herë që softueri bëhet më i mirë në
          zbulimin e tekstit, teksti duhet të bëhet më i vështirë për tu lexuar.
          Dhe ky problem po i shqeteson mjaft shume perdoruesit e kompjuterave
          sepse do vi nje kohe qe captcha do behen me te veshtira per tu lexuar
          nga kompjuterat, por njekohesisht do jene shume te veshtire dhe per
          njerezit.
        </p>

        <p>
          Sulmet e machine learning kundrejtë Asirra CAPTCHA <br />
          Asirra CAPTCHA u propozua në ACM CCS 2007. U krijua për të zbuluar
          dallimin midis qenve dhe maceve, sic mund ta diferencojnë njerëzit
          shumë lehtë. Siguria Asirra bazohet në vështirësinë e klasifikimit të
          ndryshimit automatikisht. Fatkeqësisht, janë zhvilluar sulme që janë
          82.7% të sakta në dallimin e ndryshimit midis maceve dhe qenve të
          cilët përdoren në Asirra vërhen se ky klasifikimi është një "kombinim
          i klasifikimeve të makinave vektor mbështetës të trajnuar mbi ngjyrat
          dhe strukturën e nxjerrë nga imazhe. Gjithashtu vërhen se
          probabiliteti i suksesit është dukshëm më i lartë se vlerësimi prej
          0.2% në sulmet e shikimit të makinerisë. Prandaj, përdoruesit e Asirra
          duhet të vendosin masa mbrojtëse shtesë.
        </p>

        <p>
          Sulmi kundrejt Yahoo
          <br />
          Skema e bazuar në tekst e përdorur nga Yahoo është thyer. Për të
          prishur skemën e bazuar në tekst në Yahoo, u përdor parimi i
          personazheve lidhës. Gjithashtu, u vu re se skema CAPTCHA e Yahoo ka
          qenë rezistente ndaj segmentimit dhe llojeve të hershme të sulmeve,
          por e kishte njohur tekstin pas segmentimit. Sulmi njohu tekstin pas
          segmentimit duke kombinuar njohjen me segmentimin për të ndarë dhe
          pushtuar CAPTCHA. Ajo që bëri sulmi ishte ndarja e tekstit duke
          nxjerrë personazhet e njohur. Kështu, duke vërtetuar se sulmi i
          nxjerrjes dhe segmentimit ndaj Yahoo arriti një shkallë suksesi prej
          rreth 78%
        </p>
      </div>
    );
  }
}
export default AttackComponent;
