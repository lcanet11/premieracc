/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Trabajadores con W2, 1099, Desempleo o Retirados',
    text:
      'Localice los formularios de trabajo y/o desempleo, SSA y salud; incluyendo: W2, 1099-NEC, 1099-G, 1099-MISC, 1095-B, 1095-C, etc.',
  },
  {
    id: 2,
    title: 'Trabajadores Independientes',
    text:
    'Localice todos los resúmenes mensuales de su banco, y haga un detalle de gastos de trabajo. Para hacer un resumen de negocios, se necesita saber aproximadamente cuanto deposita en su cuenta, o cuanto ahorra en efectivo. Contáctenos para más preguntas.',
  },
  {
    id: 3,
    title: 'Informacion Familiar',
    text:
      'Si es la primera vez en contactarnos, tome fotos del ID estatal o pasaporte de todos los miembros de la familia, fechas de nacimiento y/o defunción, e información escolar (escuela de los hijos y/o 1098-T para estudiantes universitarios).',
  },
  {
    id: 4,
    title: 'Ahorros Personales',
    text:
    'Localice documentos de inversiones en sus cuentas de retiro, Robinhood, Robinhood Crypto, Coinbase Pro, JP Morgan Securities u otro fondo de inversión y cuentas de intereses recibidos.',
      
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Documentos Necesarios para Hacer Taxes"
          title="Puede mandarnos sus documentos para hacer taxes por correo electrónico o venir en persona"
          isWhite={true}
        />

      <Grid sx={styles.grid}>
        {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}
              </Box>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>
                    {item.title}
                  </Heading>
                  <Text sx={styles.wrapper.subTitle}>
                    {item.text}
                  </Text>
                </Box>
              </Box>
           
        ))}
      </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
