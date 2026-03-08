import LegalPageLayout, {
  LegalHeading,
  LegalParagraph,
  LegalList,
  LegalInfoBox,
} from "@/components/layout/LegalPageLayout";

const PrivacyAndCookies = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Integra Networks Privacy Policy — how we collect, hold and process your personal information under GDPR."
      url="/privacy-cookies"
      lastUpdated="1 January 2026"
    >
      <LegalHeading number={1}>Introduction</LegalHeading>
      <LegalParagraph>
        At Integra Networks Limited we take your privacy very seriously and this policy outlines how we will hold and process your personal information under the Data Protection Act 1998, the UK Data Protection Bill and the General Data Protection Regulation (GDPR) effective from the 25th May 2018. This policy contains important information about what to expect when we collect personal information via all platforms, including when you visit our website, or when you subscribe to our marketing communications.
      </LegalParagraph>
      <LegalParagraph>
        This policy applies to information we collect in regard to:
      </LegalParagraph>
      <LegalList>
        <li>Visitors to our website</li>
        <li>Persons that subscribe to our communications, i.e. Marketing Emails</li>
      </LegalList>
      <LegalParagraph>
        The data controller is Integra Networks Limited who in relation to any personal data that is held will observe all obligations under the Data Protection legislation and the Data Protection Principles. These obligations will be continuously reviewed in line with the ongoing development of these areas of regulation to ensure compliance.
      </LegalParagraph>

      <LegalHeading number={2}>The Information We Collect About You</LegalHeading>
      <LegalParagraph>
        When you subscribe to our newsletter, we may collect the following personal information from you:
      </LegalParagraph>
      <LegalList>
        <li>Name and job title</li>
        <li>Email address and telephone number</li>
        <li>Company Name where applicable</li>
      </LegalList>
      <LegalParagraph>
        If you wish to notify us that any of the information which we hold about you is incorrect or misleading, we will have the information corrected or amended in a timely manner. You may do this by sending an e-mail to{" "}
        <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">connect@integra-networks.co.uk</a>.
      </LegalParagraph>

      <LegalHeading number={3}>How We Will Use the Information Collected About You</LegalHeading>
      <LegalParagraph>
        When using our website or subscribing to our marketing, you will be given the opportunity to provide your consent to Integra Networks Limited holding your personal information by opting in. By providing your consent you agree to Integra Networks Limited sending you communications. The relevant information is then used by us to communicate with you on any matters relating to the service to which the consent relates.
      </LegalParagraph>
      <LegalParagraph>
        We will not share your personal information with any third parties unless consent is given to do so. We take your privacy extremely seriously and will never sell your information to any third party.
      </LegalParagraph>
      <LegalParagraph>
        You can change your communication preferences at any time by contacting us at{" "}
        <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">connect@integra-networks.co.uk</a>.
      </LegalParagraph>

      <LegalHeading number={4}>Protecting Your Information</LegalHeading>
      <LegalParagraph>
        Your information will be stored on a secure server. We may also hold your data on secure customer relationship management (CRM) systems. Although we will do our best to ensure we protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use procedures and security features to restrict any unauthorised access.
      </LegalParagraph>

      <LegalHeading number={5}>Accessing, Updating and Correcting Your Information</LegalHeading>
      <LegalParagraph>
        You have the right to request a copy of the information that we hold about you. If you would like a copy of some or all of your personal information, please send an email to{" "}
        <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">connect@integra-networks.co.uk</a>. Your right of access can be exercised in accordance with the Data Protection legislation.
      </LegalParagraph>
      <LegalParagraph>
        We want to ensure that your personal information is accurate and up to date. If any of the information that you have provided to us changes, please let us know the correct details by sending an email and we will ensure it is updated.
      </LegalParagraph>
      <LegalParagraph>
        If you want to exercise your right to erasure under Article 17 of the General Data Protection Regulation, please send an email to{" "}
        <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">connect@integra-networks.co.uk</a>. We reserve the right to refuse erasure if Integra Networks Limited is required to retain your data for any of the following reasons:
      </LegalParagraph>
      <LegalList>
        <li>For the exercise of the right of freedom of expression and information</li>
        <li>For compliance with a legal obligation</li>
        <li>For performance of a public interest task or exercise of official authority</li>
        <li>For public health reasons</li>
        <li>For archival, research or statistical purposes</li>
        <li>If required for the establishment, exercise or defence of legal claims</li>
      </LegalList>

      <LegalHeading number={6}>Changes to Privacy Policy</LegalHeading>
      <LegalParagraph>
        We reserve the right to alter this privacy policy without notifying users of the changes made. Any updates to the Privacy Policy will be posted on our website and will be in effect immediately after posting. The most recent version is reflected by the version date at the top of this page.
      </LegalParagraph>

      <LegalHeading number={7}>Links to Other Websites</LegalHeading>
      <LegalParagraph>
        Our website may contain links to other websites. This Privacy policy applies only to Integra Networks Limited website so when you access links to other websites you should also read their own privacy policies.
      </LegalParagraph>

      <LegalHeading>Contact Us</LegalHeading>
      <LegalParagraph>
        If you have any questions, comments or concerns about our privacy policy, or if you simply want to update, delete, or change any Personal Information that we hold about you:
      </LegalParagraph>
      <LegalInfoBox>
        <p className="font-medium text-foreground mb-2">Integra Networks Limited</p>
        <p className="text-sm">
          86–90 Paul Street, London, EC2A 4NE<br />
          <strong>Email:</strong>{" "}
          <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">
            connect@integra-networks.co.uk
          </a><br />
          <strong>Phone:</strong> 0203 388 7111
        </p>
      </LegalInfoBox>
    </LegalPageLayout>
  );
};

export default PrivacyAndCookies;
