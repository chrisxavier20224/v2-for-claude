import LegalPageLayout, {
  LegalHeading,
  LegalSubheading,
  LegalParagraph,
  LegalList,
  LegalInfoBox,
} from "@/components/layout/LegalPageLayout";
import SEO from "@/components/shared/SEO";

const TermsOfService = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Integra Networks Terms of Service covering service delivery, payment terms, warranties, liability, and termination conditions."
        url="/terms"
      />
      <LegalPageLayout
        title="Terms & Conditions"
        description="Integra Networks General Terms and Conditions applicable to all Order Forms and service agreements."
        url="/terms"
        lastUpdated="1 January 2026"
      >
      <LegalParagraph>
        These General Terms and Conditions are applicable to Order Forms agreed and executed by the Company and the Customer. Each Order Form, when agreed and executed by the Company, shall incorporate and shall be subject to these General Terms and Conditions.
      </LegalParagraph>

      <LegalHeading number={1}>Definitions and Interpretation</LegalHeading>
      <LegalParagraph>
        In the Agreement the following expressions shall unless the context otherwise requires have the following meanings:
      </LegalParagraph>
      <LegalList>
        <li><strong>Acceptable Use Policy:</strong> means the Company's acceptable use policy, as appended to these General Terms and Conditions in Schedule 1.</li>
        <li><strong>Agreement:</strong> means these General Terms and Conditions, the Order Form and the applicable Service Level Agreements.</li>
        <li><strong>Business Day:</strong> means a day (other than a Saturday or Sunday) on which the banks are ordinarily open for business in the City of London.</li>
        <li><strong>Business Hours:</strong> means the hours of 9am to 5pm UK time during a Business Day.</li>
        <li><strong>Charges:</strong> means the charges payable by the Customer under the Agreement as set out in the Order Form, and all other fees, charges and expenses due from the Customer to the Company from time to time pursuant to the Agreement (together with any applicable VAT or other taxes or duties thereon).</li>
        <li><strong>Company:</strong> means Integra Networks Limited.</li>
        <li><strong>Confidential Information:</strong> means all information designated as confidential by either party, together with all such other information which relates to the business affairs, finance, products or services, customers or suppliers of that party.</li>
        <li><strong>Consultancy Services:</strong> means the advisory and consultancy services to be provided by the Company to the Customer under the Agreement, as described in more detail in the Order Form.</li>
        <li><strong>Customer:</strong> means the person, firm or company named on the Order Form.</li>
        <li><strong>Customer Data:</strong> means the data processed by the Customer using the Services.</li>
        <li><strong>Data Protection Legislation:</strong> means the DPA 1998, the Privacy and Electronic Communications (EC Directive) Regulations 2003, all other applicable data protection laws, and all statutory instruments enacted or issued pursuant to such legislation.</li>
        <li><strong>Equipment:</strong> means the equipment and hardware provided by the Company to the Customer at the Site to enable the Customer to receive the Services (which remains the property of the Company).</li>
        <li><strong>Force Majeure:</strong> means any event outside the reasonable control of either party affecting its ability to perform any of its obligations under the Agreement.</li>
        <li><strong>Initial Contract Term:</strong> 12 months unless otherwise specified in the Order Form.</li>
        <li><strong>Network:</strong> means the network and communications systems and infrastructure to which the Equipment connects.</li>
        <li><strong>Order Form:</strong> means an Order Form in the Company's standard form.</li>
        <li><strong>Provisioning Date:</strong> means the date upon which the Equipment is confirmed by the Company as being ready for use.</li>
        <li><strong>Services:</strong> means such of the services as are provided by the Company from time to time, as specified in the Order Form.</li>
        <li><strong>Site:</strong> means the site or sites at which the Customer is to receive the Services.</li>
        <li><strong>Software:</strong> means the third party software applications comprised in the Equipment.</li>
      </LegalList>

      <LegalParagraph>
        1.1 The headings to clauses are inserted for convenience only and shall not affect the interpretation or construction of the Agreement. Words imparting the singular shall include the plural and vice versa.
      </LegalParagraph>
      <LegalParagraph>
        1.2 All sums payable hereunder are exclusive of VAT or any other applicable tax or duty payable upon such sums which shall be added if appropriate at the rate prevailing at the relevant tax point.
      </LegalParagraph>

      <LegalHeading number={2}>Scope of Agreement</LegalHeading>
      <LegalParagraph>
        2.1 Each Order Form agreed and executed by the parties shall constitute an individual contract for the supply of the Services specified in that Order Form and shall be subject to these General Terms and Conditions and the applicable Service Level Agreements.
      </LegalParagraph>
      <LegalParagraph>
        2.2 Unless stated to the contrary in any Order Form, in the event and to the extent only of any conflict or inconsistency between:
      </LegalParagraph>
      <LegalList>
        <li>(a) any provision in the General Terms and Conditions and any provision in the Service Level Agreements, the provision in the General Terms and Conditions shall prevail;</li>
        <li>(b) any provision in an Order Form and any provision in the General Terms and Conditions and/or the Service Level Agreements, the provision in the Order Form shall prevail.</li>
      </LegalList>

      <LegalHeading number={3}>Provision of Services</LegalHeading>
      <LegalParagraph>
        3.1 In consideration of the payment of the Charges by the Customer and the Customer's compliance with its obligations under the Agreement, the Customer engages the Company, and the Company agrees, to provide the Services to the Customer during the Term in accordance with the Agreement.
      </LegalParagraph>
      <LegalParagraph>
        3.2 The Company shall provide the Services with all reasonable skill and care and in a good workmanlike manner to good industry practice.
      </LegalParagraph>
      <LegalParagraph>
        3.3 The Company shall use reasonable endeavours to observe all health and safety rules and regulations and any other reasonable security requirements that apply at the Site.
      </LegalParagraph>
      <LegalParagraph>
        3.4 The Company reserves the right from time to time to make operational changes to the Services, including to comply with any changes in applicable law, provided that such changes do not materially affect the scope of the Services.
      </LegalParagraph>
      <LegalParagraph>
        3.5 Where the Services include a Managed Security Firewall, the rule sets shall be configured in accordance with the Customer's instructions. The Customer acknowledges that the Company does not provide an advisory service as to how the Managed Security Firewall should be configured and that the configuration is entirely within the Customer's discretion and at the Customer's own risk.
      </LegalParagraph>
      <LegalParagraph>
        3.6 In performing the Services, the Company shall operate as an independent contractor.
      </LegalParagraph>
      <LegalParagraph>
        3.7 The Company shall be entitled to sub-contract the whole or any part of the performance of the Services provided that the Company remains responsible for the performance of the Services.
      </LegalParagraph>

      <LegalHeading number={4}>Installation and Equipment</LegalHeading>
      <LegalParagraph>
        4.1 The Company shall install the Equipment at the Site on the Installation Dates.
      </LegalParagraph>
      <LegalParagraph>
        4.2 Once Installation is complete, the Company shall carry out provisioning and testing to satisfy itself that the Equipment is able to connect to the Network and the Customer is able to receive the Services.
      </LegalParagraph>
      <LegalParagraph>
        4.3 Upon the Company confirming to the Customer that provisioning has been completed to satisfaction, Installation shall be complete (the Provisioning Date).
      </LegalParagraph>

      <LegalHeading number={5}>The Customer's Obligations</LegalHeading>
      <LegalParagraph>
        5.1 The Customer agrees to provide:
      </LegalParagraph>
      <LegalList>
        <li>(a) such co-operation and assistance as is reasonably required by the Company;</li>
        <li>(b) such information as is required by the Company to provide the Services; and</li>
        <li>(c) access during Business Hours to premises, facilities, systems and personnel as the Company may reasonably require.</li>
      </LegalList>
      <LegalParagraph>
        5.2 The Customer shall use the Services in accordance with all applicable laws, obtain all necessary authorisations and consents, comply with the Acceptable Use Policy, and maintain the Equipment in good condition.
      </LegalParagraph>

      <LegalHeading number={6}>Proprietary Rights</LegalHeading>
      <LegalParagraph>
        6.1 The Equipment and all Intellectual Property rights therein shall remain the property of the Company or its licensors. The Company grants the Customer a right to use the Equipment for the Term solely for receiving the Services.
      </LegalParagraph>
      <LegalParagraph>
        6.2 The Customer shall not copy, modify, reverse engineer, or commercially exploit the Equipment, Software, or Services without prior written consent.
      </LegalParagraph>

      <LegalHeading number={7}>Charges and Payment</LegalHeading>
      <LegalParagraph>
        7.1 The Customer will pay the Charges as agreed in writing from time to time.
      </LegalParagraph>
      <LegalParagraph>
        7.2 Charges are payable monthly in advance from the Provisioning Date.
      </LegalParagraph>
      <LegalParagraph>
        7.3 Unless otherwise agreed, all Charges shall be paid within 30 days of date of invoice. Time for payment is of the essence.
      </LegalParagraph>
      <LegalParagraph>
        7.4 All Charges are exclusive of VAT which shall be added at the appropriate rate.
      </LegalParagraph>
      <LegalParagraph>
        7.5 The Customer shall be responsible for any additional costs imposed by the landlord or management company for the Site.
      </LegalParagraph>
      <LegalParagraph>
        7.6 The Company shall be entitled to increase Charges once per annum at the rate of increase of RPI during the previous 12 month period.
      </LegalParagraph>
      <LegalParagraph>
        7.7 If the Customer fails to make any payment on the due date, the Company may charge interest at 4% per annum above the base rate and/or suspend supply of Services until payment is received in full.
      </LegalParagraph>

      <LegalHeading number={8}>Warranties</LegalHeading>
      <LegalParagraph>
        8.1 Each party warrants that it has full power and authority to enter into and perform the Agreement.
      </LegalParagraph>
      <LegalParagraph>
        8.4 The Company shall have no liability for defects caused by the Customer's acts or omissions, unauthorised maintenance, incompatible software/hardware, or unauthorised modifications.
      </LegalParagraph>
      <LegalSubheading>Integra SD-WAN Product Guarantee</LegalSubheading>
      <LegalParagraph>
        If the Customer is dissatisfied with the speeds provided by the SD-WAN service, the Company offers a full money-back guarantee within 14 days of service activation. The Company reserves the right to extend this period on a case-by-case basis.
      </LegalParagraph>

      <LegalHeading number={9}>Limitation of Liability</LegalHeading>
      <LegalParagraph>
        9.4 Nothing in the Agreement shall exclude or restrict either party's liability for death or personal injury resulting from negligence, or for fraud.
      </LegalParagraph>
      <LegalParagraph>
        9.5 The Company shall not be liable for loss of profits, revenue, economic loss, loss of business or contracts, loss of anticipated savings, losses arising from loss of data, consequential, special or indirect losses.
      </LegalParagraph>
      <LegalParagraph>
        9.9 The Company's entire liability arising out of or in connection with the Agreement shall be limited in each Year to 100% of the Charges payable by the Customer in respect of that Year.
      </LegalParagraph>

      <LegalHeading number={10}>Confidentiality and Publicity</LegalHeading>
      <LegalParagraph>
        Each party shall keep secret and confidential all Confidential Information belonging to the other party and shall not use nor disclose the same save for the purposes of the proper performance of the Agreement. The obligations of confidentiality shall survive termination.
      </LegalParagraph>

      <LegalHeading number={11}>Customer Data</LegalHeading>
      <LegalParagraph>
        11.1 The Customer shall own all rights in the Customer Data and shall have sole responsibility for ensuring its security, legality, reliability, integrity, accuracy and quality.
      </LegalParagraph>
      <LegalParagraph>
        11.2 Unless otherwise agreed, the Company shall not be responsible for back-up of Customer Data.
      </LegalParagraph>

      <LegalHeading number={12}>Change Control</LegalHeading>
      <LegalParagraph>
        Each party will appoint an Authorised Representative. If either party wishes to request a change to the Services, the receiving party will respond within 14 days and, where applicable, issue a new Order Form.
      </LegalParagraph>

      <LegalHeading number={13}>Indemnity</LegalHeading>
      <LegalParagraph>
        The Customer shall defend, indemnify and hold harmless the Company against claims arising from: use of the Services by the Customer or End Users; content transmitted using the Services; failure to obtain necessary authorisations; and any breach of the Agreement.
      </LegalParagraph>

      <LegalHeading number={14}>Term and Termination</LegalHeading>
      <LegalParagraph>
        14.1 The Services shall commence on the Provisioning Date and continue for the Initial Contract Term, thereafter automatically renewing for successive periods of 30 days unless either party gives at least 30 days written notice.
      </LegalParagraph>
      <LegalParagraph>
        14.1.2 If the customer is unhappy with the speeds presented after installation, they have the right to cancel the install and for the hardware to be removed from site, with the installation fee refunded.
      </LegalParagraph>
      <LegalSubheading>Integra fibre</LegalSubheading>
      <LegalParagraph>
        Integra fibre contracts are based on a minimum term of 12 months. Should a tenant wish to cancel, a 30-day notice period is required.
      </LegalParagraph>
      <LegalParagraph>
        14.3 Either party may immediately terminate the Agreement if the other party commits an irremediable material breach, fails to remedy a breach within 30 days, fails to pay within 28 days, or becomes insolvent.
      </LegalParagraph>

      <LegalHeading number={15}>Consequences of Termination</LegalHeading>
      <LegalParagraph>
        On termination, the Customer shall immediately cease use of the Equipment and Services, surrender the Equipment in good condition, and make payment of all sums due.
      </LegalParagraph>

      <LegalHeading number={16}>Force Majeure</LegalHeading>
      <LegalParagraph>
        Neither party shall be liable for any breach resulting from Force Majeure events. If a Force Majeure event continues for 30 days or more, either party may terminate.
      </LegalParagraph>

      <LegalHeading number={17}>Assignment</LegalHeading>
      <LegalParagraph>
        The Customer shall not assign or transfer rights under the Agreement without prior written consent. The Company may assign at its sole discretion.
      </LegalParagraph>

      <LegalHeading number={18}>Entire Agreement</LegalHeading>
      <LegalParagraph>
        The Agreement and any documents referred to in it constitute the whole agreement between the parties and supersede any previous arrangement.
      </LegalParagraph>

      <LegalHeading number={19}>General</LegalHeading>
      <LegalParagraph>
        Nothing in the Agreement creates a partnership. The Agreement does not confer third party rights. No failure to exercise any right constitutes a waiver. If any provision is found invalid, the other provisions remain in force.
      </LegalParagraph>

      <LegalHeading number={20}>Notices</LegalHeading>
      <LegalInfoBox>
        <p className="font-medium text-foreground mb-2">To the Company:</p>
        <p className="text-sm">
          86–90 Paul Street, London, EC2A 4NE<br />
          <strong>Tel:</strong> 0203 388 7111<br />
          <strong>Email:</strong>{" "}
          <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">
            connect@integra-networks.co.uk
          </a>
        </p>
      </LegalInfoBox>

      <LegalHeading number={21}>Governing Law and Jurisdiction</LegalHeading>
      <LegalParagraph>
        The Agreement is governed by and construed in accordance with the laws of England. The parties agree that the courts of England have exclusive jurisdiction.
      </LegalParagraph>

      <LegalHeading>Schedule 1 — Acceptable Use Policy</LegalHeading>
      <LegalParagraph>
        This Acceptable Use Policy sets out usage guidelines to ensure all Integra Networks users have access to a fast and reliable service. You must only use the service for private, personal and legitimate business purposes. Our reasonable expectation is that any subscriber to our standard package will not normally exceed 1200GB and any subscriber to our advanced package will not normally exceed 2000GB of data transfer within a calendar month.
      </LegalParagraph>
      <LegalParagraph>
        The Customer shall not use the Services or Network to store, distribute or transmit any viruses, or any material that is unlawful, harmful, threatening, defamatory, obscene, or infringing. The Customer shall not transmit spam, intercept data, or attempt unauthorised access to systems.
      </LegalParagraph>
    </LegalPageLayout>
    </>
  );
};

export default TermsOfService;
