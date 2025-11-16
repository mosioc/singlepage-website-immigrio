// spacing scale
const space = {
  px: 'sm:px-16 px-6',
  py: 'sm:py-16 py-6',
  p: 'sm:px-16 px-6 sm:py-12 py-4',

  mx: 'sm:mx-16 mx-6',
  my: 'sm:my-16 my-6',
};

const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'font-poppins font-semibold text-white xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full',

  paragraph: 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

  // flex utils
  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end items-end',
  flexBetween: 'flex justify-between items-center',

  // spacing
  paddingX: space.px,
  paddingY: space.py,
  padding: space.p,

  marginX: space.mx,
  marginY: space.my,
};

export const layout = {
  // generic sections
  section: `flex flex-col md:flex-row ${styles.paddingY}`,
  sectionReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`,

  // images
  sectionImg: `flex-1 flex ${styles.flexCenter} relative md:ml-10 ml-0 md:mt-0 mt-10`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} relative md:mr-10 mr-0 md:mt-0 mt-10`,

  // info text area
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;