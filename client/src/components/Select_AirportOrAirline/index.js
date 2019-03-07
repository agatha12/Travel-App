import React from "react";
import { Row, Input } from "react-materialize";

export function SelectAirlines(props) {
    return (
      <Row>
        <Input s={12} type='select' icon='local_airport' label="Airline"  defaultValue="" {...props}>
          <option value="" disabled >Choose an Airline</option>
          <option value='AA'>(AA) American Airlines</option>
          <option value='NQ'>(NQ) Air Japan</option>
          <option value='NZ'>(NZ) Air New Zealand</option>
          <option value='AC'>(AC) Air Canada</option>
          <option value='AI'>(AI) Air India</option>
          <option value='AS'>(AS) Alaska Airlines</option>
          <option value='G4'>(G4) Allegiant Air</option>
          <option value='AM'>(AM) Aeromexico</option>
          <option value='BA'>(BA) British Airways</option>
          <option value='CX'>(CX) Cathay Pacific</option>
          <option value='DL'>(DL) Delta Air Lines</option>
          <option value='EY'>(EY) Etihad Airways</option>
          <option value='F9'>(F9) Frontier Airlines</option>
          <option value='HA'>(HA) Hawaiian Airlines</option>
          <option value='FI'>(FI) Icelandair</option>
          <option value='B6'>(B6) JetBlue Airways</option>
          <option value='KE'>(KE) Korean Air</option>
          <option value='LA'>(LA) LATAM Airlines</option>
          <option value='QF'>(QF) Qantas</option>
          <option value='SQ'>(SQ) Singapore Airlines</option>
          <option value='NK'>(NK) Spirit Airlines</option>
          <option value='WN'>(WN) Southwest Airlines</option>
          <option value='UA'>(UA) United Airlines</option>
          <option value='VS'>(VS) Virgin Atlantic</option>
          <option value='Y4'>(Y4) Volaris</option>
          <option value='WS'>(WS) WestJet</option>
          {/* <option value='3'>Option 3</option>
          <option value='3'>Option 3</option> */}
        </Input>
      </Row>
    )
  }
  
  export function SelectAirports(props) {
    return (
      <Row>
        <Input s={12} type='select' icon='work' label="Departing Airport" defaultValue="" {...props}>
          <option value="" disabled defaultValue>Choose an Airport</option>
          <option value='JFK'>John F Kennedy Airport (JFK)</option>
          <option value='EWR'>Newark Liberty International Airport (EWR)</option>
          <option value='MIA'>Miami International Airport (MIA)</option>
          <option value='ATL'>Hartsfield-Jackson Atlanta International Airport (ATL)</option>
          <option value='FLL'>Fort Lauderdale-Hollywood International Airport (FLL)</option>
          <option value='DFW'>Dallas/Fort Worth International Airport (DFW)</option>
          <option value='LAX'>Los Angeles International Airport (LAX)</option>
          <option value='LGA'>LaGuardia Airport (LGA)</option>
          <option value='LHR'>Heathrow Airport (LHR)</option>
          <option value='SFO'>San Francisco International Airport (SFO)</option>
          <option value='LIM'>Jorge Chavez International Airport (LIM)</option>
          <option value='HKG'>Hong Kong International Airport (HKG)</option>
          <option value='MNL'>Ninoy Aquino International Airport (MNL)</option>
          <option value='VCE'>Venice Marco Polo Airport (VCE)</option>
          <option value='AMS'>Amsterdam Airport Schiphol (AMS)</option>
          <option value='PEK'>Beijing Capital International Airport (PEK)</option>
          <option value='HND'>Tokyo Haneda Airport (HND)</option>
          <option value='DXB'>Dubai International Airport (DXBd)</option>
          <option value='ICN'>Seoul Incheon International Airport (ICN)</option>
          <option value='ORD'>O'Hare International Airport (ORD)</option>
          <option value='SIN'>Changi Airport Singapore (SIN)</option>
        </Input>
      </Row>
    )
  }