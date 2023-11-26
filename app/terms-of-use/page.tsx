import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use - Adir Barak',
  referrer: 'origin-when-cross-origin',
  keywords: ['adir barak', 'portfolio', 'programmer', 'resume', 'developer'],
  description: "The terms of use for Adir Barak's portfolio website.",
  metadataBase: new URL('https://adirbarak.com/'),
  openGraph: {
    title: 'Terms of Use - Adir Barak',
    description: "The terms of use for Adir Barak's portfolio website.",
    siteName: 'Adir Barak',
    images: [
      {
        url: '/portfolio-thumbnail.jpg',
        width: 796,
        height: 796,
      },
    ],
    locale: 'en',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
      noimageindex: true,
    },
  },
  icons: {
    icon: '/icon.png',
  },
  twitter: {
    title: 'Terms of Use - Adir Barak',
    description: "The terms of use for Adir Barak's portfolio website.",
    images: ['/portfolio-thumbnail.jpg'],
  },
  category: 'portfolio',
};

export const viewport: Viewport = {
  themeColor: '#9B15F4',
};

type Props = {};

export default function page({}: Props) {
  return (
    <main id='top' className='technical-article'>
      <h1>Terms of Use</h1>
      <section>
        <p>
          Welcome to <Link href='/'>Adir Barak&apos;s</Link> portfolio website.
        </p>
        <p>Where you can browse my portfilio projects, check out my resume, and get to know me better.</p>
        <p>
          Operated by Adir Barak, the content of the website and its design are my sole property, unless otherwise expressly
          stated (for example, photos uploaded with a lawful use license).
        </p>
        <p>
          <em>
            For your information, by reading or using the site in any way, you indicate your agreement to these terms of use. If
            you do not agree with them, please refrain from continuing to use the website or its contents.
          </em>
        </p>
        <p>
          These terms of use are intended to govern the binding contractual relationship between us, as described in the following
          sections.
        </p>
      </section>
      <section>
        <h2>The purpose of using the website - non binding advice</h2>
        <p>
          The purpose of presenting the contents is to allow everyone to examine and become familiar with my activity and to
          decide in an informed manner whether you wish to contact me.
        </p>
      </section>
      <section>
        <h2>These terms of use are a binding agreement</h2>
        <p>
          By entering and browsing this website, you confirm that these terms establish a binding legal agreement between you and
          the website operator, Adir Barak, collectively known as &quot;the website&quot; or &quot;I&quot; as applicable.
        </p>
        <p>
          Please read and understand these terms carefully, as they impose binding obligations on you. If you do not agree with
          them, please exit the site now and avoid further use.
        </p>
        <p>
          It is important to note that using the website and reading its contents does not involve any payment. As such, the
          site&apos;s liability is expressly limited, as detailed below. <br />
          This site is intended for residents of Israel who are adults and over the age of 18. The services provided by the site
          and by Adir Barak are limited to the borders of the country Israel.
        </p>
        <p>
          These terms of use may be updated from time to time without prior notice, and it is your responsibility to ensure that
          they are in line with your preferences and agreements before using the site. Any changes will be binding from the date
          of their implementation.
        </p>
      </section>
      <section>
        <h2>The structure of this website</h2>
        <p>
          I reserve the right, at my sole discretion, to change the appearance of the site, its content, its design, the services
          provided or any other aspect, without the need for prior notice or consent.
          <br />
          In addition, information and articles presented on the site may be changed, deleted, updated, edited, or subject to all
          Other change without notice.
        </p>
        <p>
          You acknowledge and agree that you will not have any claims, demands or complaints against the Site or anyone
          representing me for such changes or any disruptions arising from these changes.
        </p>
      </section>
      <section>
        <h2>Links on the site</h2>
        <p>
          The website includes links to various websites and sources on the Internet. These mentioned sites are not published by
          the site or any representative on its behalf, nor are I am responsible for their content.
        </p>
        <p>
          Linking to these sites does not imply a recommendation or endorsement of their content, reliability, nature or accuracy,
          as these sites are not monitored in any way Fixed.
        </p>
        <p>
          Some links on the site may be inaccurate or may not lead to the intended destination. If you encounter such problems,
          please let me know, andIwill make efforts to address the problem. However, this does not indicate acceptance of
          responsibility.
        </p>
        <p>The site reserves the right to add or remove any link at any time, at Adir Barak&apos;s sole discretion.</p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          The site may use cookies (a standard computer code designed to identify you) in order to improve your browsing
          experience, Improve convenience or direct you to information I believe may be of interest to you.
        </p>
        The use of cookies is exclusive For statistical purposes, such as the Google Analytics service.
        <p>If you prefer not to enable this feature, you can disable cookies in your browser settings at any time.</p>
      </section>
      <section>
        <h2>&apos;Contact&apos; form</h2>
        <p>
          The website offers its visitors a means of contacting me through the &apos;Contact&apos; form. This measure is applied
          exclusively to people who have actively applied and expressed their desire for it by filling out and sending the form.
          <br />
          In the event of a malfunction, where you receive mailings without filling out the &apos;Contact&apos; form, Please let
          me know, andIwill take care of the problem immediately.
        </p>
        <p>
          Any information provided in the &quot;Contact&quot; form will not be share with others. It will be used exclusively by
          the website and Adir Barak in order to establish communication.
        </p>
        <p>
          The site and Adir Barak reserve the right not to contract with you or to terminate the contract at any time at their
          sole discretion.
        </p>
      </section>
      <section>
        <h2>Irresponsibility</h2>
        <p>
          The information and services provided on the site are offered &apos;AS IS&apos; and cannot be customized for personal
          needs. You bear sole responsibility for all express or implied liability and for any damage caused as a result to
          yourself, the site, to Adir Barak, to any representative on their behalf, to any representative on your behalf and/or to
          any Third Party.
          <br />
          This includes direct, indirect, incidental damages, their results, loss of profits, etc., including attorney&apos;s fees
          and damages in reputation You are also responsible for any claim arising from unlawful acts or omissions in any way
          related to your use or others&apos; use of the Site. It is required to adhere to the law when using the site.
        </p>
        <p>
          Also, you are prohibited from submitting any claim, demand or complaint against the website, Adir Barak, or those who
          represent them, regarding accuracy, quality, Reliability, nature, completeness, recency or frequency of publication of
          the information, and services offered on or through the site.
        </p>
        <p>
          In any case, the site, Adir Barak and/or anyone on their behalf will not be responsible for errors, omissions,
          inaccuracies, misinformation, failure to update contents, activity hours or the sequence of activity on the site.
        </p>
        <p>
          Your use and reliance on everything provided on the website is your sole and complete responsibility. You are obligated
          to make sure that the content on the website is correct, complete, and updated or suitable for your needs, and the site
          disclaims any responsibility in relation to its contents.
        </p>
        <p>
          The site does not guarantee continuous and uninterrupted activity. The activity of the site, or any part of it, may be
          stopped temporarily or permanently without prior notice.
          <br />
          The site and Adir Barak disclaim any responsibility for the disclosure of details provided to the site in the event of
          illegal intrusion into the site&apos;s computer systems and/or Adir Barak.
        </p>
      </section>
      <section>
        <h2>Intellectual property rights</h2>
        <p>
          All copyrights and intellectual property related to the website, including rights to articles, website design, the logo,
          and all other information of any kind and type on the website, along with all the contents contained therein, belong
          exclusively to Adir Barak, except for exceptional cases of photos on the website, which are used with an appropriate
          license.
        </p>
        <p>
          Copying, distributing, selling, making available to the public, publicly displaying, processing, translating or any
          other use of the site&apos;s contents, all or part of them, is strictly prohibited without receiving the express written
          consent of Adir Barak in advance and also subject to such consent.
        </p>
      </section>
      <section>
        <h2>Use of this site</h2>
        <p>
          The site is intended for personal and private use only. Commercial use of all website content is strictly prohibited.
        </p>
        <p>Displaying the site within frames on other sites is prohibited.</p>
        <p>
          Deep linking to pages within the site is allowed only on the condition that the link points to the appropriate page on
          the site, when the address of the relevant page is displayed in the usual place set by the user&apos;s browser. In
          addition, proper credit is required for Adir Barak.
        </p>
        <p>You agree not to engage in the following actions:</p>
        <ul>
          <li>
            When contacting us, provide full, complete and accurate information regarding your request, avoiding false
            information.
          </li>
          <li>
            Attempting to manipulate the security system or defraud the site owner, including access to information not intended
            for you or experimenting with the site&apos;s security system or in his networks.
          </li>
          <li>
            Access or perform operations on the site that may impose an unreasonable or disproportionate load on the site&apos;s
            infrastructure. Performing network monitoring and intercepting information that is not intended for you.
          </li>
          <li>
            Sending unsolicited e-mail messages, including &quot;spam&quot; or other advertising material, in bulk or directly to
            the site, its servers or to its operator.
          </li>
          <li>
            Sending malicious emails, such as flooding website users and/or website operators with large or many emails. Sending
            and/or transmitting false, misleading or deceptive material.
          </li>
          <li>
            Upload, send or transmit any material that contains any type of &apos;harm&apos;, computer virus or other code
            designed to interfere with the use of computers, Servers, hardware and/or software used by or on behalf of the website
            owner.
          </li>
          <li>
            Modify, adapt, copy, extract or mine information, grant licenses, translate, sell, reverse engineer, disassemble or
            reassemble any part From the code that makes up the site or the content of the articles on the site.
          </li>
          <li>
            Violation of copyrights, trademarks and/or any other rights on this website that do not belong to you, including not
            violating them, removing signs warning about their existence etc&apos;.
          </li>
          <li>
            Place the website or any part of it within another website (&apos;framing&apos;) or as part of another website
            (&apos;mirroring&apos;) without my consent in advance and in writing.
          </li>
          <li>
            Use any robot, bot, &apos;worm&apos;, information retrieval and search engine and/or any other automatic or manual
            tool designed to index, retrieve and locating information on the site. This includes tools designed to reveal the
            database structure and code on this website, with the exception of recognized search engines such as Google.
          </li>
          <li>Interfere in any way with the functioning of the website and its services.</li>
        </ul>
      </section>
      <section>
        <h2>Changes in the website</h2>
        <p>
          The site reserves the right, at its sole discretion and without prior notice, to limit access to the site, in whole or
          in part, and to remove/delete any Information or content published on the website.
        </p>
        <p>These actions supplement the site&apos;s rights according to any law and the terms of use, without reducing them.</p>
        <p>
          The site does not undertake to provide notices of any changes made to the content, and no claims, demands or complaints
          will be filed against the site for changes as mentioned or any malfunction that occurs during their execution.
        </p>
        <p>The site may stop its activity at any time, permanently or for a certain period, without prior notice.</p>
      </section>
      <section>
        <h2>Indemnification of the site and its representatives</h2>
        <p>
          You agree to indemnify the website, Adir Barak, their employees or anyone on their behalf for any damage, losses, loss
          of profits, payments or expenses incurred them (including attorney&apos;s fees and court costs) as a result of a
          violation of these terms of use or any damage you cause to the site.
        </p>
      </section>
      <section>
        <h2>Repairs and faults on the website</h2>
        <p>
          Iencourage you to report any defects, errors, glitches, malfunctions, deficiencies, failure to update or omissions on
          the site, andIwill endeavor to correct them in a timely manner reasonable with the knowledge of them. While I make
          efforts to address such issues,Ido not guarantee that the website will be free of defects, service interruptions,
          content parts or any other malfunction. If you encounter such a defect, please report it to me using the
          &apos;Contact&apos; form, by phone or by email, providing details about the defect and its location.
        </p>
        <p>
          If you believe that your rights have been violated by any information and/or content published on the site, or if you
          have detected an error, please notify me by providing references suitable for your claims.Iwill take appropriate actions
          to correct the situation if necessary.
        </p>
      </section>
      <section>
        <h2>Change of the &apos;Terms of Use&apos;</h2>
        <p>
          These Terms of Use may change from time to time without notice. You can review the current terms at any time by clicking
          on the relevant link on the website.
        </p>
      </section>
      <section>
        <h2>Obsolescence</h2>
        <p>
          This agreement serves as an express agreement between you and the website to reduce the limitation period for any cause
          related to the website to a period of two years only days from its formation.
        </p>
      </section>
      <section>
        <h2>Law and Jurisdiction</h2>
        <p>
          It is expressly agreed that these terms, any use of the site and all that derives from them, including any reliance on
          them, will be applied exclusively according to the laws of Israel.
        </p>
        <p>
          Any dispute that may arise between you and the website and/or Adir Barak, including a dispute related to the use of the
          website and everything arising from it, including any reliance on them or in connection with these terms of use, you
          will be subject to the exclusive law. The jurisdiction of the competent court in the district of Jerusalem in Israel.
        </p>
      </section>
      <section>
        <h2>Privacy</h2>
        <p>
          I strive to maintain the confidentiality of user information on the website, including content and information
          transmitted by users when using the website as well as information collected About the users while browsing the website
          (&apos;User Information&apos;). For example, communication with the site is protected under protection SSL.
          <br />
          However, answers to your inquiries will be made over the phone or sent to you by regular email, and I cannot be held
          responsible for any disclosure that may occur.
        </p>
        <p>Your details will not be transferred to other parties.</p>
        <p>
          I reserve the right to disclose your details to relevant parties in cases of legal violations, breach of agreement,
          violation of these terms of use, or Any attempt to do so. This will also occur in cases where a judicial order instructs
          me to do so, as well as in any dispute, lawsuit or other legal proceedings between you and the website owner or its
          operators.
        </p>
        <p>
          Despite my best efforts,I cannot guarantee absolute resistance against third-party intrusion into communications
          conducted between us. in such cases, You will not have any claims or demands against us.
        </p>
        <p>
          Your information will be used exclusively for statistical analyzes and their results, without disclosing your personal
          information to other parties.
        </p>
        <p>
          I do not bear any responsibility for the use of information obtained through third parties that are not under the
          control of the website owner. In case of doubt, you should consult in the privacy practices and terms of use of that
          third party.
        </p>
      </section>
      <section>
        <h2>Miscellaneous</h2>
        <p>
          These terms include all agreements between users of the website, covering all understandings, agreements, charges and
          conditions.
        </p>
        <p>
          Any agreement on behalf of the site that deviates from these conditions in a specific case will not serve as a
          precedent, and no corresponding decision will be made for any other case. Abnormalities as mentioned will not constitute
          a waiver of any rights on the part of the site.
        </p>
      </section>
    </main>
  );
}
