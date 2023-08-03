import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './Footer'

export default function Faq() {
  return (
    <>
    <Container fluid>
        <Row className="justify-content-center card-cover">
            <Col xs={12} md={9} lg={9} className='bg-light'>
                <div className='m-4'>
                <h2 className='pt-3'>KAKO NARUČITI TORBEJARABI?</h2>
                <p>Možete naručiti putem ovog <strong>web shopa ili direktno putem poruka na društveniim mrežama Facebook i Instagram.</strong> Možete nas kontaktirati i putem mreže Whats Up. Sve dostupne torbe možete pregledati na našem web shopu klikom na sekciju PROIZVODI.</p>
                <p>Dodajte željene proizvode u košaricu i ukoliko ste sigurni u narudžbu kliknite nastavi prema narudžbi, nakon čega unesete svoje podatke i finalizirate narudžbu klikom na dugme NARUČI ili NARUČI PREKO WHATS UP. Druga opcija je predviđena ukoliko želite dodatnu komunikaciju i potvrdu od strane osoblja.</p>
                <p>Zatim vaše narudžbe šaljemo brzom poštom, brzo i ekspresno unutar Bosne i Hercegovine, a nešto duže i skuplje u inostranstvo.</p>
                <p>Vizija ovog brenda je da zajedno sa vama kreiramo i širimo našu domaću, bosansku modu.</p>
                <h2 className='pt-3'>KAKO SE PLAĆA</h2>
                <p>Sve narudžbe plaćaju se <strong>direktno kešom prilikom pouzeća.</strong> Trenutačno nismo u mogućnosti prihvatiti karitčno ili PayPal plaćanje jer smo registrovani kao obrt i nismo u sistemu PDV-a.</p>
                <p>Dostavljamo u roku par radnih dana na svim lokacijama unutar Bosne i Hercegovine, a cijena <strong>poštarine/dostave je 7KM.</strong> </p>
                <p>Narudžbe za inostranstvo traju duže i koštaju više u zavisnosti od zemlje o kojoj se radi. Rok prijema je između 7 i 14 dana, a poštarina varira od 15 do 30€. Za ovu vrstu narudžbe se javite direktno putem poruka.</p>
                <p>Za sve narudžbe <strong>preko 100KM</strong> unutar BiH, dostava je <strong>besplatna.</strong></p>
                <p>Za sve narudžbe <strong>preko 180€ za inostranstvo,</strong>  mi snosimo troškove dostave.</p>
                <h2 className='pt-3'>KOLIKO ĆE VREMENA TREBATI DA PRIMIM SVOJU NARUDŽBU? </h2>
                <p>Vaše narudžbe šaljemo brzom poštom i obično je potrebno <strong>2-4 radna dana.</strong> U slučaju da imate specijalne zahtjeve, ili želite torbu koja je inicijalno rasprodana (vidi sljedeća 2 pitanja), moguće da ćete čekati dodatno od momenta naručivanja, otprilike 7 do 10 dana.</p>
                <h2 className='pt-3'>KAKO NARUČITI TORBU ZA KOJU  PIŠE DA JE PRODANA/SOLD?</h2>
                <p>Ukoliko na samom modelu ne stoji informacija o dostupnosti, <strong>svakako možete provjeriti s nama direktno putem poruka</strong>, a mi ćemo vam dati informaciju o dostupnosti najbrže moguće.</p>
                <h2 className='pt-3'>MOGU LI PREDLAGATI SVOJE SUGESTIJE NA POSTOJEĆI PROIZVOD?</h2>
                <p>Postoji opcija modifikacije postojećih modela torbi ili nekih drugih posebnih želja, a koje ćemo vam rado ispuniti ukoliko smo u mogućnosti, a to se odnosi na dostupnost materijala i tehničke mogućnosti. </p>
                <p>Moguće je recimo predložiti drugu boju ručkica, drugu boju roll-on dijela kod ruksaka, moguće je predložiti vlastiti dizajn/print na određene dezene koji vam se sviđaju itd. Sa takvim zahtjevima, svakako se javite direktno putem društvenih mreža ili WHATS Up platforme kako bi provjerili mogućnosti i dostupnost materijala. </p>
                <h2 className='pt-3'>KOJE SU GARANCIJE NA KVALITET I MOGUĆNOST POVRATA?</h2>
                <p>Torbejarabi je korporativno i društveno odgovorno preduzeće, a definitivno stojimo iza naših riječa i garancije kvaliteta. Ukoliko iz <strong>bilo kojeg razloga niste zadovoljni</strong> dobivenim proizvodom, <strong>vraćamo vam novac</strong> bez ikakvih posebnih procedura ili obrazloženja.</p>
                <p>Ne dešava se skoro nikad, ali ko radi taj i griješi. Ukoliko ste dobili oštećenu torbu ili ukoliko dođe do oštećenja u roku od 6 mjeseci korištenja, <strong>možete nam poslati torbu na reparaciju</strong>, a mi ćemo snositi troškove dostave u oba smjera.</p>
                <h2 className='pt-3'>GDJE MOGU NAĆI TORBEJARABI?</h2>
                <p>Naša krojačka radnja i salon nalazi se u <strong>Zenici</strong>, na adresi <strong>Armije BiH 26</strong> (naselje Mokušnice).</p>
                <p>Naše torbe moguće je naći i u Claire Noele studiu u Mostaru na adresi Kralja Tomislava 49.</p>
                </div>
            </Col>
        </Row>
    </Container>
    
    <Footer />
    </>
  )
}
