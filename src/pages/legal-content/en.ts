import type { LegalContent } from './types';

/**
 * English is the source these translations are made from, and the fallback for
 * any language whose file fails to load.
 *
 * Two things changed when this moved out of the page component. The operator is
 * now named as the legal person responsible — Redempsly is a trade name, not an
 * entity, and Play verifies the developer against real documents. And the old
 * text claimed the Service "may use Google Analytics"; it does not, and saying
 * so contradicted the Data Safety declaration of "no data collected". The app
 * makes no network requests at all.
 */
export const en: LegalContent = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: August 2026',
    sections: [
      {
        heading: 'Who operates this app',
        paragraphs: [
          'This document explains how the Compound Interest Calculator (the "Service") handles information. The Service is developed and operated by Ihor Pokhyton, a sole proprietor registered in Ukraine, trading under the name Redempsly.',
          'Questions about this policy can be sent to pokhyton.i@gmail.com.',
        ],
      },
      {
        heading: 'What we collect',
        lead: 'Nothing. The app collects no personal data of any kind.',
        paragraphs: [
          'Every calculation runs on your own device. The figures you type in — deposits, rates, periods, tax and inflation — are processed locally and never sent anywhere. The app contains no analytics, no advertising identifiers, no crash reporting and no third-party trackers.',
          'The app makes no network requests at all. It works with the device fully offline, and there is no server for it to talk to.',
        ],
      },
      {
        heading: 'No ads, and how this is paid for',
        lead: 'This app carries no advertising, and it is not going to.',
        paragraphs: [
          'That is a deliberate choice, not something left unbuilt. A calculator you use to think about your own money should not also be competing for your attention. There are no advertising identifiers and no trackers here, and nothing about you to sell, because nothing is collected in the first place.',
          'The app is free and stays free. If you find it useful, there is a link at the bottom of the app to a page where you can support the work — once, or monthly, whichever suits you. It opens in your browser, outside the app, and it unlocks nothing: no hidden features, no removed limits. Thank you for reading this far.',
        ],
      },
      {
        heading: 'What is stored on your device',
        paragraphs: [
          'So the app can pick up where you left off, it saves the following in your browser or app storage:',
          'This information stays on your device. Uninstalling the app, or clearing the browser data for the site, removes it permanently.',
        ],
        list: [
          'the values you last entered in the calculator;',
          'your chosen language;',
          'your chosen light or dark theme.',
        ],
      },
      {
        heading: 'The website version',
        paragraphs: [
          'The same calculator is published as a web page. Serving any web page means the hosting provider records standard server logs — the requesting IP address, browser type and the time of the request — for security and reliability. Those logs belong to the hosting provider, are not used to identify anyone, and are not read or exported by us.',
          'This applies only to the website. The Android app fetches nothing and produces no such logs.',
        ],
      },
      {
        heading: 'Sharing with others',
        paragraphs: [
          'There is nothing to share. No data is sold, exchanged or passed to third parties, because none is collected in the first place.',
        ],
      },
      {
        heading: 'Children',
        paragraphs: [
          'The Service is suitable for general audiences and does not knowingly collect information from anyone, including children.',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'This policy may be updated from time to time — for example if the app gains a feature that changes how information is handled. The current version is always on this page, with the date it was last changed shown at the top.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'For any question about privacy or about this document, write to pokhyton.i@gmail.com.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of Use',
    updated: 'Last updated: August 2026',
    sections: [
      {
        heading: '1. Who these terms are between',
        paragraphs: [
          'These Terms of Use (the "Terms") govern your use of the Compound Interest Calculator (the "Service"), operated by Ihor Pokhyton, a sole proprietor registered in Ukraine, trading under the name Redempsly (the "Operator").',
          'By using the Service you confirm that you have read these Terms and accept them.',
        ],
      },
      {
        heading: '2. What the Service is',
        paragraphs: [
          'The Service is a free compound interest calculator. It projects how an amount of money grows over time given the assumptions you enter: regular contributions, an expected rate of return, a compounding frequency, an inflation rate and a tax rate.',
        ],
      },
      {
        heading: '3. Limits of what it tells you',
        lead: 'The Service is an educational and planning tool, nothing more.',
        paragraphs: [
          'Before acting on any projection, consult a qualified financial adviser in your own country.',
        ],
        list: [
          'Results are approximate and illustrative.',
          'The Service is not financial, investment, tax or legal advice.',
          'The Operator is not responsible for any decision taken on the basis of its output.',
          'Real outcomes differ, because interest rates, inflation, tax law, fees and market conditions change.',
          'Past performance does not guarantee future results.',
        ],
      },
      {
        heading: '4. Intellectual property',
        paragraphs: [
          'The design, code, text and graphics of the Service belong to the Operator or are used under licence. The Redempsly name and logo are the Operator\'s trade marks. Copying, modifying or redistributing parts of the Service without prior written permission is not permitted.',
        ],
      },
      {
        heading: '5. Availability',
        paragraphs: [
          'The Operator aims to keep the Service working but does not guarantee uninterrupted availability. It may be unavailable during maintenance, updates, or events outside the Operator\'s control. The Service is provided "as is", without warranty of any kind.',
        ],
      },
      {
        heading: '6. What you may not do',
        paragraphs: [
          'When using the Service you must not:',
        ],
        list: [
          'use it for unlawful purposes;',
          'attempt to gain unauthorised access to it or to the systems it runs on;',
          'use automated means, such as bots or scrapers, for bulk access;',
          'present its output as professional financial advice.',
        ],
      },
      {
        heading: '7. Changes to these Terms',
        paragraphs: [
          'The Operator may amend these Terms. Continuing to use the Service after a change means you accept the amended Terms.',
        ],
      },
      {
        heading: '8. Governing law',
        paragraphs: [
          'These Terms are governed by the law of Ukraine. Disputes arising from use of the Service are to be settled by negotiation and, failing that, by the competent court at the Operator\'s registered location.',
        ],
      },
      {
        heading: '9. Contact',
        paragraphs: [
          'For any question about these Terms, write to pokhyton.i@gmail.com.',
        ],
      },
    ],
  },
};
