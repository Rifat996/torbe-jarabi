import React from 'react'
import Footer from './Footer'
import Klapa from './images/klapa.jpg';
import { Col, Container, Row } from 'react-bootstrap'

export default function About() {
  return (
    <>
    <Container fluid>
        <Row className="justify-content-center card-cover">
            <Col xs={12} md={9} lg={9} className='bg-light'>
                <div className='m-4'>
                <h2>KO JE TORBEJARABI?</h2>
                <p>Hajde da se upoznamo: mi smo Torbejarabi, krojački obrt iz Zenice koji radi ručno-rađene torbe po mjeri vašeg identiteta! Kada kažemo ručno, mislimo na to - ruke koje kroje, oči koje gledaju i srca koja osjećaju. A da, dečki, ne brinite, s vremena na vrijeme imamo nešto i za vas. Ali uvijek vodimo računa o ženama, one su naš raison d'être i ovu priču posvećujemo njima.</p>
                <p>Torbejarabi je oaza autentičnosti i kreativnosti gdje nastojimo stvarati unikatne komade koji su jedinstveni, pričaju priče i otkrivaju identitete. </p>
                <strong>Uvijek personalne, torbe sa stavom.</strong>
                <p>Naša misija u Torbejarabi je jednostavna: usrećiti žene i obogatiti njihovu svakodnevnicu. Želimo da se osjećate lijepo, posebno i jedinstveno, baš kao i naše torbe.</p>
                <p>Vizija ovog brenda je da zajedno sa vama kreiramo i širimo našu domaću, bosansku modu.</p>
                <h2 className='pb-3'>NAŠE KORMILARICE</h2>
                <div className="image-container2 card-cover">
                  <img src={Klapa} alt='klapa'></img>
                </div>
                <p className='pt-3'>Pozorišna glumica Selma Mehanović i Amela Hasanbegović, dvije Zeničanke s vatrom u srcu i kreativnošću u rukama, okosnice su ove priče. Bile su dobre prijateljice prije, ali sada su i partnerske duše u ovom modnom podvigu. U svoje tkanine nastoje udahnuti osobnost i ispričati priču, a svaka torba otkriva posebne vrijednosti. Pa to onda nisu samo torbe, to su i mini mezimice, zamamne prijateljice koje obožavamo vodati sa sobom.</p>
                <h2>OD IDEJE DO STVARNOSTI </h2>
                <p>Sve je počelo uz potrebu za kreativnim izražavanjem, jedan kurs i jednu šivaću mašinu. Selma je osjetila poziv da ideje koje stanuju u njenoj mašti izrazi kroz šivanje, dok je Amela osjetila istu potrebu da stvori nešto posebno. Selmin muž, Adis, kreativno je spojio riječi i našem brendu dao ime - Torbejarabi, kreativnu I duhovitu igru riječi savršenu za našu kolekciju torbi.</p>
                <p>Prva kreacija nastala u Torbejarabi, bila je moderna tote torba, koja je vremenom evoluirala u jedinstvenu ceker-torbu. Nakon izlaganja prvih komada na bazarima u Zenici, djevojke su poslovno formalizirale priču i registrovale obrtničku radnju u ljeto 2019. godine.</p>
                <h2>NASTAVAK AVANTURE</h2>
                <p>Rad od kuće bio je odličan na početku, ali kako je brend brzo rastao, isto se pokazalo nepraktičnim. Otvorile su radionicu i izložbeni salon, u kojem kupci mogu doći, vidjeti, dodirnuti i birati kreacije. Čak smo oslikali mural šivaće mašine ispred naše radnje - jer zašto ne? </p>
                <p>Torbejarabi su postale instant hit, omiljene od strane onih koje smatramo čestitim građanima I građankama, porodice i prijatelja, kreativaca i umjetnika. Počeli smo kao lokalni brend, ali smo vrlo brzo postali etablirani domaći brend na nacionalnim frenkvencijama, poznat i van granica naše zemlje.</p>
                <p>Mnogo je torbi poslano i u inostranstvo, a na Torbejarabi instagram stranici može se naći naš projekt #TJambasada, koji pokazuje razne svjetske lokacije na koje su dospjele naše rukotvorine.</p>
                <h2>SUŠTINA TORBEJARABI</h2>
                <p>Autentičnost je naše gorivo, naša zvijezda vodilja, naš neotuđivi DNK i osnovna vrijednost ovog brenda. Želimo da svaka žena nosi torbu koja priča njen karakter, koja je taj mali savršeni dodatak njenom osobnom stilu.</p>
                <p>Koristimo najfinije materijale kako bi svaka torba bila komad koji traje, koji će pratiti vaš hod kroz život. Jer, naša filozofija je: posebna žena, posebna priča, posebna torba. I to je priča o vama. To je priča o nama.</p>
                <p>Naše torbe su tu da budu vaše najbolje prijateljice, da nose vaše tajne, vaš smijeh, vaše suze, vaše uspone i padove. Naše torbe su više od modnih dodataka. One su vaša mala mezimica - predivna prijateljica, koja je istovremeno i mnogo jaka, koja će s vama podijeliti teret života.</p>
                <p>Kroz naše torbe i naše vrijednosti, želimo inspirirati žene da budu autentične, da budu svoje, da žive svoje najbolje živote na svoj način. Jer, na kraju, nije li to suština svakog putovanja? Biti svoj, biti sretan, biti autentičan.</p>
                <p>Za sve drugo, tu je naš glavni moto I krilatica, nerijetko oslikana I na samim torbama, a ona glasi: </p>
                <h4 className='pt-5'>WHO BOLAN CARES!</h4>
                <h5>Dobrodošli u svijet Torbejarabi!</h5>
                </div>
            </Col>
        </Row>
    </Container>
    
    <Footer />
    </>
  )
}
