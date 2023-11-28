import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Adir Barak',
referrer: 'origin-when-cross-origin',
keywords: ['adir barak', 'portfolio', 'programmer', 'resume', 'developer'],
  description: "The accessibility statement for Adir Barak's portfolio website.",
metadataBase: new URL('https://adirbarak.com/'),
openGraph: {
  title: 'Accessibility Statement - Adir Barak',
  description: "The accessibility statement for Adir Barak's portfolio website.",
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
  title: 'Accessibility Statement - Adir Barak',
  description: "The accessibility statement for Adir Barak's portfolio website.",
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
      <h1>Accessibility Statement</h1>
      <section>
        <p>
          Welcome to <Link href='/'>Adir Barak&apos;s</Link> portfolio website.
        </p>
        <p>Where you can browse my portfilio projects, check out my resume, and get to know me better.</p>
        <p>
          I attach great importance to the accessibility of the services and content of mywebsite to the entire population, with a
          special focus on people with disabilities.
          <br />
          If you detect any accessibility issues with my website, please bring it to my attention and I will do my best to address
          it immediately.
        </p>
      </section>
      <section>
        <h2>Accessibility of the website</h2>
        <p>
          I aim for the website to be as readable as possible. However, I recognize that I may fall short of this goal at times.
          If you come across confusing text or It is not clear, I would appreciate it if you brought it to my attention so that I
          can address the problem and fix it.
        </p>
        <p>
          This website has an accessibility menu that aligns with the Israeli standard TI 5568 at level AA. pay attention that the
          use of this plugin is subject to the terms of use and the accessibility statement.
        </p>
        <p>The site includes:</p>
        <ul>
          <li>The site is equipped with simple & user-friendly navigation and orientation tools.</li>
          <li>Textual content is written in clear language within the limitations of the relevant content.</li>
          <li>The content is organized in an orderly, hierarchical manner with headings that aid reading.</li>
          <li>
            The site is optimized for viewing in different browsers, although a uniform appearance in all browsers is not
            guaranteed.
          </li>
          <li>The site has been adapted for mobile and small screen browsing, as well as desktop computer use.</li>
          <li>The site is suitable for different resolution environments.</li>
          <li>For graphic elements of professional importance, the site provides textual alternatives (alt).</li>
          <li>Users can adjust the font size using the CTRL key and the mouse wheel.</li>
          <li>Links on the website include a brief explanation of the content of the linked page.</li>
          <li>
            Descriptions for pages, labels for meaningful images and other markings (such as titles) to improve and facilitate
            use.
          </li>
          <li>
            I have included a dedicated accessibility menu. This menu, located at the bottom of the page, on the left, remains
            accessible and scrolls with you while navigating the site at any time.
          </li>
        </ul>
      </section>
      <section>
        <h2>The accessibility menu</h2>
        <p>
          The accessibility menu offers a variety of functions to improve the usability of the site, especially for people with
          specific needs. Users can choose any combination of the following features:
        </p>
        <ul>
          <li>Site and tags adaptation for assistive devices and technologies.</li>
          <li>Enable keyboard navigation between website links.</li>
          <li>Enable monochrome black and white mode for color blind users.</li>
          <li>Enable inverted mode for alternative contrast.</li>
          <li>Highlighting all the links on the site.</li>
          <li>Enable readable font mode.</li>
          <li>Reset accessibility settings.</li>
          <li>Display the accessibility statement.</li>
        </ul>
        <p>The accessibility menu lets users adjust the text size using the following keyboard functions:</p>
        <ul>
          <li>Pressing the Esc key will open and close the accessibility menu.</li>
          <li>Using the CTRL,+ keys will increase the text on the site.</li>
          <li>Using the CTRL,- keys will reduce the text on the website.</li>
          <li>Using the CTRL,0 keys will return the text on the site to its original size.</li>
          <li>Pressing the space bar will scroll down the site.</li>
          <li>Pressing the F11 key will enlarge the screen to full size; Another click will reduce it back.</li>
        </ul>
      </section>
      <section>
        <h2>Accessibility cavieates</h2>
        <p>
          To avoid unnecessary sensory overload, some images added for graphic purposes only, without professional meaning, may be
          displayed without description or a tag.
        </p>
        <p>
          During the process of improving the accessibility of the site, I may not have been able to make every page accessible,
          and if this is the case, it is not intentional.
          <br />
          If you encountered offending errors When using the site, please bring them to my attention, and I will address and fix
          these problems as soon as possible.
        </p>
      </section>
    </main>
  );
}
