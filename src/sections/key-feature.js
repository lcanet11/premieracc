/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Notarizaciones Rápidas',
    title: 'Notarizaciones Rápidas',
    text:
      'Notarize sus documentos mas rápido que en el banco. Se necesita mostrar Pasaporte o Cédula/Matrícula, o State ID o Licencia',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Taxes',
    title: 'Taxes',
    text:
      'Creemos que los individuos y los pequeños negocios necesitan la msima calidad de asesoramiento que las grandes empresas, para cumplir con el IRS al mismo tiempo de ahorrar dinero y planificar su futuro.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Servicios para Negocios',
    title: 'Servicios para Negocios',
    text:
      'Contabilidad para Negocios, Licencias, Aplicaciones, Seguros Comerciales y Asesoramiento Financiero para cumplir con regulaciones, ahorrar, y poder enfocarse en crecer su negocio.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Servicios al Individuo',
    title: 'Servicios al Individuo',
    text:
      'Taxes, Aplicaciones de Retiro, Aplicaciones al Fondo de Trabajadores Excluidos, Aplicaciones Generales, Cartas, CVs y Otros Tramites.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <SectionHeader 
      slogan="Founded in 1986"
      title="Meet the Family"
      />

      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn 
          key={item.id}
          src={item.imgSrc}
          alt={item.altText}
          title={item.title}
          text={item.text}
          />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
