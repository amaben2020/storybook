import CustomButton from './../components/Button/CustomButton';
export default { title: 'Example/CustomButton', component: CustomButton };

export const primary = () => {
  return (
    <CustomButton className='' type='primary' variant='primary'>
      This is a primary variant of the button
    </CustomButton>
  );
};

export const danger = () => {
  return (
    <CustomButton className='' type='danger' variant='danger'>
      This is a danger variant of the button
    </CustomButton>
  );
};
