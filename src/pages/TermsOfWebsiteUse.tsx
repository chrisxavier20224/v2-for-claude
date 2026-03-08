import LegalPageLayout, {
  LegalHeading,
  LegalParagraph,
  LegalList,
  LegalInfoBox,
} from "@/components/layout/LegalPageLayout";
import SEO from "@/components/shared/SEO";

const TermsOfWebsiteUse = () => {
  return (
    <>
      <SEO
        title="Terms of Website Use"
        description="Terms of use for the Integra Networks website. Covers website access, content, intellectual property, and liability limitations."
        url="/terms-of-use"
      />
      <LegalPageLayout
        title="Terms of Website Use"
        description="Terms governing your use of the Integra Networks website. These terms apply to the website only, not the Integra Networks platform or software."
        url="/terms-of-use"
        lastUpdated="January 2026"
      >
      {/* Introduction */}
      <LegalParagraph>
        These Terms of Website Use govern your use of the Integra Networks website.
      </LegalParagraph>
      <LegalParagraph>
        By accessing or using this website, you agree to these terms. If you do not agree, 
        please do not use the website.
      </LegalParagraph>
      <LegalParagraph>
        This website is provided for general information about Integra Networks and its products and services.
      </LegalParagraph>

      {/* Section 1: About Us */}
      <LegalHeading number={1}>About Us</LegalHeading>
      <LegalParagraph>
        This website is operated by:
      </LegalParagraph>
      <LegalInfoBox>
        <p className="font-medium text-foreground">Integra Networks Ltd</p>
        <p className="text-sm mt-2">
          3rd Floor, 86-90 Paul Street<br />
          London, EC2A 4NE<br />
          United Kingdom
        </p>
        <p className="text-sm mt-3">
          <strong>Email:</strong>{" "}
          <a href="mailto:connect@integra-networks.co.uk" className="text-primary hover:underline">
            connect@integra-networks.co.uk
          </a><br />
          <strong>Phone:</strong> 0203 388 7111<br />
          <strong>Website:</strong>{" "}
          <a href="https://integra-networks.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            integra-networks.co.uk
          </a>
        </p>
        <p className="text-sm mt-3 text-muted-foreground">
          Company Number: 16376799
        </p>
      </LegalInfoBox>

      {/* Section 2: Website Use */}
      <LegalHeading number={2}>Website Use</LegalHeading>
      <LegalParagraph>
        You may use this website for lawful purposes only.
      </LegalParagraph>
      <LegalParagraph>
        You must not:
      </LegalParagraph>
      <LegalList>
        <li>Use the website in any way that breaks applicable laws or regulations</li>
        <li>Attempt to gain unauthorised access to the website or its systems</li>
        <li>Introduce viruses, malware, or harmful code</li>
        <li>Scrape, harvest, or reuse content at scale without permission</li>
        <li>Misrepresent your identity or affiliation when contacting us</li>
      </LegalList>

      {/* Section 3: Website Content */}
      <LegalHeading number={3}>Website Content</LegalHeading>
      <LegalParagraph>
        All content on this website is provided for general information only.
      </LegalParagraph>
      <LegalParagraph>
        While we take reasonable care to ensure accuracy, we do not guarantee that the content 
        is complete, current, or free from errors.
      </LegalParagraph>
      <LegalParagraph>
        Nothing on this website constitutes a binding offer, contract, or professional advice.
      </LegalParagraph>

      {/* Section 4: Intellectual Property */}
      <LegalHeading number={4}>Intellectual Property</LegalHeading>
      <LegalParagraph>
        All content on this website, including text, graphics, logos, layout, and design, 
        is owned by or licensed to Integra Networks Ltd.
      </LegalParagraph>
      <LegalParagraph>
        You may view and print pages for your own internal business use only.
      </LegalParagraph>
      <LegalParagraph>
        You must not copy, reproduce, distribute, modify, or exploit website content for 
        commercial purposes without prior written permission.
      </LegalParagraph>

      {/* Section 5: Third-Party Links */}
      <LegalHeading number={5}>Links to Third-Party Websites</LegalHeading>
      <LegalParagraph>
        This website may include links to third-party websites for convenience or reference.
      </LegalParagraph>
      <LegalParagraph>
        We are not responsible for the content, security, or privacy practices of third-party websites.
      </LegalParagraph>
      <LegalParagraph>
        Accessing third-party websites is at your own risk.
      </LegalParagraph>

      {/* Section 6: Availability */}
      <LegalHeading number={6}>Availability and Changes</LegalHeading>
      <LegalParagraph>
        We may update, suspend, or withdraw this website (or any part of it) at any time without notice.
      </LegalParagraph>
      <LegalParagraph>
        We do not guarantee that the website will always be available or uninterrupted.
      </LegalParagraph>

      {/* Section 7: Liability */}
      <LegalHeading number={7}>Liability</LegalHeading>
      <LegalParagraph>
        To the extent permitted by law:
      </LegalParagraph>
      <LegalList>
        <li>We exclude liability for any indirect or consequential loss arising from use of this website.</li>
        <li>We are not liable for losses resulting from reliance on website content.</li>
      </LegalList>
      <LegalParagraph>
        Nothing in these terms limits liability for fraud or any liability that cannot be 
        excluded under UK law.
      </LegalParagraph>

      {/* Section 8: Governing Law */}
      <LegalHeading number={8}>Governing Law</LegalHeading>
      <LegalParagraph>
        These Terms of Website Use are governed by the laws of England and Wales.
      </LegalParagraph>
      <LegalParagraph>
        The courts of England and Wales have exclusive jurisdiction.
      </LegalParagraph>

      {/* Section 9: Changes */}
      <LegalHeading number={9}>Changes to These Terms</LegalHeading>
      <LegalParagraph>
        We may update these terms from time to time.
      </LegalParagraph>
      <LegalParagraph>
        The latest version will always be published on this page.
      </LegalParagraph>
    </LegalPageLayout>
    </>
  );
};

export default TermsOfWebsiteUse;
