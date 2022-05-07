/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Liz Duarte',
    title: 'Liz Duarte',
    designation: 'Payroll Specialist',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/premieraccountingnyc/?notif_id=1651506525457708&notif_t=page_user_activity&ref=notif',
        icon: <FaFacebookF />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Maria Canet',
    title: 'Maria Canet',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/premieraccountingnyc/?notif_id=1651506525457708&notif_t=page_user_activity&ref=notif',
        icon: <FaFacebookF />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Victoria Landeta',
    title: 'Victoria Landeta',
    designation: 'Insurance Specialist',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/premieraccountingnyc/?notif_id=1651506525457708&notif_t=page_user_activity&ref=notif',
        icon: <FaFacebookF />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Pedro Cuadrado Flores',
    title: 'Pedro Cuadrado Flores',
    designation: 'Senior Consultant',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/premieraccountingnyc/?notif_id=1651506525457708&notif_t=page_user_activity&ref=notif',
        icon: <FaFacebookF />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Ana Carvajal',
    title: 'Ana Carvajal',
    designation: 'Accountant',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/premieraccountingnyc/?notif_id=1651506525457708&notif_t=page_user_activity&ref=notif',
        icon: <FaFacebookF />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Luci Canet',
    title: 'Luci Canet',
    designation: 'Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/premieraccountingnyc/?notif_id=1651506525457708&notif_t=page_user_activity&ref=notif',
        icon: <FaFacebookF />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader 
          slogan="our team"
          title="The most qualified and talented individuals"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard 
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
