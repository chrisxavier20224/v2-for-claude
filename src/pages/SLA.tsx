import LegalPageLayout, {
  LegalHeading,
  LegalSubheading,
  LegalParagraph,
  LegalList,
  LegalInfoBox,
} from "@/components/layout/LegalPageLayout";
import SEO from "@/components/shared/SEO";

const SLA = () => {
  return (
    <>
      <SEO
        title="Service Level Agreement"
        description="Integra Networks SLA guarantees 99.95% availability, details repair times for critical faults, and covers service credits for outages."
        url="/sla"
      />
      <LegalPageLayout
        title="Service Level Agreement"
        description="Integra Networks Service Level Agreement detailing availability targets, repair times, service credits and fault management process."
        url="/sla"
        lastUpdated="1 January 2026"
      >
      <LegalHeading number={1}>Definitions and Interpretation</LegalHeading>
      <LegalParagraph>
        Capitalised expressions shall have the meanings given in the General Terms and Conditions. The following additional definitions apply:
      </LegalParagraph>
      <LegalList>
        <li><strong>ADSL:</strong> means third party ADSL products.</li>
        <li><strong>EFM:</strong> means Internet Services provided using third party Ethernet First Mile or BT's Etherway Copper product.</li>
        <li><strong>Fault:</strong> means an error or fault in the Equipment and/or Network, or other incident, which affects the Customer's ability to use the Services.</li>
        <li><strong>Internet Services:</strong> means the connectivity services provided by the Company as part of the Services including services using 4G SIM cards.</li>
        <li><strong>Planned Works:</strong> means any scheduled construction or maintenance activities affecting the Network and/or Services previously identified by the Company to the Customer.</li>
        <li><strong>Third Party Services:</strong> means Internet Services provided using BT, Virgin, or other third party fibre-, copper-, or satellite-based circuits.</li>
      </LegalList>

      <LegalHeading number={2}>Service Levels</LegalHeading>
      <LegalSubheading>Availability</LegalSubheading>
      <LegalParagraph>
        The Internet Services shall be available for 99.95% of the time measured during each Year during the Term, excluding any unavailability or outage resulting from:
      </LegalParagraph>
      <LegalList>
        <li>(a) Planned Works;</li>
        <li>(b) Minor Faults (as defined in paragraph 3 below);</li>
        <li>(c) disruptions to the power supply of the Customer;</li>
        <li>(d) an event of Force Majeure;</li>
        <li>(e) disruptions caused by the Customer's own software, hardware, services and/or systems; and/or</li>
        <li>(f) failure of the Customer to provide access in accordance with clause 5.1(c) of the General Terms and Conditions.</li>
      </LegalList>

      <LegalHeading number={3}>Repair Times</LegalHeading>
      <LegalParagraph>
        All Faults notified by the Customer in accordance with the Fault Management Process shall be categorised by the Company as follows:
      </LegalParagraph>
      <LegalList>
        <li><strong>Critical Fault:</strong> A fault which results in a substantial failure in the Customer's ability to use and receive the Services.</li>
        <li><strong>Minor Fault:</strong> A fault which is not a critical fault.</li>
      </LegalList>
      <LegalParagraph>
        The target mean time to repair (Target MTTR) for Critical Faults is eight (8) Business Hours from the time of notification from the Customer to the Network Operating Centre.
      </LegalParagraph>
      <LegalParagraph>
        The Company will respond within four (4) Business Hours from the time of notification and will make reasonable endeavours to rectify the fault.
      </LegalParagraph>
      <LegalParagraph>
        Where a repair requires access using a ladder or roof during darkness or severe inclement weather, the Company may suspend the Target MTTR if a potential health and safety hazard exists. Where a permanent solution is not possible within the Target MTTR, the Company may provide a temporary solution.
      </LegalParagraph>

      <LegalHeading number={4}>Service Credits</LegalHeading>
      <LegalParagraph>
        Where the Company has failed to repair a Critical Fault within the Target MTTR, the Company will credit the Customer by reducing the Charges payable for the affected Internet Services for the following month (Service Credit), calculated by reference to the number of hours by which the Company has failed to meet the Target MTTR.
      </LegalParagraph>

      <LegalHeading number={5}>Customer Claims Procedure</LegalHeading>
      <LegalParagraph>
        All claims for Service Credits must be submitted by the Customer within thirty (30) days from the date on which the Customer notified the Company of the Fault to which such Service Credit relates in accordance with the Fault Management Process.
      </LegalParagraph>
      <LegalParagraph>
        Any Service Credit to be applied will be confirmed by credit note issued by the Company to the Customer.
      </LegalParagraph>

      <LegalHeading number={6}>Fault Management Process</LegalHeading>
      <LegalParagraph>
        The Customer will be responsible for monitoring the Services. If the Customer detects a Fault, it shall report the Fault to the Company as soon as practicable via the Network Operations Centre. When reporting a Fault, the Customer must provide the following information:
      </LegalParagraph>
      <LegalList>
        <li>(a) the Site at which the Fault has occurred;</li>
        <li>(b) details of the Fault and any supporting information;</li>
        <li>(c) confirmation and details of testing of the Customer's systems;</li>
        <li>(d) test results undertaken by the Customer;</li>
        <li>(e) any access requirements for the Site;</li>
        <li>(f) the availability of the Customer's personnel to assist with the repair;</li>
        <li>(g) Customer contact details.</li>
      </LegalList>
      <LegalParagraph>
        Should the Customer fail to provide any of the above information, the Target MTTR shall not commence until such information is provided.
      </LegalParagraph>

      <LegalHeading number={7}>Support Ticket Closure</LegalHeading>
      <LegalParagraph>
        The Company shall notify the Customer once the Fault has been cleared. The Customer shall notify the Company within thirty (30) minutes if they dispute that the Fault has been cleared. If no notification is received within that period, the Support Ticket will be deemed closed.
      </LegalParagraph>
      <LegalParagraph>
        If a Fault has been cleared using a temporary solution, the Support Ticket shall be marked accordingly and the permanent solution shall be provided on a date to be agreed by the parties.
      </LegalParagraph>

      <LegalHeading number={8}>Network Operations Centre</LegalHeading>
      <LegalParagraph>
        The Company shall at all times operate a Network Operations Centre to coordinate the Company's response to and the repair of a Fault.
      </LegalParagraph>
      <LegalInfoBox>
        <p className="text-sm">
          <strong>Telephone:</strong> 0203 388 7111<br />
          <strong>Email:</strong>{" "}
          <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">
            connect@integra-networks.co.uk
          </a>
        </p>
      </LegalInfoBox>

      <LegalHeading number={9}>Fault Escalation</LegalHeading>
      <LegalParagraph>
        Escalation of a Fault can be requested by the Customer at any time if a Critical Fault is not repaired within the Target MTTR, or if a Fault is particularly sensitive given the nature of the Customer's business. The Company will respond to escalation requests within twenty (20) minutes of receipt.
      </LegalParagraph>

      <LegalHeading number={10}>Maintenance and Planned Works</LegalHeading>
      <LegalParagraph>
        The Company shall be responsible for maintaining the Network up to the Points of Connection. The Company shall use reasonable endeavours to ensure that maintenance and upgrade work is planned in advance and shall provide at least 24 hours' notice prior to the commencement of any Planned Works that will affect the availability of the Services.
      </LegalParagraph>
    </LegalPageLayout>
    </>
  );
};

export default SLA;
