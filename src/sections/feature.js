/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Notary Service',
    title: 'Fast Notary Service',
    text:
      'Get your documents notarized faster than at the bank. Valid ID Required.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Taxes',
    title: 'Taxes',
    text:
      'We believe in the importance of individuals & small businesses to have the same kind of tax advice as large businesses, to comply with the IRS and save on their bottom-line.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Business Accounts',
    title: 'Business Accounts',
    text:
      'Small business accounting, Licenses & Loan Referrals, Grant Applications, Commercial Insurance and advice on how to save more and help your business grow.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Individual Support',
    title: 'Individual Support',
    text:
      'Translations, Powers of Attorney, Retirement Applications, Excluded Worker Fund Applications, Resumes & Other Commonly Requested Services.',
  },
];

export default function Feature() {
  return (
   <section sx={{variant:'section.feature'}}>
     <Container>
       <SectionHeader
        slogan="Individuals & Businesses"
        title="Core Services"
       />
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCard 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
